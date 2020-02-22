import { toGetControls, toGetStats } from './selectors';

describe('SELECTORS TEST', () => {
  it('can get controls from state', () => {
    const state = {
      controlsReducer: {
        controls: true
      }
    };
    expect(toGetControls(state)).toEqual(true);
  });

  it('can get stats from state', () => {
    const state = {
      statsReducer: {
        coffees: 0,
        slices: 0,
        books: 0,
        fives: 0
      }
    };
    expect(toGetStats(state)).toEqual({
      coffees: 0,
      slices: 0,
      books: 0,
      fives: 0 });
  });
});
