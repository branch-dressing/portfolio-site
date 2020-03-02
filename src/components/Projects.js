import React, { useState } from 'react';
import twain from '../assets/twain.png';
//import offbeat from '../assets/offbeat.png';
import styles from './Project.css'; 

export const Projects = () => { 
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  const content = display ? 
    (<div className={styles.grid}>

      <div className={styles.project}>
        <h3>Markov Twain</h3>
        <h4>Full Stack App & Twitter Bot</h4>
        <div>
          <p>Markov Twain creates the best new quotes from the oldest deadest authors utilizing Markov Chains. Featuring quotes from Twain, Austen, Dostoevsky, Carroll, and Poe</p>
          <div className={styles.links}>
            <a rel="noopener noreferrer" target="_blank"  href="http://markovtwain.herokuapp.com/"><h4>Site</h4></a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/textables/MarkovTwain"><h4>Github</h4></a>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/markovtwainbot/"><h4>Twitter</h4></a>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <h3>Commit Kitty</h3>
        <h4>Full Stack App</h4>
        <div>
          <p>Commit Kitty allows a team lead to view all of their developer’s most recent commit messages and times, utilizing GitHub’s extensive API. This app was developed by request of Alchemy Code Lab for instructor use.</p>
          <div className={styles.links}>
            <a rel="noopener noreferrer" target="_blank"  href=""><h4>Site</h4></a>
            <a rel="noopener noreferrer" target="_blank" href=""><h4>Github</h4></a>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <h3>OffBeat</h3>
        <h4>Front End App</h4>
        <div>
          <p>Offbeat is a metronome and keyboard sampler. With an adjustable metronome, and plenty of keyboard sounds to choose from, (including Mr. Tom Jones singing clips of &quot;What&apos;s New Pussycat?&quot;). This app allows you record, save songs to your user profile, and play them back.</p>
          <div className={styles.links}>
            <a rel="noopener noreferrer" target="_blank"  href=""><h4>Site</h4></a>
            <a rel="noopener noreferrer" target="_blank" href=""><h4>Github</h4></a>
          </div>
        </div>
      </div>


    </div>) : (<></>);
  
  return (
    <section className={styles.projects}>
      <h2 onClick={handleClick}>Projects</h2>
      {content}
    </section>
  );
};

{/* <div className={styles.project}>
  <h3>OffBeat</h3>
  <h4>Front End Application</h4>
        
  <div>
          
    <div>
      <img src={offbeat} />
    </div>
          
    <p>Offbeat is a metronome and keyboard sampler with plenty of keyboard sounds to choose from, (including Mr. Tom Jones singing clips of &quot;What&apos;s New Pussycat?&quot;).</p>
          
    <div className={styles.links}>
      <a href="https://travelfiend.github.io/offbeat/" rel="noopener noreferrer" target="_blank"><h4>Site</h4></a>
      <a href="https://github.com/TravelFiend/offbeat" rel="noopener noreferrer" target="_blank"><h4>Github</h4></a>
    </div>
          
  </div>
        
</div> */}
