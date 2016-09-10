import {Solution} from "./solution";
import {ITile} from "sudoku";
import {SolverSudoku} from "../solverSudoku";
import {Linq} from "btypescript";

export class NakedSingles extends Solution {

    name = "NakedSingles";

    findClue(sudoku: SolverSudoku): boolean {

        for (let i = 0; i < 81; i++) {
            let tile = sudoku.tiles[i];

            if (tile.isEmpty()) {
                let notes = this.getNotes(tile);
                if (notes.length === 1) {
                    tile.val = notes[0];
                    return true;
                }
            }
        }

        return false;
    }
}
