import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: theme.grey.main,
    borderRadius: 4,
  },
  text: {
    color: theme.primary.main,
    fontFamily: theme.fontFamily.regular,
    fontSize: 12,
  },
  disabled: {
    color: theme.grey.main,
  },
  underline: {
    textDecorationLine: 'underline',
  },
}));
