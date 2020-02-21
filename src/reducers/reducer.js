import { DRINK_COFFEE } from '../actions/actions'

const initialState = {
  coffees: 0
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    default:
      return state;
  }
};
