import React from 'react';
import twain from '../assets/twain.png';
import offbeat from '../assets/offbeat.png';
import styles from './Project.css';

export const Projects = () => (
  <section className={styles.projects}>
    <h2>Projects</h2>

    <div>
      <h3>Markov Twain</h3>
      <h4>Full Stack App & Twitter Bot</h4>
      <div className={styles.project}>
        <div>
          <img src={twain} />
        </div>
        <p>Markov Twain creates the best new quotes from the oldest deadest authors utilizing Markov Chains. The twitter bot posts a newly generated quote every three hours, but if you can&apos;t  wait that long, or want to hear from a specific author, the live site allows you to select who to hear from when you want to hear it.</p>
      </div>
    </div>

    <div>
      <h3>OffBeat</h3>
      <h4>Front End Application</h4>
      <div className={styles.project}>
        <div>
          <img src={offbeat} />
        </div>
        <p>Offbeat is a metronome and keyboard sampler. With an adjustable metronome, and plenty of keyboard sounds to choose from, (including Mr. Tom Jones singing clips of &quot;What&apos;s New Pussycat?&quot;). This app allows you record, save songs, and play them back.</p>
      </div>
    </div>
  </section>
);
