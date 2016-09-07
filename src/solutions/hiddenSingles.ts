import {Solution} from "./solution";
import {ITile} from "sudoku";
import {SolverSudoku} from "../solverSudoku";
import {Linq} from "btypescript";

export class HiddenSingles extends Solution {

    name = "HiddenSingles";

    findClue(sudoku: SolverSudoku): boolean {

        for (let r = 0; r < 9; r++) {
            let row = Linq.where(this.getRow(sudoku, r), x => x.isEmpty());

            if (row.length > 0 && this.checkHiddenSingles(row)) return true;
        }

        for (let c = 0; c < 9; c++) {
            let col = Linq.where(this.getColumn(sudoku, c), x => x.isEmpty());

            if (col.length > 0 && this.checkHiddenSingles(col)) return true;
        }

        for (let reg = 0; reg < 9; reg++) {
            let region = Linq.where(this.getRegion(sudoku, reg), x => x.isEmpty());

            if (region.length > 0 && this.checkHiddenSingles(region)) return true;
        }

        return false;
    }

    checkHiddenSingles(tiles: ITile[]): boolean {
        // first we just start with making sure all the tiles are not already filled.
        if (Linq.all(tiles, x => !x.isEmpty())) return false;

        let notes = [];
        let checkedNumbers = new Linq(tiles).map(x => x.value).distinct().toArray();

        // extract the notes from each tile for faster progress
        for (let i = 0; i < tiles.length; i++) {
            notes.push(this.getNotes(tiles[i]));
        }

        // loop through each tile
        for (let i = 0; i < tiles.length; i++) {
            // fetch the notes for the current tile, but exclude all the notes that we already checked.
            let outerNotes = notes[i].filter(x => checkedNumbers.indexOf(x) === -1);

            let unique = outerNotes.some((note) => {
                // check if another tile contains the same note
                let foundMoreNotes = new Linq(notes).skip(i + 1).any((other) => {
                    return other.indexOf(note) > -1;
                });

                if (foundMoreNotes) {
                    // if we found more notes, then add this the the numbers we already checked
                    checkedNumbers.push(note);
                } else {
                    // if not, then we found a hidden single, let's set it
                    tiles[i].val = note;

                    // returning true let us break out of the .some
                    return true;
                }
            });

            if (unique) return true;
            if (checkedNumbers.length >= 10) return false;  // we already checked all numbers, no need to continue.
        }

        return false;
    }
}
