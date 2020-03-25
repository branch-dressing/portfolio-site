import React from 'react';
import { JoelGame } from './JoelGame';
import styles from './Header.css';
import { useDispatch } from 'react-redux';
import { resetStart } from '../actions/componentActions';

export const Header = () => {
  const dispatch = useDispatch();

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
