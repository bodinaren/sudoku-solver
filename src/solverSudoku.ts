import {Sudoku, Tile, ITile, Group, IGroup, Note, INote} from "sudoku";

/**
 * This just serves as a placeholder to simplify the usage throughout the solver and test.
 */
export class SolverSudoku extends Sudoku<Tile<IGroup, Note>, Note, Group<ITile>> {

    constructor() {
        super(Tile, Note, Group);
    }

}