import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import TextArea from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'TextArea',
  component: TextArea,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Manual = Template.bind({});
Manual.args = {
  name: 'Name',
  disabled: false,
  errorText: 'Sample error',
  placeholder: 'Placeholder',
  textLimit: 10,
};

export const WithHint = Template.bind({});
WithHint.args = {
  textLimit: 100,
};

export const WithError = Template.bind({});
WithError.args = {
  errorText: 'Sample error',
  textLimit: 100,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
