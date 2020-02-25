import React from 'react';
import Proptypes from 'prop-types';
import styles from './Book.css';

export const Book = ({ title, image, author, url, handleHover, handleMouseOut }) => (
  <li className={styles.book}>
    <a href={url} rel="noopener noreferrer" target="_blank"><img onMouseOver={() => handleHover(title, author)} onMouseOut={handleMouseOut} src={image} alt={title} /></a>
  </li>
);

Book.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  handleHover: Proptypes.func.isRequired,
  handleMouseOut: Proptypes.func.isRequired
};
