import React, { useMemo, useState } from 'react';
import { FlatListProps, FlatList, ListRenderItem } from 'react-native';
import { ItemHeight } from '../../utils/itemSize';
import ListItem, { IBaseListItem } from './ListItem';
import { IVariantBaseProps } from '../Text';

export interface IListItem
  extends Omit<
    IBaseListItem,
    'selection' | 'checked' | 'itemHeight' | 'onlyCustomContent' | 'titleVariant'
  > {}

export interface IList extends Omit<FlatListProps<IListItem>, 'data' | 'renderItem'> {
  listItems: IListItem[] | string[];
  itemHeight?: ItemHeight;
  titleVariant?: IVariantBaseProps['variant'];
  selection?: 'none' | 'check-icon' | 'check-box';
  initialSelected?: number[];
  onSelect?: (selected: number[]) => void;
  onlyCustomContent?: boolean;
}

function isListItems(list: IListItem[] | string[]): list is IListItem[] {
  return list.length === 0 || (list as IListItem[])[0].title !== undefined;
}

const List: React.FC<IList> = ({
  listItems,
  itemHeight = 'thick',
  titleVariant,
  selection,
  initialSelected,
  onSelect,
  onlyCustomContent,
  ...rest
}) => {
  const items = useMemo(
    () => (isListItems(listItems) ? listItems : listItems.map((i) => ({ title: i }))),
    [listItems]
  );

  const [checkedItems, setCheckedItems] = useState<Set<string>>(
    new Set(initialSelected?.map((i) => items[i].title))
  );

  const onPressWrapper = (item: IListItem, index: number) => {
    if (onSelect) {
      if (selection && selection !== 'none') {
        const newCheckedItems = new Set(checkedItems);
        if (checkedItems.has(item.title)) {
          newCheckedItems.delete(item.title);
        } else {
          newCheckedItems.add(item.title);
        }
        setCheckedItems(newCheckedItems);

        // receive indexes of checked items
        const checkedIndexes = Array.from(newCheckedItems)
          .map((i) => items.findIndex((listItem) => listItem.title === i))
          .filter((i) => i >= 0);
        onSelect(checkedIndexes);
      } else {
        onSelect([index]);
      }
    }

    item.onPress?.();
  };

  const renderItem: ListRenderItem<IListItem> = ({ item, index }) => {
    return (
      <ListItem
        selection={selection}
        {...item}
        initialChecked={initialSelected?.includes(index)}
        itemHeight={itemHeight}
        titleVariant={titleVariant}
        onPress={() => onPressWrapper(item, index)}
        onlyCustomContent={onlyCustomContent}
      />
    );
  };

  return (
    <FlatList keyExtractor={(item) => item.title} data={items} renderItem={renderItem} {...rest} />
  );
};

export default List;
