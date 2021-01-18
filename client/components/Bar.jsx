import React from 'react';
import propTypes from 'prop-types';
import Star from './Star';

const Bar = ({ avg, rating }) => (
  <div className="RGB-bar-group">
    <div className="RGB-bar-bottom">
      <div className="RGB-bar-top" style={{ width: `${avg}%` }} />
    </div>
    <Star rating={rating} />
    <div className="RGB-count">{Math.floor((2101 * avg) / 100)}</div>
  </div>
);

Bar.propTypes = {
  avg: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};

export default Bar;
