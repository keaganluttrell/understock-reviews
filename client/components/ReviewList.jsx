import React from 'react';
import propTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const ReviewList = (props) => {
  const { list } = props;
  return (
    <div id="reviews-list">
      {list.map((item, i) => {
        const key = `${i}a`;
        return (
          <ReviewListItem
            item={item}
            key={key}
          />
        );
      })}
    </div>
  );
};

ReviewList.propTypes = {
  list: propTypes.arrayOf(propTypes.number).isRequired,
};

export default ReviewList;
