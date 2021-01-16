import React from 'react';
import ReviewList from './ReviewList';
import Bar from './Bar';
import Star from './Star';
import Menu from './Menu';

const Reviews = () => (
  <>
    <div id="reviews-title">Reviews</div>
    <div id="reviews-header">

      <div id="reviews-graph">
        <div id="reviews-graph-header">
          <div id="RGH-average">4.5</div>
          <div id="RGH-stars-count">
            <Star />
            <div className="RGH-count">2,101 Reviews</div>
          </div>
        </div>
        <div id="reviews-graph-body">
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </div>
      </div>

      <div id="reviews-gallery">GALLERY</div>
    </div>

    <div id="reviews-filter-title">
      Filter Reviews
    </div>

    <div id="reviews-mods">
      <Menu />
      <Menu />
    </div>
    <ReviewList list={[{}, {}, {}]} />
    <div id="reviews-show-more">
      <div id="RSM-text">Show More</div>
      <i className="fas fa-angle-down" />
    </div>
    <div id="reviews-list-compose">
      <div className="reviews-list-button" id="RLB-see-all">See all Reviews</div>
      <div className="reviews-list-button">Write a Review</div>
    </div>

  </>
);

export default Reviews;
