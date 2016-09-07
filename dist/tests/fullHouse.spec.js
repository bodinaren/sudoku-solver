"use strict";
var solverSudoku_1 = require("../src/solverSudoku");
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
        var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
        chai_1.expect(fullHouse.findClue(sudoku)).to.eql(true);
        chai_1.expect(sudoku.tiles[5].val).to.eql(6);
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
        var sudoku = new solverSudoku_1.SolverSudoku().setupNormalSudoku(tiles);
        chai_1.expect(fullHouse.findClue(sudoku)).to.eql(false);
        chai_1.expect(sudoku.tiles[2].val).to.eql(0);
        chai_1.expect(sudoku.tiles[5].val).to.eql(0);
    });
});
//# sourceMappingURL=fullHouse.spec.js.map