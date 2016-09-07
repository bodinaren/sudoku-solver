import { Solution } from "./solution";
import { ITile } from "sudoku";
import { SolverSudoku } from "../solverSudoku";
export declare class HiddenSingles extends Solution {
    name: string;
    findClue(sudoku: SolverSudoku): boolean;
    checkHiddenSingles(tiles: ITile[]): boolean;
}
