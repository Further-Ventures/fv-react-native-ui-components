import React, { useState } from 'react';
import Icon from '../Icon';
import { Platform } from 'react-native';
import CenterView from '../../storybook/preview/CenterView';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import PhoneInput from './index';
import pkg from './package.json';

const renderIcon =
  (name: string) =>
  // eslint-disable-next-line react/display-name
  ({ disabled }: { disabled: boolean }) =>
    <Icon width={40} height={30} color={'text-secondary'} disabled={disabled} name={name} />;

const iconOptions = [
  { content: renderIcon('info'), value: '+917' },
  { content: renderIcon('cancel'), value: '+380' },
];

export default {
  title: 'PhoneInput',
  component: PhoneInput,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    label: 'Phone number',
    placeholder: '0000 0000',
    mask: 'XXXX XXXX',
    hint: 'This is a hint text to help user.',
    error: '',
    disabled: false,
    buttonText: '',
    items: iconOptions,
  },
} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) => {
  const [value, setValue] = useState('+917');
  return <PhoneInput {...args} phonePrefixValue={value} onPhonePrefixChange={setValue} />;
};

export const Default = Template.bind({});
