"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var HiddenSubsets = (function (_super) {
    __extends(HiddenSubsets, _super);
    function HiddenSubsets(numbers) {
        _super.call(this);
        this.name = "HiddenSubsets";
        this.numbers = numbers;
    }
    HiddenSubsets.prototype.findClue = function (sudoku) {
        for (var r = 0; r < 9; r++) {
            var row = btypescript_1.Linq.where(this.getRow(sudoku, r), function (x) { return x.isEmpty(); });
            if (row.length > 1 && this.checkHiddenSubset(row))
                return true;
        }
        for (var c = 0; c < 9; c++) {
            var col = btypescript_1.Linq.where(this.getColumn(sudoku, c), function (x) { return x.isEmpty(); });
            if (col.length > 1 && this.checkHiddenSubset(col))
                return true;
        }
        for (var reg = 0; reg < 9; reg++) {
            var region = btypescript_1.Linq.where(this.getRegion(sudoku, reg), function (x) { return x.isEmpty(); });
            if (region.length > 1 && this.checkHiddenSubset(region))
                return true;
        }
        return false;
    };
    HiddenSubsets.prototype.checkHiddenSubset = function (tiles) {
        return this._iterate(tiles, [], [], 1);
    };
    HiddenSubsets.prototype._iterate = function (allTiles, tiles, notes, start) {
        var _this = this;
        var _loop_1 = function(num) {
            var newNotes = notes.concat([num]);
            var matches = btypescript_1.Linq.where(allTiles, function (t) { return _this.getNotes(t).indexOf(num) > -1; });
            var sumTiles = btypescript_1.Linq.distinct(tiles, matches);
            if (matches.length === 0) {
            }
            else if (newNotes.length > this_1.numbers) {
                return { value: false };
            }
            else if (sumTiles.length > this_1.numbers) {
            }
            else if (newNotes.length === this_1.numbers && sumTiles.length === this_1.numbers) {
                var wasHelpful_1 = false;
                sumTiles.forEach(function (tile) {
                    for (var note = 1; note <= 9; note++) {
                        if (newNotes.indexOf(note) === -1) {
                            if (_this.getNotes(tile).indexOf(note) > -1) {
                                tile.setInvalidNote(note, true);
                                wasHelpful_1 = true;
                            }
                        }
                    }
                });
                if (wasHelpful_1)
                    return { value: true };
            }
            else {
                var rs = this_1._iterate(allTiles, sumTiles, newNotes, num + 1);
                if (rs)
                    return { value: rs };
            }
        };
        var this_1 = this;
        for (var num = start; num <= 9; num++) {
            var state_1 = _loop_1(num);
            if (typeof state_1 === "object") return state_1.value;
        }
    };
    return HiddenSubsets;
}(solution_1.Solution));
exports.HiddenSubsets = HiddenSubsets;
//# sourceMappingURL=hiddenSubsets.js.map