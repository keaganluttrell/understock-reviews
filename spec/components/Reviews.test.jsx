import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import Reviews from '../../client/components/Reviews';
import Star from '../../client/components/Star';

const productId = 99;
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
})


describe('Reviews', () => {
  test('will update lists on render', () => {
    act(() => {
      render(<Reviews />, container);
    });
  });
});
