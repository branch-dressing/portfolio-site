import React from 'react';
import twain from '../assets/twain.png';
import offbeat from '../assets/offbeat.png';

export const Projects = () => (
  <section>
    <h3>Projects</h3>

    <div>
      <h4>Markov Twain</h4>
      <div>
        <img style={{ width: '200px' }}src={twain} />
        <div>
          <h5>Full Stack App & Twitter Bot</h5>
          <p>Markov Twain creates the best new quotes from the oldest deadest authors utilizing Markov Chains. The twitter bot posts a newly generated quote every three hours, but if you can&apos;t  wait that long, or want to hear from a specific author, the live site allows you to select who to hear from when you want to hear it.</p>
        </div>
      </div>
    </div>

    <div>
      <h4>OffBeat</h4>
      <div>
        <img style={{ width: '200px' }}src={offbeat} />
        <div>
          <h5>Full Stack App & Twitter Bot</h5>
          <p>Offbeat is a metronome and keyboard sampler. With an adjustable metronome, and plenty of keyboard sounds to choose from, (including Mr. Tom Jones singing clips of &quot;What&apos;s New Pussycat?&quot;). This app allows you record, save songs, and play them back.</p>
        </div>
      </div>
    </div>


  </section>
)