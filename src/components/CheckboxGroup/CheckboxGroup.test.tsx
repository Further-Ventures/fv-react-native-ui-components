import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Form from '../Form';
import CheckboxGroup from '.';

const headerLabel = 'header';
const formName = 'test form';
const firstCheckboxLabel = '1st checkbox';
const secondCheckboxLabel = '2nd checkbox';
const Component = (props) => (
  <Form {...props}>
    <CheckboxGroup
      name={formName}
      header={{ name: 'header', label: headerLabel }}
      checkboxes={[
        { name: 'first', label: firstCheckboxLabel },
        { name: 'second', label: secondCheckboxLabel },
      ]}
    />
  </Form>
);
describe('CheckboxGroup', () => {
  it('renders', () => {
    const { getByText } = render(<Component />);
    getByText(headerLabel);
    getByText(firstCheckboxLabel);
    getByText(secondCheckboxLabel);
  });

  it('checks and unchecks all', () => {
    let values;
    const { getByText } = render(
      <Component
        onChange={(a) => {
          values = a[formName];
        }}
      />
    );
    const checkbox = getByText(headerLabel);
    fireEvent.press(checkbox);
    expect(values).toHaveLength(2);
    fireEvent.press(checkbox);
    expect(values).toHaveLength(0);
  });
});
