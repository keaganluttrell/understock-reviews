import React from 'react';
import propTypes from 'prop-types';
import Star from './Star';

const Bar = ({
  avg,
  rating,
  totalReviews,
  filter,
}) => (
  <div className="RGB-bar-group">
    <div className="RGB-bar-bottom">
      <div
        className={`RGB-bar-top${rating === filter ? '-selected' : ''}`}
        style={{ width: `${avg * 100}%` }}
      />
    </div>
    <Star rating={rating} />
    <div className="RGB-count">{totalReviews}</div>
  </div>
);

Bar.propTypes = {
  avg: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  totalReviews: propTypes.number.isRequired,
  filter: propTypes.number.isRequired,
};

export default Bar;
