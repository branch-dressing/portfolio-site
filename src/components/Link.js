import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({ title, location }) => (
  <a rel="noopener noreferrer" target="_blank"  href={location}><h4>{title}</h4></a>
);

Link.propTypes = {
  title: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired
};
