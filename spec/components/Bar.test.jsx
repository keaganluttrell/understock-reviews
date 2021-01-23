import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Bar from '../../client/components/Bar';

describe('Bar', () => {

  test('top bar className should not contain selected if filter and rating are different values', () => {
    render(<Bar avg={5} rating={5} filter={0} totalReviews={100} />)
    const bar = Array.from(document.getElementsByClassName('RGB-bar-top'))[0];
    expect(bar.getAttribute('class')).not.toEqual(expect.stringContaining('selected'));
  });

  test('top bar should contain selected if filter and rating are the same value', () => {
    render(<Bar avg={5} rating={5} filter={5} totalReviews={100} />);
    const bar = Array.from(document.getElementsByClassName('RGB-bar-top-selected'))[0];
    expect(bar.getAttribute('class')).toEqual(expect.stringContaining('selected'));
  });
});