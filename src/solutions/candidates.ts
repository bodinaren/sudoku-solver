import {Solution} from "./solution";
import {SolverSudoku} from "../solverSudoku";
import {ITile} from "sudoku";
import {Linq, Numbers} from "btypescript";

export class Candidates extends Solution {

    name = "Candidates";

    findClue(sudoku: SolverSudoku): boolean {

        for (let r = 0; r < 9; r++) {
            let row = Linq.where(this.getRow(sudoku, r), x => x.isEmpty());

            if (row.length > 1 && this.checkCandidates(row, false, sudoku)) return true;
        }

        for (let c = 0; c < 9; c++) {
            let col = Linq.where(this.getColumn(sudoku, c), x => x.isEmpty());

            if (col.length > 1 && this.checkCandidates(col, false, sudoku)) return true;
        }

        for (let reg = 0; reg < 9; reg++) {
            let region = Linq.where(this.getRegion(sudoku, reg), x => x.isEmpty());

            if (region.length > 1 && this.checkCandidates(region, true, sudoku)) return true;
        }

        return false;
    }

    checkCandidates(tiles: ITile[], isRegion: boolean, sudoku: SolverSudoku) {

        let primary: ITile[];
        let secondary: ITile[];
        let num: number;

        for (num = 1; num <= 9; num++) {
            primary = Linq.where(tiles, t => this.getNotes(t).indexOf(num) > -1);
            secondary = undefined;

            if (Numbers(primary.length).between(2, 3)) {
                if (isRegion) {
                    if (Linq.distinct(primary.map(m => m.row)).length === 1) {
                        secondary = Linq.where(sudoku.tiles, x => x.row === primary[0].row);

                    } else if (Linq.distinct(primary.map(m => m.col)).length === 1) {
                        secondary = Linq.where(sudoku.tiles, x => x.col === primary[0].col);
                        
                    }
                } else if (Linq.distinct(primary.map(m => m.region)).length === 1) {
                    secondary = Linq.where(sudoku.tiles, x => x.region === primary[0].region);
                }
            }

            if (secondary) {
                let wasHelpful = false;
                
                secondary.forEach(tile => {
                    if (primary.indexOf(tile) === -1) {
                        if (this.getNotes(tile).indexOf(num) > -1) {
                            tile.setInvalidNote(num, true);
                            wasHelpful = true;
                        }
                    }
                });

                if (wasHelpful) return true;
            }
        }

    }
}