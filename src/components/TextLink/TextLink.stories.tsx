import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextLink from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'TextLink',
  component: TextLink,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = args => (
  <TextLink {...args} />
);
const TemplateManual: ComponentStory<typeof TextLink> = args => (
  <TextLink {...args} />
);

export const Manual = TemplateManual.bind({});
Manual.args = {
  name: 'Name',
  disabled: false,
  errorText: 'Sample error',
  placeholder: 'Placeholder',
  value: '',
  textLimit: 10,
};

export const Default = Template.bind({});
Default.args = {
  children: 'Some sample link',
};
