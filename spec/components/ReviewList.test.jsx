import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import ReviewList from '../../client/components/ReviewList';
import { data } from '../data/sampleReviews';

describe('Review List', () => {
  test('should display no reviews message when list is empty', () => {
    render(
      <ReviewList list={[]}
        setIndex={() => { }}
        setModal={() => { }}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
      />);
    const text = document.getElementById('reviews-no-reviews');
    expect(text.style.display).toBe('block');
  });

  test('should display all reviews given in list', () => {
    render(
      <ReviewList
        list={data}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        setIndex={() => { }}
        setModal={() => { }}
      />
    );
    const reviews = document.getElementsByClassName('reviews-list-item');
    expect(reviews.length).toBe(data.length);

    const text = document.getElementById('reviews-no-reviews');
    expect(text.style.display).toBe('none');
  });
});