import React from 'react';
import styles from './Project.css'; 
import { useDotAnimation } from '../hooks/useDotAnimation';
import { Project } from './Project';

export const Projects = () => { 
  const { display, animate, dots, handleClick } = useDotAnimation(12);

  const arrow = display && animate ? '<' : (<><span className={styles.dots}>{dots}</span><span className={styles.mobileArrow}>&gt;</span></>); 

  const content = display ? 
    (<div className={styles.grid}>
      <Project 
        title={'Markov Twain'} 
        type={'Full Stack App & Twitter Bot'} 
        tech={'JavaScript, Node.js, MongoDB, Mongoose, Express, Jest, Twit'} 
        description={'Markov Twain creates the best new quotes from the oldest deadest authors utilizing Markov Chains. Featuring quotes from Twain, Austen, Dostoevsky, Carroll, and Poe.'}
        links={[
          { title: 'Site', location: 'http://markovtwain.herokuapp.com/' },
          { title: 'Github', location: 'https://github.com/textables/MarkovTwain' },
          { title: 'Twitter', location: 'https://twitter.com/markovtwainbot/' }
        ]}
      />

      <Project 
        title={'Commit Kitty'}
        type={'Full Stack App'}
        tech={'JavaScript, React, Redux, Node.js, MongoDB, Mongoose, Express, Jest'}
        description={'Commit Kitty allows a team lead to view all of their developer’s most recent commit messages and times, utilizing GitHub’s extensive API. This app was developed by request of Alchemy Code Lab for instructor use.'}
        links={[
          { title: 'Site', location: 'https://commit-kitty-dev.netlify.com/auth' },
          { title: 'Github', location: 'https://github.com/Commit-Kitty' }
        ]}
      />

      <Project 
        title={'OffBeat'}
        type={'Front End App'}
        tech={'Vanilla JavaScript, QUnit, CSS, HTML'}
        description={'Offbeat is a metronome and keyboard sampler. With an adjustable metronome, and plenty of keyboard sounds to choose from, (including Mr. Tom Jones singing clips of &quot;What&apos;s New Pussycat?&quot;). This app allows you record, save songs to your user profile, and play them back.'}
        links={[
          { title: 'Site', location: 'https://travelfiend.github.io/offbeat/' },
          { title: 'Github', location: 'https://github.com/TravelFiend/offbeat' }
        ]}
      />

      <Project 
        title={'Columns and Rogues'}
        type={'Full Stack App'}
        tech={'JavaScript, Node.js, Postgres, Express, QUnit'}
        description={'A rogue-like game where the player is placed on a blank map and must find the exit by exploring one tile at a time. Each new tile uncovers either an enemy, items, or gold. With each level completed, the map gets bigger, and the enemies stronger.'}
        links={[
          { title: 'Site', location: 'https://columns-and-rogues.herokuapp.com/' },
          { title: 'Github', location: 'https://github.com/columns-and-rogues/columns-and-rogues' }
        ]}
      />
    </div>) : (<></>);
  
  return (
    <section className={styles.projects}>
      <h2 onClick={handleClick}>Projects <span className={styles.arrow}>{arrow}</span></h2>
      {content}
    </section>
  );
};
