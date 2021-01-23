import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewListItem from '../../client/components/ReviewListItem';
import { data } from '../data/sampleReviews';

describe('Review List Items', () => {
  test('handles \'Helpful\' functionality', () => {
    const mockHelpful = jest.fn();
    const mockThumbs = jest.fn((arg) => arg);
    render(
      <ReviewListItem
        item={data[0]}
        thumbIds={[]}
        addHelpful={mockHelpful}
        setThumbIds={mockThumbs}
        setIndex={() => { }}
        setModal={() => { }}
      />
    );

    fireEvent.click(screen.getAllByTitle('thumbBtn')[0]);
    fireEvent.keyDown(screen.getAllByTitle('thumbBtn')[0]);
    expect(mockThumbs.mock.results[0].value[0]).toBe(data[0]._id);
    expect(mockHelpful).toHaveBeenCalledTimes(2);
  });

  test('will not call addHelpful or setThumbs if id is present in thumbIds', () => {
    const mockHelpful = jest.fn();
    const mockThumbs = jest.fn((arg) => arg);
    render(
      <ReviewListItem
        item={data[0]}
        thumbIds={[data[0]._id]}
        addHelpful={mockHelpful}
        setThumbIds={mockThumbs}
        setIndex={() => { }}
        setModal={() => { }}
      />
    );

    fireEvent.click(screen.getAllByTitle('thumbBtn')[0]);
    fireEvent.keyDown(screen.getAllByTitle('thumbBtn')[0]);
    expect(mockHelpful).toHaveBeenCalledTimes(0);
  });


  test('Displays Verifed Purchase for verified purcahses', () => {
    render(
      <ReviewListItem
        item={data[1]}
        thumbIds={[]}
        setThumbIds={() => { }}
        setIndex={() => { }}
        addHelpful={() => { }}
        setModal={() => { }}
      />
    );

    const verify = document.getElementsByClassName('RLI-verified');
    expect(verify[0].innerHTML).toBe('Verified Purchase');
  });

  test('opens modal displaying image and review that user clicked', () => {
    const mockModal = jest.fn(arg => arg);
    const mockIndex = jest.fn(arg => arg);

    render(
      <ReviewListItem
        item={data[2]}
        thumbIds={[]}
        setThumbIds={() => { }}
        setModal={mockModal}
        setIndex={mockIndex}
        addHelpful={() => { }}
      />
    );

    const images = screen.getAllByTestId('RLI-img');
    fireEvent.click(images[2]);
    fireEvent.keyDown(images[2]);
    expect(mockModal.mock.results[0].value._id).toBe(data[2]._id);
    expect(mockIndex.mock.results[0].value).toBe(2);
    expect(mockModal.mock.results[0].value._id).toBe(data[2]._id);
    expect(mockIndex.mock.results[0].value).toBe(2);
  });
});



