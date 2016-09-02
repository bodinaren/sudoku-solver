import { Solution } from "./solution";
import { Sudoku, Tile } from "sudoku";
export declare class NakedSubsets extends Solution {
    name: string;
    findNumber(sudoku: Sudoku): boolean;
    checkNakedSubsets(tiles: Tile[]): boolean;
}
