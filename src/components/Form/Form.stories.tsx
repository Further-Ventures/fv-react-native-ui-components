import React, {useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import * as yup from 'yup';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Input from '../Input';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import Form, {IFormRef} from '.';
import Button from '../Button';
import pkg from './package.json';

export default {
  title: 'Form',
  component: Form,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Form>;

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  checkbox: yup.boolean().required(),
  switch: yup.boolean().required(),
  multiselect: yup.array().min(1).required(),
  select: yup.string().required(),
  numberInput: yup.number().required(),
  combobox: yup.string().required(),
});

const Template: ComponentStory<typeof Form> = ({
  // removed onValidateAsync from props(web storybook error)
  onValidateAsync: _,
  onValidate: _1,
  ...rest
}) => {
  return (
    <Form {...rest}>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 8}}
        nestedScrollEnabled
      >
        <Input
          name="email"
          placeholder="Email"
          label="Email"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginVertical: 20}}
        />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Button type="submit">Submit</Button>
          <Button type="reset">Reset</Button>
        </View>
      </ScrollView>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
  initialValues: {
    email: 'myemail@example.com',
    password: 'mypassword',
    multiselect: ['one', 'two'],
    select: 'five',
    checkbox: true,
    radio: 'option 2',
    switch: true,
    slider: 6,
    rangeSlider: [5, 8],
    numberInput: 6,
    combobox: 'six',
  },
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
  validationSchema,
};

export const WithOnChangeValidation = Template.bind({});
WithOnChangeValidation.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
  onChange: (_, {isValid}) => console.log(isValid),
  validationSchema,
};

export const ErrorOnSubmit = Template.bind({});
ErrorOnSubmit.args = {
  onSubmit: (formData: any, {setErrors}) => {
    console.log('onSubmit external', formData);
    setErrors({email: 'This email is already taken'});
  },
  validationSchema,
};

export const ResetOnSubmit = Template.bind({});
ResetOnSubmit.args = {
  onSubmit: (formData: any, {reset}) => {
    console.log('onSubmit external', formData);
    reset();
  },
};

export const ExternalControl = () => {
  const formRef = useRef<IFormRef>(null);
  const [currentFormState, updateFormState]: [any, any] = useState({});

  const handleSetError = () => {
    formRef.current!.setErrors({email: 'This email is already taken'});
  };

  const handleResetForm = () => {
    formRef.current!.reset();
  };

  return (
    <Form
      ref={formRef}
      onSubmit={(formData: any) => console.log('onSubmit external', formData)}
      onChange={(formData: any) => {
        console.log('onChange external', formData);
        updateFormState(formData);
      }}
      onError={(errorData: any, formData: any) =>
        console.log('onError external', errorData, formData)
      }
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}
    >
      <Input
        name="email"
        placeholder="Email"
        label="Email"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginBottom: 20}}
      />
      {!!currentFormState.email && (
        <Input name="password" placeholder="Password" label="Password" />
      )}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button type="submit">Login</Button>
        <Button type="reset">Reset</Button>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button onPress={handleSetError}>Set extern error</Button>
        <Button onPress={handleResetForm}>Reset externally</Button>
      </View>
    </Form>
  );
};

export const DisabledSubmitButton = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Form
      onSubmit={(formData: any) => {
        console.log('onSubmit: ', formData);
      }}
      onChange={(formData: any, {isValid}) => {
        console.log('onChange: ', formData);
        console.log('isFormValid: ', isValid);
        setDisabled(!isValid);
      }}
      onError={(errorData: any, formData: any) =>
        console.log('onError: ', errorData, formData)
      }
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}
    >
      <Input
        name="email"
        placeholder="Email"
        label="Email"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginBottom: 20}}
      />
      <Input name="password" placeholder="Password" label="Password" />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button type="submit" disabled={disabled}>
          Login
        </Button>
        <Button type="reset">Reset</Button>
      </View>
    </Form>
  );
};
