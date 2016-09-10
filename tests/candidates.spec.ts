/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {SolverSudoku} from "../src/solverSudoku";
import {Candidates} from "../src/solutions";
import {List} from "btypescript";
import {expect} from 'chai';

let _ = 0;

describe("Candidates", function() {
    describe("Pointing", function () {
        it("- found 1", function() {

            // http://hodoku.sourceforge.net/en/show_example.php?file=n201&tech=Naked+Pair
            let tiles = [
                9, 8, 4, _, _, _, _, _, _,
                _, _, 2, 5, _, _, _, 4, _,
                _, _, 1, 9, _, 4, _, _, 2,
                _, _, 6, _, 9, 7, 2, 3, _,
                _, _, 3, 6, _, 2, _, _, _,
                2, _, 9, _, 3, 5, 6, 1, _,
                1, 9, 5, 7, 6, 8, 4, 2, 3,
                4, 2, 7, 3, 5, 1, 8, 9, 6,
                6, 3, 8, _, _, 9, 7, 5, 1
            ];

            let nakedSubsets = new Candidates();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            
            expect(nakedSubsets.getNotes(sudoku.tiles[24])).to.eql([3]);
        });

        it("- found 2", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n202&tech=Naked+Pair
            let tiles = [
                3, 4, _, _, _, 6, _, 7, _,
                _, 8, _, _, _, _, 9, 3, _,
                _, _, 2, _, 3, _, _, 6, _,
                _, _, _, _, 1, _, _, _, _,
                _, 9, 7, 3, 6, 4, 8, 5, _,
                _, _, _, _, _, 2, _, _, _,
                _, _, _, _, _, _, _, _, _,
                _, _, _, 6, _, 8, _, 9, _,
                _, _, _, 9, 2, 3, 7, 8, 5
            ];

            let nakedSubsets = new Candidates();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);

            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            expect(nakedSubsets.findClue(sudoku)).to.eql(true); // the first run finds a naked subset in r9/reg7, so we run this twice

            expect(nakedSubsets.getNotes(sudoku.tiles[54])).to.eql([2,4,5,6,7,8,9]);
            expect(nakedSubsets.getNotes(sudoku.tiles[55])).to.eql([2,3,5,6,7]);
            expect(nakedSubsets.getNotes(sudoku.tiles[56])).to.eql([3,4,5,6,8,9]);
            expect(nakedSubsets.getNotes(sudoku.tiles[60])).to.eql([2,3,4,6]);
            expect(nakedSubsets.getNotes(sudoku.tiles[61])).to.eql([2,4]);
            expect(nakedSubsets.getNotes(sudoku.tiles[62])).to.eql([2,3,4,6]);
        });
    });

    describe("Claiming", function () {
        it("- found 1", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n302&tech=Naked+Triple
            let tiles = [
                3, 1, 8, _, _, 5, 4, _, 6,
                _, _, _, 6, _, 3, 8, 1, _,
                _, _, 6, _, 8, _, 5, _, 3,
                8, 6, 4, 9, 5, 2, 1, 3, 7,
                1, 2, 3, 4, 7, 6, 9, 5, 8,
                7, 9, 5, 3, 1, 8, 2, 6, 4,
                _, 3, _, 5, _, _, 7, 8, _,
                _, _, _, _, _, 7, 3, _, 5,
                _, _, _, _, 3, 9, 6, 4, 1
            ];

            let nakedSubsets = new Candidates();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            
            expect(nakedSubsets.getNotes(sudoku.tiles[19])).to.eql([4]);
        });
        
        it("- found 2", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n302&tech=Naked+Triple
            let tiles = [
                7, 6, 2, _, _, 8, _, _, 1,
                9, 8, _, _, _, _, _, _, 6,
                1, 5, _, _, _, _, _, 8, 7,
                4, 7, 8, _, _, 3, 1, 6, 9,
                5, 2, 6, _, _, 9, 8, 7, 3,
                3, 1, 9, 8, _, _, 4, 2, 5,
                8, 3, 5, _, _, 1, 6, 9, 2,
                2, 9, 7, 6, 8, 5, 3, 1, 4,
                6, 4, 1, 9, 3, 2, 7, 5, 8
            ];

            let nakedSubsets = new Candidates();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(nakedSubsets.findClue(sudoku)).to.eql(true);

            expect(nakedSubsets.getNotes(sudoku.tiles[3])).to.eql([3,5]);
            expect(nakedSubsets.getNotes(sudoku.tiles[4])).to.eql([5,9]);
            expect(nakedSubsets.getNotes(sudoku.tiles[12])).to.eql([1,2,3,5,7]);
            expect(nakedSubsets.getNotes(sudoku.tiles[13])).to.eql([1,2,5,7]);
            expect(nakedSubsets.getNotes(sudoku.tiles[21])).to.eql([2,3]);
            expect(nakedSubsets.getNotes(sudoku.tiles[22])).to.eql([2,6,9]);
        });
    });
});