import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
import { ITile } from "sudoku";
export declare class BrokenSubsets extends Solution {
    name: string;
    private numbers;
    constructor(numbers: number);
    findClue(sudoku: SolverSudoku): boolean;
    checkBrokenSubsets(tiles: ITile[], numbers: number): boolean;
    private _iterate(tiles, tilesLeft, numbers);
}
