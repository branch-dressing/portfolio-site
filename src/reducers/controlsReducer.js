import { DISABLE_CONTROLS, ENABLE_CONTROLS } from '../actions/controlActions';

const initialState = {
  controls: true
};

export const controlsReducer = (state = initialState, action) => {
  switch(action.type) {
    case DISABLE_CONTROLS:
      return { ...state, controls: false };
    case ENABLE_CONTROLS:
      return { ...state, controls: true };
    default:
      return state;
  }
};