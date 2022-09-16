import {ViewStyle} from 'react-native';
import {createUseStyles} from '../Theme';
import {IButton, TSize} from './index';

interface IButtonTypeStyle {
  button: ViewStyle;
  buttonPressed: ViewStyle;
  buttonDisabled: ViewStyle;
}

const curvedRadius = {
  mini: 4,
  small: 6,
  medium: 8,
  large: 10,
};

export const useStyles = createUseStyles(
  (
    theme,
    size: TSize,
    variant: IButton['variant'],
    error: boolean,
    onlyIcon: boolean,
  ) => {
    //Generate different styles based on button type
    const buttonVariantStyle = (): IButtonTypeStyle => {
      const primaryStyle: IButtonTypeStyle = {
        button: {
          backgroundColor: error ? theme.error.main : theme.primary.main,
        },
        buttonPressed: {
          backgroundColor: error ? theme.error.dark : theme.primary.dark,
        },
        buttonDisabled: {
          backgroundColor: theme.grey.extraLight,
        },
      };

      switch (variant) {
        case 'contained':
          return primaryStyle;
        case 'outlined':
          return {
            button: {
              backgroundColor: theme.background.primary,
              borderWidth: 2,
              borderColor: error ? theme.error.main : theme.primary.main,
            },
            buttonPressed: {
              backgroundColor: error ? theme.error.light : theme.primary.light,
            },
            buttonDisabled: {
              borderColor: theme.grey.light,
            },
          };
        case 'empty':
          return {
            button: {
              backgroundColor: theme.background.primary,
              borderWidth: 0,
              borderColor: error ? theme.error.main : theme.primary.main,
            },
            buttonPressed: {
              backgroundColor: error ? theme.error.light : theme.grey.main,
            },
            buttonDisabled: {
              borderColor: theme.grey.light,
            },
          };
        default:
          return primaryStyle;
      }
    };

    return {
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'baseline',
        flexDirection: 'row',
        flexWrap: 'wrap',
        ...buttonVariantStyle().button,
      },
      buttonPressed: {
        ...buttonVariantStyle().buttonPressed,
      },

      disabled: {
        ...buttonVariantStyle().buttonDisabled,
      },
      mini: {
        ...(onlyIcon
          ? {width: 24, height: 24}
          : {
              paddingHorizontal: 8,
              paddingVertical: 4,
            }),
      },
      small: {
        ...(onlyIcon
          ? {width: 40, height: 40}
          : {
              paddingHorizontal: 16,
              paddingVertical: 8,
            }),
      },
      medium: {
        ...(onlyIcon
          ? {width: 56, height: 56}
          : {
              paddingHorizontal: 24,
              paddingVertical: 16,
            }),
      },
      large: {
        ...(onlyIcon
          ? {width: 72, height: 72}
          : {
              paddingHorizontal: 32,
              paddingVertical: 24,
            }),
      },

      curved: {
        borderRadius: curvedRadius[size],
      },
      round: {
        borderRadius: 100,
      },
      flat: {
        borderRadius: 0,
      },
    };
  },
);
