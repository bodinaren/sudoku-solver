import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
export declare class Fish extends Solution {
    name: string;
    private numbers;
    constructor(numbers: number);
    findClue(sudoku: SolverSudoku): boolean;
    private validateResult(sudoku, rs);
    private _iterateRow(sudoku, n, row, rows, cols);
    private _iterateCol(sudoku, n, col, cols, rows);
}
