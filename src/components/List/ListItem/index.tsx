import React, { useState } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import useStyles from './styles';
import { ItemHeight } from '../../../utils/itemSize';
import Checkbox from '../../Checkbox';
import Icon from '../../Icon';
import Text from '../../Text';

type ContentFunc = ({ disabled }: { disabled?: boolean; checked?: boolean }) => React.ReactNode;

export interface IBaseListItem {
  title: string;
  subtitle?: string;
  label?: string;
  leftContent?: React.ReactNode | ContentFunc;
  rightContent?: React.ReactNode | ContentFunc;
  onPress?: () => void;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  checked?: boolean;
  itemHeight: ItemHeight;
  selection?: 'none' | 'check-icon' | 'check-box';
  disabled?: boolean;
}

const ListItem: React.FC<IBaseListItem> = ({
  label,
  title,
  subtitle,
  rightContent,
  leftContent,
  onPress,
  checked,
  itemHeight,
  selection,
  disabled,
  ...rest
}) => {
  const styles = useStyles(itemHeight);
  const [isChecked, setIsChecked] = useState(checked);

  const onPressWrapper = () => {
    selection && selection !== 'none' && setIsChecked(!isChecked);
    onPress?.();
  };

  const renderLeftContent = () => {
    if (selection === 'check-box') {
      return (
        <View style={styles.leftContent}>
          <Checkbox controlled checked={isChecked} onChange={onPressWrapper} disabled={disabled} />
        </View>
      );
    }
    if (leftContent) {
      return (
        <View style={styles.leftContent}>
          {typeof leftContent === 'function'
            ? leftContent({ disabled, checked: isChecked })
            : leftContent}
        </View>
      );
    }
    return null;
  };

  const renderRightContent = () => {
    if (selection === 'check-icon' && isChecked) {
      return <Icon height={18} color='grey-dark' name='check' />;
    }
    if (rightContent) {
      if (typeof rightContent === 'function') {
        return rightContent({ disabled, checked: isChecked });
      }
      return rightContent;
    }
    return null;
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.listItem, pressed && styles.pressed]}
      onPress={onPressWrapper}
      disabled={disabled}
      {...rest}
    >
      <View style={styles.content}>
        {renderLeftContent()}
        <View style={styles.textContent}>
          {!!label && (
            <Text
              variant='caption-regular'
              color='text-hint'
              disabled={disabled}
              style={styles.label}
            >
              {label}
            </Text>
          )}
          <Text variant='p2-medium' color='text-secondary' disabled={disabled}>
            {title}
          </Text>
          {!!subtitle && (
            <Text
              variant='label-14-regular'
              color='text-hint'
              disabled={disabled}
              style={styles.subtitle}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      {renderRightContent()}
    </Pressable>
  );
};

export default ListItem;
