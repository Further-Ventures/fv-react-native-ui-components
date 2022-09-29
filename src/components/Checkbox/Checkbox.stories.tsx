import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Checkbox from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'Checkbox',
  component: Checkbox,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['default', 'intermediate'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['default', 'circle'],
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {
  variant: 'default',
  type: 'default',
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
