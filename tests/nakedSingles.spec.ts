/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {NakedSingles} from "../src/solutions/nakedSingles";
import {List} from "btypescript";
import {expect} from 'chai';

let _ = 0;

describe("NakedSingles", function() {
    it("- found", function() {
        let tiles = [
            _, 2, 3, 4, 5, _, _, _, _,
            6, _, _, _, _, _, _, _, _,
            7, _, _, _, _, _, _, _, _,
            8, _, _, _, _, _, _, _, _,
            9, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];

        let nakedSingles = new NakedSingles();
        let sudoku = new Sudoku().setupNormalSudoku(tiles);
        
        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        expect(nakedSingles.findClue(sudoku)).to.eql(true);
        expect(sudoku.tiles[0].value).to.eql(1);
    });

    it("- not found", function() {
        let tiles = [
            _, 2, 3, 4, 5, _, _, _, _,
            2, _, _, _, _, _, _, _, _,
            3, _, _, _, _, _, _, _, _,
            4, _, _, _, _, _, _, _, _,
            5, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _, _
        ];

        let nakedSingles = new NakedSingles();
        let sudoku = new Sudoku().setupNormalSudoku(tiles);

        nakedSingles.toggleAllNotes(sudoku.tiles);
        sudoku.updateInvalidNotes();
        expect(nakedSingles.findClue(sudoku)).to.eql(false);
        expect(sudoku.tiles[0].value).to.eql(0);
    });
});