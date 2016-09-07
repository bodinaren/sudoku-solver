"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sudoku_1 = require("sudoku");
var SolverSudoku = (function (_super) {
    __extends(SolverSudoku, _super);
    function SolverSudoku() {
        _super.call(this, sudoku_1.Tile, sudoku_1.Note, sudoku_1.Group);
    }
    return SolverSudoku;
}(sudoku_1.Sudoku));
exports.SolverSudoku = SolverSudoku;
//# sourceMappingURL=solverSudoku.js.map