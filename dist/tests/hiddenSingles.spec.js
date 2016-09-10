"use strict";
var solverSudoku_1 = require("../src/solverSudoku");
var solutions_1 = require("../src/solutions");
var chai_1 = require('chai');
var _ = 0;
describe("HiddenSingles", function () {
    it("- found 1", function () {
        var tiles = [
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
        var nakedSingles = new solutions_1.HiddenSingles();
        var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        chai_1.expect(nakedSingles.findClue(sudoku)).to.eql(true);
        chai_1.expect(sudoku.tiles[21].val).to.eql(6);
    });
    it("- found 2", function () {
        var tiles = [
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
        var nakedSingles = new solutions_1.HiddenSingles();
        var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        chai_1.expect(nakedSingles.findClue(sudoku)).to.eql(true);
        chai_1.expect(sudoku.tiles[30].val).to.eql(4);
    });
});
//# sourceMappingURL=hiddenSingles.spec.js.map