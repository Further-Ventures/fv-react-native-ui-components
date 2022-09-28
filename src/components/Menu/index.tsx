import React from 'react';
import {
  Menu as PMenu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import { IItemData, IMenu } from './types';
import useStyles, { getHeight } from './styles';
import Icon from '../Icon';
import Text, { IConditionalTextProps } from '../Text';
import { ScrollView, TextStyle, useWindowDimensions } from 'react-native';

const Menu: React.FC<IMenu> = ({
  style,
  trigger,
  placement = 'bottom',
  itemWidth,
  itemHeight,
  data,
  onSelect,
  renderItem: customRenderItem,
}) => {
  const styles = useStyles(itemWidth, itemHeight);

  const renderItem = ({ label, iconProps, labelProps, disabled }: IItemData) => {
    const textProps: IConditionalTextProps | { size: TextStyle['fontSize'] } = {
      size: 16,
      ...labelProps,
    };
    return (
      <MenuOption
        key={label}
        style={styles.item}
        disabled={disabled}
        onSelect={() => onSelect(label)}
      >
        {iconProps && (
          <Icon
            key={label}
            width={20}
            style={styles.icon}
            color='text-primary'
            {...iconProps}
            disabled={disabled}
          />
        )}
        <Text {...textProps} disabled={disabled}>
          {label}
        </Text>
      </MenuOption>
    );
  };
  const { height } = useWindowDimensions();
  const renderItems = () => {
    const render = customRenderItem ? customRenderItem : renderItem;
    const items = data.map((item) => render(typeof item === 'string' ? { label: item } : item));
    const useScroll = data.length * getHeight(itemHeight) > height / 1.5;
    if (useScroll) {
      return <ScrollView style={{ maxHeight: height / 1.5 }}>{items}</ScrollView>;
    }
    return items;
  };

  return (
    <PMenu
      renderer={renderers.Popover}
      style={style}
      rendererProps={{ preferredPlacement: placement }}
    >
      <MenuTrigger>{trigger}</MenuTrigger>
      <MenuOptions>{renderItems()}</MenuOptions>
    </PMenu>
  );
};

export default Menu;
