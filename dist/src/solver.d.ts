import { SolverSudoku } from "./solverSudoku";
import * as Solutions from "./solutions";
export declare class Solver {
    private solutions;
    constructor();
    solvePuzzle(sudoku: SolverSudoku): ISolvePuzzleResult;
    printPuzzle(sudoku: SolverSudoku): void;
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
