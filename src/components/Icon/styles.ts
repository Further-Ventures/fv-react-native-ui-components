import {createUseStyles} from '../Theme';
import {IIconProps} from './index';

export default createUseStyles(
  (theme, width: IIconProps['width'], height: IIconProps['height']) => ({
    wrapper: {
      width,
      height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: 1,
    },
  }),
);
