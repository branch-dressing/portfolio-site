import { reducer } from './reducer';
import { drinkCoffee } from '../actions/actions.js';

describe('REDUCER TEST', () => {
  it('Can handle unrecognized action', () => {
    const action = { type: 'POOP' };
    const newState = reducer(undefined, action);
    expect(newState).toEqual({ coffees: 0 });
  });

  it('Handle coffee case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });
});
