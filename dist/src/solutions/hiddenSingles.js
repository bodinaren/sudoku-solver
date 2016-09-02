"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var HiddenSingles = (function (_super) {
    __extends(HiddenSingles, _super);
    function HiddenSingles() {
        _super.apply(this, arguments);
        this.name = "HiddenSingles";
    }
    HiddenSingles.prototype.findNumber = function (sudoku) {
        for (var r = 0; r < 9; r++) {
            var row = btypescript_1.Linq.where(this.getRow(sudoku, r), function (x) { return x.isEmpty(); });
            if (row.length > 0 && this.checkHiddenSingles(row))
                return true;
        }
        for (var c = 0; c < 9; c++) {
            var col = btypescript_1.Linq.where(this.getColumn(sudoku, c), function (x) { return x.isEmpty(); });
            if (col.length > 0 && this.checkHiddenSingles(col))
                return true;
        }
        for (var reg = 0; reg < 9; reg++) {
            var region = btypescript_1.Linq.where(this.getRegion(sudoku, reg), function (x) { return x.isEmpty(); });
            if (region.length > 0 && this.checkHiddenSingles(region))
                return true;
        }
        return false;
    };
    HiddenSingles.prototype.checkHiddenSingles = function (tiles) {
        if (btypescript_1.Linq.all(tiles, function (x) { return !x.isEmpty(); }))
            return false;
        var notes = [];
        var checkedNumbers = new btypescript_1.Linq(tiles).map(function (x) { return x.value; }).distinct().toArray();
        for (var i = 0; i < tiles.length; i++) {
            notes.push(this.getNotes(tiles[i]));
        }
        var _loop_1 = function(i) {
            var outerNotes = notes[i].filter(function (x) { return checkedNumbers.indexOf(x) === -1; });
            var unique = outerNotes.some(function (note) {
                var foundMoreNotes = new btypescript_1.Linq(notes).skip(i + 1).any(function (other) {
                    return other.indexOf(note) > -1;
                });
                if (foundMoreNotes) {
                    checkedNumbers.push(note);
                }
                else {
                    tiles[i].value = note;
                    return true;
                }
            });
            if (unique)
                return { value: true };
            if (checkedNumbers.length >= 10)
                return { value: false };
        };
        for (var i = 0; i < tiles.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object") return state_1.value;
        }
        return false;
    };
    return HiddenSingles;
}(solution_1.Solution));
exports.HiddenSingles = HiddenSingles;
//# sourceMappingURL=hiddenSingles.js.map