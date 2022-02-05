export enum PLACEMENT {
  ABSENT = 'ABSENT',
  PRESENT = 'PRESENT',
  CORRECT = 'CORRECT',
}

export type GuessResult = [
  PLACEMENT,
  PLACEMENT,
  PLACEMENT,
  PLACEMENT,
  PLACEMENT,
];

export type Evaluation = {
  guess: string,
  results: GuessResult,
}

export const MAX_GUESSES = 6;
export const WORD_LENGTH = 5;

export class Wordle {
  words: string[];

  maxGuesses: number;

  answer;

  evaluations: Evaluation[] = [];

  get isSolved() {
    const last: Evaluation = this.evaluations[this.evaluations.length - 1];
    return last?.results.every(e => e === PLACEMENT.CORRECT);
  }

  constructor(answer, config: { maxGuesses?: number, words: string[] }) {
    if (answer.length !== WORD_LENGTH) {
      throw `answer must be ${WORD_LENGTH} characters long`
    }
    this.answer = answer.toLowerCase();

    this.maxGuesses = config.maxGuesses || MAX_GUESSES;
    this.words = config.words;
  }

  guess(guess: string): GuessResult {
    const guess_: string = guess.toLowerCase();

    if (guess_.length !== WORD_LENGTH) {
      throw `guess must be ${WORD_LENGTH} characters long`
    }

    if (this.evaluations.length >= MAX_GUESSES) {
      throw `Cannot guess - already guessed ${MAX_GUESSES} times`
    }

    const marked = {};

    const result: GuessResult = guess_.split('').map((letter, i) => {
      if (letter === this.answer[i]) {
        marked[letter] = true;
        return PLACEMENT.CORRECT;
      } else if (this.answer.indexOf(letter) > -1 && !marked[letter]) {
        marked[letter] = true;
        return PLACEMENT.PRESENT;
      } else {
        return PLACEMENT.ABSENT;
      }
    }) as GuessResult;

    this.evaluations.push({
      guess: guess_,
      results: result,
    });

    return result;
  }
}