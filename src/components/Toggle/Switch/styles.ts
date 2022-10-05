import { createUseStyles } from '../../Theme';
import { TSize } from '../';
import { ISwitch } from '.';

export const SWITCH_SIZE = {
  small: {
    width: 29,
    height: 17,
    circle: {
      size: 13,
    },
  },
  medium: {
    width: 44,
    height: 24,
    circle: {
      size: 20,
    },
  },
};

export default createUseStyles((theme, size: TSize, disabled: ISwitch['disabled']) => ({
  container: {
    width: SWITCH_SIZE[size].width,
    height: SWITCH_SIZE[size].height,
    backgroundColor: disabled ? theme.grey.main : theme.grey.light,
    borderRadius: 12,
    padding: 2,
  },
  circle: {
    width: SWITCH_SIZE[size].circle.size,
    height: SWITCH_SIZE[size].circle.size,
    borderRadius: 10,
    backgroundColor: disabled ? theme.grey.extraLight : theme.primary.contrast2,
  },
  pressedUncheckedContainer: {
    backgroundColor: theme.grey.light,
  },
  checked: {
    backgroundColor: theme.primary.main,
  },
  pressedCheckedContainer: {
    backgroundColor: theme.primary.dark,
  },
}));
