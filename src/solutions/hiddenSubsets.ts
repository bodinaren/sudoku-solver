import {Solution} from "./solution";
import {SolverSudoku} from "../solverSudoku";
import {ITile} from "sudoku";
import {Linq, Numbers} from "btypescript";

export class HiddenSubsets extends Solution {

    name = "HiddenSubsets";

    private numbers: number

    constructor(numbers: number) {
        super();
        
        this.numbers = numbers;
    }

    findClue(sudoku: SolverSudoku): boolean {

        for (let r = 0; r < 9; r++) {
            let row = Linq.where(this.getRow(sudoku, r), x => x.isEmpty());

            if (row.length > 1 && this.checkHiddenSubset(row)) return true;
        }

        for (let c = 0; c < 9; c++) {
            let col = Linq.where(this.getColumn(sudoku, c), x => x.isEmpty());

            if (col.length > 1 && this.checkHiddenSubset(col)) return true;
        }

        for (let reg = 0; reg < 9; reg++) {
            let region = Linq.where(this.getRegion(sudoku, reg), x => x.isEmpty());

            if (region.length > 1 && this.checkHiddenSubset(region)) return true;
        }

        return false;
    }

    checkHiddenSubset(tiles: ITile[]) {

        return this._iterate(tiles, [], [], 1);
    }

    private _iterate(allTiles: ITile[], tiles: ITile[], notes: number[], start: number) {

        for (let num = start; num <= 9; num++) {
            
            let newNotes = notes.concat([num]);
            let matches = Linq.where(allTiles, t => this.getNotes(t).indexOf(num) > -1);
            let sumTiles = Linq.distinct(tiles, matches);

            if (matches.length === 0) {
                // next

            } else if (newNotes.length > this.numbers) {
                return false;

            } else if (sumTiles.length > this.numbers) {
                // next

            } else if (newNotes.length === this.numbers && sumTiles.length === this.numbers) {
                // success

                let wasHelpful = false;
            
                sumTiles.forEach(tile => {
                    for (let note = 1; note <= 9; note++) {
                        if (newNotes.indexOf(note) === -1) {
                            if (this.getNotes(tile).indexOf(note) > -1) {
                                tile.toggleNote(note, false);
                                wasHelpful = true;
                            }
                        }
                    }
                });

                if (wasHelpful) return true;

            } else {
                let rs = this._iterate(allTiles, sumTiles, newNotes, num + 1);
                if (rs)
                    return rs;
            }
        }
    }
}