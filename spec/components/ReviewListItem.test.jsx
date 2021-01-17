// __tests__/fetch.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewListItem from '../../client/components/ReviewListItem';


const item = {
  "helpful": 2,
  "verified_purchase": true,
  "images": [
    "https://fec-aws-images.s3.us-east-2.amazonaws.com/images/img27.jpg",
    "https://fec-aws-images.s3.us-east-2.amazonaws.com/images/img17.jpg",
    "https://fec-aws-images.s3.us-east-2.amazonaws.com/images/img12.jpg"
  ],
  "_id": "6000cf3d58202e16a48ec65b",
  "product_id": 99,
  "customer_name": "Sonny V.",
  "review_body": "Nostrud deserunt aliquip dolor anim tempor est esse minim veniam veniam quis.",
  "review_title": "egrigious  crap egrigious",
  "rating": 3,
  "review_date": "2018-09-23T05:00:00.000Z",
  "__v": 0
}

describe('Review List Items', () => {
  test('handles \'Helpful\' functionality', () => {
    const container = document.createElement('div');
    const handler = jest.fn();
    render(<ReviewListItem item={item} addHelpful={handler} />, container);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.keyDown(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test('Displays Verifed Purchase for verified purcahses', () => {
    const container = document.createElement('div');
    render(<ReviewListItem item={item} addHelpful={() => { }} />, container);
    screen.getByText('Verified Purchase');
  });
});


