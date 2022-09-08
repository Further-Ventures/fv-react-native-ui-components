import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Text from '.';
import CenterView from '../../storybook/preview/CenterView';
import TextView from '../../storybook/preview/Text';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Text',
  component: Text,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: 'Text',
  },
  parameters: {
    pkg,
    controls: {
      exclude: ['variant'],
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = () => <TextView />;
const TemplateManual: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Manual = TemplateManual.bind({});
Manual.args = {
  children: `You can manually set 'color', 'weight', 'size' and 'height'. 

If you don't assign 'height' and 'weight' props, a proper value will be assigned automatically.
Use 'variant' or manual sizing. But not both.`,
  size: 24,
  weight: '700',
  color: 'gray',
};

export const Variants = Template.bind({});
Variants.args = {};
