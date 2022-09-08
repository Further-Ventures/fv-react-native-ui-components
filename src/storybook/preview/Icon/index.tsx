import React from 'react';
import {ScrollView, View} from 'react-native';
import Icon, {IIconProps} from '../../../components/Icon';
import * as FilledIcons from '../../../components/Icon/material-symbols/filled';

const IconPreview = (props: IIconProps) => {
  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 40,
        paddingBottom: 200,
      }}
    >
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flexDirection: 'row', flexWrap: 'wrap'}}
      >
        {Object.keys(FilledIcons).map(name => (
          <Icon name={name} key={name} {...props} />
        ))}
      </View>
    </ScrollView>
  );
};

export default IconPreview;
