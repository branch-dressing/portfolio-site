import React, { useState } from 'react';
import styles from './About.css';

export const About = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  const content = display ? 
    (<div>
    </div>) : (<></>);

  
  return (
    <section className={styles.about}>
      <h2 onClick={handleClick}>About</h2>
      {content}
    </section>
  );
};

