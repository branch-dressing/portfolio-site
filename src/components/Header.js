import React from 'react';
import { JoelGame } from './JoelGame';
import styles from './Header.css';

export const Header = () => (
  <header className={styles.header}>
    <div>
      <h1>Joel</h1>
      <h1 className={styles.patrick}>Patrick</h1>
      <h1>Durham</h1>
    </div>
    <JoelGame />
  </header>
);