import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Text from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';
import useStyles from './styles';

export default {
  title: 'Text',
  component: Text,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: 'Text',
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Manual = Template.bind({});
Manual.args = {
  children: `You can manually set 'weight', 
  'size' and 'height'. \n
  If you don't assign 'height' and 'weight' props, 
  a proper value will be assigned automatically.\n
  Use 'variant' or manual sizing. But not both.`,
  size: 32,
  weight: '700',
  style: {
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
};

const figmaNameMap = {
  'h1-bold': 'Mobile/H1_ 48px/Bold',
  'h1-medium': 'Mobile/H1_ 48px/Medium',
  'h1-regular': 'Mobile/H1_ 48px/Regular',
  'h2-bold': 'Mobile/H2_ 32px/Bold',
  'h2-medium': 'Mobile/H2_ 32px/Medium',
  'h2-regular': 'Mobile/H2_ 32px/Regular',
  'h3-bold': 'Mobile/H3_ 24px/Bold',
  'h3-medium': 'Mobile/H3_ 24px/Medium',
  'h3-regular': 'Mobile/H3_ 24px/Regular',
  'h4-bold': 'Mobile/H4_ 20px/Bold',
  'h4-medium': 'Mobile/H4_ 20px/Medium',
  'h4-regular': 'Mobile/H4_ 20px/Regular',
  'p1-bold': 'Body/Paragraph 1_18px/Bold',
  'p1-medium': 'Body/Paragraph 1_18px/Medium',
  'p1-regular': 'Body/Paragraph 1_18px/Regular',
  'p2-bold': 'Body/Paragraph 2_16px/Bold',
  'p2-medium': 'Body/Paragraph 2_16px/Medium',
  'p2-regular': 'Body/Paragraph 2_16px/Regular',
  'description-bold': 'Body/Description_12px/Bold',
  'description-medium': 'Body/Description_12px/Medium',
  'caption-regular': 'Body/Caption_12px/Regular',
  'small-regular': 'Body/Small text_10px/Regular',
  'label-16-medium': 'UI Components/Button Label_16px/Medium',
  'label-14-medium': 'UI Components/Button Label_14px/Medium',
  'label-10-medium': 'UI Components/Button Label_10px/Medium',
  'label-14-regular': 'UI Components/Label_14px/Regular',
  'label-14-bold': 'UI Components/Label_14px/Bold',
};

export const H1Bold = Template.bind({});
H1Bold.args = {
  children: `h1-bold: ${figmaNameMap['h1-bold']}`,
  variant: 'h1-bold',
};

export const H1Medium = Template.bind({});
H1Medium.args = {
  children: `h1-medium: ${figmaNameMap['h1-medium']}`,
  variant: 'h1-medium',
};

export const H1Regular = Template.bind({});
H1Regular.args = {
  children: `h1-regular: ${figmaNameMap['h1-regular']}`,
  variant: 'h1-regular',
};

export const H2Bold = Template.bind({});
H2Bold.args = {
  children: `h2-bold: ${figmaNameMap['h2-bold']}`,
  variant: 'h2-bold',
};

export const H2Medium = Template.bind({});
H2Medium.args = {
  children: `h2-medium: ${figmaNameMap['h2-medium']}`,
  variant: 'h2-medium',
};

export const H2Regular = Template.bind({});
H2Regular.args = {
  children: `h2-regular: ${figmaNameMap['h2-regular']}`,
  variant: 'h2-regular',
};

export const H3Bold = Template.bind({});
H3Bold.args = {
  children: `h3-bold: ${figmaNameMap['h3-bold']}`,
  variant: 'h3-bold',
};

export const H3Medium = Template.bind({});
H3Medium.args = {
  children: `h3-medium: ${figmaNameMap['h3-medium']}`,
  variant: 'h3-medium',
};

export const H3Regular = Template.bind({});
H3Regular.args = {
  children: `h3-regular: ${figmaNameMap['h3-regular']}`,
  variant: 'h3-regular',
};

export const H4Bold = Template.bind({});
H4Bold.args = {
  children: `h4-bold: ${figmaNameMap['h4-bold']}`,
  variant: 'h4-bold',
};

export const H4Medium = Template.bind({});
H4Medium.args = {
  children: `h4-medium: ${figmaNameMap['h4-medium']}`,
  variant: 'h4-medium',
};

export const H4Regular = Template.bind({});
H4Regular.args = {
  children: `h4-regular: ${figmaNameMap['h4-regular']}`,
  variant: 'h4-regular',
};

export const P1Bold = Template.bind({});
P1Bold.args = {
  children: `p1-bold: ${figmaNameMap['p1-bold']}`,
  variant: 'p1-bold',
};

export const P1Medium = Template.bind({});
P1Medium.args = {
  children: `p1-medium: ${figmaNameMap['p1-medium']}`,
  variant: 'p1-medium',
};

export const P1Regular = Template.bind({});
P1Regular.args = {
  children: `p1-regular: ${figmaNameMap['p1-regular']}`,
  variant: 'p1-regular',
};

export const P2Bold = Template.bind({});
P2Bold.args = {
  children: `p2-bold: ${figmaNameMap['p2-bold']}`,
  variant: 'p2-bold',
};

export const P2Medium = Template.bind({});
P2Medium.args = {
  children: `p2-medium: ${figmaNameMap['p2-medium']}`,
  variant: 'p2-medium',
};

export const P2Regular = Template.bind({});
P2Regular.args = {
  children: `p2-regular: ${figmaNameMap['p2-regular']}`,
  variant: 'p2-regular',
};

export const DescriptionBold = Template.bind({});
DescriptionBold.args = {
  children: `description-bold: ${figmaNameMap['description-bold']}`,
  variant: 'description-bold',
};

export const DescriptionMedium = Template.bind({});
DescriptionMedium.args = {
  children: `description-medium: ${figmaNameMap['description-medium']}`,
  variant: 'description-medium',
};
export const CaptionRegular = Template.bind({});
CaptionRegular.args = {
  children: `caption-regular: ${figmaNameMap['caption-regular']}`,
  variant: 'caption-regular',
};
export const SmallRegular = Template.bind({});
SmallRegular.args = {
  children: `small-regular: ${figmaNameMap['small-regular']}`,
  variant: 'small-regular',
};

export const Label16Medium = Template.bind({});
Label16Medium.args = {
  children: `label-16-medium: ${figmaNameMap['label-16-medium']}`,
  variant: 'label-16-medium',
};
export const Label14Medium = Template.bind({});
Label14Medium.args = {
  children: `label-14-medium: ${figmaNameMap['label-14-medium']}`,
  variant: 'label-14-medium',
};
export const Label10Medium = Template.bind({});
Label10Medium.args = {
  children: `label-10-medium: ${figmaNameMap['label-10-medium']}`,
  variant: 'label-10-medium',
};
export const Label14Regular = Template.bind({});
Label14Regular.args = {
  children: `label-14-regular: ${figmaNameMap['label-14-regular']}`,
  variant: 'label-14-regular',
};
export const Label14Bold = Template.bind({});
Label14Bold.args = {
  children: `label-14-bold: ${figmaNameMap['label-14-bold']}`,
  variant: 'label-14-bold',
};
