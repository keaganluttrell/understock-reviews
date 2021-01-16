import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import Star from './Star';

const ReviewListItem = ({ item }) => (
  <div className="reviews-list-item">

    <div className="RLI-top-line">
      <Star rating={item.rating} />
      <div className="RLI-verified">
        {item.verified_purchase ? 'Verified Purchase' : ''}
      </div>
    </div>

    <div className="RLI-title">{item.review_title}</div>
    <div className="RLI-body">{item.review_body}</div>

    <div className="RLI-bottom-line">
      <div className="RLI-by-line">
        {item.customer_name}
        {' '}
        {moment(item.review_date).format('LL')}
      </div>

      <div className="RLI-helpful">
        Was this review helpful?
        <div className="RLI-helpful-thumb">
          <i className="far fa-thumbs-up" />
          {item.helpful}
        </div>
      </div>

    </div>
  </div>
);

ReviewListItem.propTypes = {
  item: propTypes.shape(propTypes.any).isRequired,
};

export default ReviewListItem;
