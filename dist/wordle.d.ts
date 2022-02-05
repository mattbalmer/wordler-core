export declare enum PLACEMENT {
    ABSENT = "ABSENT",
    PRESENT = "PRESENT",
    CORRECT = "CORRECT"
}
export declare type GuessResult = [
    PLACEMENT,
    PLACEMENT,
    PLACEMENT,
    PLACEMENT,
    PLACEMENT
];
export declare type Evaluation = {
    guess: string;
    results: GuessResult;
};
export declare const MAX_GUESSES = 6;
export declare const WORD_LENGTH = 5;
export declare class Wordle {
    allowedGuesses: readonly string[];
    maxGuesses: number;
    answer: any;
    evaluations: Evaluation[];
    get isSolved(): boolean;
    constructor(answer: any, config?: {
        maxGuesses?: number;
        allowedGuesses?: string[] | readonly string[];
    });
    guess(guess: string): GuessResult;
}
