"use strict";
var sudoku_1 = require("sudoku");
var nakedSingles_1 = require("../src/solutions/nakedSingles");
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
        var nakedSingles = new nakedSingles_1.NakedSingles();
        var sudoku = new sudoku_1.Sudoku().setupNormalSudoku(tiles);
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        chai_1.expect(nakedSingles.findNumber(sudoku)).to.eql(true);
        chai_1.expect(sudoku.tiles[0].value).to.eql(1);
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
        var nakedSingles = new nakedSingles_1.NakedSingles();
        var sudoku = new sudoku_1.Sudoku().setupNormalSudoku(tiles);
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        chai_1.expect(nakedSingles.findNumber(sudoku)).to.eql(false);
        chai_1.expect(sudoku.tiles[0].value).to.eql(0);
    });
});
//# sourceMappingURL=nakedSingles.spec.js.map