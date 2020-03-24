import React from 'react';
import { JoelGame } from './JoelGame';
import styles from './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { toGetResetStatus } from '../selectors/selectors';
import { resetStart } from '../actions/componentActions';

export const Header = () => {
  const reset = useSelector(toGetResetStatus);
  const dispatch = useDispatch();
  console.log(reset);


  return (
    <header className={styles.header} onClick={() => dispatch(resetStart())}>
      <div>
        <h1>Joel</h1>
        <h1 className={styles.patrick}>Patrick</h1>
        <h1>Durham</h1>
        <h4 className={styles.pronoun}>(he/him)</h4>
      </div>
      <JoelGame />
    </header>
  );
};
