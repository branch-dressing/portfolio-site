import React, { useState } from 'react';
import styles from './Intro.css';

export const Intro = () => {
  const [display, setDisplay] = useState(false);

  const games = display && (
    <p className={styles.playing}>
      Currently playing:
      <br/>- Celeste
      <br/>- Detention
      <br/>- Mario Kart
    </p>);
  
  return (
    <div className={styles.intro}>
      <p>
    Hey!
        <br/>
    I am a Software Engineer, 
      </p>
      <p className={styles.center}><a href="https://www.orartswatch.org/theater-to-feed-your-tv-jones/" rel="noopener noreferrer" target="_blank"><span className={styles.theatre}>theatre artist</span></a>,
        <br/>
        <a rel="noopener noreferrer" target="_blank" href="https://www.goodreads.com/user/show/60828906-joel"><span className={styles.books}>book nerd</span></a>,
        <br/>
      and <span className={styles.gamer} 
          onClick={() => setDisplay(!display)}
        >casual gamer</span>,
      </p>
      {games}
      <p className={styles.right}>
    living in Portland, OR.
      </p>
    </div>
  );
};
