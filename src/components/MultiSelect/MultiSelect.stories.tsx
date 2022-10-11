import { Platform } from 'react-native';
import CenterView from '../../storybook/preview/CenterView';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import MultiSelect from './index';
import pkg from './package.json';
import React, { useState } from 'react';

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
  { label: 'Option 5', value: 5 },
];

export default {
  title: 'MultiSelect',
  component: MultiSelect,
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
    selection: {
      control: { type: 'select' },
      options: ['check-icon', 'check-box'],
    },
    selectedType: {
      control: { type: 'select' },
      options: ['text', 'tag'],
    },
  },
  args: {
    itemWidth: 'large',
    itemHeight: 'thick',
    selectedType: 'text',
    selection: 'check-icon',
    label: 'Label',
  },
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args) => {
  const [values, setValues] = useState<number[] | undefined>(undefined);
  return <MultiSelect {...args} items={options} values={values} onChange={setValues} />;
};

export const Default = Template.bind({});

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint text to help user.',
};

export const Error = Template.bind({});
Error.args = {
  error: 'This is a error.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
