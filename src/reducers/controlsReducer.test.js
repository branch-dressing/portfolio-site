import { controlsReducer } from './controlsReducer';
import { disableControls, enableControls } from '../actions/controlActions';

describe('CONTROLS REDUCER TEST', () => {
  it('Can handle unrecognized action', () => {
    const action = { type: 'POOP' };
    const newState = controlsReducer(undefined, action);
    expect(newState).toEqual({ controls: true });
  });

  it('Can handle disabling controls', () => {
    const action = disableControls();
    const initialState = { controls: true };
    const newState = controlsReducer(initialState, action);
    expect(newState).toEqual({ controls: false });
  });

  it('Can handle enabling controls', () => {
    const action = enableControls();
    const initialState = { controls: false };
    const newState = controlsReducer(initialState, action);
    expect(newState).toEqual({ controls: true });
  });
});
