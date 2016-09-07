"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sudoku_1 = require("sudoku");
var TestSudoku = (function (_super) {
    __extends(TestSudoku, _super);
    function TestSudoku() {
        _super.call(this, sudoku_1.Tile, sudoku_1.Note, sudoku_1.Group);
    }
    return TestSudoku;
}(sudoku_1.Sudoku));
exports.TestSudoku = TestSudoku;
//# sourceMappingURL=testSudoku.js.map