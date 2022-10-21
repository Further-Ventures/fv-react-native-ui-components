import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import SearchBar from '.';
import CenterView from '../../storybook/preview/CenterView';
import SearchBarPreview from '../../storybook/preview/SearchBar';

import pkg from './package.json';

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes: {},
  decorators: [CenterView],
  args: {},
  parameters: {
    pkg,
    controls: { include: ['hint', 'placeholder', 'dropdownItems', 'disabled', 'loading'] },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBarPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  hint: 'This is a hint text',
  placeholder: 'Placeholder',
  dropdownItems: [
    { icon: 'account_circle', title: 'Item 1' },
    { icon: 'account_circle', title: 'Item 2' },
    { icon: 'account_circle', title: 'Item 3' },
  ],
  disabled: false,
  loading: true,
};
