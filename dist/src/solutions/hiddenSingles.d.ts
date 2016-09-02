import { Solution } from "./solution";
import { Sudoku, Tile } from "sudoku";
export declare class HiddenSingles extends Solution {
    name: string;
    findNumber(sudoku: Sudoku): boolean;
    checkHiddenSingles(tiles: Tile[]): boolean;
}
