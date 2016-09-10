"use strict";
var solverSudoku_1 = require("../src/solverSudoku");
var solutions_1 = require("../src/solutions");
var chai_1 = require('chai');
var _ = 0;
describe("NakedSingles", function () {
    it("- found", function () {
        var tiles = [
            _, 2, 3, 4, 5, _, _, _, _,
            6, _, _, _, _, _, _, _, _,
            7, _, _, _, _, _, _, _, _,
            8, _, _, _, _, _, _, _, _,
            9, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];
        var nakedSingles = new solutions_1.NakedSingles();
        var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        chai_1.expect(nakedSingles.findClue(sudoku)).to.eql(true);
        chai_1.expect(sudoku.tiles[0].val).to.eql(1);
    });
    it("- not found", function () {
        var tiles = [
            _, 2, 3, 4, 5, _, _, _, _,
            2, _, _, _, _, _, _, _, _,
            3, _, _, _, _, _, _, _, _,
            4, _, _, _, _, _, _, _, _,
            5, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];
        var nakedSingles = new solutions_1.NakedSingles();
        var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        chai_1.expect(nakedSingles.findClue(sudoku)).to.eql(false);
        chai_1.expect(sudoku.tiles[0].val).to.eql(0);
    });
});
//# sourceMappingURL=nakedSingles.spec.js.map