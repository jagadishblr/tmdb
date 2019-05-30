import React from 'react';
import PropTypes from 'prop-types';

import './Tag.css';

const Tag = ({ text }) => (<div className="tag">{text}</div>);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Tag;
