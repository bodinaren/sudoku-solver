/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {Solution} from "../src/solutions/solution";
import {List} from "btypescript";
import {expect} from 'chai';

describe("FullHouse", function() {

    let board = [
        1,2,3,4,5,6,7,8,9,
        4,5,6,7,8,9,1,2,3,
        7,8,9,1,2,3,4,5,6,
        2,3,4,5,6,7,8,9,1,
        5,6,7,8,9,1,2,3,4,
        8,9,1,2,3,4,5,6,7,
        3,4,5,6,7,8,9,1,2,
        6,7,8,9,1,2,3,4,5,
        9,1,2,3,4,5,6,7,8
    ];
    let sudoku = new Sudoku().setupNormalSudoku(board);
    let solution = new Solution();

    describe("getRow", function() {
        it("0", function () { expect(solution.getRow(sudoku, 0).map(x => x.value)).to.eql([1,2,3,4,5,6,7,8,9]); });
        it("1", function () { expect(solution.getRow(sudoku, 1).map(x => x.value)).to.eql([4,5,6,7,8,9,1,2,3]); });
        it("2", function () { expect(solution.getRow(sudoku, 2).map(x => x.value)).to.eql([7,8,9,1,2,3,4,5,6]); });
        it("3", function () { expect(solution.getRow(sudoku, 3).map(x => x.value)).to.eql([2,3,4,5,6,7,8,9,1]); });
        it("4", function () { expect(solution.getRow(sudoku, 4).map(x => x.value)).to.eql([5,6,7,8,9,1,2,3,4]); });
        it("5", function () { expect(solution.getRow(sudoku, 5).map(x => x.value)).to.eql([8,9,1,2,3,4,5,6,7]); });
        it("6", function () { expect(solution.getRow(sudoku, 6).map(x => x.value)).to.eql([3,4,5,6,7,8,9,1,2]); });
        it("7", function () { expect(solution.getRow(sudoku, 7).map(x => x.value)).to.eql([6,7,8,9,1,2,3,4,5]); });
        it("8", function () { expect(solution.getRow(sudoku, 8).map(x => x.value)).to.eql([9,1,2,3,4,5,6,7,8]); });
    });

    describe("getColumn", function() {
        it("0", function () { expect(solution.getColumn(sudoku, 0).map(x => x.value)).to.eql([1,4,7,2,5,8,3,6,9]); });
        it("1", function () { expect(solution.getColumn(sudoku, 1).map(x => x.value)).to.eql([2,5,8,3,6,9,4,7,1]); });
        it("2", function () { expect(solution.getColumn(sudoku, 2).map(x => x.value)).to.eql([3,6,9,4,7,1,5,8,2]); });
        it("3", function () { expect(solution.getColumn(sudoku, 3).map(x => x.value)).to.eql([4,7,1,5,8,2,6,9,3]); });
        it("4", function () { expect(solution.getColumn(sudoku, 4).map(x => x.value)).to.eql([5,8,2,6,9,3,7,1,4]); });
        it("5", function () { expect(solution.getColumn(sudoku, 5).map(x => x.value)).to.eql([6,9,3,7,1,4,8,2,5]); });
        it("6", function () { expect(solution.getColumn(sudoku, 6).map(x => x.value)).to.eql([7,1,4,8,2,5,9,3,6]); });
        it("7", function () { expect(solution.getColumn(sudoku, 7).map(x => x.value)).to.eql([8,2,5,9,3,6,1,4,7]); });
        it("8", function () { expect(solution.getColumn(sudoku, 8).map(x => x.value)).to.eql([9,3,6,1,4,7,2,5,8]); });
    });
    
    describe("getRegion", function() {
        it("0", function () { expect(solution.getRegion(sudoku, 0).map(x => x.value)).to.eql([1,2,3,4,5,6,7,8,9]); });
        it("1", function () { expect(solution.getRegion(sudoku, 1).map(x => x.value)).to.eql([4,5,6,7,8,9,1,2,3]); });
        it("2", function () { expect(solution.getRegion(sudoku, 2).map(x => x.value)).to.eql([7,8,9,1,2,3,4,5,6]); });
        it("3", function () { expect(solution.getRegion(sudoku, 3).map(x => x.value)).to.eql([2,3,4,5,6,7,8,9,1]); });
        it("4", function () { expect(solution.getRegion(sudoku, 4).map(x => x.value)).to.eql([5,6,7,8,9,1,2,3,4]); });
        it("5", function () { expect(solution.getRegion(sudoku, 5).map(x => x.value)).to.eql([8,9,1,2,3,4,5,6,7]); });
        it("6", function () { expect(solution.getRegion(sudoku, 6).map(x => x.value)).to.eql([3,4,5,6,7,8,9,1,2]); });
        it("7", function () { expect(solution.getRegion(sudoku, 7).map(x => x.value)).to.eql([6,7,8,9,1,2,3,4,5]); });
        it("8", function () { expect(solution.getRegion(sudoku, 8).map(x => x.value)).to.eql([9,1,2,3,4,5,6,7,8]); });
    });
    
    describe("getNotes", function() {
        // add test cases
    });
});