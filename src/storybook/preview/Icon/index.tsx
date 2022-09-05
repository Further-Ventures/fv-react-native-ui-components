import React from 'react';
import {ScrollView, View} from 'react-native';
import Icon from '../../../components/Icon';
import * as FilledIcons from '../../../components/Icon/material-symbols/filled';

const IconPreview = ({filled = false}: {filled?: boolean}) => {
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
        style={{flexDirection: 'row'}}
      >
        {Object.keys(FilledIcons).map((name, i) => (
          <Icon name={name} key={name} filled={filled} />
        ))}
      </View>
    </ScrollView>
  );
};

export default IconPreview;
