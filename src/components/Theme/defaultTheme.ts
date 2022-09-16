const GRADIENT_DEGREE = {
  '45': {useAngle: true, angle: 45, angleCenter: {x: 0.5, y: 0.5}},
};
export const defaultTheme = {
  //Will apply default font for ios and android(San Francisco on iOS and Roboto on Android)
  //Change this font in your project to apply changes on all components
  fontFamily: {
    black: 'PPObjectSans-Black',
    blackSlanted: 'PPObjectSans-BlackSlanted',
    bold: 'PPObjectSans-Bold',
    boldSlanted: 'PPObjectSans-BoldSlanted',
    heavy: 'PPObjectSans-Heavy',
    heavySlanted: 'PPObjectSans-HeavySlanted',
    light: 'PPObjectSans-Light',
    lightSlanted: 'PPObjectSans-LightSlanted',
    medium: 'PPObjectSans-Medium',
    mediumSlanted: 'PPObjectSans-MediumSlanted',
    regular: 'PPObjectSans-Regular',
    slanted: 'PPObjectSans-Slanted',
    thin: 'PPObjectSans-Thin',
    thinSlanted: 'PPObjectSans-ThinSlanted',
  },
  primary: {
    main: '#2400ff',
    light: '#D1D3FD',
    dark: '#17019C',
    contrast: '#000000',
    contrast2: '#FFFFFF',
    medium: '#1E00D3',
  },
  error: {
    main: '#CC2418',
    light: '#FBDCDA',
    dark: '#B91D12',
    contrast: '#000000',
    medium: '#D8281C',
  },
  success: {
    main: '#088940',
    light: '#B3DFCA',
    dark: '#007133',
    contrast: '#FFFFFF',
    medium: '#049D49',
  },
  warning: {
    main: '#FE9E34',
    light: '#FFDDB3',
    dark: '#EB621C',
    contrast: '#000000',
    medium: '#E57942',
  },
  grey: {
    main: '#C7CCD3',
    light: '#e4e7ec',
    extraLight: '#EFF1F3',
    dark: '#667985',
  },
  text: {
    primary: '#000000',
    secondary: '#344054',
    disabled: '#C7CCD3',
    hint: '#667085',
  },
  background: {
    primary: '#ffffff',
    secondary: '#F9F9FA',
    // TODO: remove the line below after the current component design is ready
    disabled: '#FCFCFD',
  },
  gradient: {
    main: {
      start: '#375267',
      end: '#9CB2C9',
      degree: GRADIENT_DEGREE[45],
    },
    light: {
      start: '#D1DDEB',
      end: '#EEF3F8',
      degree: GRADIENT_DEGREE[45],
    },
    dark: {
      start: '#14212E',
      end: '#375267',
      degree: GRADIENT_DEGREE[45],
    },
  },

  // TODO: remove all vars below after the current component design is ready
  // default: {
  //   dark: '#667085',
  //   main: '#C7CCD3',
  //   light: '#E4E7EC',
  //   extraLight: '#EFF1F3',
  // },

  // secondary: {
  //   main: '#58329A',
  //   light: '#EDE7F4',
  //   dark: '#3D2181',
  //   contrast: '#FFF',
  // },
};
