import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Radio from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'Radio',
  component: Radio,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'select',
      },
    },
    verticalPosition: {
      options: ['top', 'middle'],
      control: {
        type: 'select',
      },
    },
    horizontalPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RadioComponent = Template.bind({});
RadioComponent.args = {
  size: 'medium',
  error: 'This is a hint text to help user',
  disabled: false,
  defaultChecked: true,
  verticalPosition: 'top',
  horizontalPosition: 'left',
  heading: 'Check heading',
  label: 'Label here',
  sentence: 'Write  sentence here',
};
