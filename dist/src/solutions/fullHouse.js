"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var solution_1 = require("./solution");
var btypescript_1 = require("btypescript");
var FullHouse = (function (_super) {
    __extends(FullHouse, _super);
    function FullHouse() {
        _super.apply(this, arguments);
        this.name = "FullHouse";
    }
    FullHouse.prototype.findClue = function (sudoku) {
        for (var r = 0; r < 9; r++) {
            var row = this.getRow(sudoku, r);
            if (this.checkFullHouse(row))
                return true;
        }
        for (var c = 0; c < 9; c++) {
            var col = this.getColumn(sudoku, c);
            if (this.checkFullHouse(col))
                return true;
        }
        for (var reg = 0; reg < 9; reg++) {
            var region = this.getRegion(sudoku, reg);
            if (this.checkFullHouse(region))
                return true;
        }
        return false;
    };
    FullHouse.prototype.checkFullHouse = function (tiles) {
        var house = btypescript_1.Linq.filter(tiles, function (x) { return x.isEmpty(); });
        if (house.length === 1) {
            var cell = house[0];
            cell.val = btypescript_1.Linq.except([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], tiles.map(function (x) { return x.val; }))[0];
            return true;
        }
        return false;
    };
    return FullHouse;
}(solution_1.Solution));
exports.FullHouse = FullHouse;
//# sourceMappingURL=fullHouse.js.map