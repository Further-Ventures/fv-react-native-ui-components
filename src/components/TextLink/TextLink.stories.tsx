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
  argTypes: {
    icon: {
      options: ['default', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
  },
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
  children: 'Name',
  disabled: false,
  icon: 'default',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text link',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Text link',
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  icon: 'left',
  children: 'Text link',
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  icon: 'right',
  children: 'Text link',
};
