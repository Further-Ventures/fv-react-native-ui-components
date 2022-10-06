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
    marginRight: 18,
  },
  content: {
    flexDirection: 'row',
  },
  textContent: {
    justifyContent: 'center',
  },
}));
