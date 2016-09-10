"use strict";
var btypescript_1 = require("btypescript");
var Solutions = require("./solutions");
var Solver = (function () {
    function Solver() {
        this.solutions = [
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
        ];
    }
    Solver.prototype.solvePuzzle = function (sudoku) {
        var tries = 0, usedSolutions = [];
        sudoku.tiles.forEach(function (t) { t.notes.forEach(function (n) { return n.toggleValue(true); }); });
        while (!sudoku.isFinished() && tries++ < 200) {
            sudoku.updateInvalidNotes();
            for (var i = 0; i < this.solutions.length; i++) {
                var availableSolution = this.solutions[i];
                if (availableSolution.solution.findClue(sudoku)) {
                    usedSolutions.push(availableSolution);
                    break;
                }
            }
        }
        var points = btypescript_1.Linq.sum(usedSolutions, function (x) { return x.points; });
        return { tries: tries, solutions: usedSolutions, points: points };
    };
    Solver.prototype.printPuzzle = function (sudoku) {
        console.log("");
        for (var i = 0; i < 9; i++) {
            var line = "";
            for (var j = 0; j < 9; j++) {
                line += sudoku.tiles[i * 9 + j].val.toString();
            }
            console.log(line);
        }
    };
    return Solver;
}());
exports.Solver = Solver;
//# sourceMappingURL=solver.js.map