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

    private numbers: number

    constructor(numbers: number) {
        super();
        
        this.numbers = numbers;
    }

    // TODO: If a subset is found, check if it's a locked subset (e.g. all tiles are within both a row/column and a region (can't be within a row and a column)).

    findClue(sudoku: SolverSudoku): boolean {

        for (let r = 0; r < 9; r++) {
            let row = Linq.where(this.getRow(sudoku, r), x => x.isEmpty());

            if (row.length > this.numbers && this.checkBrokenSubsets(row)) return true;
        }

        for (let c = 0; c < 9; c++) {
            let col = Linq.where(this.getColumn(sudoku, c), x => x.isEmpty());

            if (col.length > this.numbers && this.checkBrokenSubsets(col)) return true;
        }

        for (let reg = 0; reg < 9; reg++) {
            let region = Linq.where(this.getRegion(sudoku, reg), x => x.isEmpty());

            if (region.length > this.numbers && this.checkBrokenSubsets(region)) return true;
        }

        return false;
    }

    checkBrokenSubsets(tiles: ITile[]) {
        
        let result = this._iterate([], tiles);
        let wasHelpful = false;

        if (result) {
            let allNotes = [];
            result.forEach(t => { Array.prototype.push.apply(allNotes, this.getNotes(t)); });
            let notes = Linq.distinct(allNotes);

            tiles.forEach(tile => {
                if (result.indexOf(tile) === -1) {
                    notes.forEach((note: number) => {
                        if (this.getNotes(tile).indexOf(note) > -1) {
                            tile.toggleNote(note, false);
                            wasHelpful = true;
                        }
                    });
                }
            })
        }

        return (wasHelpful);
    }

    private _iterate(tiles: ITile[], tilesLeft: ITile[]): ITile[] {

        for (let i = 0; i < tilesLeft.length; i++) {
            // get the next tile and the notes for it
            let tile = tilesLeft[i];
            let notes = tile.getNotes();

            // get the distinct notes for all
            let allNotes = [];
            tiles.concat(tile).forEach(t => { Array.prototype.push.apply(allNotes, this.getNotes(t)); });
            let sumNotes = Linq.distinct(allNotes);

            if (sumNotes.length <= this.numbers) {
                if (sumNotes.length === this.numbers && tiles.length + 1 === this.numbers) {
                    return tiles.concat([tile]);
                } else {
                    let rs = this._iterate(tiles.concat([tile]), tilesLeft.slice(i + 1));
                    if (rs) return rs;
                }
            }
        }

        return undefined;
    }
}