import { Solution } from "./solution";
import { SolverSudoku } from "../solverSudoku";
import { ITile } from "sudoku";
export declare class Intersections extends Solution {
    name: string;
    findClue(sudoku: SolverSudoku): boolean;
    checkIntersections(tiles: ITile[], isRegion: boolean, sudoku: SolverSudoku): boolean;
}
