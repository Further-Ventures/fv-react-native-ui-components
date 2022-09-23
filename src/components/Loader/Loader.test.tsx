import React from 'react';
import {render} from '@testing-library/react-native';
import Loader from '.';

it('should render rounded circular loader', () => {
  const screen = render(<Loader />);

  const container = screen.queryByTestId('@fv/CircularLoader-container');
  expect(container).toBeDefined();

  const svg = screen.queryByTestId('@fv/CircularLoader-svg');
  const roundedSvg = screen.queryByTestId('@fv/CircularLoader-svg-rounded');
  expect(svg).toBe(null);
  expect(roundedSvg).toBeDefined();
});
it('should render flat circular loader', () => {
  const screen = render(<Loader flat={true} />);

  const container = screen.queryByTestId('@fv/CircularLoader-container');
  expect(container).toBeDefined();

  const svg = screen.queryByTestId('@fv/CircularLoader-svg');
  const roundedSvg = screen.queryByTestId('@fv/CircularLoader-svg-rounded');
  expect(roundedSvg).toBe(null);
  expect(svg).toBeDefined();
});
it('should render flat circular progress', () => {
  const screen = render(<Loader progress={50} flat={true} />);

  const container = screen.queryByTestId('@fv/CircularLoader-container');
  expect(container).toBeDefined();

  const progressSvg = screen.queryByTestId('@fv/CircularLoader-svg-progress');
  expect(progressSvg).toBeDefined();
});

it('should render rounded bar loader', () => {
  const screen = render(<Loader variant="bar" />);

  const container = screen.queryByTestId('@fv/BarLoader-container');
  expect(container).toBeDefined();

  const svg = screen.queryByTestId('@fv/BarLoader-svg-rounded');
  expect(svg).toBeDefined();
});
it('should render flat bar loader', () => {
  const screen = render(<Loader variant="bar" flat={true} />);

  const container = screen.queryByTestId('@fv/BarLoader-container');
  expect(container).toBeDefined();

  const svg = screen.queryByTestId('@fv/BarLoader-svg');
  expect(svg).toBeDefined();
});
it('should render flat bar progress', () => {
  const screen = render(<Loader variant="bar" flat={true} progress={34} />);

  const container = screen.queryByTestId('@fv/BarLoader-container');
  expect(container).toBeDefined();

  const svg = screen.queryByTestId('@fv/BarLoader-svg-progress');
  expect(svg).toBeDefined();
});
