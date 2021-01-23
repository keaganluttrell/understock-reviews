import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from '../../client/components/Modal';
import { data } from '../data/sampleReviews';

describe('Modal', () => {

  test('expect modal to be closed when it does not have a review item', () => {
    render(
      <Modal
        item={null}
        thumbIds={[]}
        setThumbIds={() => { }}
        setIndex={() => { }}
        setModal={() => { }}
        addHelpful={() => { }}
      />)
      ;
    const modalClosed = document.getElementById('reviews-modal-closed');
    expect(modalClosed).toBeVisible();
  });

  test('expect modal to be open if is passed a review item', () => {
    render(
      <Modal
        item={data[0]}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        setIndex={() => { }}
        setModal={() => { }}
      />
    );
    const modalOpen = document.getElementById('reviews-modal-open');
    expect(modalOpen).toBeVisible();
  });

  test('should close on click of x', async () => {
    let item = data[0];
    const mockModal = jest.fn((arg) => {
      item = arg;
      return arg;
    });
    const mockPlace = jest.fn((arg) => arg);

    render(
      <Modal
        item={item}
        setModal={mockModal}
        setPlace={mockPlace}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        setIndex={() => { }}
      />
    );
    const closeBtn = screen.getByTitle('close');
    fireEvent.click(closeBtn);
    expect(mockModal.mock.results[0].value).toBeNull;
    expect(mockPlace.mock.results[0].value).toBeNull;
    expect(item).toBeNull;
  });

  test('if place is null, footer should not be visible', () => {
    const item = data[0];
    const mockModal = jest.fn((arg) => {
      item = arg;
      return arg;
    });
    const mockPlace = jest.fn((arg) => arg);
    render(
      <Modal
        item={item}
        setModal={mockModal}
        setPlace={mockPlace}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        reviewsWithImages={10}
        place={null}
        setIndex={() => { }}
      />
    );
    const footerDisplay = document.getElementById('modal-footer-display');
    expect(footerDisplay).toBeNull;
  });

  test('previous button if place is 0, meaning first item in gallery', () => {
    const item = data[0];
    const mockModal = jest.fn((arg) => {
      item = arg;
      return arg;
    });
    const mockPlace = jest.fn((arg) => arg);
    render(
      <Modal
        item={item}
        setModal={mockModal}
        setPlace={mockPlace}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        reviewsWithImages={10}
        setIndex={() => { }}
        place={0}
      />
    );
    const prevBtn = screen.getByTitle('previous');
    expect(prevBtn).not.toBeVisible();
  });

  test('if next button\'s place is equal to reviewsWithImages minus one it should not be visible', () => {
    const item = data[0];
    const mockModal = jest.fn((arg) => {
      item = arg;
      return arg;
    });
    const mockPlace = jest.fn((arg) => arg);
    render(
      <Modal
        item={item}
        setModal={mockModal}
        setPlace={mockPlace}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        reviewsWithImages={10}
        place={9}
        setIndex={() => { }}
      />
    );
    const nextBtn = screen.getByTitle('next');
    expect(nextBtn).not.toBeVisible();
  });

  test('modal previous button should decrease place by one', () => {
    const item = data[0];
    const mockModal = jest.fn((arg) => {
      item = arg;
      return arg;
    });
    const mockPlace = jest.fn((arg) => arg);
    render(
      <Modal
        item={item}
        setModal={mockModal}
        setPlace={mockPlace}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        reviewsWithImages={10}
        place={1}
        setIndex={() => { }}
      />
    );
    const prevBtn = screen.getByTitle('previous');
    fireEvent.click(prevBtn);
    expect(mockPlace.mock.results[0].value).toBe(0);
  });

  test('modal next button should increase place by one', () => {
    const item = data[0];
    const mockModal = jest.fn((arg) => {
      item = arg;
      return arg;
    });
    const mockPlace = jest.fn((arg) => arg);
    render(
      <Modal
        item={item}
        setModal={mockModal}
        setPlace={mockPlace}
        thumbIds={[]}
        setThumbIds={() => { }}
        addHelpful={() => { }}
        reviewsWithImages={10}
        place={1}
        setIndex={() => { }}
      />
    );
    const nextBtn = screen.getByTitle('next');
    fireEvent.click(nextBtn);
    expect(mockPlace.mock.results[0].value).toBe(2);
  });
});