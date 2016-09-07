"use strict";
var Solution = (function () {
    function Solution() {
    }
    Solution.prototype.findClue = function (sudoku) {
        return false;
    };
    Solution.prototype.getRow = function (sudoku, rowNr) {
        var row = [];
        for (var i = 0; i < 9; i++) {
            row.push(sudoku.tiles[rowNr * 9 + i]);
        }
        return row;
    };
    Solution.prototype.getColumn = function (sudoku, colNr) {
        var col = [];
        for (var i = 0; i < 9; i++) {
            col.push(sudoku.tiles[i * 9 + colNr]);
        }
        return col;
    };
    Solution.prototype.getRegion = function (sudoku, regionNr) {
        var region = [];
        var start = (regionNr % 3 * 3) + ((regionNr - regionNr % 3) * 9);
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                region.push(sudoku.tiles[start + col + row * 9]);
            }
        }
        return region;
    };
    Solution.prototype.getNotes = function (tile) {
        if (tile.val > 0)
            return [];
        var notes = [];
        tile.getNotes().forEach(function (val, idx) {
            if (val)
                notes.push(idx + 1);
        });
        return notes;
    };
    Solution.prototype.toggleAllNotes = function (tiles) {
        tiles.forEach(function (t) {
            t.notes.forEach(function (note) {
                note.toggleValue(true);
            });
        });
    };
    return Solution;
}());
exports.Solution = Solution;
//# sourceMappingURL=solution.js.map