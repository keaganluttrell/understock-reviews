import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Title from '../../client/components/Title';

describe('Title', () => {

  const mockDispay = jest.fn(x => x);

  test('Should toggle content display', () => {
    render(<Title rating={4.5} display={false} setDisplay={mockDispay} />);
    const title = document.getElementById('reviews-title');
    fireEvent.click(title);
    fireEvent.click(title);
    expect(mockDispay.mock.results[0].value).toBe.Truthy;
    expect(mockDispay.mock.results[1].value).not.toBe.Truthy;
    fireEvent.keyDown(title);
    fireEvent.keyDown(title);
    expect(mockDispay.mock.results[2].value).toBe.Truthy;
    expect(mockDispay.mock.results[3].value).not.toBe.Truthy;
  });

  test('Should display stats in header if display is false', () => {
    render(<Title rating={4.5} display={false} setDisplay={mockDispay} />);
    const stats = document.querySelector('#reviews-title-stats');
    let display = stats.getAttribute('style');
    expect(display).toBe('display: flex;');
  });

  test('Should not display stats in header if display is true', () => {
    render(<Title rating={4.5} display={true} setDisplay={mockDispay} />);
    const stats = document.querySelector('#reviews-title-stats');
    let display = stats.getAttribute('style');
    expect(display).toBe('display: none;');
  });

});