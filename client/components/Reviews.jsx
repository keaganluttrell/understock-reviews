import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import Menu from './Menu';
import Graph from './Graph';

const productId = 99;

const Reviews = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`/${productId}/reviews`)
      .then((response) => response.json())
      .then((reviews) => {
        setList(reviews);
      });
  }, []);

  return (
    <>
      <div id="reviews-title">Reviews</div>
      <div id="reviews-header">
        <Graph />
        <div id="reviews-gallery">GALLERY</div>
      </div>

      <div id="reviews-filter-title">
        Filter Reviews
      </div>

      <div id="reviews-mods">
        <Menu />
        <Menu />
      </div>
      <ReviewList list={list} />

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
};

export default Reviews;
