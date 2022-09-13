import {createUseStyles} from '../../Theme';
import {IInputSize} from './index';

const inputConstants = {
  OUTLINE_SIZE: 8,
  BORDER_WIDTH: 1,
};

export default createUseStyles((theme, inputSize: IInputSize) => ({
  baseInput: {
    borderWidth: inputConstants.BORDER_WIDTH,
    borderColor: theme.primary.main,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: theme.background.primary,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  baseInputFocused: {
    borderColor: theme.primary.main,
  },
  label: {
    color: theme.text.secondary,
    fontFamily: theme.fontFamily.regular,
  },
  focusedOutline: {
    position: 'absolute',
    width: inputSize.width + inputConstants.OUTLINE_SIZE,
    height: inputSize.height + inputConstants.OUTLINE_SIZE,
    backgroundColor: theme.primary.light,
    borderRadius: 4,
    left: -4,
    top: -4,
    zIndex: -3,
  },
  error: {
    borderColor: theme.error.main,
  },
  errorFocusedOutline: {
    backgroundColor: theme.error.light,
  },
  disabled: {
    backgroundColor: theme.background.disabled,
  },
  disabledLabel: {
    color: theme.text.disabled,
  },
  mainContent: {
    alignSelf: 'flex-start',
    flex: 1,
  },
}));
