/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {SolverSudoku} from "../src/solverSudoku";
import {NakedSubsets} from "../src/solutions/nakedSubsets";
import {List} from "btypescript";
import {expect} from 'chai';

let _ = 0;

describe("NakedSubsets", function() {
    describe("Pairs", function () {
        it("- found 1", function() {

            // http://hodoku.sourceforge.net/en/show_example.php?file=n201&tech=Naked+Pair
            let tiles = [
                7, _, _, 8, 4, 9, _, 3, _,
                9, 2, 8, 1, 3, 5, _, _, 6,
                4, _, _, 2, 6, 7, _, 8, 9,
                6, 4, 2, 7, 8, 3, 9, 5, 1,
                3, 9, 7, 4, 5, 1, 6, 2, 8,
                8, 1, 5, 6, 9, 2, 3, _, _,
                2, _, 4, 5, 1, 6, _, 9, 3,
                1, _, _, _, _, 8, _, 6, _,
                5, _, _, _, _, 4, _, 1, _,
            ];

            let nakedSubsets = new NakedSubsets();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            expect(nakedSubsets.getNotes(sudoku.tiles[64])).to.eql([7]); // cleared


            
        });

        it("- found 2", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n202&tech=Naked+Pair
            let tiles = [
                6, 8, 7, _, _, 4, 5, 2, 3,
                9, 5, 3, _, _, 2, 6, 1, 4,
                1, 4, 2, 3, 5, 6, 9, 7, 8,
                3, 1, _, _, _, 7, 2, 4, 6,
                7, 6, _, _, _, _, 3, _, 5,
                _, 2, _, _, _, _, 7, _, 1,
                _, 9, 6, _, _, 1, _, 3, 2,
                2, 3, _, _, _, _, _, 5, 7,
                _, 7, _, _, _, _, _, 6, 9
            ];

            let nakedSubsets = new NakedSubsets();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);

            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            // the example contains 3 naked subsets, so we call findNumber 3 times to clear all the tiles
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);

            expect(nakedSubsets.getNotes(sudoku.tiles[30])).to.eql([5]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[39])).to.eql([1, 2, 4]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[40])).to.eql([1, 2, 4]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[48])).to.eql([4, 5, 6]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[49])).to.eql([3, 4, 6]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[50])).to.eql([3, 5]); // cleared
        })
    });

    describe("Triple", function () {
        it("- all tiles contains all notes", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n302&tech=Naked+Triple
            let tiles = [
                3, 9, _, _, _, _, 7, _, _,
                _, _, _, _, _, _, 6, 5, _,
                5, _, 7, _, _, _, 3, 4, 9,
                _, 4, 9, 3, 8, _, 5, _, 6,
                6, _, 1, _, 5, 4, 9, 8, 3,
                8, 5, 3, _, _, _, 4, _, _,
                9, _, _, 8, _, _, 1, 3, 4,
                _, _, 2, 9, 4, _, 8, 6, 5,
                4, _, _, _, _, _, 2, 9, 7
            ];

            let nakedSubsets = new NakedSubsets();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            expect(nakedSubsets.getNotes(sudoku.tiles[3])).to.eql([4, 5]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[5])).to.eql([5, 8]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[12])).to.eql([4, 7]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[13])).to.eql([3, 7, 9]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[14])).to.eql([3, 7, 8, 9]); // cleared
            expect(nakedSubsets.getNotes(sudoku.tiles[23])).to.eql([8]); // cleared
        });
    });
});