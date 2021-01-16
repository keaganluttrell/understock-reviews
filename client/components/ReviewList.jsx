/* eslint-disable no-underscore-dangle */
import React from 'react';
import propTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const ReviewList = (props) => {
  const { list } = props;
  return (
    <div id="reviews-list">
      {list.map((item) => (
        <ReviewListItem
          item={item}
          key={item._id}
        />
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  list: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ReviewList;
