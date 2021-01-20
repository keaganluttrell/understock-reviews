/* eslint-disable no-underscore-dangle */
import React from 'react';
import propTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const ReviewList = ({ list, addHelpful, setModal }) => (
  <div id="reviews-list">
    {list.map((item) => (
      <ReviewListItem
        item={item}
        key={item._id}
        addHelpful={addHelpful}
        setModal={setModal}
      />
    ))}
    <div
      id="reviews-no-reviews"
      style={{ display: list.length ? 'none' : 'block' }}
    >
      No reviews yet, be the first!
    </div>
  </div>
);

ReviewList.propTypes = {
  list: propTypes.arrayOf(propTypes.object).isRequired,
  addHelpful: propTypes.func.isRequired,
  setModal: propTypes.func.isRequired,
};

export default ReviewList;
