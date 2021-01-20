/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import Menu from './Menu';
import Graph from './Graph';
import Gallery from './Gallery';
import Star from './Star';
import Title from './Title';
import Modal from './Modal';

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

const Reviews = ({ productId, meta }) => {
  const [display, setDisplay] = useState(false);
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(5);
  const [filter, setFilter] = useState(0);
  const [sort, setSort] = useState('review_date');
  const [gallery, setGallery] = useState([]);

  const getReviews = () => {
    axios.get(`/${productId}/reviews?limit=${limit}&rating=${filter}&sort=${sort}`)
      .then((reviews) => {
        setList(reviews.data);
      });
  };

  const getImages = () => {
    axios.get(`/${productId}/reviews/images`)
      .then((images) => {
        setGallery(images.data);
      });
  };

  const addHelpful = (id, checked) => {
    if (!checked) {
      axios.patch(`/${productId}/reviews/${id}`)
        .then(() => getReviews(limit));
    }
  };

  useEffect(() => {
    getReviews();
  }, [limit, filter, sort]);

  useEffect(() => {
    getImages();
  }, [productId]);

  return (
    <>
      <Title
        rating={meta.avgRating}
        totalReviews={meta.totalReviews}
        display={display}
        setDisplay={setDisplay}
      />

      <div
        id="reviews-content"
        style={{ display: display ? 'flex' : 'none' }}
      >

        <div id="reviews-header">
          <Graph meta={meta} />
          <Gallery gallery={gallery} />
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

        <div
          id="reviews-display-msg"
          style={{ display: list.length ? 'block' : 'none' }}
        >
          {`1-${list.length} of ${meta.totalReviews} reviews`}
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

      </div>

      <Modal />
    </>
  );
};

export default Reviews;
