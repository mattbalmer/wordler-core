"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wordle = exports.WORD_LENGTH = exports.MAX_GUESSES = exports.PLACEMENT = void 0;
const official_1 = require("./data/official");
var PLACEMENT;
(function (PLACEMENT) {
    PLACEMENT["ABSENT"] = "ABSENT";
    PLACEMENT["PRESENT"] = "PRESENT";
    PLACEMENT["CORRECT"] = "CORRECT";
})(PLACEMENT = exports.PLACEMENT || (exports.PLACEMENT = {}));
exports.MAX_GUESSES = 6;
exports.WORD_LENGTH = 5;
class Wordle {
    constructor(answer, config = {}) {
        this.evaluations = [];
        if (answer.length !== exports.WORD_LENGTH) {
            throw `answer must be ${exports.WORD_LENGTH} characters long`;
        }
        this.answer = answer.toLowerCase();
        this.maxGuesses = config.maxGuesses || exports.MAX_GUESSES;
        this.allowedGuesses = Object.freeze(config.allowedGuesses || official_1.OFFICIAL_WORDS.slice(0));
    }
    get isSolved() {
        const last = this.evaluations[this.evaluations.length - 1];
        return last === null || last === void 0 ? void 0 : last.results.every(e => e === PLACEMENT.CORRECT);
    }
    guess(guess) {
        const guess_ = guess.toLowerCase();
        if (guess_.length !== exports.WORD_LENGTH) {
            throw `guess must be ${exports.WORD_LENGTH} characters long`;
        }
        if (this.evaluations.length >= exports.MAX_GUESSES) {
            throw `Cannot guess - already guessed ${exports.MAX_GUESSES} times`;
        }
        const marked = {};
        const result = guess_.split('').map((letter, i) => {
            if (letter === this.answer[i]) {
                marked[letter] = true;
                return PLACEMENT.CORRECT;
            }
            else if (this.answer.indexOf(letter) > -1 && !marked[letter]) {
                marked[letter] = true;
                return PLACEMENT.PRESENT;
            }
            else {
                return PLACEMENT.ABSENT;
            }
        });
        this.evaluations.push({
            guess: guess_,
            results: result,
        });
        return result;
    }
}
exports.Wordle = Wordle;
//# sourceMappingURL=wordle.js.map