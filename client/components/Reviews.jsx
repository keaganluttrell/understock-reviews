import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import Menu from './Menu';
import Graph from './Graph';
import Star from './Star';

const productId = 99;
const filterOptions = [
  { head: <div id="RFF-all">All</div>, body: 0 },
  { head: <Star rating={5} />, body: 5 },
  { head: <Star rating={4} />, body: 4 },
  { head: <Star rating={3} />, body: 3 },
  { head: <Star rating={2} />, body: 2 },
  { head: <Star rating={1} />, body: 1 },
];

const sortOptions = [
  { head: <div>Most Recent</div>, body: 'review_date' },
  { head: <div>Most Helpful</div>, body: 'helpful' },
];

const Reviews = () => {
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(5);
  const [filter, setFilter] = useState(0);
  const [sort, setSort] = useState('review_date');

  const getReviews = (num) => {
    fetch(`/${productId}/reviews?limit=${num}&rating=${filter}&sort=${sort}`)
      .then((response) => response.json())
      .then((reviews) => {
        setList(reviews);
      });
  };

  const addHelpful = (id, checked) => {
    if (!checked) {
      fetch(`/${productId}/reviews/${id}`,
        { method: 'PATCH' })
        .then((response) => response.json())
        .then(() => getReviews(limit));
    }
  };

  useEffect(() => {
    getReviews(limit);
  }, [limit, filter, sort]);

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
        <Menu
          name="Rating"
          options={filterOptions}
          handler={setFilter}
        />
        <Menu
          name="Sort"
          options={sortOptions}
          handler={setSort}
        />
      </div>
      <ReviewList list={list} addHelpful={addHelpful} />

      <div
        id="reviews-show-more"
        style={{ display: list.length > 4 ? 'flex' : 'none' }}
      >
        <button
          type="button"
          id="RSM-text"
          onClick={() => setLimit(limit === 5 ? 10 : 5)}
        >
          {limit === 5 ? 'Show More' : 'Show Less'}
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
