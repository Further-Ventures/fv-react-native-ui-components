import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Toggle from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'Toggle',
  component: Toggle,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    onPress: {
      action: 'pressed the button',
    },
    type: {
      options: ['default', 'intermediate'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['checkbox', 'radio', 'checkboxCircle', 'switch'],
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
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ToggleComponent = Template.bind({});
ToggleComponent.args = {
  size: 'medium',
  variant: 'switch',
  type: 'intermediate',
  error: 'This is a hint text to help user',
  disabled: false,
  defaultChecked: false,
  verticalPosition: 'middle',
  horizontalPosition: 'left',
  heading: 'Circle Check heading',
  label: 'Label ',
  sentence: 'Write a toggle sentence here',
};
