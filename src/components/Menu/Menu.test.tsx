import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Menu from './index';
import { View } from 'react-native';

it('displays content', () => {
  const content = 'Text inside menu';
  const testId = 'menu-id';
  const { getByTestId, getByText } = render(
    <Menu
      testID={testId}
      data={[content]}
      trigger={<View style={{ width: 50, height: 50 }} />}
      onSelect={jest.fn}
    />
  );
  fireEvent.press(getByTestId(testId));
  getByText(content);
});
