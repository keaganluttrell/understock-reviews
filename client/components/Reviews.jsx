import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import Menu from './Menu';
import Graph from './Graph';

const productId = 99;

const Reviews = () => {
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(5);

  const getReviews = (num) => {
    fetch(`/${productId}/reviews?limit=${num}`)
      .then((response) => response.json())
      .then((reviews) => {
        setList(reviews);
      });
  };

  useEffect(() => {
    getReviews(limit);
  }, [limit]);

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
        <button
          type="button"
          id="RSM-text"
          onClick={() => setLimit(limit === 5 ? 10 : 5)}
        >
          Show More
        </button>
        <i className={limit === 5 ? 'fas fa-angle-down' : 'fas fa-angle-up'} />
      </div>

      <div id="reviews-list-compose">
        <div className="reviews-list-button" id="RLB-see-all">
          See all Reviews
        </div>

        <div className="reviews-list-button">
          Write a Review
        </div>
      </div>

    </>
  );
};

export default Reviews;
