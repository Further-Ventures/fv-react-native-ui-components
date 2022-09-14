import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import Input from '.';
import Button from '../Button';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, ScrollView, Text, View} from 'react-native';
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
      type: 'string',
    },
    hint: {
      type: 'string',
    },
    error: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
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
      <View style={{height: 20}} />
      <Text>{'A.2. Default'}</Text>
      <Input label={'Label'} placeholder={'Type something...'} />
      <View style={{height: 20}} />
      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
      />
      <View style={{height: 20}} />
      <Text>{'B.1. Focus(Mobile)'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        autoFocus={true}
      />
      <View style={{height: 20}} />
      <Text>{'C.1. Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
      />
      <View style={{height: 20}} />
      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
      />
      <View style={{height: 20}} />
      <Text>{'D.1.Disabled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        disabled={true}
      />
      <View style={{height: 20}} />
      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
      />
      <View style={{height: 20}} />
      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
      />
      <View style={{height: 20}} />
      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
      />
    </ScrollView>
  );
};

export const WithIcon = () => {
  return (
    <ScrollView>
      <View style={{height: 20}} />
      <Text>{'A.2. Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'B.1. Focus(Mobile)'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        autoFocus={true}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'C.1. Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'D.1.Disabled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        disabled={true}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
      <View style={{height: 20}} />
      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
        sideContent={<Icon name="info" height={20} width={20} />}
      />
    </ScrollView>
  );
};

export const WithButtons = () => {
  return (
    <ScrollView>
      <View style={{height: 20}} />
      <Text>{'A.2. Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'B.1. Focus(Mobile)'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        autoFocus={true}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'C.1. Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'D.1.Disabled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        disabled={true}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
      <View style={{height: 20}} />
      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
        sideContent={
          <Button
            variant={'outlined'}
            shape={'curved'}
            label={'Button CTA'}
            size={'mini'}
          />
        }
      />
    </ScrollView>
  );
};
