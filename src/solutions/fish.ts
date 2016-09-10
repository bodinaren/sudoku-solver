import {Solution, GroupTypes} from "./solution";
import {SolverSudoku} from "../solverSudoku";
import {ITile} from "sudoku";
import {Linq} from "btypescript";

export class Fish extends Solution {

    name = "Fish";

    private numbers: number;

    constructor(numbers: number) {
        super();

        this.numbers = numbers;
    }

    findClue(sudoku: SolverSudoku): boolean {

        let wasHelpful = false;

        for (let n = 1; n <= 9; n++) {
            let rowResult = this._iterateRow(sudoku, n, 0, [], []);
            if (rowResult) wasHelpful = this.validateResult(sudoku, rowResult);
            if (wasHelpful) return true;
        }

        for (let n = 1; n <= 9; n++) {
            let colResult = this._iterateCol(sudoku, n, 0, [], []);
            if (colResult) wasHelpful = this.validateResult(sudoku, colResult);
            if (wasHelpful) return true;
        }

        return false;
    }

    private validateResult(sudoku: SolverSudoku, rs: IterationResult): boolean {
        let rows = rs.rows;
        let cols = rs.cols;

        let wasHelpful = false;
        sudoku.tiles.forEach(t => {
            let isInRow = (rs.rows.indexOf(t.row) === -1);
            let isInCol = (rs.cols.indexOf(t.col) === -1);

            if (isInRow !== isInCol) {
                if (this.getNotes(t).indexOf(rs.note) > -1) {
                    t.toggleNote(rs.note, false);
                    wasHelpful = true;
                }
            }
        });

        return wasHelpful;
    }

    private  _iterateRow(sudoku: SolverSudoku, n: number, row: number, rows: number[], cols: number[]): IterationResult {
        
        for (let r = row; r < 9; r++) {

            let tiles = Linq.where(this.getRow(sudoku, r), t => t.isEmpty());
            let tempRows = rows.concat([r]);
            
            let matchingTiles = Linq.where(tiles, t => this.getNotes(t).indexOf(n) > -1);
            let tempCols = Linq.distinct(cols.concat(matchingTiles.map(t => t.col)));

            if (matchingTiles.length > 0 && tempCols.length === this.numbers && tempRows.length === this.numbers) {
                return {
                    note: n,
                    rows: tempRows,
                    cols: tempCols
                };
            } else if (tempRows.length > this.numbers) {
                return undefined;
            } else if (matchingTiles.length > 0) {
                let rs = this._iterateRow(sudoku, n, r + 1, tempRows, tempCols);
                if (rs) return rs;
            }
        }
    }

    private  _iterateCol(sudoku: SolverSudoku, n: number, col: number, cols: number[], rows: number[]): IterationResult {
        
        for (let c = 0; c < 9; c++) {

            let tiles = Linq.where(this.getColumn(sudoku, c), t => t.isEmpty());
            let tempCols = cols.concat([c]);
            
            let matchingTiles = Linq.where(tiles, t => this.getNotes(t).indexOf(n) > -1);
            let tempRows = Linq.distinct(rows.concat(matchingTiles.map(t => t.row)));

            if (matchingTiles.length > 0 && tempCols.length === this.numbers && tempRows.length === this.numbers) {
                return {
                    note: n,
                    rows: tempRows,
                    cols: tempCols
                };
            } else if (tempCols.length > this.numbers) {
                return undefined;
            } else if (matchingTiles.length > 0) {
                let rs = this._iterateCol(sudoku, n, c + 1, tempCols, tempRows);
                if (rs) return rs;
            }
        }
    }
}

interface IterationResult {
    note: number;
    rows: number[];
    cols: number[];
}