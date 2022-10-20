import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Checkbox from '.';
import CenterView from '../../storybook/preview/CenterView';
import { checkboxArgTypes } from '../../storybook/utils';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'Checkbox',
  component: Checkbox,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: checkboxArgTypes,
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
  error: '',
  disabled: false,
  checked: false,
  verticalPosition: 'top',
  horizontalPosition: 'left',
  heading: 'Check heading',
  label: 'Label here',
  sentence: 'Write  sentence here',
  controlled: true,
};
CheckboxComponent.parameters = {
  controls: {
    include: [
      'variant',
      'type',
      'size',
      'error',
      'disabled',
      'checked',
      'verticalPosition',
      'horizontalPosition',
      'heading',
      'label',
      'sentence',
    ],
  },
};
