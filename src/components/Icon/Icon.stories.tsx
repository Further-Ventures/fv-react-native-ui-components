import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Icon from '.';
import CenterView from '../../storybook/preview/CenterView';
import IconView from '../../storybook/preview/Icon';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Icon',
  component: Icon,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: 'Icon',
  },
  parameters: {
    pkg,
    controls: {
      include: ['width', 'filled', 'height', 'color'],
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <IconView {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
  width: 24,
  height: 24,
  color: 'gray',
};

export const Unfilled = Template.bind({});
Unfilled.args = {
  filled: false,
  width: 24,
  height: 24,
  color: 'gray',
};
