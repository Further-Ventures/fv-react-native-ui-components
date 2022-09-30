import React from 'react';
import { Platform } from 'react-native';
import CenterView from '../../storybook/preview/CenterView';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import PasswordInput from '.';
import pkg from './package.json';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    showLength: {},
  },
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput label='Password' placeholder='Enter password' {...args} />
);
export const Default = Template.bind({});
export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint text to help user.',
};
export const Filled = Template.bind({});
Filled.args = {
  value: 'my password',
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const DisabledHint = Template.bind({});
DisabledHint.args = {
  hint: 'This is a hint text to help user.',
  disabled: true,
};
export const Error = Template.bind({});
Error.args = {
  error: 'This is an error text.',
};
export const ErrorHint = Template.bind({});
ErrorHint.args = {
  hint: 'This is a hint text to help user.',
  error: 'This is an error text.',
};
