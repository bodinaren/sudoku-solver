import {Sudoku, Tile} from "sudoku";

export class Solution {

    findClue(sudoku: Sudoku): boolean {
        return false;
    }

    getRow(sudoku: Sudoku, rowNr: number): Tile[] {
        let row = [];

        for (let i = 0; i < 9; i++) {
            row.push(sudoku.tiles[rowNr * 9 + i]);
        }

        return row;
    }

    getColumn(sudoku: Sudoku, colNr: number): Tile[] {
        let col = [];

        for (let i = 0; i < 9; i++) {
            col.push(sudoku.tiles[i * 9 + colNr]);
        }

        return col;
    }

    getRegion(sudoku: Sudoku, regionNr: number): Tile[] {
        let region = [];
        let start = (regionNr % 3 * 3) + ((regionNr - regionNr % 3) * 9);

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                region.push(sudoku.tiles[start + col + row * 9]);
            }
        }

        return region;
    }

    getNotes(tile: Tile): number[] {
        if (tile.value > 0) return [];

        let notes = [];

        tile.getNotes().forEach((val, idx) => {
            if (val) notes.push(idx + 1);
        });

        return notes;
    }

    toggleAllNotes(tiles: Tile[]) {
        tiles.forEach(x => { x.notes = x.notes.map(() => true); });
    }
}
