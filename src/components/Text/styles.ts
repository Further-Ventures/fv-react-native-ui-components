import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  'h1-bold': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 48 + Math.abs(48 * 1.25),
  },
  'h1-medium': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '500',
    fontSize: 48,
    lineHeight: 48 + Math.abs(48 * 1.25),
  },
  'h1-regular': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '400',
    fontSize: 48,
    lineHeight: 48 + Math.abs(48 * 1.25),
  },

  'h2-bold': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 48,
  },
  'h2-medium': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 48,
  },
  'h2-regular': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 48,
  },

  'h3-bold': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
  },
  'h3-medium': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 36,
  },
  'h3-regular': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 36,
  },

  'h4-bold': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
  'h4-medium': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
  },
  'h4-regular': {
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
  },
}));
