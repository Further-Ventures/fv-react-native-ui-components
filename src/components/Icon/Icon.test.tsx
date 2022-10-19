import React from 'react';
import { render } from '@testing-library/react-native';

import Icon from '.';

it('renders with placeholder', () => {
  const testId = 'iconId';
  const { getByTestId } = render(<Icon name='settings' testID={testId} />);

  getByTestId(testId);
});
