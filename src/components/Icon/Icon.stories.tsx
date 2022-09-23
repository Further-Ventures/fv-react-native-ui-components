import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Icon from '.';
import CenterView from '../../storybook/preview/CenterView';
import IconView from '../../storybook/preview/Icon';
import { getColorList } from '../../storybook/utils';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'Icon',
  component: Icon,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: 'Icon',
  },
  argTypes: {
    color: {
      options: getColorList(),
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    pkg,
    controls: {
      include: ['width', 'filled', 'height', 'color', 'disabled'],
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <IconView {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  filled: true,
  width: 24,
  height: 24,
  color: 'error-main',
  disabled: false,
};
