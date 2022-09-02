import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Icon from '.';
import CenterView from '../../storybook/preview/CenterView';
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
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const IconExample = Template.bind({});
IconExample.args = {
  variant: 'filled',
  name: 'settings',
};
