import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
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
  const [modal, setModal] = useState(null);
  const [index, setIndex] = useState(0);
  const [place, setPlace] = useState(null);
  const [thumbIds, setThumbIds] = useState([]);

  const getReviews = () => {
    axios.get(`api/reviews/${productId}?limit=${limit}&rating=${filter}&sort=${sort}`)
      .then((reviews) => {
        setList(reviews.data);
      });
  };

  const getImages = () => {
    axios.get(`api/reviews/${productId}/images`)
      .then((images) => {
        setGallery(images.data);
      });
  };

  const getPlace = () => {
    if (place !== null) {
      axios.get(`api/reviews/${productId}/images/${place}`)
        .then((review) => {
          setModal(review.data[0]);
        });
    }
  };

  const addHelpful = (id) => {
    axios.patch(`api/reviews/${productId}/${id}`)
      .then((item) => {
        if (modal) {
          setModal(item.data);
        }
        getReviews(limit);
      });
  };

  useEffect(() => {
    getReviews();
  }, [limit, filter, sort]);

  useEffect(() => {
    getImages();
  }, [productId]);

  useEffect(() => {
    getPlace();
  }, [place]);

  return (
    <>
      <Title
        rating={meta.avgRating}
        totalReviews={meta.totalReviews}
        display={display}
        setDisplay={setDisplay}
      />

      <div
        id={modal ? 'reviews-content-locked' : 'reviews-content'}
        style={{ display: display ? 'flex' : 'none' }}
      >

        <div id="reviews-header">
          <Graph meta={meta} filter={filter} />
          <Gallery
            gallery={gallery}
            setIndex={setIndex}
            setPlace={setPlace}
          />
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

        <ReviewList
          list={list}
          addHelpful={addHelpful}
          setModal={setModal}
          setIndex={setIndex}
          thumbIds={thumbIds}
          setThumbIds={setThumbIds}
        />

        <div
          id="reviews-show-more"
          style={{ display: list.length > 4 ? 'flex' : 'none' }}
        >
          <button
            type="button"
            id="RSM-text"
            title="showBtn"
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

      <Modal
        item={modal}
        setModal={setModal}
        addHelpful={addHelpful}
        index={index}
        setIndex={setIndex}
        place={place}
        setPlace={setPlace}
        reviewsWithImages={meta.reviewsWithImages}
        thumbIds={thumbIds}
        setThumbIds={setThumbIds}
      />
    </>
  );
};

Reviews.propTypes = {
  meta: propTypes.shape().isRequired,
  productId: propTypes.number.isRequired,
};

export default Reviews;
