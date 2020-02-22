import React from 'react';
import githubImage from '../assets/github-pixel.png';
import styles from './Connect.css';

export const Connect = () => (
  <section className={styles.Connect}>
    <h3>Connect</h3>
    <a href="https://github.com/joelpdurham"><img src={githubImage} /></a>
    <a href="https://www.linkedin.com/in/joel-patrick-durham/"><img src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png" /></a>
    <a href="https://twitter.com/j_p_durham"><img src="https://lh3.googleusercontent.com/proxy/15-0nZDAlhQpCRR4_hZYGlIcvOaypd7-NHIX5rjBausFRoOJNJE6_0-FRoge5ZuLBzwUoPBB8bwfzZnSnwbMvmGtQhMfyrSV2nQumFnKHuiaA70" /></a>
    <a href="mailto:joeldur@gmail.com"><img src="https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/mail-512.png" /></a>
  </section>
);
