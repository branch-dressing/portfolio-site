import React from 'react';
import styles from './Connect.css';

export const Connect = () => (
  <section className={styles.connect}>
    <h2 className={styles.title}>Connect</h2>
    <div className={styles.icons}>
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/joel-patrick-durham/"><img src="https://www.pngkey.com/png/full/553-5538587_linkedin-logo-white-circle-transparent-png-linkedin-transparent.png" /></a>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/joelpdurham"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" /></a>
      <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/j_p_durham"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitter-circle-512.png" /></a>
      <a href="mailto:joeldur@gmail.com"><img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" /></a>
    </div>
  </section>
);
