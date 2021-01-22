/* eslint-disable react/prop-types */
import React from 'react';
// import propTypes from 'prop-types';
import Star from './Star';

const Title = ({
  rating,
  totalReviews,
  display,
  setDisplay,
}) => (
  <div
    id="reviews-title"
    role="button"
    title="titleBar"
    tabIndex={0}
    style={{ borderBottom: display ? '0px' : '1px solid  rgba(0, 0, 0, 0.405)' }}
    onKeyDown={() => setDisplay(!display)}
    onClick={() => setDisplay(!display)}
  >
    <div id="reviews-title-text">Reviews</div>
    <div
      id="reviews-title-stats"
      style={{ display: display ? 'none' : 'flex' }}
    >
      <div id="RTS-rating">{rating}</div>
      <Star rating={rating} />
      <div id="RTS-count">{`${totalReviews} Reviews`}</div>
    </div>

    <i className={`fas fa-chevron-${display ? 'up' : 'down'}`} />
  </div>
);

// Title.propTypes = {
//   rating: propTypes.number.isRequired,
//   totalReviews: propTypes.number.isRequired,
//   display: propTypes.bool.isRequired,
//   setDisplay: propTypes.func.isRequired,
// };

export default Title;
