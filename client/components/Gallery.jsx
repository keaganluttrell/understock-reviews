/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

const Gallery = ({ gallery, setModal, setIndex }) => (
  <>
    <div id="reviews-gallery">
      {gallery.map((review) => (
        <div
          className="reviews-gallery-img"
          key={review._id}
          onClick={() => {
            setIndex(0);
            setModal(review);
          }}
          onKeyDown={() => setModal(review)}
          role="button"
          tabIndex={0}
        >
          <img src={review.images[0]} alt="img" />
        </div>
      ))}
    </div>
    <div id="reviews-gallery-button-div">
      <button
        type="button"
        id="reviews-gallery-button"
        onClick={() => {
          setIndex(0);
          setModal(gallery[0]);
        }}
      >
        <svg
          className="reviews-gallery-svg-grid-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke="#2F3337"
          fill="#2F3337"
        >
          <title>Grid</title>
          <path
            d="M1.571 1h6.857c.316 0 .572.256.572.571V8.43A.571.571 0 018.428 9H1.571A.571.571 0 011 8.429V1.57C1 1.256 1.256 1 1.57 1zM1.571 15h6.857c.316 0 .572.256.572.571v6.858a.571.571 0 01-.572.571H1.571A.571.571 0 011 22.429V15.57c0-.315.256-.571.571-.571zM15.571 1h6.857c.316 0 .572.256.572.571V8.43a.571.571 0 01-.572.571h-6.857A.571.571 0 0115 8.429V1.57c0-.315.256-.571.571-.571zM15.571 15h6.857c.316 0 .572.256.572.571v6.858a.571.571 0 01-.572.571h-6.857a.571.571 0 01-.571-.571V15.57c0-.315.256-.571.571-.571z"
            stroke="inherit"
            fill="none"
            strokeWidth="2"
          />
        </svg>
        View Customer Images (32)
      </button>
    </div>
  </>
);

export default Gallery;
