import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, within } from '@testing-library/react';
import Gallery from '../../client/components/Gallery';
import { data } from '../data/sampleReviews';

describe('Gallery', () => {

  test('should render if no reviews have images', () => {
    render(<Gallery gallery={[]} />)

    const gallery = screen.getByTestId('reviews-gallery');
    const images = gallery.getElementsByTagName('img');
    expect(images.length).toBe(0);
  });

  test('should display all images given', () => {
    render(<Gallery gallery={data.slice(0, 6)} />)

    const gallery = screen.getByTestId('reviews-gallery');
    const images = gallery.getElementsByTagName('img');
    expect(images.length).toBe(6);
  });

  test('gallery images should set index to 0 and set modal to the review of image clicked', () => {
    const mockIndex = jest.fn((arg) => arg);
    const mockPlace = jest.fn((arg) => arg);

    render(<Gallery
      gallery={data.slice(0, 6)}
      setIndex={mockIndex}
      setPlace={mockPlace}
    />);

    const gallery = screen.getByTestId('reviews-gallery');
    const images = Array.from(gallery.getElementsByClassName('reviews-gallery-img'));

    fireEvent.click(images[4]);
    expect(mockIndex.mock.results[0].value).toBe(0);
    expect(mockPlace.mock.results[0].value).toBe(4);

    fireEvent.keyDown(images[2]);
    expect(mockIndex.mock.results[1].value).toBe(0);
    expect(mockPlace.mock.results[1].value).toBe(2);
  });

  test('gallery button should default to the first image of first review', () => {
    const mockIndex = jest.fn((arg) => arg);

    render(<Gallery
      gallery={data.slice(0, 6)}
      setIndex={mockIndex}
      setPlace={(arg) => arg}
    />);

    const galleryBtn = screen.getByTitle('galleryBtn');
    fireEvent.click(galleryBtn);
    expect(mockIndex.mock.results[0].value).toBe(0);
  });

});