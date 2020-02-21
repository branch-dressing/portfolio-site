import { drinkCoffee, eatPizza, readBook, highFive } from './actions';

describe('ACTIONS TEST', () => {
  it('creates a drink coffee action', () => {
    expect(drinkCoffee().type).toEqual('DRINK_COFFEE');
  });
  it('creates a eat pizza action', () => {
    expect(eatPizza().type).toEqual('EAT_PIZZA');
  });
  it('creates a read book action', () => {
    expect(readBook().type).toEqual('READ_BOOK');
  });
  it('creates a high five action', () => {
    expect(highFive().type).toEqual('HIGH_FIVE');
  });
});
