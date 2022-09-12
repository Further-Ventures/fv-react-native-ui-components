import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Elevation from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, Text, View} from 'react-native';
import pkg from './package.json';

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
} as ComponentMeta<typeof Elevation>;

const Template: ComponentStory<typeof Elevation> = ({children}) => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    }}
  >
    <Elevation
      variant="extraLight"
      margin={25}
      width={216}
      height={216}
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
    >
      {children}
    </Elevation>
    <Elevation
      variant="light"
      margin={25}
      width={216}
      height={216}
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
    >
      {children}
    </Elevation>
    <Elevation
      variant="medium"
      margin={25}
      width={216}
      height={216}
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
    >
      {children}
    </Elevation>
    <Elevation
      variant="heavy"
      margin={25}
      width={216}
      height={216}
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
    >
      {children}
    </Elevation>
    <Elevation
      variant="extraHeavy"
      margin={25}
      width={216}
      height={216}
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
    >
      {children}
    </Elevation>
  </View>
);

export const ElevationComponent = Template.bind({});
