import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
import { ITile } from "sudoku";
export declare class HiddenSubsets extends Solution {
    name: string;
    private numbers;
    constructor(numbers: number);
    findClue(sudoku: SolverSudoku): boolean;
    checkHiddenSubset(tiles: ITile[]): any;
    private _iterate(allTiles, tiles, notes, start);
}
