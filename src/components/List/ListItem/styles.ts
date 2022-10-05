import { createUseStyles } from '../../Theme';
import { ItemHeight } from '../../../utils/itemSize';

export default createUseStyles((theme, itemHeight: ItemHeight, disabled: boolean) => ({
  listItem: {
    paddingHorizontal: 16,
    paddingVertical: itemHeight === 'thin' ? 10 : 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: theme.grey.light,
  },
  label: {
    color: disabled ? theme.text.disabled : theme.text.hint,
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    color: disabled ? theme.text.disabled : theme.text.secondary,
    fontWeight: '500',
    fontSize: 16,
  },
  subtitle: {
    color: disabled ? theme.text.disabled : theme.text.hint,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 8,
  },
  leftContent: {
    marginRight: 18,
  },
  content: {
    flexDirection: 'row',
  },
  textContent: {
    justifyContent: 'center',
  },
}));
