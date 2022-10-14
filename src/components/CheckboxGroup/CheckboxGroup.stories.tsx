import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import CheckboxGroup from '.';
import CenterView from '../../storybook/preview/CenterView';
import { checkboxArgTypes } from '../../storybook/utils';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: checkboxArgTypes,

  parameters: {
    pkg,
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />;

export const CheckboxGroupComponent = Template.bind({});
CheckboxGroupComponent.args = {
  header: { name: 'header', label: 'header' },
  checkboxes: [
    { name: 'first', label: 'first child' },
    { name: 'second', label: 'second child' },
  ],
  variant: 'default',
  size: 'medium',
  disabled: false,
  verticalPosition: 'top',
  horizontalPosition: 'left',
};
