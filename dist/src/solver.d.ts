import { SolverSudoku } from "./solverSudoku";
import * as Solutions from "./solutions/solutions";
export declare class Solver {
    private solutions;
    constructor();
    solvePuzzle(sudoku: SolverSudoku): ISolvePuzzleResult;
}
export interface IAvailableSolution {
    solution: Solutions.Solution;
    points: number;
}
export interface ISolvePuzzleResult {
    points: number;
    tries: number;
    solutions: IAvailableSolution[];
}
