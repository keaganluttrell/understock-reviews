import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewListItem from '../../client/components/ReviewListItem';
import { data } from '../data/sampleReviews';

describe('Review List Items', () => {
  test('handles \'Helpful\' functionality', () => {
    const container = document.createElement('div');
    const handler = jest.fn();

    render(<ReviewListItem item={data[0]} addHelpful={handler} />, container);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.keyDown(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test('Displays Verifed Purchase for verified purcahses', () => {
    const container = document.createElement('div');

    render(<ReviewListItem item={data[1]} addHelpful={() => { }} />, container);

    const verify = document.getElementsByClassName('RLI-verified');
    expect(verify[0].innerHTML).toBe('Verified Purchase');
  });
});



