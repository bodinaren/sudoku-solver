"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var BrokenSubsets = (function (_super) {
    __extends(BrokenSubsets, _super);
    function BrokenSubsets(numbers) {
        _super.call(this);
        this.name = "BrokenSubsets";
        this.numbers = numbers;
    }
    BrokenSubsets.prototype.findClue = function (sudoku) {
        for (var r = 0; r < 9; r++) {
            var row = btypescript_1.Linq.where(this.getRow(sudoku, r), function (x) { return x.isEmpty(); });
            if (row.length > this.numbers && this.checkBrokenSubsets(row))
                return true;
        }
        for (var c = 0; c < 9; c++) {
            var col = btypescript_1.Linq.where(this.getColumn(sudoku, c), function (x) { return x.isEmpty(); });
            if (col.length > this.numbers && this.checkBrokenSubsets(col))
                return true;
        }
        for (var reg = 0; reg < 9; reg++) {
            var region = btypescript_1.Linq.where(this.getRegion(sudoku, reg), function (x) { return x.isEmpty(); });
            if (region.length > this.numbers && this.checkBrokenSubsets(region))
                return true;
        }
        return false;
    };
    BrokenSubsets.prototype.checkBrokenSubsets = function (tiles) {
        var _this = this;
        var result = this._iterate([], tiles);
        var wasHelpful = false;
        if (result) {
            var allNotes_1 = [];
            result.forEach(function (t) { Array.prototype.push.apply(allNotes_1, _this.getNotes(t)); });
            var notes_1 = btypescript_1.Linq.distinct(allNotes_1);
            tiles.forEach(function (tile) {
                if (result.indexOf(tile) === -1) {
                    notes_1.forEach(function (note) {
                        if (_this.getNotes(tile).indexOf(note) > -1) {
                            tile.setInvalidNote(note, true);
                            wasHelpful = true;
                        }
                    });
                }
            });
        }
        return (wasHelpful);
    };
    BrokenSubsets.prototype._iterate = function (tiles, tilesLeft) {
        var _this = this;
        var _loop_1 = function(i) {
            var tile = tilesLeft[i];
            var notes = tile.getNotes();
            var allNotes = [];
            tiles.concat(tile).forEach(function (t) { Array.prototype.push.apply(allNotes, _this.getNotes(t)); });
            var sumNotes = btypescript_1.Linq.distinct(allNotes);
            if (sumNotes.length <= this_1.numbers) {
                if (sumNotes.length === this_1.numbers && tiles.length + 1 === this_1.numbers) {
                    return { value: tiles.concat([tile]) };
                }
                else {
                    var rs = this_1._iterate(tiles.concat([tile]), tilesLeft.slice(i + 1));
                    if (rs)
                        return { value: rs };
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < tilesLeft.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object") return state_1.value;
        }
        return undefined;
    };
    return BrokenSubsets;
}(solution_1.Solution));
exports.BrokenSubsets = BrokenSubsets;
//# sourceMappingURL=brokenSubsets.js.map