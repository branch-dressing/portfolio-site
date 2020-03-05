import React, { useState, useEffect } from 'react';
import styles from './Tech.css';

export const Tech = () => {
  const [display, setDisplay] = useState(false);
  const [dots, setDots] = useState('................>');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if(animate) {
      if(dots.length > 1) {
        setTimeout(() => {
          setDots(dots.slice(0, dots.length - 2) + '<');
        }, 10);
      } else {
        setDisplay(true);
      }
    } else {
      if(dots.length < 16) {
        setTimeout(() => {
          setDots('.' + dots);
        }, 5);
      } else {
        setDisplay(false);
      }
    }
  }, [dots, animate]);
  
  const handleClick = () => {
    if(!display) {
      setAnimate(true);
    } else {
      setDots('>');
      setAnimate(false);
    }
  };

  const arrow = display && animate ? '<' : (<span className={styles.dots}>{dots}</span>); 

  const content = display ? (
    <div>
      <div className={styles.cats}>
        <div className={styles.items}>
          <p>HTML 5</p>
          <p>CSS 3</p>
          <p>Javascript</p>
        </div>
      </div>
      <div className={styles.cats}>
        <div className={styles.items}>
          <p>React</p>
          <p>Redux</p>
        </div>
      </div>
      <div className={styles.cats}>
        <div className={styles.items}>
          <p>Node.js</p>
          <p>Express</p>
        </div>
      </div>
      <div className={styles.cats}>
        <div className={styles.items}>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>PostgreSQL</p>
        </div>
      </div>
      <div className={styles.cats}>
        <div className={styles.items}>
          <p>Jest</p>
          <p>Qunit</p>
          <p>Travis CI</p>
        </div>
      </div>
      <div className={styles.cats}>
        <div className={styles.items}>
          <p>Github</p>
          <p>VScode</p>
          <p>Heroku</p>
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
