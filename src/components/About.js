import React from 'react';
import styles from './About.css';
import { useDotAnimation } from '../hooks/useDotAnimation';

export const About = () => {
  const { display, animate, dots, handleClick } = useDotAnimation(21);

  const arrow = display && animate ? '<' : (<><span className={styles.dots}>{dots}</span><span className={styles.mobileArrow}>&gt;</span></>); 

  const content = display ? 
    (<div>
      <p>
      I&apos;m a Software Engineer, currently working for Kickstand in Portland, Oregon. I have 12 years professional experience working in highly collaborative environments, leading diverse teams, and building projects from the ground up.
      </p>
      <br/>
      <p>
        When I&apos;m not in front of the computer, I&apos;m most likely <del style={{ fontSize: 'small' }}>at Powell&apos;s books, the beach, or a coffee shop</del> <em style={{ textDecoration: 'underline' }}>STAYING HOME!</em> No matter where I am it&apos;s almost guaranteed I&apos;ll be reading a book.
      </p>
      < br/>
      <p>I have a soft spot in my heart for redux, I enjoy the freedom I feel using MongoDB, and I google CSS solutions, like, a lot.
      </p>
    </div>) : (<></>);

  
  return (
    <section className={styles.about}>
      <h2 onClick={handleClick}>About <span className={styles.arrow}>{arrow}</span></h2>
      {content}
    </section>
  );
};

