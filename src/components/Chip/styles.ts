import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  contained: {
    backgroundColor: theme.grey.light,
  },
  outlined: {
    backgroundColor: theme.background.primary,
    borderWidth: 1,
    borderColor: theme.grey.dark,
  },
  small: {paddingHorizontal: 10, paddingVertical: 5},
  large: {paddingHorizontal: 16, paddingVertical: 7},
}));
