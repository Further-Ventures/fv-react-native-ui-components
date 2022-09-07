import React from 'react';
import {render} from '@testing-library/react-native';
import Elevation from '.';
import {Text} from 'react-native';

it('should render medium', () => {
  const label = 'Some Text';
  const {getByText} = render(
    <Elevation>
      <Text>{label}</Text>
    </Elevation>,
  );

  const element = getByText(label).parent;
  expect(element?.props.style[1].shadowRadius).toBe(9);
  expect(element?.props.style[1].elevetion).toBe(9);
});
it('should render extraLight', () => {
  const label = 'Some Text';
  const {getByText} = render(
    <Elevation variant="extraLight">
      <Text>{label}</Text>
    </Elevation>,
  );

  const element = getByText(label).parent;
  expect(element?.props.style[1].shadowRadius).toBe(3);
  expect(element?.props.style[1].elevetion).toBe(3);
});
it('should render light', () => {
  const label = 'Some Text';
  const {getByText} = render(
    <Elevation variant="light">
      <Text>{label}</Text>
    </Elevation>,
  );

  const element = getByText(label).parent;
  expect(element?.props.style[1].shadowRadius).toBe(7);
  expect(element?.props.style[1].elevetion).toBe(6);
});
it('should render heavy', () => {
  const label = 'Some Text';
  const {getByText} = render(
    <Elevation variant="heavy">
      <Text>{label}</Text>
    </Elevation>,
  );

  const element = getByText(label).parent;
  expect(element?.props.style[1].shadowRadius).toBe(13);
  expect(element?.props.style[1].elevetion).toBe(12);
});
it('should render extraHeavy', () => {
  const label = 'Some Text';
  const {getByText} = render(
    <Elevation variant="extraHeavy">
      <Text>{label}</Text>
    </Elevation>,
  );

  const element = getByText(label).parent;
  expect(element?.props.style[1].shadowRadius).toBe(16);
  expect(element?.props.style[1].elevetion).toBe(16);
});
