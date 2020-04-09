import React from 'react';
import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';
import { Connect } from './Connect';
import { Footer } from './Footer';
import { Books } from './Books';
import styles from './App.css';
import { Tech } from './Tech';
import { Intro } from './Intro';


export default function App() {
  return (
    <section className={styles.app}>
      <Header />
      <Intro />
      <main>
        <About />
        <Tech />
        <Projects />
      </main>
      {/* <Books /> */}
      <Connect />
      <Footer />
    </section>
  );
}

