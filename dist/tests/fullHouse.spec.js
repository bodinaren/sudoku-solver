"use strict";
var sudoku_1 = require("sudoku");
var fullHouse_1 = require("../src/solutions/fullHouse");
var chai_1 = require('chai');
var _ = 0;
describe("FullHouse", function () {
    it("- found", function () {
        var tiles = [
            1, 2, 3, 4, 5, _, 7, 8, 9,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];
        var fullHouse = new fullHouse_1.FullHouse();
        var sudoku = new sudoku_1.Sudoku().setupNormalSudoku(tiles);
        chai_1.expect(fullHouse.findNumber(sudoku)).to.eql(true);
        chai_1.expect(sudoku.tiles[5].value).to.eql(6);
    });
    it("- not found", function () {
        var tiles = [
            1, 2, _, 4, 5, _, 7, 8, 9,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];
        var fullHouse = new fullHouse_1.FullHouse();
        var sudoku = new sudoku_1.Sudoku().setupNormalSudoku(tiles);
        chai_1.expect(fullHouse.findNumber(sudoku)).to.eql(false);
        chai_1.expect(sudoku.tiles[2].value).to.eql(0);
        chai_1.expect(sudoku.tiles[5].value).to.eql(0);
    });
});
//# sourceMappingURL=fullHouse.spec.js.map