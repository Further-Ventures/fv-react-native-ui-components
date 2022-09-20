import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Icon, { IIconProps } from '../../../components/Icon';
import Divider from '../Divider';
import * as filledIcons from '../../../components/Icon/material-symbols/filled';
import * as social from '../../../components/Icon/custom/social/colorfull';
import * as payment from '../../../components/Icon/custom/payment';
import * as other from '../../../components/Icon/custom/other';

const IconPreview = (props: IIconProps) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 40,
        paddingBottom: 200,
      }}
    >
      <Text>Material Symbols</Text>
      <View style={styles.row}>
        {Object.keys(filledIcons).map((name) => (
          <Icon {...props} name={name} key={name} />
        ))}
      </View>
      <Divider />
      <Text>Social icons (with color prop)</Text>
      <View style={styles.row}>
        {Object.keys(social).map((name) => (
          <Icon {...props} name={name} key={name} />
        ))}
      </View>
      <Divider />
      <Text>Social icons (without color prop)</Text>

      <View style={styles.row}>
        {Object.keys(social).map((name) => (
          <Icon name={name} key={name} />
        ))}
      </View>
      <Divider />
      <Text>Payment icons</Text>

      <View style={styles.row}>
        {Object.keys(payment).map((name) => (
          <Icon name={name} key={name} width={34} height={24} />
        ))}
      </View>

      <Divider />
      <Text>Other icons</Text>

      <View style={styles.row}>
        {Object.keys(other).map((name) => (
          <Icon name={name} key={name} />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
});
export default IconPreview;
