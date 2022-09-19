import {createUseStyles} from '../Theme';

export default createUseStyles(() => ({
  toggleInputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.45,
  },
  error: {
    marginTop: 8,
  },
}));
