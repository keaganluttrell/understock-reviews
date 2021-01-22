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
        className="RGB-bar-top"
        style={{
          width: `${avg * 100}%`,
          backgroundColor: rating === filter
            ? 'rgb(244, 186, 49)' : 'rgba(0, 0, 0, 0.70)',
        }}
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
