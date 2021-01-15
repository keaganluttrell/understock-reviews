import React from 'react';
import ReviewList from './ReviewList';

const Reviews = () => (
  <>
    <div id="reviews-title">Reviews</div>
    <div id="reviews-header">
      <div id="reviews-graph">GRAPH</div>
      <div id="reviews-gallery">GALLERY</div>
    </div>

    <div id="reviews-filter-title">
      Filter Reviews
    </div>

    <div id="reviews-mods">
      <div id="mod-filter">
        <fieldset>
          <legend>Rating</legend>
        </fieldset>
      </div>
      <div id="mod-sort">
        <fieldset>
          <legend>Sort</legend>
        </fieldset>
      </div>
    </div>
    <ReviewList list={[0, 0, 0]} />
  </>
);

export default Reviews;
