import { disableControls, enableControls } from './controlActions';

describe('CONTROL ACTIONS TEST', () => {
  it('creates a disable controls action', () => {
    expect(disableControls().type).toEqual('DISABLE_CONTROLS');
  });
  it('creates an enable controls action', () => {
    expect(enableControls().type).toEqual('ENABLE_CONTROLS');
  });

});
