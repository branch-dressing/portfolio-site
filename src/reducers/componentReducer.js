import { RESET_START, RESET_DONE, CHANGE_OPEN } from '../actions/componentActions';

const initialState = {
  reset: false,
  totalOpen: 0
};

export const componentReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_START:
      return { ...state, reset: true };
    case RESET_DONE:
      return { ...state, reset: false };
    case CHANGE_OPEN:
      return { ...state, totalOpen: state.totalOpen + action.payload };
    default:
      return state;
  }
};
