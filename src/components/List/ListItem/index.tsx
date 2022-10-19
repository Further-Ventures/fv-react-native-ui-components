import React, { useState } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import useStyles from './styles';
import { ItemHeight } from '../../../utils/itemSize';
import Checkbox from '../../Checkbox';
import Icon from '../../Icon';
import Text, { IVariantBaseProps } from '../../Text';

type ContentFunc = ({ disabled }: { disabled?: boolean; checked?: boolean }) => React.ReactNode;

export interface IBaseListItem {
  title: string;
  titleVariant?: IVariantBaseProps['variant'];
  subtitle?: string;
  label?: string;
  leftContent?: React.ReactNode | ContentFunc;
  rightContent?: React.ReactNode | ContentFunc;
  onPress?: () => void;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  initialChecked?: boolean;
  itemHeight: ItemHeight;
  selection?: 'none' | 'check-icon' | 'check-box';
  disabled?: boolean;
  // Disable text rendering. We still need the title prop because it's used as a key in the list
  onlyCustomContent?: boolean;
  dividerBottomEnabled?: boolean;
  dividerTopEnabled?: boolean;
}

const ListItem: React.FC<IBaseListItem> = ({
  label,
  title,
  titleVariant,
  subtitle,
  rightContent,
  leftContent,
  onPress,
  initialChecked,
  itemHeight,
  selection,
  disabled,
  onlyCustomContent,
  dividerBottomEnabled,
  dividerTopEnabled,
  ...rest
}) => {
  const styles = useStyles(itemHeight);
  const [isChecked, setIsChecked] = useState(initialChecked);

  const onPressWrapper = () => {
    selection && selection !== 'none' && setIsChecked(!isChecked);
    onPress?.();
  };

  const renderLeftContent = () => {
    if (selection === 'check-box') {
      return (
        <View style={[styles.leftContent, styles.checkbox]}>
          <Checkbox controlled checked={isChecked} onChange={onPressWrapper} disabled={disabled} />
        </View>
      );
    }
    if (leftContent) {
      return (
        <View style={!onlyCustomContent && styles.leftContent}>
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

  const renderDivider = () => <View style={styles.divider} />;

  return (
    <>
      {dividerTopEnabled && renderDivider()}
      <Pressable
        style={({ pressed }) => [styles.listItem, pressed && styles.pressed]}
        onPress={onPressWrapper}
        disabled={disabled}
        {...rest}
      >
        <View style={styles.content}>
          {renderLeftContent()}
          {!onlyCustomContent && (
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
              <Text
                variant={titleVariant || 'p2-regular'}
                color='text-secondary'
                disabled={disabled}
              >
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
          )}
        </View>
        {renderRightContent()}
      </Pressable>
      {dividerBottomEnabled && renderDivider()}
    </>
  );
};

export default ListItem;
