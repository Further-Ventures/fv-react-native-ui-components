import { createUseStyles } from '../Theme';
import { IToggle } from '.';

export default createUseStyles((theme, size: IToggle['size'], isChecked: boolean) => ({
  touchableWrapper: {
    alignSelf: 'baseline',
  },
  toggleWrapper: {
    height: size === 'small' ? 17 : 27,
    justifyContent: 'center',
  },
  toggle: {
    borderWidth: isChecked ? 0 : 1,
    borderColor: theme.grey.main,
    backgroundColor: isChecked ? theme.primary.main : theme.primary.contrast2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: { borderRadius: size === 'small' ? 4 : 6 },
  checkboxCircle: { borderRadius: size === 'small' ? 16 : 20 },
  radio: { borderRadius: size === 'small' ? 16 : 20 },
  radioInnerCircle: {
    width: size === 'small' ? 6 : 8,
    height: size === 'small' ? 6 : 8,
    borderRadius: size === 'small' ? 6 : 8,
    backgroundColor: theme.primary.contrast2,
  },
  switch: {},
  textWrapper: {
    flex: 1,
  },

  small: {
    width: 16,
    height: 16,
  },
  medium: {
    width: 20,
    height: 20,
  },
  error: {
    borderColor: theme.error.main,
    backgroundColor: isChecked ? theme.error.main : theme.primary.contrast2,
  },
  errorText: {
    flexDirection: 'row',
  },
  errorIcon: {
    marginRight: 6,
  },
  disabled: {
    backgroundColor: theme.grey.extraLight,
    borderColor: theme.grey.light,
  },
  left: { flexDirection: 'row' },
  right: { flexDirection: 'row-reverse' },
  smallVerticalSpacing: { height: 8 },
  middleVerticalSpacing: { height: 12 },
  smallHorizontalSpacing: { width: 8 },
  middleHorizontalSpacing: { width: 12 },
  largeHorizontalSpacing: { width: 16 },
  middle: { justifyContent: 'center' },
  top: {},
}));
