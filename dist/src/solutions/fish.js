"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish(numbers) {
        _super.call(this);
        this.name = "Fish";
        this.numbers = numbers;
    }
    Fish.prototype.findClue = function (sudoku) {
        var wasHelpful = false;
        for (var n = 1; n <= 9; n++) {
            var rowResult = this._iterateRow(sudoku, n, 0, [], []);
            if (rowResult)
                wasHelpful = this.validateResult(sudoku, rowResult);
            if (wasHelpful)
                return true;
        }
        for (var n = 1; n <= 9; n++) {
            var colResult = this._iterateCol(sudoku, n, 0, [], []);
            if (colResult)
                wasHelpful = this.validateResult(sudoku, colResult);
            if (wasHelpful)
                return true;
        }
        return false;
    };
    Fish.prototype.validateResult = function (sudoku, rs) {
        var _this = this;
        var rows = rs.rows;
        var cols = rs.cols;
        var wasHelpful = false;
        sudoku.tiles.forEach(function (t) {
            var isInRow = (rs.rows.indexOf(t.row) === -1);
            var isInCol = (rs.cols.indexOf(t.col) === -1);
            if (isInRow !== isInCol) {
                if (_this.getNotes(t).indexOf(rs.note) > -1) {
                    t.toggleNote(rs.note, false);
                    wasHelpful = true;
                }
            }
        });
        return wasHelpful;
    };
    Fish.prototype._iterateRow = function (sudoku, n, row, rows, cols) {
        var _this = this;
        for (var r = row; r < 9; r++) {
            var tiles = btypescript_1.Linq.where(this.getRow(sudoku, r), function (t) { return t.isEmpty(); });
            var tempRows = rows.concat([r]);
            var matchingTiles = btypescript_1.Linq.where(tiles, function (t) { return _this.getNotes(t).indexOf(n) > -1; });
            var tempCols = btypescript_1.Linq.distinct(cols.concat(matchingTiles.map(function (t) { return t.col; })));
            if (matchingTiles.length > 0 && tempCols.length === this.numbers && tempRows.length === this.numbers) {
                return {
                    note: n,
                    rows: tempRows,
                    cols: tempCols
                };
            }
            else if (tempRows.length > this.numbers) {
                return undefined;
            }
            else if (matchingTiles.length > 0) {
                var rs = this._iterateRow(sudoku, n, r + 1, tempRows, tempCols);
                if (rs)
                    return rs;
            }
        }
    };
    Fish.prototype._iterateCol = function (sudoku, n, col, cols, rows) {
        var _this = this;
        for (var c = 0; c < 9; c++) {
            var tiles = btypescript_1.Linq.where(this.getColumn(sudoku, c), function (t) { return t.isEmpty(); });
            var tempCols = cols.concat([c]);
            var matchingTiles = btypescript_1.Linq.where(tiles, function (t) { return _this.getNotes(t).indexOf(n) > -1; });
            var tempRows = btypescript_1.Linq.distinct(rows.concat(matchingTiles.map(function (t) { return t.row; })));
            if (matchingTiles.length > 0 && tempCols.length === this.numbers && tempRows.length === this.numbers) {
                return {
                    note: n,
                    rows: tempRows,
                    cols: tempCols
                };
            }
            else if (tempCols.length > this.numbers) {
                return undefined;
            }
            else if (matchingTiles.length > 0) {
                var rs = this._iterateCol(sudoku, n, c + 1, tempCols, tempRows);
                if (rs)
                    return rs;
            }
        }
    };
    return Fish;
}(solution_1.Solution));
exports.Fish = Fish;
//# sourceMappingURL=fish.js.map