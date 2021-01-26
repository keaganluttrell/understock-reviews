import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';

const meta = {
  product_id: 99,
  avgRating: 2.7,
  totalReviews: 98,
  fiveStarReviews: 13,
  fourStarReviews: 10,
  threeStarReviews: 26,
  twoStarReviews: 31,
  oneStarReviews: 18,
  reviewsWithImages: 32,
  totalimages: 61,
};

// eslint-disable-next-line no-undef
const ID = PRODUCT_ID || 99;

ReactDOM.render(<Reviews productId={ID} meta={meta} />,
  document.getElementById('reviews-container'));
