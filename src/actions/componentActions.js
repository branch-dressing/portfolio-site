export const RESET_START = 'RESET_START';
export const RESET_DONE = 'RESET_DONE';
export const CHANGE_OPEN = 'CHANGE_OPEN';

export const resetStart = () => ({ type: RESET_START });
export const resetDone = () => ({ type: RESET_DONE });
export const changeOpen = (number) => ({ type: CHANGE_OPEN, payload: number });
