import { describe, it } from 'mocha';
import { expect } from 'chai'
import { PLACEMENT, Wordle } from '../source/wordle';

describe('Wordle', () => {
  it('should init word', () => {
    const wordle = new Wordle('bonks', {
      words: [],
    });
    expect(wordle.answer).to.deep.equal('bonks');
  });

  it('guess() should return result', () => {
    const wordle = new Wordle('bonks', {
      words: [],
    });

    const result = wordle.guess('BREAK');
    expect(result).to.deep.equal([
      PLACEMENT.CORRECT,
      PLACEMENT.ABSENT,
      PLACEMENT.ABSENT,
      PLACEMENT.ABSENT,
      PLACEMENT.PRESENT,
    ]);
  });

  it('guess() should store the evaluation', () => {
    const wordle = new Wordle('bonks', {
      words: [],
    });

    wordle.guess('BREAK');

    expect(wordle.evaluations).to.deep.equal([{
      guess: 'break',
      results: [
        PLACEMENT.CORRECT,
        PLACEMENT.ABSENT,
        PLACEMENT.ABSENT,
        PLACEMENT.ABSENT,
        PLACEMENT.PRESENT,
      ],
    }]);
  });
});