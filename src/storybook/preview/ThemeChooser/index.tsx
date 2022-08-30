import * as React from 'react';
import {ThemeType, useTheme} from '../../../components/Theme';
import Button from '../../../components/Button';
import {ScrollView, View} from 'react-native';
import Divider from '../Divider';
import Text from '../../../components/Text';
import {useEffect} from 'react';

const ThemePreview = ({theme}: {theme: ThemeType}) => {
  const {updateTheme} = useTheme();

  useEffect(() => {
    updateTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 40,
        paddingBottom: 200,
      }}
    >
      {Object.entries(theme).map(t => {
        const [header, colors] = t;
        if (['fontFamily', 'gradient'].includes(header)) return null;
        return (
          <>
            <View style={{marginTop: 20}}>
              <Text variant="h3-bold">{header}</Text>
              {Object.entries(colors).map(c => (
                <>
                  <View style={{marginTop: 10}}>
                    <Text variant="h4-medium" color={'grey'}>
                      {c[0]}: {JSON.stringify(c[1])}
                    </Text>
                    <View
                      style={{
                        width: 30,
                        height: 20,
                        backgroundColor: c[1] as string,
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}
                    />
                  </View>
                </>
              ))}
            </View>
            <Divider />
          </>
        );
      })}
    </ScrollView>
  );
};

export default ThemePreview;
