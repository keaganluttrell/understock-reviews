import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Menu from '../../client/components/Menu';
import Star from '../../client/components/Star';

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

describe('Filter Menu', () => {
  const handler = jest.fn((arg) => arg);
  test('should pass an option to filter method in Reviews', () => {
    render(<Menu
      name='Rating'
      options={filterOptions}
      handler={handler}
    />);
    const dropdown = document.getElementById('mod-container');
    fireEvent.click(dropdown);
    const option = document.getElementsByClassName('fieldset-option')[4];
    fireEvent.click(option);
    expect(handler.mock.results[0].value).toBe(2)
  });

  test('should be able to clear all results', () => {
    render(<Menu
      name='Rating'
      options={filterOptions}
      handler={handler}
    />);
    const dropdown = document.getElementById('mod-container');
    fireEvent.click(dropdown);
    const option = document.getElementsByClassName('fieldset-option')[4];
    fireEvent.click(option);
    const clear = document.getElementById('reviews-filter-clear');
    fireEvent.click(clear);
    expect(handler.mock.results[2].value).toBe(0);
  });
});

describe('Sort Menu', () => {
  const handler = jest.fn((arg) => arg);
  test('should pass an option to sort method in Reviews', () => {
    render(<Menu
      name='Sort'
      options={sortOptions}
      handler={handler}
    />);
    const dropdown = document.getElementById('mod-container');
    fireEvent.click(dropdown);
    const option = document.getElementsByClassName('fieldset-option');
    fireEvent.click(option[1]);
    fireEvent.click(dropdown);
    fireEvent.click(option[0]);
    expect(handler.mock.results[0].value).toBe('helpful');
    expect(handler.mock.results[1].value).toBe('review_date');
    fireEvent.keyDown(dropdown);
    fireEvent.keyDown(option[1]);
  });
});