import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useFormContext } from '../Form';
import Checkbox, { ICheckbox } from '../Checkbox';

import useStyles from './styles';

export interface ICheckboxGroup
  extends Omit<ICheckbox, 'type' | 'heading' | 'sentence' | 'error' | 'checked' | 'label'> {
  header?: ICheckbox;
  checkboxes: Array<ICheckbox>;
}

const CheckboxGroup: React.FC<ICheckboxGroup> = ({
  name = 'unnamed',
  header,
  checkboxes = [],
  ...rest
}) => {
  const { updateFormValue } = useFormContext(name);

  const styles = useStyles();
  const [checked, setChecked] = useState<ICheckbox['name'][]>([]);
  const handleChange = (name: ICheckbox['name']) => {
    setChecked((prevState) => {
      if (prevState.includes(name)) {
        return prevState.filter((c) => c !== name);
      }
      return [...prevState, name];
    });
  };
  const handleHeaderChange = () => {
    if (checked.length < +checkboxes?.length) {
      setChecked(checkboxes?.map((checkbox) => checkbox.name) || []);
    } else {
      setChecked([]);
    }
  };
  useEffect(() => {
    updateFormValue(name, checked);
  }, [checked]);
  return (
    <View>
      <Checkbox
        controlled
        checked={checked.length > 0}
        type={checked.length === checkboxes?.length ? 'default' : 'intermediate'}
        onChange={handleHeaderChange}
        {...rest}
        {...header}
      />
      <View style={styles.checkboxes}>
        {checkboxes?.map((checkboxProps, i) => (
          <View key={i} style={styles.singleCheckbox}>
            <Checkbox
              controlled
              onChange={() => handleChange(checkboxProps.name)}
              checked={checked.includes(checkboxProps.name)}
              {...rest}
              {...checkboxProps}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default CheckboxGroup;
