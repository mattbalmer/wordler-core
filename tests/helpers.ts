import { MAX_GUESSES, Wordle } from '../wordle';
import { BaseRecommendation, Wordler } from '../index';
import { OFFICIAL_WORDS } from '../data/official';

export const testSolver = <T extends BaseRecommendation<{}> = BaseRecommendation<{}>>
(wordler: Wordler<T>, words: string[]): {
  duration: number,
  distribution: Record<number, number>,
  average: number
} => {
  const results = [];

  const start = Date.now();
  words.forEach(word => {
    const wordle = new Wordle(word, {
      maxGuesses: MAX_GUESSES,
      allowedGuesses: OFFICIAL_WORDS.slice(0),
    });

    for(let i = 0; i < MAX_GUESSES; i++) {
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
  }
}
