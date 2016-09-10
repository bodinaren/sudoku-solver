"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var NakedSubsets = (function (_super) {
    __extends(NakedSubsets, _super);
    function NakedSubsets() {
        _super.apply(this, arguments);
        this.name = "NakedSubsets";
    }
    NakedSubsets.prototype.findClue = function (sudoku) {
        for (var r = 0; r < 9; r++) {
            var row = btypescript_1.Linq.where(this.getRow(sudoku, r), function (x) { return x.isEmpty(); });
            if (row.length > 1 && this.checkNakedSubsets(row))
                return true;
        }
        for (var c = 0; c < 9; c++) {
            var col = btypescript_1.Linq.where(this.getColumn(sudoku, c), function (x) { return x.isEmpty(); });
            if (col.length > 1 && this.checkNakedSubsets(col))
                return true;
        }
        for (var reg = 0; reg < 9; reg++) {
            var region = btypescript_1.Linq.where(this.getRegion(sudoku, reg), function (x) { return x.isEmpty(); });
            if (region.length > 1 && this.checkNakedSubsets(region))
                return true;
        }
        return false;
    };
    NakedSubsets.prototype.checkNakedSubsets = function (tiles) {
        var _this = this;
        var notes = [];
        for (var i = 0; i < tiles.length; i++) {
            notes.push(this.getNotes(tiles[i]));
        }
        var _loop_1 = function(i) {
            var outerNotes = notes[i];
            var sameTiles = [tiles[i]];
            var wasHelpful = false;
            if (outerNotes.length === 1)
                return "continue";
            for (var j = i + 1; j < tiles.length; j++) {
                if (btypescript_1.Linq.except(outerNotes, notes[j]).length === 0) {
                    sameTiles.push(tiles[j]);
                }
            }
            if (outerNotes.length === sameTiles.length && outerNotes.length !== tiles.length) {
                btypescript_1.Linq.except(sameTiles, tiles).forEach(function (tile) {
                    outerNotes.forEach(function (note) {
                        if (_this.getNotes(tile).indexOf(note) > -1) {
                            tile.toggleNote(note, false);
                            wasHelpful = true;
                        }
                    });
                });
                if (wasHelpful)
                    return { value: true };
            }
        };
        for (var i = 0; i < tiles.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object") return state_1.value;
            if (state_1 === "continue") continue;
        }
        return false;
    };
    return NakedSubsets;
}(solution_1.Solution));
exports.NakedSubsets = NakedSubsets;
//# sourceMappingURL=nakedSubsets.js.map