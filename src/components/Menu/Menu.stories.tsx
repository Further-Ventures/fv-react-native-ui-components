import React from 'react';
import { Dimensions, Platform, View } from 'react-native';
import CenterView from '../../storybook/preview/CenterView';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import pkg from './package.json';
import Menu from '.';
import { IListItem } from '../List';
import Icon from '../Icon';

const dimensions = Dimensions.get('window');

export default {
  title: 'Menu',
  component: Menu,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
  argTypes: {
    itemWidth: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    itemHeight: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
    selection: {
      control: { type: 'select' },
      options: ['none', 'check-icon', 'check-box'],
    },
  },
  args: {
    itemWidth: 'medium',
    itemHeight: 'thick',
    onSelect: (selected) => alert(`selected index: ${selected}`),
  },
} as ComponentMeta<typeof Menu>;

const renderIcon =
  (name: string) =>
  // eslint-disable-next-line react/display-name
  (hasError: boolean, disabled: boolean) =>
    <Icon color={'text-secondary'} disabled={disabled} name={name} />;

const baseData = { listItems: ['Save', 'Restore', 'Delete', 'Undo'] };
const iconsData: { listItems: IListItem[] } = {
  listItems: [
    { title: 'Save', leftContent: renderIcon('info') },
    { title: 'Restore', leftContent: renderIcon('cancel') },
    { title: 'Delete', leftContent: renderIcon('error') },
    { title: 'Disabled', leftContent: renderIcon('error'), disabled: true },
  ],
};

const centerPosition = {
  style: {
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const;

const bottomPosition = {
  style: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
} as const;

const topPosition = {
  style: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
} as const;

const Template: ComponentStory<typeof Menu> = (args) => {
  const { style, ...rest } = args;
  return (
    <View style={[style, Platform.OS === 'web' ? dimensions : { width: '100%', height: '100%' }]}>
      <Menu {...rest}>
        <View style={{ backgroundColor: 'red', width: 50, height: 50 }} />
      </Menu>
    </View>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...centerPosition,
  ...baseData,
};

export const Top = Template.bind({});
Top.args = {
  ...topPosition,
  ...baseData,
};

export const Bottom = Template.bind({});
Bottom.args = {
  ...bottomPosition,
  ...baseData,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...centerPosition,
  ...baseData,
  ...iconsData,
};

export const BigList = Template.bind({});
BigList.args = {
  ...centerPosition,
  listItems: Array.from(Array(30).keys()).map((v) => 'Option' + v),
};

export const Selection = Template.bind({});
Selection.args = {
  ...centerPosition,
  ...baseData,
  selection: 'check-icon',
};

export const Preselected = Template.bind({});
Preselected.args = {
  ...centerPosition,
  ...baseData,
  selection: 'check-icon',
  initialSelected: [0, 2],
};

export const OnlyIcons = Template.bind({});
OnlyIcons.args = {
  onlyCustomContent: true,
  ...centerPosition,
  ...iconsData,
};
