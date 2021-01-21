import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Gallery from '../../client/components/Gallery';
import { data } from '../data/sampleReviews';

describe('Gallery', () => {

  test('should render if no reviews have images', () => {
    render(<Gallery gallery={[]} />)
    const imageDivs = Array.from(document.getElementsByClassName('reviews-gallery-img'));
    expect(imageDivs.length).toBe(0);
  });

  test('should have no more than 6 images', () => {
    render(<Gallery gallery={data.slice(0, 6)} />)
    const imageDivs = Array.from(document.getElementsByClassName('reviews-gallery-img'));
    expect(imageDivs.length).toBe(6);
  });

  test('gallery images should set index to 0 and set modal to the review of image clicked', () => {
    const mockIndex = jest.fn((arg) => arg);

    render(<Gallery
      gallery={data.slice(0, 6)}
      setIndex={mockIndex}
      setPlace={(arg) => arg}
    />);

    const imageDivs = Array.from(document.getElementsByClassName('reviews-gallery-img'));
    fireEvent.click(imageDivs[0]);
    fireEvent.keyDown(imageDivs[0]);
    expect(mockIndex.mock.results[0].value).toBe(0);
    expect(mockIndex.mock.results[1].value).toBe(0);
  });

  test('gallery button should default to the first image of first review', () => {
    const mockIndex = jest.fn((arg) => arg);

    render(<Gallery
      gallery={data.slice(0, 6)}
      setIndex={mockIndex}
      setPlace={(arg) => arg}
    />);

    const galleryBtn = document.getElementById('reviews-gallery-button');
    fireEvent.click(galleryBtn);
    expect(mockIndex.mock.results[0].value).toBe(0);
  });

});