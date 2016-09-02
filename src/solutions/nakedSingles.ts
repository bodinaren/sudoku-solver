import {Solution} from "./solution";
import {Sudoku, Tile} from "sudoku";
import {Linq} from "btypescript";

export class NakedSingles extends Solution {

    name = "NakedSingles";

    findClue(sudoku: Sudoku): boolean {

        let found = !new Linq(sudoku.tiles).filter(x => x.value === 0).forEach(x => {
            if (x.isEmpty()) {
                let notes = this.getNotes(x);
                
                if (notes.length === 1) {
                    x.value = notes[0];
                    return false;
                }
            }
            return true;
        });

        return found;
    }
}
