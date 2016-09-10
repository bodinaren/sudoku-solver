/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {SolverSudoku} from "../src/solverSudoku";
import {BrokenSubsets} from "../src/solutions";
import {List} from "btypescript";
import {expect} from 'chai';

let _ = 0;

describe("BrokenSubsets", function() {
    describe("Triple", function () {
        it("- found", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n301&tech=Naked+Triple
            
            let tiles = [
                _, _, _, 2, 9, 4, 3, 8, _,
                _, _, _, 1, 7, 8, 6, 4, _,
                4, 8, _, 3, 5, 6, 1, _, _,
                _, _, 4, 8, 3, 7, 5, _, 1,
                _, _, _, 4, 1, 5, 7, _, _,
                5, _, _, 6, 2, 9, 8, 3, 4,
                9, 5, 3, 7, 8, 2, 4, 1, 6,
                1, 2, 6, 5, 4, 3, 9, 7, 8,
                _, 4, _, 9, 6, 1, 2, 5, 3
            ];

            let brokenSubsets = new BrokenSubsets(3);
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            brokenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();

            let result = brokenSubsets.findClue(sudoku);
            
            expect(result).to.eql(true);

            expect(brokenSubsets.getNotes(sudoku.tiles[1])).to.eql([1, 7]);
        });
    });

    describe("Quadruple", function () {
        it("- found 1", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n401&tech=Naked+Quadruple

            let tiles = [
                _, 1, _, 7, 2, _, 5, 6, 3,
                _, 5, 6, _, 3, _, 2, 4, 7,
                7, 3, 2, 5, 4, 6, 1, 8, 9,
                6, 9, 3, 2, 8, 7, 4, 1, 5,
                2, 4, 7, 6, 1, 5, 9, 3, 8,
                5, 8, 1, 3, 9, 4, _, _, _,
                _, _, _, _, _, 2, _, _, _,
                _, _, _, _, _, _, _, _, 1,
                _, _, 5, 8, 7, _, _, _, _
            ];

            let brokenSubsets = new BrokenSubsets(4);
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            brokenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();

            expect(brokenSubsets.findClue(sudoku)).to.eql(true);

            expect(brokenSubsets.getNotes(sudoku.tiles[69])).to.eql([6, 7]);
            expect(brokenSubsets.getNotes(sudoku.tiles[70])).to.eql([2, 5, 7]);
        });
        it("- found 2", function () {
            // http://hodoku.sourceforge.net/en/show_example.php?file=n402&tech=Naked+Quadruple

            let tiles = [
                5, 3, 2, 7, 8, 6, _, _, _,
                9, 7, 8, 2, 4, 1, _, 6, _,
                _, _, 1, 9, 5, 3, 2, 8, 7,
                _, 2, 5, 4, _, _, 6, 7, _,
                _, _, 3, 6, 1, 7, _, 5, 2,
                7, _, _, 5, _, _, _, _, _,
                _, _, _, 1, _, _, _, _, _,
                _, _, _, 8, _, 5, 1, _, 6,
                _, _, _, 3, _, _, _, 9, 8
            ];
            
            let brokenSubsets = new BrokenSubsets(4);
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            brokenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();

            expect(brokenSubsets.findClue(sudoku)).to.eql(true);
            expect(brokenSubsets.getNotes(sudoku.tiles[54])).to.eql([2, 3, 8]);
            expect(brokenSubsets.getNotes(sudoku.tiles[55])).to.eql([5, 8]);
            expect(brokenSubsets.getNotes(sudoku.tiles[63])).to.eql([2, 3]);
            expect(brokenSubsets.getNotes(sudoku.tiles[72])).to.eql([1, 2]);
            expect(brokenSubsets.getNotes(sudoku.tiles[73])).to.eql([1, 5]);
        });
    });
});