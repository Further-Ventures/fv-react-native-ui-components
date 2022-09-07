import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Elevation from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, Text} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Elevation',
  component: Elevation,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: <Text>some text</Text>,
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Elevation>;

const Template: ComponentStory<typeof Elevation> = args => (
  <Elevation
    {...args}
    style={{
      margin: 20,
      width: 216,
      height: 216,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    }}
  />
);

export const ElevationExtraLight = Template.bind({});
ElevationExtraLight.args = {
  variant: 'extraLight',
};

export const ElevationLight = Template.bind({});
ElevationLight.args = {
  variant: 'light',
};

export const ElevationMedium = Template.bind({});
ElevationMedium.args = {
  variant: 'medium',
};

export const ElevationHeavy = Template.bind({});
ElevationHeavy.args = {
  variant: 'heavy',
};

export const ElevationExtraHeavy = Template.bind({});
ElevationExtraHeavy.args = {
  variant: 'extraHeavy',
};
