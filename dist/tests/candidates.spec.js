"use strict";
var solverSudoku_1 = require("../src/solverSudoku");
var solutions_1 = require("../src/solutions");
var chai_1 = require('chai');
var _ = 0;
describe("Candidates", function () {
    describe("Pointing", function () {
        it("- found 1", function () {
            var tiles = [
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
            var nakedSubsets = new solutions_1.Candidates();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[24])).to.eql([3]);
        });
        it("- found 2", function () {
            var tiles = [
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
            var nakedSubsets = new solutions_1.Candidates();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[54])).to.eql([2, 4, 5, 6, 7, 8, 9]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[55])).to.eql([2, 3, 5, 6, 7]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[56])).to.eql([3, 4, 5, 6, 8, 9]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[60])).to.eql([2, 3, 4, 6]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[61])).to.eql([2, 4]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[62])).to.eql([2, 3, 4, 6]);
        });
    });
    describe("Claiming", function () {
        it("- found 1", function () {
            var tiles = [
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
            var nakedSubsets = new solutions_1.Candidates();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[19])).to.eql([4]);
        });
        it("- found 2", function () {
            var tiles = [
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
            var nakedSubsets = new solutions_1.Candidates();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            nakedSubsets.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(nakedSubsets.findClue(sudoku)).to.eql(true);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[3])).to.eql([3, 5]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[4])).to.eql([5, 9]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[12])).to.eql([1, 2, 3, 5, 7]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[13])).to.eql([1, 2, 5, 7]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[21])).to.eql([2, 3]);
            chai_1.expect(nakedSubsets.getNotes(sudoku.tiles[22])).to.eql([2, 6, 9]);
        });
    });
});
//# sourceMappingURL=candidates.spec.js.map