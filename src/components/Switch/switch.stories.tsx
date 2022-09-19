import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Switch from '.';
import CenterView from '../../storybook/preview/CenterView';
import pkg from './package.json';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'small',
  disabled: false,
};
