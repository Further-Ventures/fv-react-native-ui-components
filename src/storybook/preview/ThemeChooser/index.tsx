import * as React from 'react';
import {ThemeType, useTheme} from '../../../components/Theme';
import Button from '../../../components/Button';
import {Text, ScrollView} from 'react-native';
import Title from '../Title';
import Divider from '../Divider';
import Form from '../../../components/Form';
import Input from '../../../components/Input';
import {useEffect} from 'react';

const ThemePreview = ({theme}: {theme: ThemeType}) => {
  const {updateTheme} = useTheme();

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 40,
        paddingBottom: 200,
      }}
    >
      {/* Button */}
      <Title>Button</Title>
      <Button>Button</Button>
      <Divider />
      <Button color="secondary">Button</Button>
      <Divider />
      <Button variant="outlined">Button</Button>
      <Divider />
      <Button variant="outlined" color="secondary">
        Button
      </Button>
      <Divider />

      {/* Input */}
      <Title>Input</Title>
      <Input label="Color primary" placeholder="some@mail.com" />
      <Divider />
      <Input
        label="Color secondary"
        placeholder="some@mail.com"
        color="secondary"
      />
      <Divider />
      <Input
        label="Error state"
        placeholder="some@mail.com"
        error="This is an error"
      />
      <Divider />
      <Input label="Hint" placeholder="some@mail.com" hint="This is a hint" />
    </ScrollView>
  );
};

export default ThemePreview;
