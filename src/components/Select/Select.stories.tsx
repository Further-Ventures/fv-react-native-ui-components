import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Select, { ISelect } from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
  { label: 'Option 5', value: 5 },
];

export default {
  title: 'Select',
  component: Select,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
  argTypes: {
    itemWidth: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    itemHeight: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<number | undefined>(undefined);
  return <Select {...args} label='Label' items={options} value={value} onChange={setValue} />;
};

const baseArgs: Partial<ISelect<unknown>> = {
  itemWidth: 'medium',
  itemHeight: 'thick',
};

export const Default = Template.bind({});
Default.args = {
  ...baseArgs,
};

export const Hint = Template.bind({});
Hint.args = {
  ...baseArgs,
  hint: 'This is a hint text to help user.',
};

export const Error = Template.bind({});
Error.args = {
  ...baseArgs,
  error: 'This is a error.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...baseArgs,
  disabled: true,
};
