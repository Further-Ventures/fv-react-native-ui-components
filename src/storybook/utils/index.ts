import { defaultTheme } from '../../components/Theme/defaultTheme';
import * as materialSymbols from '../../components/Icon/list/material-symbols';
import * as customIcons from '../../components/Icon/list/custom';

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

export const getIcons = (icons: string[]) => ({
  options: ['no_icon', ...icons],
  mapping: {
    no_icon: '',
  },
  control: {
    type: 'select',
  },
});

export const getMaterialSymbols = () => ({
  options: ['no_icon', ...Object.keys(materialSymbols)],
  mapping: {
    no_icon: '',
  },
  control: {
    type: 'select',
  },
});

export const getCustomIcons = () => ({
  options: ['no_icon', ...Object.keys(customIcons)],
  mapping: {
    no_icon: '',
  },
  control: {
    type: 'select',
  },
});

export const getColorList = (isText = false) => {
  const exceptionThemeKeys = ['fontFamily', 'gradient'];
  const inclusionThemeKeys = [];
  if (isText) {
    inclusionThemeKeys.push('text', 'error', 'grey');
  }
  const list = ['no_color'];
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
  return {
    options: list,
    mapping: {
      no_color: '',
    },
    control: {
      type: 'select',
    },
  };
};

export const checkboxArgTypes = {
  size: {
    options: ['small', 'medium'],
    control: {
      type: 'select',
    },
  },
  type: {
    options: ['default', 'intermediate'],
    control: {
      type: 'select',
    },
  },
  variant: {
    options: ['default', 'circle'],
    control: {
      type: 'select',
    },
  },
  verticalPosition: {
    options: ['top', 'middle'],
    control: {
      type: 'select',
    },
  },
  horizontalPosition: {
    options: ['left', 'right'],
    control: {
      type: 'select',
    },
  },
};
