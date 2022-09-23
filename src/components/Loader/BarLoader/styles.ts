import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  box: {
    width: '240px',
    height: '4px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    width: '100%',
    height: '100%',
    transformOrigin: 'center',
  },
  backgroundLine: {
    stroke: theme.primary.light,
  },
  progressLine: {
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-out',
    transitionDuration: '300ms',
    stroke: theme.primary.main,
    strokeDasharray: '0, 240',
    strokeDashoffset: '1',
  },
  rounded: {
    strokeLinecap: 'round',
  },
}));
