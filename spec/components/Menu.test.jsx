import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

describe('Filter Menu', () => {
  test('should pass an option to filter method in Reviews', () => {
    render(<Menu
      name="Rating"
      options={filterOptions}
      handler={(value) => value}
    />);
    const dropdown = document.getElementById('mod-container');
    fireEvent.click(dropdown);
    const option = document.getElementById('RFF-all')
    const val = fireEvent.click(option);
    console.log(val)
  });
});