import { RESET_START, RESET_DONE } from '../actions/componentActions';

const initialState = {
  reset: false
};

export const componentReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_START:
      return { ...state, reset: true };
    case RESET_DONE:
      return { ...state, reset: false };
    default:
      return state;
  }
};
