import { createUseStyles } from '../../Theme';
import { ItemHeight } from '../../../utils/itemSize';

export default createUseStyles((theme, itemHeight: ItemHeight) => ({
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
    marginBottom: 8,
  },
  subtitle: {
    marginTop: 8,
  },
  leftContent: {
    marginRight: 14,
  },
  checkbox: {
    paddingTop: 3,
  },
  content: {
    flexDirection: 'row',
  },
  textContent: {
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: theme.grey.light,
    height: 1,
    width: '100%',
  },
}));
