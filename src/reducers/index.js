import { combineReducers } from 'redux';
import { statsReducer } from './statsReducer';
import { controlsReducer } from './controlsReducer';

export default combineReducers({
  statsReducer,
  controlsReducer
});
