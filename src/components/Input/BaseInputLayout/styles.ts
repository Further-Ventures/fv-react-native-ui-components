import { createUseStyles } from '../../Theme';

const inputConstants = {
  OUTLINE_SIZE: 8,
  BORDER_WIDTH: 1,
};

export default createUseStyles((theme, isMainContentExist: boolean) => ({
  baseInput: {
    borderWidth: inputConstants.BORDER_WIDTH,
    borderColor: theme.grey.main,
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: theme.background.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 56,
  },
  baseInputFocused: {
    borderColor: theme.primary.main,
  },
  baseInputDisabled: {
    borderColor: theme.grey.light,
  },
  childrenContainer: {
    marginBottom: 6,
    marginTop: 26,
  },
  label: {
    color: theme.text.primary,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    position: 'absolute',
    left: 0,
    top: 16,
    textAlignVertical: 'center',
  },
  labelSmall: {
    color: theme.text.hint,
  },
  error: {
    borderColor: theme.error.main,
  },
  errorFocusedOutline: {
    backgroundColor: theme.error.light,
  },
  labelDisabled: {
    color: theme.text.disabled,
  },
  mainContent: {
    alignSelf: 'flex-start',
    flex: 1,
  },
  rightContent: {
    marginLeft: isMainContentExist ? 14 : 0,
    padding: 2,
  },
  leftContent: {
    marginRight: isMainContentExist ? 14 : 0,
    padding: 2,
  },
}));
