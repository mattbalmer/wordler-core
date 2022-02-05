"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const wordle_1 = require("../wordle");
(0, mocha_1.describe)('Wordle', () => {
    (0, mocha_1.it)('should init word', () => {
        const wordle = new wordle_1.Wordle('bonks', {
            allowedGuesses: [],
        });
        (0, chai_1.expect)(wordle.answer).to.deep.equal('bonks');
    });
    (0, mocha_1.it)('guess() should return result', () => {
        const wordle = new wordle_1.Wordle('bonks', {
            allowedGuesses: [],
        });
        const result = wordle.guess('BREAK');
        (0, chai_1.expect)(result).to.deep.equal([
            wordle_1.PLACEMENT.CORRECT,
            wordle_1.PLACEMENT.ABSENT,
            wordle_1.PLACEMENT.ABSENT,
            wordle_1.PLACEMENT.ABSENT,
            wordle_1.PLACEMENT.PRESENT,
        ]);
    });
    (0, mocha_1.it)('guess() should store the evaluation', () => {
        const wordle = new wordle_1.Wordle('bonks', {
            allowedGuesses: [],
        });
        wordle.guess('BREAK');
        (0, chai_1.expect)(wordle.evaluations).to.deep.equal([{
                guess: 'break',
                results: [
                    wordle_1.PLACEMENT.CORRECT,
                    wordle_1.PLACEMENT.ABSENT,
                    wordle_1.PLACEMENT.ABSENT,
                    wordle_1.PLACEMENT.ABSENT,
                    wordle_1.PLACEMENT.PRESENT,
                ],
            }]);
    });
});
//# sourceMappingURL=wordle.test.js.map