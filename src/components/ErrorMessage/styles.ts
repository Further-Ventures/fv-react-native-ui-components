import { createUseStyles } from '../Theme';
import { IErrorMessage } from '.';

export default createUseStyles((theme, margin: IErrorMessage['margin']) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: margin?.left ?? 12,
    marginTop: margin?.top ?? 8,
    marginBottom: margin?.bottom ?? 0,
    marginRight: margin?.right ?? 0,
  },
  error: {
    color: theme.error.dark,
    marginLeft: 4,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    lineHeight: 17,
  },
}));
