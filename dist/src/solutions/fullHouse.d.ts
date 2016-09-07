import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
export declare class FullHouse extends Solution {
    name: string;
    findClue(sudoku: SolverSudoku): boolean;
    private checkFullHouse(tiles);
}
