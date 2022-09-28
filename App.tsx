import React from 'react';
import StorybookUIRoot from './.ondevice/Storybook';
import { MenuProvider } from 'react-native-popup-menu';

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <MenuProvider>
      <StorybookUIRoot />
    </MenuProvider>
  );
};
