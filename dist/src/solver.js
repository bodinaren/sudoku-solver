"use strict";
var btypescript_1 = require("btypescript");
var Solutions = require("./solutions/solutions");
var Solver = (function () {
    function Solver() {
        this.solutions = [
            { solution: new Solutions.FullHouse(), points: 1 },
            { solution: new Solutions.NakedSingles(), points: 2 },
            { solution: new Solutions.HiddenSingles(), points: 3 },
            { solution: new Solutions.NakedSubsets(), points: 5 },
        ];
    }
    Solver.prototype.solvePuzzle = function (sudoku) {
        var tries = 0, usedSolutions = [];
        sudoku.tiles.forEach(function (t) { t.notes.forEach(function (n) { return n.toggleValue(true); }); });
        while (!sudoku.isFinished() && tries++ < 100) {
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
    return Solver;
}());
exports.Solver = Solver;
//# sourceMappingURL=solver.js.map