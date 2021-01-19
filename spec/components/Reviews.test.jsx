import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Reviews from '../../client/components/Reviews';

const meta = {
  product_id: 99,
  avgRating: 2.7,
  totalReviews: 98,
  oneStarReviews: 18,
  twoStarReviews: 31,
  threeStarReviews: 26,
  fourStarReviews: 10,
  fiveStarReviews: 13,
};

describe('Reviews', () => {
  test('will update lists on render', async () => {
    render(<Reviews productId={99} meta={meta} />);
    expect(await screen.findByText('Reviews')).toBeInTheDocument();
  });
});
