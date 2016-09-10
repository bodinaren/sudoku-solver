import {ITile} from "sudoku";
import {SolverSudoku} from "../solverSudoku";
import {List} from "btypescript";

export class Solution {

    name = "Solution";

    findClue(sudoku: SolverSudoku): boolean {
        return false;
    }

    getRow(sudoku: SolverSudoku, rowNr: number): ITile[] { return Solution.getRow(sudoku, rowNr); }
    static getRow(sudoku: SolverSudoku, rowNr: number): ITile[] {
        let row = [];

        for (let i = 0; i < 9; i++) {
            row.push(sudoku.tiles[rowNr * 9 + i]);
        }

        return row;
    }

    getColumn(sudoku: SolverSudoku, colNr: number): ITile[] { return Solution.getColumn(sudoku, colNr); }
    static getColumn(sudoku: SolverSudoku, colNr: number): ITile[] {
        let col = [];

        for (let i = 0; i < 9; i++) {
            col.push(sudoku.tiles[i * 9 + colNr]);
        }

        return col;
    }

    getRegion(sudoku: SolverSudoku, regionNr: number): ITile[] { return Solution.getRegion(sudoku, regionNr); }
    static getRegion(sudoku: SolverSudoku, regionNr: number): ITile[] {
        let region = [];
        let start = (regionNr % 3 * 3) + ((regionNr - regionNr % 3) * 9);

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                region.push(sudoku.tiles[start + col + row * 9]);
            }
        }

        return region;
    }

    getNotes(tile: ITile): number[] { return Solution.getNotes(tile); }
    static getNotes(tile: ITile): number[] {
        if (tile.val > 0) return [];

        let notes = [];

        tile.getNotes().forEach((val, idx) => {
            if (val) notes.push(idx + 1);
        });

        return notes;
    }

    toggleAllNotes(tiles: ITile[]) { Solution.toggleAllNotes(tiles); }
    static toggleAllNotes(tiles: ITile[]) {
        tiles.forEach(t => { 
            t.notes.forEach((note) => {
                note.toggleValue(true);
            });
        });
    }
}

export enum GroupTypes {
    Row = 1,
    Column = 2,
    Region = 3
}