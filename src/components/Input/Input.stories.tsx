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
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'B.1. Focus(Mobile)'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus={true}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'C.1. Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'D.1.Disabled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        disabled={true}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'E.2. Error Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
      />

      <Text>{'E.4. Error Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        sideContent={<Icon name='info' height={20} width={20} color='grey' />}
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
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'A.1. Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'B.1. Focus(Mobile)'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus={true}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'C.1. Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'C.2. Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'D.1.Disabled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        disabled={true}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'D.2.Disabled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        disabled={true}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'E.1. Error Default'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        error={'This is an error text to help user.'}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'E.2. Error Default with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'E.3. Error Filled'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        error={'This is an error text to help user.'}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />

      <Text>{'E.4. Error Filled with hint text'}</Text>
      <Input
        label={'Label'}
        placeholder={'Type something...'}
        value={'Text Input'}
        hint={'This is a hint text to help user.'}
        error={'This is an error text to help user.'}
        sideContent={
          <Button variant={'outlined'} shape={'curved'} label={'Button CTA'} size={'mini'} />
        }
      />
    </ScrollView>
  );
};
