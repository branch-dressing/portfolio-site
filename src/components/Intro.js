import React from 'react';
import styles from './Intro.css';

export const Intro = () => (
  <div className={styles.intro}>
    <p>
    Hey
      <br/>
    I am a full stack developer, 
    </p>
    <p className={styles.center}>theatre artist,
      <br/>
    book nerd, 
      <br/>
      and casual gamer,
    </p>
    <p className={styles.right}>
    living in Portland, OR.
    </p>
  </div>
)