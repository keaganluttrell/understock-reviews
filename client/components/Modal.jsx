/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItem from './ReviewListItem';

const Modal = ({
  item,
  setModal,
  addHelpful,
  index,
  setIndex,
}) => {
  const RLI = item
    ? (
      <ReviewListItem
        item={item}
        addHelpful={addHelpful}
        setModal={setModal}
        setIndex={setIndex}
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
            onClick={() => setModal(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
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
            <img src={item?.images[index]} alt="alt" />
          </div>

          <div id="reviews-modal-item">
            {RLI}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Modal;
