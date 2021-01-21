import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import ReviewList from '../../client/components/ReviewList';
import { data } from '../data/sampleReviews';

describe('Review List', () => {
  test('should display no reviews message when list is empty', () => {
    render(<ReviewList list={[]} addHelpful={() => { }} setIndex={() => { }} setModal={() => { }} />);
    const text = document.getElementById('reviews-no-reviews').innerHTML;

    expect(text).not.toBe(undefined);
  });

  test('should display all reviews given in list', () => {
    render(<ReviewList list={data} addHelpful={() => { }} />);
    const reviews = document.getElementsByClassName('reviews-list-item');

    expect(reviews.length).toBe(data.length);
  });
});