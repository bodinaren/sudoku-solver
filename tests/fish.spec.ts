/// <reference path="../typings/main.d.ts" />

import {Sudoku, Tile} from "sudoku";
import {SolverSudoku} from "../src/solverSudoku";
import {XWing, Swordfish, Jellyfish} from "../src/solutions";
import {List} from "btypescript";
import {expect} from 'chai';

let _ = 0;

describe("Fish", function () {
    describe("XWing", function() {
        it("- found 1", function() {
            // http://hodoku.sourceforge.net/en/show_example.php?file=bf201&tech=X-Wing

            let tiles = [
                _, 4, 1, 7, 2, 9, _, 3, _,
                7, 6, 9, _, _, 3, 4, _, 2,
                _, 3, 2, 6, 4, _, 7, 1, 9,
                4, _, 3, 9, _, _, 1, 7, _,
                6, _, 7, _, _, 4, 9, _, 3,
                1, 9, 5, 3, 7, _, _, 2, 4,
                2, 1, 4, 5, 6, 7, 3, 9, 8,
                3, 7, 6, _, 9, _, 5, 4, 1,
                9, 5, 8, 4, 3, 1, 2, 6, 7
            ];

            let xwing = new XWing();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            xwing.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(xwing.findClue(sudoku)).to.eql(true);
            expect(xwing.getNotes(sudoku.tiles[31])).to.eql([8]);
        });

        it("- found 2", function() {
            // http://hodoku.sourceforge.net/en/show_example.php?file=bf202&tech=X-Wing

            let tiles = [
                9, 8, _, _, 6, 2, 7, 5, 3,
                _, 6, 5, _, _, 3, _, _, _,
                3, 2, 7, _, 5, _, _, _, 6,
                7, 9, _, _, 3, _, 5, _, _,
                _, 5, _, _, _, 9, _, _, _,
                8, 3, 2, _, 4, 5, _, _, 9,
                6, 7, 3, 5, 9, 1, 4, 2, 8,
                2, 4, 9, _, 8, 7, _, _, 5,
                5, 1, 8, _, 2, _, _, _, 7
            ];

            let xwing = new XWing();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            xwing.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(xwing.findClue(sudoku)).to.eql(true);
            expect(xwing.getNotes(sudoku.tiles[12])).to.eql([4,7,8,9]);
            expect(xwing.getNotes(sudoku.tiles[15])).to.eql([2,8,9]);
            expect(xwing.getNotes(sudoku.tiles[16])).to.eql([4,8,9]);
            expect(xwing.getNotes(sudoku.tiles[17])).to.eql([2,4]);
            expect(xwing.getNotes(sudoku.tiles[38])).to.eql([4,6]);
            expect(xwing.getNotes(sudoku.tiles[39])).to.eql([2,6,7,8]);
            expect(xwing.getNotes(sudoku.tiles[42])).to.eql([2,3,6,8]);
            expect(xwing.getNotes(sudoku.tiles[43])).to.eql([3,4,6,7,8]);
            expect(xwing.getNotes(sudoku.tiles[44])).to.eql([2,4]);
        });
    });
    
    describe("Swordfish", function() {
        it("- found 1", function() {
            // http://hodoku.sourceforge.net/en/show_example.php?file=bf301&tech=Swordfish

            let tiles = [
                1, 6, _, 5, 4, 3, _, 7, _,
                _, 7, 8, 6, _, 1, 4, 3, 5,
                4, 3, 5, 8, _, 7, 6, _, 1,
                7, 2, _, 4, 5, 8, _, 6, 9,
                6, _, _, 9, 1, 2, _, 5, 7,
                _, _, _, 3, 7, 6, _, _, 4,
                _, 1, 6, _, 3, _, _, 4, _,
                3, _, _, _, 8, _, _, 1, 6,
                _, _, 7, 1, 6, 4, 5, _, 3
            ];

            let swordfish = new Swordfish();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            swordfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(swordfish.findClue(sudoku)).to.eql(true);
            expect(swordfish.getNotes(sudoku.tiles[52])).to.eql([8]);
            expect(swordfish.getNotes(sudoku.tiles[54])).to.eql([5,8,9]);
        });

        it("- found 2", function() {
            // http://hodoku.sourceforge.net/en/show_example.php?file=bf302&tech=Swordfish

            let tiles = [
                1, _, 8, 5, _, _, 2, 3, 4,
                5, _, _, 3, _, 2, 1, 7, 8,
                _, _, _, 8, _, _, 5, 6, 9,
                8, _, _, 6, _, 5, 7, 9, 3,
                _, _, 5, 9, _, _, 4, 8, 1,
                3, _, _, _, _, 8, 6, 5, 2,
                9, 8, _, 2, _, 6, 3, 1, _,
                _, _, _, _, _, _, 8, _, _,
                _, _, _, 7, 8, _, 9, _, _
            ];

            let swordfish = new Swordfish();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            swordfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(swordfish.findClue(sudoku)).to.eql(true);
            expect(swordfish.getNotes(sudoku.tiles[19])).to.eql([2,3,7]);
            expect(swordfish.getNotes(sudoku.tiles[20])).to.eql([2,3,7]);
            expect(swordfish.getNotes(sudoku.tiles[22])).to.eql([1,7]);
            expect(swordfish.getNotes(sudoku.tiles[46])).to.eql([1,7,9]);
            expect(swordfish.getNotes(sudoku.tiles[47])).to.eql([1,7,9]);
            expect(swordfish.getNotes(sudoku.tiles[49])).to.eql([1,7]);
            expect(swordfish.getNotes(sudoku.tiles[64])).to.eql([1,2,3,5,6,7]);
            expect(swordfish.getNotes(sudoku.tiles[65])).to.eql([1,2,3,6,7]);
            expect(swordfish.getNotes(sudoku.tiles[67])).to.eql([1,3,5,9]);
            expect(swordfish.getNotes(sudoku.tiles[73])).to.eql([1,2,3,5,6]);
            expect(swordfish.getNotes(sudoku.tiles[74])).to.eql([1,2,3,6]);
        });
    });
    
    describe("Jellyfish", function() {
        it("- found 1", function() {
            // http://hodoku.sourceforge.net/en/show_example.php?file=bf401&tech=Jellyfish

            let tiles = [
                2, _, _, _, _, _, _, _, 3,
                _, 8, _, _, 3, _, _, 5, _,
                _, _, 3, 4, _, 2, 1, _, _,
                _, _, 1, 2, _, 5, 4, _, _,
                _, _, _, _, 9, _, _, _, _,
                _, _, 9, 3, _, 8, 6, _, _,
                _, _, 2, 5, _, 6, 9, _, _,
                _, 9, _, _, 2, _, _, 7, _,
                4, _, _, _, _, _, _, _, 1
            ];

            let jellyfish = new Jellyfish();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            jellyfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(jellyfish.findClue(sudoku)).to.eql(true);
            expect(jellyfish.getNotes(sudoku.tiles[1])).to.eql([1,4,5,6]);
            expect(jellyfish.getNotes(sudoku.tiles[4])).to.eql([1,5,6,8]);
            expect(jellyfish.getNotes(sudoku.tiles[9])).to.eql([1,6,9]);
            expect(jellyfish.getNotes(sudoku.tiles[17])).to.eql([2,4,6,9]);
            expect(jellyfish.getNotes(sudoku.tiles[36])).to.eql([3,5,6,8]);
            expect(jellyfish.getNotes(sudoku.tiles[37])).to.eql([2,3,4,5,6]);
            expect(jellyfish.getNotes(sudoku.tiles[44])).to.eql([2,5,8]);
            expect(jellyfish.getNotes(sudoku.tiles[73])).to.eql([3,5,6]);
            expect(jellyfish.getNotes(sudoku.tiles[76])).to.eql([8]);
            
        });

        it("- found 2", function() {
            // http://hodoku.sourceforge.net/en/show_example.php?file=bf402&tech=Jellyfish

            let tiles = [
                1, _, 4, 1, _, 3, 5, 8, _,
                _, _, _, _, 2, _, 3, 4, 1,
                1, _, 3, 4, 8, 5, 6, _, _,
                7, 3, 2, 9, 5, 4, 1, 6, 8,
                _, _, 5, _, 1, _, 9, _, _,
                6, 1, 9, 8, 3, 2, 4, _, _,
                _, _, 1, 5, _, 8, 2, _, _,
                3, _, _, 2, 4, _, _, _, _,
                _, 2, 6, 3, _, _, _, _, 4
            ];

            let jellyfish = new Jellyfish();
            let sudoku = new SolverSudoku().setupNormalSudoku(tiles);
            
            jellyfish.toggleAllNotes(sudoku.tiles);
            sudoku.updateInvalidNotes();
            
            expect(jellyfish.findClue(sudoku)).to.eql(true);
            expect(jellyfish.getNotes(sudoku.tiles[10])).to.eql([5,6,8,9]);
            expect(jellyfish.getNotes(sudoku.tiles[76])).to.eql([9]);
        });
    });
});