import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
export declare class NakedSingles extends Solution {
    name: string;
    findClue(sudoku: SolverSudoku): boolean;
}
