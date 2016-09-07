"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var NakedSingles = (function (_super) {
    __extends(NakedSingles, _super);
    function NakedSingles() {
        _super.apply(this, arguments);
        this.name = "NakedSingles";
    }
    NakedSingles.prototype.findClue = function (sudoku) {
        var _this = this;
        var found = !new btypescript_1.Linq(sudoku.tiles).filter(function (x) { return x.val === 0; }).forEach(function (x) {
            if (x.isEmpty()) {
                var notes = _this.getNotes(x);
                if (notes.length === 1) {
                    x.val = notes[0];
                    return false;
                }
            }
            return true;
        });
        return found;
    };
    return NakedSingles;
}(solution_1.Solution));
exports.NakedSingles = NakedSingles;
//# sourceMappingURL=nakedSingles.js.map