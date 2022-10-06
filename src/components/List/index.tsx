import React, { useMemo, useState } from 'react';
import { FlatListProps, FlatList, ListRenderItem } from 'react-native';
import { ItemHeight } from '../../utils/itemSize';
import ListItem, { IBaseListItem } from './ListItem';

export interface IListItem extends Omit<IBaseListItem, 'selection' | 'checked' | 'itemHeight'> {}

export interface IList extends Omit<FlatListProps<IListItem>, 'data' | 'renderItem'> {
  listItems: IListItem[] | string[];
  itemHeight?: ItemHeight;
  selection?: 'none' | 'check-icon' | 'check-box';
  onSelect?: (selected: number[]) => void;
}

function isListItems(list: IListItem[] | string[]): list is IListItem[] {
  return list.length === 0 || (list as IListItem[])[0].title !== undefined;
}

const List: React.FC<IList> = ({
  listItems,
  itemHeight = 'thick',
  selection,
  onSelect,
  ...rest
}) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const items = useMemo(
    () => (isListItems(listItems) ? listItems : listItems.map((i) => ({ title: i }))),
    [listItems]
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
        itemHeight={itemHeight}
        onPress={() => onPressWrapper(item, index)}
      />
    );
  };

  return (
    <FlatList keyExtractor={(item) => item.title} data={items} renderItem={renderItem} {...rest} />
  );
};

export default List;
