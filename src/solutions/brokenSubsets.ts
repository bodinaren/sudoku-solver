import {Solution} from "./solution";
import {SolverSudoku} from "../solverSudoku";
import {ITile} from "sudoku";
import {Linq} from "btypescript";

/**
 * A "broken" subset is not a real concept in Sudoku. What I here call a broken subset is really a naked subset.
 * The difference them here is that in a broken subset all cells does not necessarily contain all the notes.
 * E.g. 3 cells has the notes [1, 2], [1, 3], [2, 3]. As you can see this is really just a naked subset,
 * I distinguish between them because I believe the difficulty in finding them is higher.
 * The easier naked subset would look like this instead: [1, 2, 3], [1, 2, 3], [1, 2, 3].
 */
export class BrokenSubsets extends Solution {

    name = "BrokenSubsets";

    constructor(private numbers: number) {
        super();
    }

    // TODO: If a subset is found, check if it's a locked subset (e.g. all tiles are within both a row/column and a region (can't be within a row and a column)).

    findClue(sudoku: SolverSudoku): boolean {

        for (let r = 0; r < 9; r++) {
            let row = Linq.where(this.getRow(sudoku, r), x => x.isEmpty());

            if (row.length > 0 && this.checkBrokenSubsets(row, this.numbers)) return true;
        }

        for (let c = 0; c < 9; c++) {
            let col = Linq.where(this.getColumn(sudoku, c), x => x.isEmpty());

            if (col.length > 0 && this.checkBrokenSubsets(col, this.numbers)) return true;
        }

        for (let reg = 0; reg < 9; reg++) {
            let region = Linq.where(this.getRegion(sudoku, reg), x => x.isEmpty());

            if (region.length > 0 && this.checkBrokenSubsets(region, this.numbers)) return true;
        }

        return false;
    }

    checkBrokenSubsets(tiles: ITile[], numbers: number) {
        
        let result = this._iterate([], tiles, numbers);
        let wasHelpful = false;

        if (result) {
            let allNotes = [];
            result.forEach(t => { Array.prototype.push.apply(allNotes, this.getNotes(t)); });
            let notes = Linq.distinct(allNotes);

            tiles.forEach(tile => {
                if (result.indexOf(tile) === -1) {
                    notes.forEach((note: number) => {
                        if (this.getNotes(tile).indexOf(note) > -1) {
                            tile.setInvalidNote(note, true);
                            wasHelpful = true;
                        }
                    });
                }
            })
        }

        return (wasHelpful);
    }

    private _iterate(tiles: ITile[], tilesLeft: ITile[], numbers: number): ITile[] {

        for (let i = 0; i < tilesLeft.length; i++) {
            // get the next tile and the notes for it
            let tile = tilesLeft[i];
            let notes = tile.getNotes();

            // get the distinct notes for all
            let allNotes = [];
            tiles.concat(tile).forEach(t => { Array.prototype.push.apply(allNotes, this.getNotes(t)); });
            let sumNotes = Linq.distinct(allNotes);

            if (sumNotes.length <= numbers) {
                if (sumNotes.length === numbers && tiles.length + 1 === numbers) {
                    return tiles.concat([tile]);
                } else {
                    let rs = this._iterate(tiles.concat([tile]), tilesLeft.slice(i + 1), numbers);
                    if (rs) return rs;
                }
            }
        }

        return undefined;
    }
}

// Start with the first cell and then see if there are any other cells that contains the same notes.
// Check if the number of notes for these cells does not exceed 3. Continue to the next cell.