import { ITile } from "sudoku";
import { SolverSudoku } from "../solverSudoku";
export declare class Solution {
    findClue(sudoku: SolverSudoku): boolean;
    getRow(sudoku: SolverSudoku, rowNr: number): ITile[];
    static getRow(sudoku: SolverSudoku, rowNr: number): ITile[];
    getColumn(sudoku: SolverSudoku, rowNr: number): ITile[];
    static getColumn(sudoku: SolverSudoku, colNr: number): ITile[];
    getRegion(sudoku: SolverSudoku, rowNr: number): ITile[];
    static getRegion(sudoku: SolverSudoku, regionNr: number): ITile[];
    getNotes(tile: ITile): number[];
    static getNotes(tile: ITile): number[];
    toggleAllNotes(tiles: ITile[]): void;
    static toggleAllNotes(tiles: ITile[]): void;
}
