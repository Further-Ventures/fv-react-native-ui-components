import { createUseStyles } from '../Theme';

export default createUseStyles((theme) => ({
  text: {
    paddingHorizontal: 8,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
