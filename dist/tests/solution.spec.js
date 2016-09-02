"use strict";
var sudoku_1 = require("sudoku");
var solution_1 = require("../src/solutions/solution");
var chai_1 = require('chai');
describe("FullHouse", function () {
    var board = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        4, 5, 6, 7, 8, 9, 1, 2, 3,
        7, 8, 9, 1, 2, 3, 4, 5, 6,
        2, 3, 4, 5, 6, 7, 8, 9, 1,
        5, 6, 7, 8, 9, 1, 2, 3, 4,
        8, 9, 1, 2, 3, 4, 5, 6, 7,
        3, 4, 5, 6, 7, 8, 9, 1, 2,
        6, 7, 8, 9, 1, 2, 3, 4, 5,
        9, 1, 2, 3, 4, 5, 6, 7, 8
    ];
    var sudoku = new sudoku_1.Sudoku().setupNormalSudoku(board);
    var solution = new solution_1.Solution();
    describe("getRow", function () {
        it("0", function () { chai_1.expect(solution.getRow(sudoku, 0).map(function (x) { return x.value; })).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]); });
        it("1", function () { chai_1.expect(solution.getRow(sudoku, 1).map(function (x) { return x.value; })).to.eql([4, 5, 6, 7, 8, 9, 1, 2, 3]); });
        it("2", function () { chai_1.expect(solution.getRow(sudoku, 2).map(function (x) { return x.value; })).to.eql([7, 8, 9, 1, 2, 3, 4, 5, 6]); });
        it("3", function () { chai_1.expect(solution.getRow(sudoku, 3).map(function (x) { return x.value; })).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 1]); });
        it("4", function () { chai_1.expect(solution.getRow(sudoku, 4).map(function (x) { return x.value; })).to.eql([5, 6, 7, 8, 9, 1, 2, 3, 4]); });
        it("5", function () { chai_1.expect(solution.getRow(sudoku, 5).map(function (x) { return x.value; })).to.eql([8, 9, 1, 2, 3, 4, 5, 6, 7]); });
        it("6", function () { chai_1.expect(solution.getRow(sudoku, 6).map(function (x) { return x.value; })).to.eql([3, 4, 5, 6, 7, 8, 9, 1, 2]); });
        it("7", function () { chai_1.expect(solution.getRow(sudoku, 7).map(function (x) { return x.value; })).to.eql([6, 7, 8, 9, 1, 2, 3, 4, 5]); });
        it("8", function () { chai_1.expect(solution.getRow(sudoku, 8).map(function (x) { return x.value; })).to.eql([9, 1, 2, 3, 4, 5, 6, 7, 8]); });
    });
    describe("getColumn", function () {
        it("0", function () { chai_1.expect(solution.getColumn(sudoku, 0).map(function (x) { return x.value; })).to.eql([1, 4, 7, 2, 5, 8, 3, 6, 9]); });
        it("1", function () { chai_1.expect(solution.getColumn(sudoku, 1).map(function (x) { return x.value; })).to.eql([2, 5, 8, 3, 6, 9, 4, 7, 1]); });
        it("2", function () { chai_1.expect(solution.getColumn(sudoku, 2).map(function (x) { return x.value; })).to.eql([3, 6, 9, 4, 7, 1, 5, 8, 2]); });
        it("3", function () { chai_1.expect(solution.getColumn(sudoku, 3).map(function (x) { return x.value; })).to.eql([4, 7, 1, 5, 8, 2, 6, 9, 3]); });
        it("4", function () { chai_1.expect(solution.getColumn(sudoku, 4).map(function (x) { return x.value; })).to.eql([5, 8, 2, 6, 9, 3, 7, 1, 4]); });
        it("5", function () { chai_1.expect(solution.getColumn(sudoku, 5).map(function (x) { return x.value; })).to.eql([6, 9, 3, 7, 1, 4, 8, 2, 5]); });
        it("6", function () { chai_1.expect(solution.getColumn(sudoku, 6).map(function (x) { return x.value; })).to.eql([7, 1, 4, 8, 2, 5, 9, 3, 6]); });
        it("7", function () { chai_1.expect(solution.getColumn(sudoku, 7).map(function (x) { return x.value; })).to.eql([8, 2, 5, 9, 3, 6, 1, 4, 7]); });
        it("8", function () { chai_1.expect(solution.getColumn(sudoku, 8).map(function (x) { return x.value; })).to.eql([9, 3, 6, 1, 4, 7, 2, 5, 8]); });
    });
    describe("getRegion", function () {
        it("0", function () { chai_1.expect(solution.getRegion(sudoku, 0).map(function (x) { return x.value; })).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]); });
        it("1", function () { chai_1.expect(solution.getRegion(sudoku, 1).map(function (x) { return x.value; })).to.eql([4, 5, 6, 7, 8, 9, 1, 2, 3]); });
        it("2", function () { chai_1.expect(solution.getRegion(sudoku, 2).map(function (x) { return x.value; })).to.eql([7, 8, 9, 1, 2, 3, 4, 5, 6]); });
        it("3", function () { chai_1.expect(solution.getRegion(sudoku, 3).map(function (x) { return x.value; })).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 1]); });
        it("4", function () { chai_1.expect(solution.getRegion(sudoku, 4).map(function (x) { return x.value; })).to.eql([5, 6, 7, 8, 9, 1, 2, 3, 4]); });
        it("5", function () { chai_1.expect(solution.getRegion(sudoku, 5).map(function (x) { return x.value; })).to.eql([8, 9, 1, 2, 3, 4, 5, 6, 7]); });
        it("6", function () { chai_1.expect(solution.getRegion(sudoku, 6).map(function (x) { return x.value; })).to.eql([3, 4, 5, 6, 7, 8, 9, 1, 2]); });
        it("7", function () { chai_1.expect(solution.getRegion(sudoku, 7).map(function (x) { return x.value; })).to.eql([6, 7, 8, 9, 1, 2, 3, 4, 5]); });
        it("8", function () { chai_1.expect(solution.getRegion(sudoku, 8).map(function (x) { return x.value; })).to.eql([9, 1, 2, 3, 4, 5, 6, 7, 8]); });
    });
    describe("getNotes", function () {
    });
});
//# sourceMappingURL=solution.spec.js.map