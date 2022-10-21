import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import TextLink from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import { getIcons } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'TextLink',
  component: TextLink,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {},
  argTypes: {
    icon: getIcons(['download', 'arrow_back']),
    iconPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['p1-regular', 'p2-regular', 'description-medium', 'caption-regular'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    pkg,
    controls: { include: ['children', 'variant', 'disabled', 'icon', 'iconPosition'] },
  },
} as ComponentMeta<typeof TextLink>;

const TemplateManual: ComponentStory<typeof TextLink> = (args) => <TextLink {...args} />;

export const Manual = TemplateManual.bind({});
Manual.args = {
  children: 'Text link',
  variant: 'p1-regular',
  disabled: false,
  icon: '',
  iconPosition: 'right',
};

export const Disabled = TemplateManual.bind({});
Disabled.args = {
  children: 'Text link',
  variant: 'p1-regular',
  disabled: true,
  icon: '',
  iconPosition: 'right',
};

export const WithIcon = TemplateManual.bind({});
WithIcon.args = {
  children: 'Text link',
  variant: 'p1-regular',
  disabled: false,
  icon: 'download',
  iconPosition: 'right',
};
