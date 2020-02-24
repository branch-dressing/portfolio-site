import React from 'react';
import twain from '../assets/twain.png';
import offbeat from '../assets/offbeat.png';
import styles from './Project.css'; 

export const Projects = () => (
  <section className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.project}>
      <h3>Markov Twain</h3>
      <h4>Full Stack App & Twitter Bot</h4>
      <div>
        <div>
          <img src={twain} />
        </div>
        <p>Markov Twain creates the best new quotes from the oldest deadest authors utilizing Markov Chains. Featuring quotes from Twain, Austen, Dostoevsky, Carroll, and Poe</p>
        <h4>Site</h4>
        <h4>Github</h4>
        <h4>Twitter</h4>
      </div>
    </div>

    <div className={styles.project}>
      <h3>OffBeat</h3>
      <h4>Front End Application</h4>
      <div>
        <div>
          <img src={offbeat} />
        </div>
        <p>Offbeat is a metronome and keyboard sampler with plenty of keyboard sounds to choose from, (including Mr. Tom Jones singing clips of &quot;What&apos;s New Pussycat?&quot;).</p>
        <h4>Site</h4>
        <h4>Github</h4>
      </div>
    </div>
  </section>
);
