import { Sudoku, Tile } from "sudoku";
export declare class Solution {
    findNumber(sudoku: Sudoku): boolean;
    getRow(sudoku: Sudoku, rowNr: number): Tile[];
    getColumn(sudoku: Sudoku, colNr: number): Tile[];
    getRegion(sudoku: Sudoku, regionNr: number): Tile[];
    getNotes(tile: Tile): number[];
    toggleAllNotes(tiles: Tile[]): void;
}
