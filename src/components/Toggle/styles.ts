import {createUseStyles} from '../Theme';
import {IToggle} from '.';

export default createUseStyles(
  (theme, size: IToggle['size'], checked: boolean) => ({
    touchableWrapper: {
      alignSelf: 'baseline',
    },
    toggleWrapper: {
      marginTop: 12,
      flexDirection: 'row',
    },
    toggle: {
      borderWidth: checked ? 0 : 1,
      borderColor: theme.grey.main,
      backgroundColor: checked ? theme.primary.main : theme.primary.contrast2,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    checkbox: {borderRadius: size === 'small' ? 4 : 6},
    checkboxCircle: {borderRadius: size === 'small' ? 16 : 20},
    radio: {borderRadius: size === 'small' ? 16 : 20},
    radioInnerCircle: {
      width: size === 'small' ? 6 : 8,
      height: size === 'small' ? 6 : 8,
      borderRadius: size === 'small' ? 6 : 8,
      backgroundColor: theme.primary.contrast2,
    },
    switch: {
      marginTop: 5,
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
      backgroundColor: checked ? theme.error.main : theme.primary.contrast2,
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
    left: {flexDirection: 'row'},
    right: {flexDirection: 'row-reverse'},
    smallVerticalSpacing: {height: 8},
    middleVerticalSpacing: {height: 12},
    smallHorizontalSpacing: {width: 8},
    middleHorizontalSpacing: {width: 12},
    middle: {alignSelf: 'center'},
    top: {},
  }),
);
