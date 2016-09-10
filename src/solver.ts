import {Linq} from "btypescript";
import {SolverSudoku} from "./solverSudoku";
import * as Solutions from "./solutions";

export class Solver {

    private solutions: IAvailableSolution[] = [
        { solution: new Solutions.FullHouse(), points: 1 },
        { solution: new Solutions.NakedSingles(), points: 2 },
        { solution: new Solutions.HiddenSingles(), points: 3 },
        { solution: new Solutions.NakedSubsets(), points: 5 },

        { solution: new Solutions.Intersections(), points: 10 },
        { solution: new Solutions.BrokenSubsets(2), points: 15 },
        { solution: new Solutions.BrokenSubsets(3), points: 20 },
        { solution: new Solutions.BrokenSubsets(4), points: 25 },
        { solution: new Solutions.HiddenSubsets(3), points: 30 },
        { solution: new Solutions.HiddenSubsets(4), points: 35 },

        { solution: new Solutions.XWing(), points: 50 },
        { solution: new Solutions.Swordfish(), points: 60 },
        { solution: new Solutions.Jellyfish(), points: 70 },
    ];

    constructor() { }

    solvePuzzle(sudoku: SolverSudoku): ISolvePuzzleResult {
        let tries = 0,
            usedSolutions: IAvailableSolution[] = [];

        sudoku.tiles.forEach(t => { t.notes.forEach(n => n.toggleValue(true)); });

        while (!sudoku.isFinished() && tries++ < 200) {
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

    printPuzzle(sudoku: SolverSudoku) {
        console.log("");
        for (let i = 0; i < 9; i++) {
            let line = "";
            for (let j = 0; j < 9; j++) {
                line += sudoku.tiles[i * 9 + j].val.toString();
            }
            console.log(line);
        }
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
