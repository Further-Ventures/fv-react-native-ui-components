import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '.';

it('should be rendered', () => {
  const label = 'Test button';
  const { getByText } = render(<Button label={label} />);
  expect(getByText(label)).toBeTruthy();
});

it('should call onPress handler', () => {
  const onPress = jest.fn();
  const label = 'Button';
  const screen = render(<Button label={label} onPress={onPress} />);
  const button = screen.getByText(label);
  fireEvent.press(button);
  expect(onPress).toHaveBeenCalled();
});

it('should not call onPress handler when disabled', () => {
  const onPress = jest.fn();
  const label = 'Button';
  
  const screen = render(<Button label={label} onPress={onPress} disabled={true} />);

  const button = screen.getByText(label);
  fireEvent.press(button);
  expect(onPress).not.toHaveBeenCalled();
});
