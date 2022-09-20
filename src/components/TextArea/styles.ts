import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: theme.grey.main,
    borderRadius: 4,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    marginTop: 1,
    marginLeft: 5,
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
  },
  limit: {
    color: theme.text.hint,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  focused: {
    borderColor: theme.primary.main,
  },
  error: {
    borderColor: theme.error.main,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainerEnd: {
    justifyContent: 'flex-end',
  },
  disabled: {
    borderColor: theme.grey.light,
    color: theme.grey.light,
  },
  textDisabled: {
    color: theme.text.disabled,
  },
  label: {
    color: theme.text.hint,
    fontFamily: theme.fontFamily.regular,
    fontSize: 12,
  },
  textArea: {
    padding: 0,
    height: 170,
    textAlignVertical: 'top',
  },
}));
