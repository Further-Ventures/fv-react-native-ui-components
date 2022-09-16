import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 12,
    marginTop: 8,
  },
  error: {
    color: theme.error.dark,
    marginLeft: 4,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    lineHeight: 17,
  },
}));
