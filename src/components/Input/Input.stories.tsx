import React from 'react';
import { ComponentMeta } from '@storybook/react-native';
import Input from '.';
import Button from '../Button';
import CenterView from '../../storybook/preview/CenterView';
import { Platform, ScrollView, Text } from 'react-native';
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
    label: {
      control: {
        type: 'string',
      },
    },
    hint: {
      control: {
        type: 'string',
      },
    },
    error: {
      control: {
        type: 'string',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    sideContent: {
      control: {},
    },
    showLength: {},
  },
} as ComponentMeta<typeof Input>;

export const Default = () => {
  return (
    <ScrollView>
      <Text>{'A.2. Default'}</Text>
      <Input label={'Label'} placeholder={'Type something...'} />
      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
      />
      <Text>{'B.1. Focus(Mobile)'}</Text>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <Input label={'Label'} placeholder={'Type something...'} autoFocus={true} />
      <Text>{'C.1. Filled'}</Text>
      <Input label={'Label'} placeholder={'Type something...'} value={'Text Input'} />
      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
      />
      <Text>{'D.1.Disabled'}</Text>
      <Input label={'Label'} placeholder={'Type something...'} disabled={true} />

      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
      />

      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
      />

      <Text>{'E.2. Error Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
      />

      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
      />

      <Text>{'E.4. Error Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
      />
    </ScrollView>
  );
};

export const WithIcon = () => {
  return (
    <ScrollView>
      <Text>{'A.2. Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'B.1. Focus(Mobile)'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus={true}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'C.1. Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'D.1.Disabled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        disabled={true}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'E.2. Error Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
        rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
      />

      <Text>{'E.4. Error Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        leftContent={<Icon name='info' height={20} width={20} color='grey- main' />}
      />
    </ScrollView>
  );
};

export const WithButtons = () => {
  return (
    <ScrollView>
      <Text>{'A.2. Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        rightContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        rightContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'B.1. Focus(Mobile)'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus={true}
        rightContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'C.1. Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        rightContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        rightContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'D.1.Disabled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        disabled={true}
        rightContent={(hasError, disabled) => (
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
            error={hasError}
            disabled={disabled}
          />
        )}
      />

      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
        rightContent={(hasError, disabled) => (
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
            error={hasError}
            disabled={disabled}
          />
        )}
      />

      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
        rightContent={(hasError, disabled) => (
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
            error={hasError}
            disabled={disabled}
          />
        )}
      />

      <Text>{'E.2. Error Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        rightContent={(hasError, disabled) => (
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
            error={hasError}
            disabled={disabled}
          />
        )}
      />

      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
        rightContent={(hasError, disabled) => (
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
            error={hasError}
            disabled={disabled}
          />
        )}
      />

      <Text>{'E.4. Error Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        rightContent={(hasError, disabled) => (
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
            error={hasError}
            disabled={disabled}
          />
        )}
      />
    </ScrollView>
  );
};

export const WithMask = () => (
  <ScrollView>
    <Text>{'Numeric Input'}</Text>
    <Input
      label={'Card Number'}
      placeholder={'XXXX XXXX XXXX XXXX'}
      mask={'XXXX XXXX XXXX XXXX'}
      leftContent={<Icon name='mastercard' height={24} width={35} />}
      rightContent={<Icon name='info' height={20} width={20} color='grey-main' />}
    />
    <Text>{'Date Input'}</Text>
    <Input label={'Expiration date'} placeholder={'MM/YY'} mask={'XX/XX'} />
    <Text>{'Prefix'}</Text>
    <Input
      prefix={'AE'}
      label={'IBAN'}
      placeholder={'XX XXX XXXX XXXX XXXX'}
      mask={'XX XXX XXXX XXXX XXXX'}
    />
    <Text>{'Phone number prefix'}</Text>
    <Input prefix={'+971'} label={'Phone number'} placeholder={'0000 0000'} mask={'XXXX XXXX'} />
  </ScrollView>
);
