import React from 'react';
import styles from './Intro.css';

export const Intro = () => (
  <div className={styles.intro}>
    <p>
    Hey
      <br/>
    I am a full stack developer, 
    </p>
    <p className={styles.center}><a href="https://www.wweek.com/arts/theater/2017/10/24/nesting-vacancy-is-part-haunted-house-part-twilight-zone-episode-and-shows-us-that-plays-can-be-really-really-scary/" rel="noopener noreferrer" target="_blank"><span className={styles.theatre}>theatre artist</span></a>,
      <br/>
      <a rel="noopener noreferrer" target="_blank" href="https://www.goodreads.com/user/show/60828906-joel"><span className={styles.books}>book nerd</span></a>,
      <br/>
      and <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/eggcornco/?eid=ARBnTAa7pv4AEfnnTvDqhW3pGHB-hxB8nH0UeQhBkTnkc3O19IESn6wKfxvTDc2ovXIIQUp52cNgKgTt"><span className={styles.gamer}>casual gamer</span></a>,
    </p>
    <p className={styles.right}>
    living in Portland, OR.
    </p>
  </div>
)