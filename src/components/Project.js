import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.css';
import { Link } from './Link';

export const Project = ({ title, type, tech, description, links }) => {

  const renderLinks = links.map(link => <Link key={link.location}
    title={link.title} 
    location={link.location} />);

  return (
    <div className={styles.project}>
      <p>..................................</p>
      <h3>{title}</h3>
      <h4>{type}</h4>
      <p className={styles.tech}>{tech}</p>
      <p className={styles.bottomDots}>..................................</p>
      <div>
        <p>{description}</p>
        <div className={styles.links}>
          {renderLinks}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
};
