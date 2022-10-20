import { createUseStyles } from '../Theme';

export default createUseStyles((theme) => ({
  input: {
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: theme.text.primary,
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    textAlignVertical: 'top',
    width: '100%',
    outlineStyle: 'none',
  },
  disabledInput: {
    color: theme.text.disabled,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  prefix: {
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: theme.text.primary,
    top: 2,
    marginRight: 8,
  },
}));
