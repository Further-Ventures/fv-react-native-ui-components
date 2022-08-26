import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Text from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';
import InfoIcon from '../../storybook/preview/Icons/InfoIcon';

export default {
  title: 'Text',
  component: Text,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: 'Text',
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const H1Bold = Template.bind({});
H1Bold.args = {
  children: 'H1 Bold',
  variant: 'h1-bold',
};

export const H1Medium = Template.bind({});
H1Medium.args = {
  children: 'H1 Medium',
  variant: 'h1-medium',
};

export const H1Regular = Template.bind({});
H1Regular.args = {
  children: 'H1 Regular',
  variant: 'h1-regular',
};
