import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Title from '../../client/components/Title';

describe('Title', () => {

  const mockDisplay = jest.fn(x => x);

  test('Should toggle content display true', () => {
    render(<Title rating={4.5} display={false} setDisplay={mockDisplay} totalReviews={30} />);

    const title1 = screen.getByTitle('titleBar');
    fireEvent.click(title1);
    fireEvent.keyDown(title1);
    expect(mockDisplay.mock.results[0].value).toBe(true);
    expect(mockDisplay.mock.results[1].value).toBe(true);
  });

  test('Should toggle content display false', () => {
    const mockDisplay = jest.fn(x => x);

    render(<Title rating={4.5} display={true} setDisplay={mockDisplay} totalReviews={30} />);
    const title2 = screen.getByTitle('titleBar');

    fireEvent.click(title2);
    fireEvent.keyDown(title2);
    expect(mockDisplay.mock.results[0].value).toBe(false);
    expect(mockDisplay.mock.results[1].value).toBe(false);
  });

  test('Should display stats in header if display is false', () => {
    render(<Title rating={4.5} display={false} setDisplay={mockDisplay} totalReviews={30} />);

    const stats = document.querySelector('#reviews-title-stats');
    const display = stats.getAttribute('style');

    expect(display).toBe('display: flex;');
  });

  test('Should not display stats in header if display is true', () => {
    render(<Title rating={4.5} display={true} setDisplay={mockDisplay} totalReviews={30} />);

    const stats = document.querySelector('#reviews-title-stats');
    const display = stats.getAttribute('style');

    expect(display).toBe('display: none;');
  });
});