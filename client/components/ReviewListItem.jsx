/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
// import propTypes from 'prop-types';
import Star from './Star';

const ReviewListItem = ({
  item,
  addHelpful,
  setModal,
  setIndex,
  thumbIds,
  setThumbIds,
}) => (
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
      {item.images.map((url, i) => (
        <img
          src={url}
          alt="product"
          key={url}
          onClick={() => {
            setIndex(i);
            setModal(item);
          }}
        />
      ))}
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
          role="button"
          tabIndex={0}
          title="thumbBtn"
          onKeyDown={() => {
            addHelpful(item._id);
            const newThumbs = JSON.parse(JSON.stringify(thumbIds));
            newThumbs.push(item._id);
            setThumbIds(newThumbs);
          }}
          onClick={() => {
            if (!thumbIds.includes(item._id)) {
              addHelpful(item._id);
              const newThumbs = JSON.parse(JSON.stringify(thumbIds));
              newThumbs.push(item._id);
              setThumbIds(newThumbs);
            }
          }}

        >
          <i className={`${thumbIds.includes(item._id) ? 'fas' : 'far'} fa-thumbs-up`} />
          {item.helpful}
        </div>
      </div>

    </div>
  </div>
);

// ReviewListItem.propTypes = {
//   item: propTypes.shape(propTypes.any).isRequired,
//   addHelpful: propTypes.func.isRequired,
// };

export default ReviewListItem;
