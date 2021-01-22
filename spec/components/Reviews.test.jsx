import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { within } from '@testing-library/dom';
import Reviews from '../../client/components/Reviews';
import axios, { getURL, patchURL } from '../../client/__mocks__/axios';

const productId = 99;
const meta = {
  product_id: 99,
  avgRating: 2.7,
  totalReviews: 98,
  oneStarReviews: 18,
  twoStarReviews: 31,
  threeStarReviews: 26,
  fourStarReviews: 10,
  fiveStarReviews: 13,
};

describe('Reviews', () => {
  let container;
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    render(<Reviews productId={productId} meta={meta} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('content should not be visible on render', () => {
    const content = document.getElementById('reviews-content');
    expect(content).not.toBeVisible();
  });

  test('content should be visible after title bar is clicked', () => {
    const content = document.getElementById('reviews-content');
    const titleBar = screen.getByTitle('titleBar');

    fireEvent.click(titleBar);
    expect(content).toBeVisible();
  });

  test('show more/less button will set limit on click', async () => {
    const showBtn = screen.getByTitle('showBtn');

    fireEvent.click(showBtn);
    await waitFor(() => {
      expect(axios.get)
        .toHaveBeenLastCalledWith(`/${productId}/reviews?limit=10&rating=0&sort=review_date`);
    });

    expect(showBtn).toContainHTML('Show Less');

    fireEvent.click(showBtn);
    await waitFor(() => {
      expect(axios.get)
        .toHaveBeenLastCalledWith(`/${productId}/reviews?limit=5&rating=0&sort=review_date`);
    });

    expect(showBtn).toContainHTML('Show More');
  });

  test('will send GET request when modal next or previous buttons are clicked with proper place',
    async () => {
      const galleryBtn = screen.getByTitle('galleryBtn');
      await waitFor(() => expect(axios.get).toHaveBeenLastCalledWith(`/${productId}/reviews/images`));

      fireEvent.click(galleryBtn);
      await waitFor(() => expect(axios.get).toHaveBeenLastCalledWith(`/${productId}/reviews/images/0`));

      const nextBtn = screen.getByTitle('next');
      fireEvent.click(nextBtn);
      await waitFor(() => expect(axios.get).toHaveBeenLastCalledWith(`/${productId}/reviews/images/1`));

      const prevBtn = screen.getByTitle('previous');
      fireEvent.click(prevBtn);
      await waitFor(() => expect(axios.get).toHaveBeenLastCalledWith(`/${productId}/reviews/images/0`));

      fireEvent.click(prevBtn);
      await waitFor(() => expect(axios.get).toHaveBeenLastCalledWith(`/${productId}/reviews/images/0`));
    });

  test('Review List item will send a PATCH request to server on helpful click', async () => {
    const reviewId = Array.from(document.getElementsByClassName('reviews-list-item'))[0].id;
    const thumbBtn = screen.getAllByTitle('thumbBtn')[0];

    expect(thumbBtn.innerHTML.includes('far')).toBe(true);

    fireEvent.click(thumbBtn);
    await waitFor(() => {
      expect(axios.patch)
        .toHaveBeenLastCalledWith(`/${productId}/reviews/${reviewId}`);
    });

    expect(thumbBtn.innerHTML.includes('fas')).toBe(true);

    fireEvent.click(thumbBtn);
    await waitFor(() => expect(axios.patch).toHaveBeenCalledTimes(1));

    expect(thumbBtn.innerHTML.includes('fas')).toBe(true);
  });

  test('will send a PATCH request in modal on helpful click', async () => {
    const galleryBtn = screen.getByTitle('galleryBtn');

    fireEvent.click(galleryBtn);
    await waitFor(() => expect(axios.get).toHaveBeenLastCalledWith(`/${productId}/reviews/images/0`));
    const modal = screen.getByTestId('modal-open');
    const thumbBtn = within(modal).getByTitle('thumbBtn');

    fireEvent.click(thumbBtn);
    await waitFor(() => expect(axios.patch).toHaveBeenCalled());
    fireEvent.click(thumbBtn);
    await waitFor(() => expect(axios.patch).toHaveBeenCalledTimes(2));
  });
});
