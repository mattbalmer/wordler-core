import { Wordle } from './wordle';
export declare const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
export declare type BaseRecommendation<T extends object> = {
    word: string;
} & T;
export interface Wordler<R extends BaseRecommendation<{}>> {
    getNextGuess(wordle: Wordle): string;
    getTopRecommendations(wordle: Wordle): R[];
}
