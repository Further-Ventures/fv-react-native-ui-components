import {createUseStyles} from '../Theme';

export default createUseStyles(() => ({
  wrapper: {
    position: 'relative',
    margin: '0 auto',
  },
  circular: {
    width: '48px',
    height: '48px',
  },
  bar: {
    width: '240px',
    height: '4px',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '100%',
    height: '100%',
    transformOrigin: 'center',
  },
  // '@keyframes animateSpin': {
  //   from: {
  //     transform: 'rotate(0)'
  //   },
  //   to: {
  //     transform: 'rotate(360deg)'
  //   }
  // },
  // spin: {
  //   animationName: '$animateSpin'
  // },
  // rotate270: {
  //   transition: 'rotate-270'
  // }
}));
