import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
import { ITile } from "sudoku";
export declare class NakedSubsets extends Solution {
    name: string;
    findClue(sudoku: SolverSudoku): boolean;
    checkNakedSubsets(tiles: ITile[]): boolean;
}
