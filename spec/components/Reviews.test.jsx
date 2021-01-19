import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { render, screen } from '@testing-library/react';
import Reviews from '../../client/components/Reviews';
import Star from '../../client/components/Star';



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

const filterOptions = [
  { head: <div id="RFF-all">All</div>, body: 0 },
  { head: <Star rating={5} />, body: 5 },
  { head: <Star rating={4} />, body: 4 },
  { head: <Star rating={3} />, body: 3 },
  { head: <Star rating={2} />, body: 2 },
  { head: <Star rating={1} />, body: 1 },
];
const sortOptions = [
  { head: <div>Most Recent</div>, body: 'review_date' },
  { head: <div>Most Helpful</div>, body: 'helpful' },
];
let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Reviews', () => {
  test('will update lists on render', async () => {
    render(<Reviews productId={99} meta={meta} />, container);
    expect(await screen.findByText('Reviews')).toBeInTheDocument();
  });
});
