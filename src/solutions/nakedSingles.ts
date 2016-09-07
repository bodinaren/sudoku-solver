import {Solution} from "./solution";
import {ITile} from "sudoku";
import {SolverSudoku} from "../solverSudoku";
import {Linq} from "btypescript";

export class NakedSingles extends Solution {

    name = "NakedSingles";

    findClue(sudoku: SolverSudoku): boolean {

        let found = !new Linq(sudoku.tiles).filter(x => x.val === 0).forEach(x => {
            if (x.isEmpty()) {
                let notes = this.getNotes(x);
                
                if (notes.length === 1) {
                    x.val = notes[0];
                    return false;
                }
            }
            return true;
        });

        return found;
    }
}
