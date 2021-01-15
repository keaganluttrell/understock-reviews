import React from 'react';
// import propTypes from 'prop-types';

const ReviewListItem = () => (
  <div className="reviews-list-item">
    <div className="RLI-top-line">
      <div className="RLI-rating">RATING</div>
      <span>|</span>
      <div className="RLI-verified">VERIFIED</div>
    </div>
    <div className="RLI-title">TITLE</div>
    <div className="RLI-body">BODY</div>

    <div className="RLI-bottom-line">
      <div className="RLI-by-line">BY LINE</div>
      <div className="RLI-helpful">Helpful</div>
    </div>
  </div>
);

// ReviewListItem.propTypes = {
// };

export default ReviewListItem;
