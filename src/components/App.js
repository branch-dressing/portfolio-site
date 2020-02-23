import React from 'react';
import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';
import { Connect } from './Connect';
// import { Reading } from './Reading';
import styles from './App.css';


export default function App() {
  return (
    <section className={styles.app}>
      <Header />
      <About />
      <Projects />
      {/* 
      <Reading /> */}
      <Connect />
    </section>
  );
}

