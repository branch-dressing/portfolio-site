import { combineReducers } from 'redux';
import { statsReducer } from './statsReducer';
import { controlsReducer } from './controlsReducer';
import { componentReducer } from './componentReducer';

export default combineReducers({
  statsReducer,
  controlsReducer,
  componentReducer,
});
