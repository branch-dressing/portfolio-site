import { reducer } from './reducer';
import { drinkCoffee } from '../actions/actions.js';

describe('REDUCER TEST', () => {
  it('Handle coffee case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });
});
