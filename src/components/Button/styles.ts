import {ViewStyle} from 'react-native';
import {createUseStyles} from '../Theme';
import {IButtonProps, TSize} from './index';

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
  (theme, size: TSize, variant: IButtonProps['variant'], error: boolean) => {
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
        case 'primary':
          return primaryStyle;
        case 'secondary':
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
        ...buttonVariantStyle().button,
      },
      buttonPressed: {
        ...buttonVariantStyle().buttonPressed,
      },

      disabled: {
        ...buttonVariantStyle().buttonDisabled,
      },
      mini: {
        paddingHorizontal: 8,
        paddingVertical: 4,
      },
      small: {
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      medium: {
        paddingHorizontal: 24,
        paddingVertical: 16,
      },
      large: {
        paddingHorizontal: 32,
        paddingVertical: 24,
      },
      leftIcon: {
        width: size === 'mini' ? 14 : 20,
        height: size === 'mini' ? 14 : 20,
        marginRight: 10,
      },
      rightIcon: {
        width: size === 'mini' ? 14 : 20,
        height: size === 'mini' ? 14 : 20,
        marginLeft: 10,
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
