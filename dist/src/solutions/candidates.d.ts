import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
import { ITile } from "sudoku";
export declare class Candidates extends Solution {
    name: string;
    findClue(sudoku: SolverSudoku): boolean;
    checkCandidates(tiles: ITile[], isRegion: boolean, sudoku: SolverSudoku): boolean;
}
