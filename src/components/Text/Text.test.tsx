import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '.';
import { sizeToHeightMap } from './styles';

it('should render child', () => {
  const children = 'word';
  const screen = render(<Text variant='label-10-medium'>{children}</Text>);
  expect(screen.getByText(children)).toBeTruthy();
});

it('should change color', () => {
  const color = 'red';
  const testId = 'test-text';
  const children = 'word';
  const screen = render(
    <Text testID={testId} variant='label-10-medium' color={color}>
      {children}
    </Text>
  );
  const text = screen.getByTestId(testId);
  const textStyles = text.props.style[0];
  expect(textStyles.color).toBe(color);
});

it('should change fontSize, fontWeight and lineHeight', () => {
  const testId = 'test-text';
  const children = 'word';
  const size = 24;
  const weight = '600';
  const height = 32;
  const screen = render(
    <Text testID={testId} size={size} weight={weight} height={height}>
      {children}
    </Text>
  );
  const text = screen.getByTestId(testId);
  const textStyles = text.props.style[1];
  expect(textStyles.fontSize).toBe(size);
  expect(textStyles.lineHeight).toBe(height);
  expect(textStyles.fontWeight).toBe(weight);
});

it('should add default value to lineHeight if size is in sizeToHeightMap and height NOT added', () => {
  const testId = 'test-text';
  const children = 'word';
  const size = 10;
  const screen = render(
    <Text testID={testId} size={size}>
      {children}
    </Text>
  );
  const text = screen.getByTestId(testId);
  const textStyles = text.props.style[1];
  expect(textStyles.lineHeight).toBe(sizeToHeightMap[size]);
});

it('should add default value to lineHeight if size is NOT in sizeToHeightMap and height NOT added', () => {
  const testId = 'test-text';
  const children = 'word';
  const size = 3;
  const screen = render(
    <Text testID={testId} size={size}>
      {children}
    </Text>
  );
  const text = screen.getByTestId(testId);
  const textStyles = text.props.style[1];
  expect(textStyles.lineHeight).toBe(size + Math.trunc(size / 2));
});
