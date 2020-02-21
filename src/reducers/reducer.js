import { DRINK_COFFEE, EAT_PIZZA } from '../actions/actions'

const initialState = {
  coffees: 0
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_PIZZA:
      return { ...state, slices: state.slices + 1 };
    default:
      return state;
  }
};
