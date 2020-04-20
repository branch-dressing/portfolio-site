import React from 'react';
import styles from './Tech.css';
import { useDotAnimation } from '../hooks/useDotAnimation';

export const Tech = () => {
  const { display, animate, dots, handleClick } = useDotAnimation(19);

  const arrow = display && animate ? '<' : (<><span className={styles.dots}>{dots}</span><span className={styles.mobileArrow}>&gt;</span></>); 

  const content = display ? (
    <div>
      <div className={styles.cats}>
        <h4>Languages</h4>
        <div className={styles.items}>
          <p>JavaScript</p>
          <p>HTML 5</p>
          <p>CSS 3</p>
        </div>
      </div>
      <div className={styles.cats}>
        <h4>Front End</h4>
        <div className={styles.items}>
          <p>React</p>
          <p>Redux</p>
        </div>
      </div>
      <div className={styles.cats}>
        <h4>Back End</h4>
        <div className={styles.items}>
          <p>Node.js</p>
          <p>Express</p>
        </div>
      </div>
      <div className={styles.cats}>
        <h4>Databases</h4>
        <div className={styles.items}>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>PostgreSQL</p>
        </div>
      </div>
      <div className={styles.cats}>
        <h4>Testing</h4>
        <div className={styles.items}>
          <p>Jest</p>
          <p>Qunit</p>
          <p>Travis CI</p>
        </div>
      </div>
      <div className={styles.cats}>
        <h4>Tools</h4>
        <div className={styles.items}>
          <p>Github</p>
          <p>VScode</p>
          <p>Heroku</p>
          <p>Netlify</p>
          <p>Slack</p>
          <p>Trello</p>
        </div>
      </div>
    </div>
  ) : (<></>);

  return (
    <section className={styles.tech}>
      <h2 onClick={handleClick}>Tech <span className={styles.arrow}>{arrow}</span></h2>
      {content}
    </section>
  );
};
