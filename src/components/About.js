import React from 'react';
import styles from './About.css';

export const About = () => (
  <section className={styles.about}>
    <h2>About</h2>
    <div>
      <p>
        <span className={styles.bold}>Hey,</span>
        <br/>
        I am a full stack developer, theatre artist, book nerd, and casual gamer, living in Portland, OR.
      </p>
      <p>
        <span className={styles.bold}>Likes</span> 
        <br/>
        Stories, Twin Peaks, the beach, kombucha, and placing first in Mario Kart.
      </p>
      <p>
        <span className={styles.bold}>Dislikes</span> 
        <br/>
        The Avengers movies, asparagus, gender roles, and the texture of chalk.
      </p>
    </div>
  </section>
);
