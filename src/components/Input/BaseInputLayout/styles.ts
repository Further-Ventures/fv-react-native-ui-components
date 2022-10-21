import { createUseStyles } from '../../Theme';
import { IBaseInputLayoutProps } from '.';

const inputConstants = {
  OUTLINE_SIZE: 8,
  BORDER_WIDTH: 1,
};

const height = {
  small: 36,
  medium: 56,
} as const;
const paddingHorizontal = {
  small: 8,
  medium: 12,
} as const;
const contentMargin = {
  small: 4,
  medium: 12,
} as const;

export default createUseStyles((theme, hasLabel: boolean, inputExists: boolean) => ({
  baseInput: {
    height: height[hasLabel ? 'medium' : 'small'],
    borderWidth: inputConstants.BORDER_WIDTH,
    borderColor: theme.grey.main,
    borderRadius: 4,
    paddingHorizontal: paddingHorizontal[hasLabel ? 'medium' : 'small'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  baseInputFocused: {
    borderColor: theme.primary.main,
  },
  baseInputDisabled: {
    borderColor: theme.grey.light,
  },
  childrenContainer: {
    flex: 1,
    marginBottom: hasLabel ? 6 : 0,
    // marginTop: hasLabel? 0:26,
    // flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: hasLabel ? 'flex-end' : 'center',
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
    alignSelf: 'stretch',
    flex: 1,
  },

  rightContent: {
    marginLeft: inputExists ? contentMargin[hasLabel ? 'medium' : 'small'] : 0,
  },
  leftContent: {
    marginRight: inputExists ? contentMargin[hasLabel ? 'medium' : 'small'] : 0,
  },
}));
