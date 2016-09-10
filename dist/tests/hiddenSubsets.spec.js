"use strict";
var solverSudoku_1 = require("../src/solverSudoku");
var solutions_1 = require("../src/solutions");
var chai_1 = require('chai');
var _ = 0;
describe("HiddenSubsets", function () {
    describe("Pair", function () {
        it("- found 1", function () {
            var tiles = [
                _, 4, 9, 1, 3, 2, _, _, _,
                _, 8, 1, 4, 7, 9, _, _, _,
                3, 2, 7, 6, 8, 5, 9, 1, 4,
                _, 9, 6, _, 5, 1, 8, _, _,
                _, 7, 5, _, 2, 8, _, _, _,
                _, 3, 8, _, 4, 6, _, _, 5,
                8, 5, 3, 2, 6, 7, _, _, _,
                7, 1, 2, 8, 9, 4, 5, 6, 3,
                9, 6, 4, 5, 1, 3, _, _, _
            ];
            var hiddenSubsets = new solutions_1.HiddenSubsets(2);
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            hiddenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(hiddenSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[44])).to.eql([1, 9]);
        });
        it("- found 2", function () {
            var tiles = [
                _, _, _, _, 6, _, _, _, _,
                _, _, _, _, 4, 2, 7, 3, 6,
                _, _, 6, 7, 3, _, _, 4, _,
                _, 9, 4, _, _, _, _, 6, 8,
                _, _, _, _, 9, 6, 4, _, 7,
                6, _, 7, _, 5, _, 9, 2, 3,
                1, _, _, _, _, _, _, 8, 5,
                _, 6, _, _, 8, _, 2, 7, 1,
                _, _, 5, _, 1, _, _, 9, 4
            ];
            var hiddenSubsets = new solutions_1.HiddenSubsets(2);
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            hiddenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(hiddenSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[0])).to.eql([4, 7]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[1])).to.eql([4, 7]);
        });
    });
    describe("Triple", function () {
        it("- found 1", function () {
            var tiles = [
                2, 8, _, _, _, _, 4, 7, 3,
                5, 3, 4, 8, 2, 7, 1, 9, 6,
                _, 7, 1, _, 3, 4, _, 8, _,
                3, _, _, 5, _, _, _, 4, _,
                _, _, _, 3, 4, _, _, 6, _,
                4, 6, _, 7, 9, _, 3, 1, _,
                _, 9, _, 2, _, 3, 6, 5, 4,
                _, _, 3, _, _, 9, 8, 2, 1,
                _, _, _, _, 8, _, 9, 3, 7
            ];
            var hiddenSubsets = new solutions_1.HiddenSubsets(3);
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            hiddenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(hiddenSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[73])).to.eql([2, 4, 5]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[74])).to.eql([2, 5]);
        });
        it("- found 2", function () {
            var tiles = [
                5, _, _, 6, 2, _, _, 3, 7,
                _, _, 4, 8, 9, _, _, _, _,
                _, _, _, _, 5, _, _, _, _,
                9, 3, _, _, _, _, _, _, _,
                _, 2, _, _, _, _, 6, _, 5,
                7, _, _, _, _, _, _, _, 3,
                _, _, _, _, _, 9, _, _, _,
                _, _, _, _, _, _, 7, _, _,
                6, 8, _, 5, 7, _, _, _, 2
            ];
            var hiddenSubsets = new solutions_1.HiddenSubsets(3);
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            hiddenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(hiddenSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[32])).to.eql([2, 5, 6]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[50])).to.eql([2, 5, 6]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[68])).to.eql([2, 6]);
        });
    });
    describe("Quadruple", function () {
        it("- found 1", function () {
            var tiles = [
                8, 1, 6, 5, 7, 3, 2, 9, 4,
                3, 9, 2, _, _, _, _, _, _,
                4, 5, 7, 2, _, 9, _, _, 6,
                9, 4, 1, _, _, _, 5, 6, 8,
                7, 8, 5, 4, 9, 6, 1, 2, 3,
                6, 2, 3, 8, _, _, _, 4, _,
                2, 7, 9, _, _, _, _, _, 1,
                1, 3, 8, _, _, _, _, 7, _,
                5, 6, 4, _, _, _, _, 8, 2
            ];
            var hiddenSubsets = new solutions_1.HiddenSubsets(4);
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            hiddenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(hiddenSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[58])).to.eql([4, 5, 8]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[59])).to.eql([4, 5, 8]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[67])).to.eql([2, 4, 5]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[68])).to.eql([2, 4, 5]);
        });
        it("- found 2", function () {
            var tiles = [
                9, _, 1, 5, _, _, _, 4, 6,
                4, 2, 5, _, 9, _, _, 8, 1,
                8, 6, _, _, 1, _, _, 2, _,
                5, _, 2, _, _, _, _, _, _,
                _, 1, 9, _, _, _, 4, 6, _,
                6, _, _, _, _, _, _, _, 2,
                1, 9, 6, _, 4, _, 2, 5, 3,
                2, _, _, _, 6, _, 8, 1, 7,
                _, _, _, _, _, 1, 6, 9, 4
            ];
            var hiddenSubsets = new solutions_1.HiddenSubsets(4);
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            hiddenSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(hiddenSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[30])).to.eql([1, 4, 6, 9]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[32])).to.eql([4, 6, 9]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[48])).to.eql([1, 4, 9]);
            chai_1.expect(hiddenSubsets.getNotes(sudoku.tiles[50])).to.eql([4, 9]);
        });
    });
});
//# sourceMappingURL=hiddenSubsets.spec.js.map