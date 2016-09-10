import {Solution} from "./solution";
import {SolverSudoku} from "../solverSudoku";
import {ITile} from "sudoku";
import {Linq} from "btypescript";

/**
 * A naked subset is where x number of cells contains x number of notes.
 * E.g. three cells might look like this: [1, 2, 3], [1, 2, 3], [1, 2, 3].
 * NOTE: This only checks for cells that contains all x number of notes. For more complex naked subsets, e.g. [1, 2], [1, 3], [2, 3], see BrokenSubsets.
 * @see BrokenSubsets
 */
export class NakedSubsets extends Solution {

    name = "NakedSubsets";

    // TODO: If a subset is found, check if it's a locked subset (e.g. all tiles are within both a row/column and a region (can't be within a row and a column)).

    findClue(sudoku: SolverSudoku): boolean {

        for (let r = 0; r < 9; r++) {
            let row = Linq.where(this.getRow(sudoku, r), x => x.isEmpty());

            if (row.length > 1 && this.checkNakedSubsets(row)) return true;
        }

        for (let c = 0; c < 9; c++) {
            let col = Linq.where(this.getColumn(sudoku, c), x => x.isEmpty());

            if (col.length > 1 && this.checkNakedSubsets(col)) return true;
        }

        for (let reg = 0; reg < 9; reg++) {
            let region = Linq.where(this.getRegion(sudoku, reg), x => x.isEmpty());

            if (region.length > 1 && this.checkNakedSubsets(region)) return true;
        }

        return false;
    }

    checkNakedSubsets(tiles: ITile[]) {
        let notes: number[][] = [];
        
        for (let i = 0; i < tiles.length; i++) {
            notes.push(this.getNotes(tiles[i]));
        }

        for (let i = 0; i < tiles.length; i++) {
            let outerNotes = notes[i];
            let sameTiles = [tiles[i]];
            let wasHelpful = false;

            if (outerNotes.length === 1) continue; 

            for (let j = i + 1; j < tiles.length; j++) {
                if (Linq.except(outerNotes, notes[j]).length === 0) {
                    sameTiles.push(tiles[j]);
                }
            }

            if (outerNotes.length === sameTiles.length && outerNotes.length !== tiles.length) {
                // naked subsets found
                Linq.except(sameTiles, tiles).forEach(tile => {
                    outerNotes.forEach(note => {
                        if (this.getNotes(tile).indexOf(note) > -1) {
                            tile.setInvalidNote(note, true);
                            wasHelpful = true;
                        }
                    });
                });

                if (wasHelpful) return true;
            }
        }
        return false;
    }
}
