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
        description={'Markov Twain creates the best new quotes from the oldest deadest authors utilizing Markov Chains. I was heavily involved in creating the various routes, testing functions, and web scrapping to seed our database with a text history.'}
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
        description={'Commit Kitty allows a team lead to view all of their developer’s most recent commit messages and times, utilizing GitHub’s extensive API. This app was developed by request of Alchemy Code Lab for instructor use. I worked on setting up the OAuth needed access the Github API, user authentication on the front and back end, and writing the functions that made API calls and returned clean, organized information.'}
        links={[
          { title: 'Site', location: 'https://commit-kitty-dev.netlify.com/auth' },
          { title: 'Github', location: 'https://github.com/Commit-Kitty' }
        ]}
      />

      <Project 
        title={'OffBeat'}
        type={'Front End App'}
        tech={'Vanilla JavaScript, QUnit, CSS, HTML'}
        description={'Offbeat is a metronome and keyboard sampler. With an adjustable metronome, and plenty of keyboard sounds to choose from, (including Mr. Tom Jones singing clips of "What\'s New Pussycat"). This app allows you record, save songs to your user profile, and play them back. I contributed to the playback functionality, recording, saving and playing back, all in tempo shifts.'}
        links={[
          { title: 'Site', location: 'https://travelfiend.github.io/offbeat/' },
          { title: 'Github', location: 'https://github.com/TravelFiend/offbeat' }
        ]}
      />

      <Project 
        title={'Mental Health First Aid Kit'}
        type={'Full Stack App'}
        tech={'JavaScript, React, Redux, Node.js, MongoDB, Mongoose, Express, Jest'}
        description={`Like a first aid kit, but for mental health. This app focuses on providing help to yourself, from your past self. It allows you to customize your experience and add only what you need. This is a solo project, with most of my focus going to user authentication, encrypting and decrypting private user information, and navigating a database with many related documents.
        Please note this app is still in the  development phase.`}
        links={[
          { title: 'Site', location: 'https://mental-health-dev.netlify.app/' },
          { title: 'Githhub FE', location: 'https://github.com/joelpdurham/mental-health-first-aid' },
          { title: 'Github BE', location: 'https://github.com/joelpdurham/mental-health-first-aid-FE' }
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
