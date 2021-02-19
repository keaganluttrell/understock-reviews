/* eslint-disable react/prop-types */
import React from 'react';
// import propTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const Modal = ({
  item,
  setModal,
  addHelpful,
  index,
  setIndex,
  place,
  setPlace,
  reviewsWithImages,
  thumbIds,
  setThumbIds,
}) => {
  const RLI = item
    ? (
      <ReviewListItem
        item={item}
        addHelpful={addHelpful}
        setModal={setModal}
        setIndex={setIndex}
        thumbIds={thumbIds}
        setThumbIds={setThumbIds}
      />
    )
    : '';
  return (
    <div
      data-testid={item ? 'modal-open' : 'modal-closed'}
      id={`reviews-modal-${item ? 'open' : 'closed'}`}
    >

      <div id="reviews-modal-container">

        <div id="reviews-modal-header">
          <div id="reviews-modal-title">Customer Reviews</div>
          <button
            type="button"
            id="reviews-modal-x"
            title="close"
            onClick={() => {
              setModal(null);
              setPlace(null);
            }}
          >
            <svg id="reviews-close-svg" width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
              <title>Close</title>
              <path
                d="M19.7 4.3c-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L13.4 12l6.3-6.3c.4-.4.4-1 0-1.4z"
                stroke="none"
                fill="inherit"
              />
            </svg>
          </button>
        </div>

        <div id="reviews-modal-body">
          <div id="reviews-modal-image">
            <img src="https://loremflickr.com/320/240/home?random=1000" alt="alt" />
          </div>

          <div id="reviews-modal-item">
            {RLI}
          </div>
        </div>

        <div id={`modal-footer-${place !== null ? 'display' : 'none'}`}>

          <button
            type="button"
            id="modal-footer-btn-prev"
            title="previous"
            style={{ display: place === 0 ? 'none' : 'flex' }}
            onClick={() => {
              if (place > 0) {
                setPlace(place - 1);
              }
            }}
          >
            <svg
              className="MFB-left"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke="#2F3337"
              fill="#2F3337"
            >
              <title>Chevron Left</title>
              <path
                d="M17 2L7 12l10 10"
                stroke="inherit"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Previous Review
          </button>

          <button
            type="button"
            id="modal-footer-btn-next"
            title="next"
            style={{ display: place === reviewsWithImages - 1 ? 'none' : 'flex' }}
            onClick={() => {
              setPlace(place + 1);
            }}
          >
            Next Review
            <svg
              className="MFB-right"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke="#2F3337"
              fill="#2F3337"
            >
              <title>Chevron Right</title>
              <path
                d="M7 2l10 10L7 22"
                stroke="inherit"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        </div>
      </div>

    </div>
  );
};

// Modal.propTypes = {
//   item: propTypes.shape().isRequired,
//   setModal: propTypes.func.isRequired,
//   addHelpful: propTypes.func.isRequired,
//   index: propTypes.number.isRequired,
//   setIndex: propTypes.func.isRequired,
//   place: propTypes.number.isRequired,
//   setPlace: propTypes.func.isRequired,
//   reviewsWithImages: propTypes.number.isRequired,
//   thumbIds: propTypes.arrayOf(propTypes.any).isRequired,
//   setThumbIds: propTypes.func.isRequired,
// };

export default Modal;
