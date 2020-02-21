import { drinkCoffee } from './actions';

describe('ACTIONS TEST', () => {
  it('create a drink coffee action', () => {
    expect(drinkCoffee().type).toEqual('DRINK_COFFEE');
  });
});
