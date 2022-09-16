import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  hint: {
    marginTop: 8,
    marginLeft: 12,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    lineHeight: 17,
    color: theme.text.hint,
  },
  disabledHint: {
    color: theme.text.disabled,
  },
}));
