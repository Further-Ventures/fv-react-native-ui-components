import { createUseStyles } from '../Theme';

export default createUseStyles((theme) => ({
  text: {
    color: theme.primary.main,
    fontFamily: theme.fontFamily.regular,
    fontSize: 12,
    paddingHorizontal: 8,
  },
  disabled: {
    color: theme.grey.main,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
