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
};

ReactDOM.render(<Reviews productId={99} meta={meta} />,
  document.getElementById('reviews-container'));
