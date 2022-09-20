import { createUseStyles } from '../Theme';

export default createUseStyles((theme) => ({
  input: {
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: theme.text.primary,
    padding: 0,
    flex: 1,
    textAlignVertical: 'top',
    width: '100%',
  },
  disabledInput: {
    color: theme.text.disabled,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  prefix: {
    height: 17,
    color: theme.text.primary,
    fontFamily: theme.fontFamily.regular,
  },
}));
