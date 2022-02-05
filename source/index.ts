import { Wordle } from './wordle/index';

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export type BaseRecommendation<T extends object> = {
  word: string,
} & T

export interface Wordler<R extends BaseRecommendation<{}>> {
  getNextGuess(wordle: Wordle): string;
  getTopRecommendations(wordle: Wordle): R[];
}