import React from 'react';
import { ScrollView, View } from 'react-native';
import Text, { IVariantBaseProps } from '../../../components/Text';
import Divider from '../Divider';

const figmaNameMap: Record<Readonly<IVariantBaseProps['variant']>, string> = {
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
const TextPreview = ({ color }: { color?: any }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 40,
        paddingBottom: 200,
      }}
    >
      <View>
        {Object.entries(figmaNameMap).map(([k, v]) => (
          <View key={k}>
            <Text variant={k as IVariantBaseProps['variant']} color={color}>
              {k}: {v}
            </Text>
            <Divider />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TextPreview;
