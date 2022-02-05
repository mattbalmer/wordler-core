"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSolver = void 0;
const wordle_1 = require("../wordle");
const official_1 = require("../data/official");
const sample_100_1 = require("../data/sample-100");
const testSolver = (wordler, words) => {
    const results = [];
    const testWords = Object.freeze(words || sample_100_1.SAMPLE_100_WORDS);
    const start = Date.now();
    testWords.forEach(word => {
        const wordle = new wordle_1.Wordle(word, {
            maxGuesses: wordle_1.MAX_GUESSES,
            allowedGuesses: official_1.OFFICIAL_WORDS.slice(0),
        });
        for (let i = 0; i < wordle_1.MAX_GUESSES; i++) {
            const nextGuess = wordler.getNextGuess(wordle);
            wordle.guess(nextGuess);
            if (wordle.isSolved) {
                break;
            }
        }
        const numGuesses = wordle.evaluations.length + (wordle.isSolved ? 0 : 1);
        results.push(numGuesses);
    });
    const end = Date.now();
    const distribution = results.reduce((map, numGuesses) => {
        map[numGuesses] = (map[numGuesses] || 0) + 1;
        return map;
    }, {});
    const average = results.reduce((sum, numGuesses) => sum + numGuesses, 0) / results.length;
    return {
        duration: end - start,
        average,
        distribution
    };
};
exports.testSolver = testSolver;
//# sourceMappingURL=helpers.js.map