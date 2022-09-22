import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Elevation, { IElevationProps } from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform, Text, View } from 'react-native';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Elevation',
  component: Elevation,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: <Text>some text</Text>,
  },
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['variant']),
} as ComponentMeta<typeof Elevation>;

const Template: ComponentStory<typeof Elevation> = ({ children }: IElevationProps) => (
  <View
    style={{
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    }}
  >
    <Elevation
      variant='extraLight'
      style={{
        margin: 25,
        width: 216,
        height: 216,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      {children}
    </Elevation>
    <Elevation
      variant='light'
      style={{
        margin: 25,
        width: 216,
        height: 216,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      {children}
    </Elevation>
    <Elevation
      variant='medium'
      style={{
        margin: 25,
        width: 216,
        height: 216,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      {children}
    </Elevation>
    <Elevation
      variant='heavy'
      style={{
        margin: 25,
        width: 216,
        height: 216,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      {children}
    </Elevation>
    <Elevation
      variant='extraHeavy'
      style={{
        margin: 25,
        width: 216,
        height: 216,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      {children}
    </Elevation>
  </View>
);

export const ElevationComponent = Template.bind({});
