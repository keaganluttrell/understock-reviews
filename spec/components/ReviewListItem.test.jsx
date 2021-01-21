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

  test('opens modal displaying image and review that user clicked', () => {
    const mockModal = jest.fn(arg => arg);
    const mockIndex = jest.fn(arg => arg);

    render(
      <ReviewListItem
        item={data[2]}
        addHelpful={() => { }}
        setModal={mockModal}
        setIndex={mockIndex}
      />
    );

    const images = Array.from(document.getElementsByTagName('img'));
    fireEvent.click(images[2]);
    expect(mockModal.mock.results[0].value._id).toBe('6000cf3d58202e16a48ec65a');
    expect(mockIndex.mock.results[0].value).toBe(2);
  });
});



