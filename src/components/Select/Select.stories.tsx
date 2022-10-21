import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Select from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';
import Icon from '../Icon';
import { buildExcludeArgTypes } from '../../storybook/utils';

const renderIcon =
  (name: string) =>
  // eslint-disable-next-line react/display-name
  ({ disabled }: { disabled: boolean }) =>
    <Icon width={40} height={30} color={'text-secondary'} disabled={disabled} name={name} />;

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
  { label: 'Option 5', value: 5 },
];

const iconOptions = [
  { content: renderIcon('info'), value: 1 },
  { content: renderIcon('cancel'), value: 2 },
  { content: renderIcon('error'), value: 3 },
  { content: renderIcon('info'), value: 4 },
  { content: renderIcon('cancel'), value: 5 },
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
    ...buildExcludeArgTypes([
      'leftContent',
      'rightContent',
      'onChange',
      'style',
      'showLength',
      'currentValueLength',
      'maxValueLength',
      'onVisibleChange',
      'isFocusAnimationEnabled',
      'clearFormValueOnUnmount',
      'name',
      'size',
      'value',
    ]),
  },
  args: {
    itemWidth: 'medium',
    itemHeight: 'thick',
    label: 'Label',
    disabled: false,
    items: options,
    dividerBottomEnabled: false,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<number | unknown>(args.value);
  return <Select {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint text to help user.',
};

export const Error = Template.bind({});
Error.args = {
  error: 'This is an error.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const OnlyIcons = Template.bind({});
OnlyIcons.args = {
  items: iconOptions,
  value: 1,
};
