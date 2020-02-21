import { drinkCoffee, eatPizza } from './actions';

describe('ACTIONS TEST', () => {
  it('creates a drink coffee action', () => {
    expect(drinkCoffee().type).toEqual('DRINK_COFFEE');
  });
  it('creates a eat pizza action', () => {
    expect(eatPizza().type).toEqual('EAT_PIZZA');
  });
});
