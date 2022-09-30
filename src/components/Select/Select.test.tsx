import React from 'react';
import { render } from '@testing-library/react-native';
import Select from './index';

it('renders and displays label', () => {
  const placeholder = 'Select label';
  const { getByText } = render(<Select label={placeholder} items={[]} onChange={jest.fn} />);
  getByText(placeholder);
});

it('displays hint', () => {
  const hint = 'Select hint';
  const { getByText } = render(<Select hint={hint} items={[]} onChange={jest.fn} />);
  getByText(hint);
});

it('displays error', () => {
  const error = 'Select error';
  const { getByText } = render(<Select hint={error} items={[]} onChange={jest.fn} />);
  getByText(error);
});
