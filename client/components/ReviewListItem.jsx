import React from 'react';
import Star from './Star';
// import propTypes from 'prop-types';

const ReviewListItem = () => (
  <div className="reviews-list-item">
    <div className="RLI-top-line">
      <Star />
      <div className="RLI-verified">Verified Purchase</div>
    </div>
    <div className="RLI-title">Sample Title</div>
    <div className="RLI-body">This is a sample review. It is used for demonstration purposes only. Please replace me with something useful.</div>

    <div className="RLI-bottom-line">
      <div className="RLI-by-line">JJ McQuade December 1, 1978</div>
      <div className="RLI-helpful">
        Was this review helpful?
        <div className="RLI-helpful-thumb">
          <i className="far fa-thumbs-up" />
          5
        </div>
      </div>
    </div>
  </div>
);

// ReviewListItem.propTypes = {
// };

export default ReviewListItem;
