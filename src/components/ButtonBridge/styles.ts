import { createUseStyles } from '../Theme';

export default createUseStyles((theme, size) => ({
  contained: {
    backgroundColor: theme.grey.light,
  },
  outlined: {
    backgroundColor: theme.background.primary,
    borderWidth: 1,
    borderColor: theme.grey.dark,
  },
  disabled: {
    borderColor: theme.grey.main,
  },
  disabledContained: {
    backgroundColor: theme.grey.light,
  },
  disabledOutlined: {
    backgroundColor: theme.background.primary,
  },
  small: { paddingHorizontal: 10, paddingVertical: 0, height: 24 },
  large: { paddingHorizontal: 16, paddingVertical: 0, height: 30 },

  withIconLeft: size === 'small' ? { paddingLeft: 6 } : { paddingLeft: 8 },
  withIconRight: size === 'small' ? { paddingRight: 6 } : { paddingRight: 8 },

  iconRight: {
    ...(size === 'large' && { marginLeft: 10 }),
    ...(size === 'small' && { marginLeft: 8 }),
  },
  iconLeft: {
    ...(size === 'large' && { marginRight: 10 }),
    ...(size === 'small' && { marginRight: 8 }),
  },
}));
