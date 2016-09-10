"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var NakedSingles = (function (_super) {
    __extends(NakedSingles, _super);
    function NakedSingles() {
        _super.apply(this, arguments);
        this.name = "NakedSingles";
    }
    NakedSingles.prototype.findClue = function (sudoku) {
        for (var i = 0; i < 81; i++) {
            var tile = sudoku.tiles[i];
            if (tile.isEmpty()) {
                var notes = this.getNotes(tile);
                if (notes.length === 1) {
                    tile.val = notes[0];
                    return true;
                }
            }
        }
        return false;
    };
    return NakedSingles;
}(solution_1.Solution));
exports.NakedSingles = NakedSingles;
//# sourceMappingURL=nakedSingles.js.map