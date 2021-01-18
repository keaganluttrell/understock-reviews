import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Title from '../../client/components/Title';

describe('Title', () => {

  const mockDispay = jest.fn(x => x);


  render(<Title rating={4.5} display={false} setDisplay={mockDispay} />);
  test('Should properly render', () =)
})