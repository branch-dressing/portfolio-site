import { DRINK_COFFEE, EAT_PIZZA, READ_BOOK, HIGH_FIVE } from '../actions/actions';

const initialState = {
  coffees: 0,
  slices: 0,
  books: 0,
  fives: 0
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_PIZZA:
      return { ...state, slices: state.slices + 1 };
    case READ_BOOK:
      return { ...state, books: state.books + 1 };
    case HIGH_FIVE:
      return { ...state, fives: state.fives + 1 };
    default:
      return state;
  }
};
