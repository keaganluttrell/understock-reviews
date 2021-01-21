import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from '../../client/components/Modal';
import { data } from '../data/sampleReviews';

describe('Modal', () => {

  test('expect modal to be closed when it does not have a review item', () => {
    render(<Modal item={null} />);
    const modal = document.getElementById('reviews-modal-open');
    expect(modal).toBeNull;
  });

  test('expect modal to be open if is passed a review item', () => {
    render(<Modal item={data[0]} />);
    const modal = document.getElementById('reviews-modal-open');

    expect(modal).toBeVisible();
  });

  test('should close on click of x', () => {
    const mockModal = jest.fn();
    render(<Modal item={data[0]} setModal={mockModal} />);

    const closeBtn = document.getElementById('reviews-modal-x');
    fireEvent.click(closeBtn);
    expect(mockModal.mock.results[0].value).toBeNull;
  });

  test('item should be null when modal closes', () => {

  });
});