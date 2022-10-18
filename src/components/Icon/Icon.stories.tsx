import React from 'react';
import { Platform } from 'react-native';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Icon from '.';
import CenterView from '../../storybook/preview/CenterView';
import IconView from '../../storybook/preview/Icon';
import { getColorList, getMaterialSymbols, getCustomIcons } from '../../storybook/utils';
import { buildExcludeArgTypes } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Icon',
  component: Icon,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {},
  argTypes: {
    color: getColorList(),
  },
  parameters: {
    pkg,
    controls: {
      include: ['width', 'filled', 'height', 'color', 'disabled', 'name'],
    },
  },
} as ComponentMeta<typeof Icon>;

const TemplatePreview: ComponentStory<typeof Icon> = (args) => <IconView {...args} />;
const TemplateManual: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Preview = TemplatePreview.bind({});
Preview.args = {
  filled: true,
  width: 24,
  height: 24,
  color: 'error-main',
  disabled: false,
};

export const MaterialSymbol = TemplateManual.bind({});
MaterialSymbol.args = {
  filled: true,
  width: 24,
  height: 24,
  name: 'home',
  color: 'text-primary',
  disabled: false,
};
MaterialSymbol.argTypes = {
  name: getMaterialSymbols(),
};

export const CustomIcons = TemplateManual.bind({});
CustomIcons.args = {
  width: 34,
  height: 24,
  name: 'paypal',
};
CustomIcons.argTypes = {
  name: getCustomIcons(),
  argTypes: buildExcludeArgTypes(['color', 'filled', 'disabled']),
};

export const WithSourceProp = TemplateManual.bind({});
WithSourceProp.args = {
  source: require('@material-symbols/svg-400/rounded/visibility_off-fill.svg').default,
  width: 24,
  height: 24,
  color: 'error-main',
  disabled: false,
};
