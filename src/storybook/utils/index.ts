import { defaultTheme } from '../../components/Theme/defaultTheme';

// takes list of properties names and builds argsTypes object
export const buildExcludeArgTypes = (keys: string[]) => {
  const argTypes: Record<string, any> = {};
  keys.forEach((key) => {
    argTypes[key] = {
      table: {
        disable: true,
      },
    };
  });
  return argTypes;
};

export const iconSelector = {
  options: ['no_icon', 'account_circle', 'home', 'settings', 'cancel'],
  mapping: {
    no_icon: '',
  },
  control: {
    type: 'select',
  },
};
export const getColorList = (isText = false) => {
  const exceptionThemeKeys = ['fontFamily', 'gradient'];
  const inclusionThemeKeys = [];
  if (isText) {
    inclusionThemeKeys.push('text', 'error', 'grey');
  }
  const list = [];
  for (const key in defaultTheme) {
    if (!exceptionThemeKeys.includes(key)) {
      if (isText && !inclusionThemeKeys.includes(key)) {
        continue;
      }
      const element = defaultTheme[key];

      for (const val in element) {
        list.push(`${key}-${val}`);
      }
    }
  }
  return list;
};
