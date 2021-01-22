import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../../client/components/Modal';
import { data } from '../data/sampleReviews';

describe('Modal', () => {

  test('expect modal to be closed when it does not have a review item', () => {
    render(
      <Modal
        item={null}
        thumbIds={[]}
        setThumbIds={() => { }}
      />)
      ;
    const modal = document.getElementById('reviews-modal-open');
    expect(modal).toBeNull;
  });

  test('expect modal to be open if is passed a review item', () => {
    render(
      <Modal
        item={data[0]}
        thumbIds={[]}
        setThumbIds={() => { }}
      />
    );
    const modal = document.getElementById('reviews-modal-open');

    expect(modal).toBeVisible();
  });

  test('should close on click of x', async () => {
    let item = data[0];
    const mockModal = jest.fn((arg) => {
      item = arg;
      return arg;
    });
    const mockPlace = jest.fn((arg) => arg);

    let container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <Modal
        item={item}
        setModal={mockModal}
        setPlace={mockPlace}
        thumbIds={[]}
        setThumbIds={() => { }}
      />
      , container
    );

    const closeBtn = document.getElementById('reviews-modal-x');
    fireEvent.click(closeBtn);
    expect(mockModal.mock.results[0].value).toBeNull;
    expect(item).toBeNull;
  });
});