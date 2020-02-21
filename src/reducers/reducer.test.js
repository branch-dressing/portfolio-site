import { reducer } from './reducer';
import { drinkCoffee, eatPizza, readBook, highFive } from '../actions/actions.js';

describe('REDUCER TEST', () => {
  it('Can handle unrecognized action', () => {
    const action = { type: 'POOP' };
    const newState = reducer(undefined, action);
    expect(newState).toEqual({ coffees: 0, slices: 0, books: 0, fives: 0 });
  });

  it('Handle coffee case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });

  it('Handles eat pizza case', () => {
    const action = eatPizza();
    const initialState = { slices: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ slices: 1 });
  });

  it('Handles read book case', () => {
    const action = readBook();
    const initialState = { books: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ books: 1 });
  });

  it('Handles High Five case', () => {
    const action = highFive();
    const initialState = { fives: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ fives: 1 });
  });
});
