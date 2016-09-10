/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {SolverSudoku} from "../src/solverSudoku";
import {HiddenSingles} from "../src/solutions";
import {List} from "btypescript";
import {expect} from 'chai';

let _ = 0;

describe("HiddenSingles", function() {
    it("- found 1", function() {
        
        // http://hodoku.sourceforge.net/en/show_example.php?file=h101&tech=Hidden+Single
        let tiles = [
            _, 2, 8, _, _, 7, _, _, _,
            _, 1, 6, _, 8, 3, _, 7, _,
            _, _, _, _, 2, _, 8, 5, 1,
            1, 3, 7, 2, 9, _, _, _, _,
            _, _, _, 7, 3, _, _, _, _,
            _, _, _, _, 4, 6, 3, _, 7,
            2, 9, _, _, 7, _, _, _, _,
            _, _, _, 8, 6, _, 1, 4, _,
            _, _, _, 3, _, _, 7, _, _
        ];

        let nakedSingles = new HiddenSingles();
        let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
        
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();

        expect(nakedSingles.findClue(sudoku)).to.eql(true);
        expect(sudoku.tiles[21].val).to.eql(6);
    });

    it("- found 2", function () {

        // http://hodoku.sourceforge.net/en/show_example.php?file=h102&tech=Hidden+Single
        // note that the 2nd example in the link contains more than 1 hidden single
        // hence the expect in this test doesn't not match what the example from the site says 
        let tiles = [
            _, _, 2, 1, 9, 3, _, _, _,
            _, _, _, _, _, 7, _, _, _,
            7, _, _, _, 4, _, _, 1, 9,
            8, _, 3, _, _, _, 6, _, _,
            _, 4, 5, _, _, _, 2, 3, _,
            _, _, 7, _, _, _, 5, _, 4,
            3, 7, _, _, 8, _, _, _, 6,
            _, _, _, 6, _, _, _, _, _,
            _, _, _, 5, 3, 4, 1, _, _
        ];

        let nakedSingles = new HiddenSingles();
        let sudoku = new SolverSudoku().setupNormalSudoku(tiles);

        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        
        expect(nakedSingles.findClue(sudoku)).to.eql(true);
        expect(sudoku.tiles[30].val).to.eql(4);
    });
});