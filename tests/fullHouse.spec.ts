/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {FullHouse} from "../src/solutions/fullHouse";
import {List} from "btypescript";
import {expect} from 'chai';

let _ = 0;

describe("FullHouse", function() {
    it("- found", function() {
        let tiles = [
            1, 2, 3, 4, 5, _, 7, 8, 9,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];

        let fullHouse = new FullHouse();
        let sudoku = new Sudoku().setupNormalSudoku(tiles);

        expect(fullHouse.findClue(sudoku)).to.eql(true);
        expect(sudoku.tiles[5].value).to.eql(6);
    });

    it("- not found", function() {
        let tiles = [
            1, 2, _, 4, 5, _, 7, 8, 9,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];

        let fullHouse = new FullHouse();
        let sudoku = new Sudoku().setupNormalSudoku(tiles);

        expect(fullHouse.findClue(sudoku)).to.eql(false);
        expect(sudoku.tiles[2].value).to.eql(0);
        expect(sudoku.tiles[5].value).to.eql(0);
    });
});