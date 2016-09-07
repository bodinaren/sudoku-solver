import {Solution} from "./solution";
import {ITile} from "sudoku";
import {SolverSudoku} from "../solverSudoku";
import {Linq} from "btypescript";

export class FullHouse extends Solution {

    name = "FullHouse";

    findClue(sudoku: SolverSudoku): boolean {

        for (let r = 0; r < 9; r++) {
            let row = this.getRow(sudoku, r);

            if (this.checkFullHouse(row)) return true;
        }

        for (let c = 0; c < 9; c++) {
            let col = this.getColumn(sudoku, c);

            if (this.checkFullHouse(col)) return true;
        }

        for (let reg = 0; reg < 9; reg++) {
            let region = this.getRegion(sudoku, reg);

            if (this.checkFullHouse(region)) return true;
        }

        return false;
    }

    private checkFullHouse(tiles: ITile[]): boolean {

        let house = Linq.filter(tiles, (x: ITile) => x.isEmpty());

        if (house.length === 1) {
            let cell = house[0];

            cell.val = Linq.except([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], tiles.map(x => x.val))[0];

            return true;
        }

        return false;
    }
}
