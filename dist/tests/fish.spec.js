"use strict";
var solverSudoku_1 = require("../src/solverSudoku");
var solutions_1 = require("../src/solutions");
var chai_1 = require('chai');
var _ = 0;
describe("Fish", function () {
    describe("XWing", function () {
        it("- found 1", function () {
            var tiles = [
                _, 4, 1, 7, 2, 9, _, 3, _,
                7, 6, 9, _, _, 3, 4, _, 2,
                _, 3, 2, 6, 4, _, 7, 1, 9,
                4, _, 3, 9, _, _, 1, 7, _,
                6, _, 7, _, _, 4, 9, _, 3,
                1, 9, 5, 3, 7, _, _, 2, 4,
                2, 1, 4, 5, 6, 7, 3, 9, 8,
                3, 7, 6, _, 9, _, 5, 4, 1,
                9, 5, 8, 4, 3, 1, 2, 6, 7
            ];
            var xwing = new solutions_1.XWing();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            xwing.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(xwing.findClue(sudoku)).to.eql(true);
            chai_1.expect(xwing.getNotes(sudoku.tiles[31])).to.eql([8]);
        });
        it("- found 2", function () {
            var tiles = [
                9, 8, _, _, 6, 2, 7, 5, 3,
                _, 6, 5, _, _, 3, _, _, _,
                3, 2, 7, _, 5, _, _, _, 6,
                7, 9, _, _, 3, _, 5, _, _,
                _, 5, _, _, _, 9, _, _, _,
                8, 3, 2, _, 4, 5, _, _, 9,
                6, 7, 3, 5, 9, 1, 4, 2, 8,
                2, 4, 9, _, 8, 7, _, _, 5,
                5, 1, 8, _, 2, _, _, _, 7
            ];
            var xwing = new solutions_1.XWing();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            xwing.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(xwing.findClue(sudoku)).to.eql(true);
            chai_1.expect(xwing.getNotes(sudoku.tiles[12])).to.eql([4, 7, 8, 9]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[15])).to.eql([2, 8, 9]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[16])).to.eql([4, 8, 9]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[17])).to.eql([2, 4]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[38])).to.eql([4, 6]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[39])).to.eql([2, 6, 7, 8]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[42])).to.eql([2, 3, 6, 8]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[43])).to.eql([3, 4, 6, 7, 8]);
            chai_1.expect(xwing.getNotes(sudoku.tiles[44])).to.eql([2, 4]);
        });
    });
    describe("Swordfish", function () {
        it("- found 1", function () {
            var tiles = [
                1, 6, _, 5, 4, 3, _, 7, _,
                _, 7, 8, 6, _, 1, 4, 3, 5,
                4, 3, 5, 8, _, 7, 6, _, 1,
                7, 2, _, 4, 5, 8, _, 6, 9,
                6, _, _, 9, 1, 2, _, 5, 7,
                _, _, _, 3, 7, 6, _, _, 4,
                _, 1, 6, _, 3, _, _, 4, _,
                3, _, _, _, 8, _, _, 1, 6,
                _, _, 7, 1, 6, 4, 5, _, 3
            ];
            var swordfish = new solutions_1.Swordfish();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            swordfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(swordfish.findClue(sudoku)).to.eql(true);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[52])).to.eql([8]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[54])).to.eql([5, 8, 9]);
        });
        it("- found 2", function () {
            var tiles = [
                1, _, 8, 5, _, _, 2, 3, 4,
                5, _, _, 3, _, 2, 1, 7, 8,
                _, _, _, 8, _, _, 5, 6, 9,
                8, _, _, 6, _, 5, 7, 9, 3,
                _, _, 5, 9, _, _, 4, 8, 1,
                3, _, _, _, _, 8, 6, 5, 2,
                9, 8, _, 2, _, 6, 3, 1, _,
                _, _, _, _, _, _, 8, _, _,
                _, _, _, 7, 8, _, 9, _, _
            ];
            var swordfish = new solutions_1.Swordfish();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            swordfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(swordfish.findClue(sudoku)).to.eql(true);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[19])).to.eql([2, 3, 7]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[20])).to.eql([2, 3, 7]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[22])).to.eql([1, 7]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[46])).to.eql([1, 7, 9]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[47])).to.eql([1, 7, 9]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[49])).to.eql([1, 7]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[64])).to.eql([1, 2, 3, 5, 6, 7]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[65])).to.eql([1, 2, 3, 6, 7]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[67])).to.eql([1, 3, 5, 9]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[73])).to.eql([1, 2, 3, 5, 6]);
            chai_1.expect(swordfish.getNotes(sudoku.tiles[74])).to.eql([1, 2, 3, 6]);
        });
    });
    describe("Jellyfish", function () {
        it("- found 1", function () {
            var tiles = [
                2, _, _, _, _, _, _, _, 3,
                _, 8, _, _, 3, _, _, 5, _,
                _, _, 3, 4, _, 2, 1, _, _,
                _, _, 1, 2, _, 5, 4, _, _,
                _, _, _, _, 9, _, _, _, _,
                _, _, 9, 3, _, 8, 6, _, _,
                _, _, 2, 5, _, 6, 9, _, _,
                _, 9, _, _, 2, _, _, 7, _,
                4, _, _, _, _, _, _, _, 1
            ];
            var jellyfish = new solutions_1.Jellyfish();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            jellyfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(jellyfish.findClue(sudoku)).to.eql(true);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[1])).to.eql([1, 4, 5, 6]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[4])).to.eql([1, 5, 6, 8]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[9])).to.eql([1, 6, 9]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[17])).to.eql([2, 4, 6, 9]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[36])).to.eql([3, 5, 6, 8]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[37])).to.eql([2, 3, 4, 5, 6]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[44])).to.eql([2, 5, 8]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[73])).to.eql([3, 5, 6]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[76])).to.eql([8]);
        });
        it("- found 2", function () {
            var tiles = [
                1, _, 4, 1, _, 3, 5, 8, _,
                _, _, _, _, 2, _, 3, 4, 1,
                1, _, 3, 4, 8, 5, 6, _, _,
                7, 3, 2, 9, 5, 4, 1, 6, 8,
                _, _, 5, _, 1, _, 9, _, _,
                6, 1, 9, 8, 3, 2, 4, _, _,
                _, _, 1, 5, _, 8, 2, _, _,
                3, _, _, 2, 4, _, _, _, _,
                _, 2, 6, 3, _, _, _, _, 4
            ];
            var jellyfish = new solutions_1.Jellyfish();
            var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
            jellyfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            chai_1.expect(jellyfish.findClue(sudoku)).to.eql(true);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[10])).to.eql([5, 6, 8, 9]);
            chai_1.expect(jellyfish.getNotes(sudoku.tiles[76])).to.eql([9]);
        });
    });
});
//# sourceMappingURL=fish.spec.js.map