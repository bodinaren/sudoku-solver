import {Linq} from "btypescript";
import {Sudoku, Tile} from "sudoku";
import * as Solutions from "./solutions/solutions";

export class Solver {

    private solutions: IAvailableSolution[] = [
        { solution: new Solutions.FullHouse(), points: 1 },
        { solution: new Solutions.NakedSingles(), points: 2 },
        { solution: new Solutions.HiddenSingles(), points: 3 },
        { solution: new Solutions.NakedSubsets(), points: 5 },
    ];

    constructor() { }

    solvePuzzle(sudoku: Sudoku): ISolvePuzzleResult {
        let tries = 0,
            usedSolutions: IAvailableSolution[] = [];

        sudoku.tiles.forEach((x) => { x.notes = x.notes.map(x => true ); });

        while (!sudoku.isFinished() && tries++ < 100) {
            sudoku.updateInvalidNotes();

            for (let i = 0; i < this.solutions.length; i++) {
                let availableSolution = this.solutions[i];

                if (availableSolution.solution.findClue(sudoku)) {
                    usedSolutions.push(availableSolution);
                    // points += availableSolution.points;
                    break; // start over at the easiest solution again
                }
            }
        }

        let points = Linq.sum(usedSolutions, (x) => x.points);

        return { tries: tries, solutions: usedSolutions, points: points };
    }
}

export interface IAvailableSolution {
    solution: Solutions.Solution;
    points: number;
}

export interface ISolvePuzzleResult {
    points: number;
    tries: number;
    solutions: IAvailableSolution[];
}
