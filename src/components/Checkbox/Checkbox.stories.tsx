import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Checkbox from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Checkbox',
  component: Checkbox,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    onPress: {
      action: 'pressed the button',
    },
    size: {
      options: ['small', 'medium'],
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
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <Checkbox {...args} />
);

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {
  size: 'medium',
  variant: 'default',
  type: 'default',
  error: 'This is a hint text to help user',
  disabled: false,
  checked: false,
  verticalPosition: 'top',
  heading: 'Circle Check heading',
  label:
    'Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label ',
  sentence:
    'Write a Radio button sentence here Write a Radio button sentence here Write a Radio button sentence here',
};
