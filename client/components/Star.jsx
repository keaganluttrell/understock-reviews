import React from 'react';
import propTypes from 'prop-types';

const Star = ({ rating }) => (
  <div className="RLI-stars">

    <div className="RLI-rating-bottom">
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </div>

    <div className="RLI-rating-top">
      <div
        className="RLI-top-width"
        style={{ width: `${rating * 20}%` }}
      >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </div>

    </div>
  </div>
);

Star.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Star;
