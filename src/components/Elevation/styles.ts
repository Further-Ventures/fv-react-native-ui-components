import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  wrapper: {
    shadowColor: theme.grey.dark,
    backgroundColor: theme.background.primary,
  },
  extraLight: {
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  light: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 8,
  },
  medium: {
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 9,
    elevation: 13,
  },
  heavy: {
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.35,
    shadowRadius: 13,
    elevation: 18,
  },
  extraHeavy: {
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 23,
  },
}));
