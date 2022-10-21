import React, { useState } from 'react';
import Icon from '../Icon';
import { Alert, Platform } from 'react-native';
import CenterView from '../../storybook/preview/CenterView';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import PhoneInput from './index';
import pkg from './package.json';

const renderIcon =
  (name: string) =>
  // eslint-disable-next-line react/display-name
  ({ disabled }: { disabled: boolean }) =>
    <Icon width={40} height={30} color={'text-secondary'} disabled={disabled} name={name} />;

export default {
  title: 'PhoneInput',
  component: PhoneInput,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
    controls: { include: ['label', 'placeholder', 'mask', 'hint', 'error', 'disabled'] },
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
  },
} as ComponentMeta<typeof PhoneInput>;

const countries = [
  { icon: renderIcon('info'), prefix: '+917' },
  { icon: renderIcon('cancel'), prefix: '+380' },
];

const Template: ComponentStory<typeof PhoneInput> = (args) => {
  const [index, setIndex] = useState(0);
  return (
    <PhoneInput
      {...args}
      prefix={countries[index].prefix}
      icon={countries[index].icon}
      onSelectPress={() => {
        Alert.alert('Choose country', '', [
          { text: 'UAE', onPress: () => setIndex(0) },
          { text: 'UKR', onPress: () => setIndex(1) },
        ]);
      }}
    />
  );
};

export const Default = Template.bind({});
