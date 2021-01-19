/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import moment from 'moment';
// import propTypes from 'prop-types';
import Star from './Star';

const ReviewListItem = ({ item, addHelpful }) => {
  const [helped, setHelped] = useState(false);

  return (
    <div className="reviews-list-item" id={item._id}>

      <div className="RLI-top-line">
        <Star rating={item.rating} />
        <div
          className="RLI-verified"
          style={{
            borderLeft: item.verified_purchase
              ? 'solid 1px rgba(139, 138, 138, 0.607)'
              : 'none',
          }}
        >
          {item.verified_purchase ? 'Verified Purchase' : ''}
        </div>
      </div>

      <div className="RLI-title">{item.review_title}</div>
      <div className="RLI-body">{item.review_body}</div>

      <div className="RLI-images">
        {item.images.map((url) => <img src={url} alt="product" key={url} />)}
      </div>

      <div className="RLI-bottom-line">
        <div className="RLI-by-line">
          {item.customer_name}
          {' '}
          {moment(item.review_date).format('LL')}
        </div>

        <div className="RLI-helpful">
          Was this review helpful?
          <div
            className="RLI-helpful-thumb"
            onKeyDown={() => setHelped(true)}
            onClick={() => {
              addHelpful(item._id, helped);
              setHelped(true);
            }}
            role="button"
            tabIndex={0}
          >
            <i className={`${helped ? 'fas' : 'far'} fa-thumbs-up`} />
            {item.helpful}
          </div>
        </div>

      </div>
    </div>
  );
};

// ReviewListItem.propTypes = {
//   item: propTypes.shape(propTypes.any).isRequired,
//   addHelpful: propTypes.func.isRequired,
// };

export default ReviewListItem;
