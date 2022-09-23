import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Loader from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Loader',
  component: Loader,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    }}
  >
    <Loader {...args} />
  </View>
);

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {
  variant: 'circular',
};
