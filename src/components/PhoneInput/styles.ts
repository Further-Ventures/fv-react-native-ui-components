import { createUseStyles } from '../Theme';

export default createUseStyles((theme, isFocused: boolean, hasError: boolean) => ({
  input: {
    paddingLeft: 0,
  },
  select: {
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
    ...(hasError && { borderColor: theme.error.main }),
    ...(!isFocused && {
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
    }),
  },
}));
