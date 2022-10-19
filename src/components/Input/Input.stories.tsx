import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import Input from '.';
import Button from '../Button';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';
import Icon from '../Icon';

export default {
  title: 'Input',
  component: Input,
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
    label: 'Label',
    placeholder: 'Type something...',
    hint: 'This is a hint text to help user.',
    error: '',
    disabled: false,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  rightContent: <Icon name='info' height={20} width={20} color='text-primary' />,
};
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  leftContent: <Icon name='info' height={20} width={20} color='text-primary' />,
};
export const WithButton = Template.bind({});
WithButton.args = {
  rightContent: ({ hasError, disabled }) => (
    <Button
      variant={'outlined'}
      shape={'curved'}
      label={'Button CTA'}
      size={'mini'}
      error={hasError}
      disabled={disabled}
    />
  ),
};

export const Numeric = Template.bind({});
Numeric.args = {
  label: 'Card Number',
  placeholder: 'XXXX XXXX XXXX XXXX',
  mask: 'XXXX XXXX XXXX XXXX',
  leftContent: <Icon name='mastercard' height={24} width={35} />,
  rightContent: <Icon name='info' height={20} width={20} color='text-primary' />,
};

export const Date = Template.bind({});
Date.args = {
  label: 'Expiration date',
  placeholder: 'MM/YY',
  mask: 'XX/XX',
};

export const Prefix = Template.bind({});
Prefix.args = {
  prefix: 'AE',
  label: 'IBAN',
  placeholder: 'XX XXX XXXX XXXX XXXX',
  mask: 'XX XXX XXXX XXXX XXXX',
  leftContent: <Icon name='credit_card' height={24} width={35} color='text-primary' />,
};
