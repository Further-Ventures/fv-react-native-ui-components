import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  'h1-bold': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    fontSize: 48,
    lineHeight: Math.abs(48 * 1.25),
  },
  'h1-medium': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    fontSize: 48,
    lineHeight: Math.abs(48 * 1.25),
  },
  'h1-regular': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 48 + Math.abs(48 * 1.25),
  },
}));
