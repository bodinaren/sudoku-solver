"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var Intersections = (function (_super) {
    __extends(Intersections, _super);
    function Intersections() {
        _super.apply(this, arguments);
        this.name = "Intersections";
    }
    Intersections.prototype.findClue = function (sudoku) {
        for (var r = 0; r < 9; r++) {
            var row = btypescript_1.Linq.where(this.getRow(sudoku, r), function (x) { return x.isEmpty(); });
            if (row.length > 1 && this.checkIntersections(row, false, sudoku))
                return true;
        }
        for (var c = 0; c < 9; c++) {
            var col = btypescript_1.Linq.where(this.getColumn(sudoku, c), function (x) { return x.isEmpty(); });
            if (col.length > 1 && this.checkIntersections(col, false, sudoku))
                return true;
        }
        for (var reg = 0; reg < 9; reg++) {
            var region = btypescript_1.Linq.where(this.getRegion(sudoku, reg), function (x) { return x.isEmpty(); });
            if (region.length > 1 && this.checkIntersections(region, true, sudoku))
                return true;
        }
        return false;
    };
    Intersections.prototype.checkIntersections = function (tiles, isRegion, sudoku) {
        var _this = this;
        var primary;
        var secondary;
        var num;
        var _loop_1 = function() {
            primary = btypescript_1.Linq.where(tiles, function (t) { return _this.getNotes(t).indexOf(num) > -1; });
            secondary = undefined;
            if (btypescript_1.Numbers(primary.length).between(2, 3)) {
                if (isRegion) {
                    if (btypescript_1.Linq.distinct(primary.map(function (m) { return m.row; })).length === 1) {
                        secondary = btypescript_1.Linq.where(sudoku.tiles, function (x) { return x.row === primary[0].row; });
                    }
                    else if (btypescript_1.Linq.distinct(primary.map(function (m) { return m.col; })).length === 1) {
                        secondary = btypescript_1.Linq.where(sudoku.tiles, function (x) { return x.col === primary[0].col; });
                    }
                }
                else if (btypescript_1.Linq.distinct(primary.map(function (m) { return m.region; })).length === 1) {
                    secondary = btypescript_1.Linq.where(sudoku.tiles, function (x) { return x.region === primary[0].region; });
                }
            }
            if (secondary) {
                var wasHelpful_1 = false;
                secondary.forEach(function (tile) {
                    if (primary.indexOf(tile) === -1) {
                        if (_this.getNotes(tile).indexOf(num) > -1) {
                            tile.setInvalidNote(num, true);
                            wasHelpful_1 = true;
                        }
                    }
                });
                if (wasHelpful_1)
                    return { value: true };
            }
        };
        for (num = 1; num <= 9; num++) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object") return state_1.value;
        }
    };
    return Intersections;
}(solution_1.Solution));
exports.Intersections = Intersections;
//# sourceMappingURL=intersections.js.map