import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '.';

it('should be rendered', () => {
  const info = 'info';
  const { getByText } = render(<SearchBar info={info} />);
  expect(getByText(info)).toBeTruthy();
});

it('should call onChangeText handler', () => {
  const onChangeText = jest.fn();
  const testID = 'searchInput';

  const { getByTestId } = render(
    <SearchBar testID={testID} onChangeText={onChangeText} controlled />
  );
  const button = getByTestId(testID);
  fireEvent.changeText(button);
  expect(onChangeText).toHaveBeenCalled();
});

it('should not call onChangeText handler when disabled', () => {
  const onChangeText = jest.fn();
  const testID = 'searchInput';

  const { getByTestId } = render(
    <SearchBar testID={testID} onChangeText={onChangeText} controlled disabled />
  );
  const button = getByTestId(testID);
  fireEvent.changeText(button);
  expect(onChangeText).not.toHaveBeenCalled();
});
