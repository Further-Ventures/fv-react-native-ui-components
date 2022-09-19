import {createUseStyles} from '../../../Theme';

export const SWITCH_SIZE = {
  width: 44,
  height: 24,
};

export default createUseStyles(theme => ({
  container: {
    width: SWITCH_SIZE.width,
    height: SWITCH_SIZE.height,
    backgroundColor: theme.grey.main,
    borderRadius: 12,
    padding: 2,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.background.primary,
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
