import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  box: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    width: '100%',
    height: '100%',
    transformOrigin: 'center',
  },
  circle: {
    // transitionProperty: 'all',
    // transitionTimingFunction: 'ease-out',
    // transitionDuration: '300ms',
    // stroke: theme.primary.main,
    // strokeDasharray: '0, 145',
    // strokeDashoffset: '1',
  },
  rounded: {
    // strokeLinecap: 'round',
  },
  progress: {
    // transform: 'rotate(270deg)',
  },
  spin: {}
}));
