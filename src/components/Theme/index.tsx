import React, { useCallback, useContext, useMemo, useState } from 'react';
import { merge } from '../../utils/deepMerge';
import { StyleSheet } from 'react-native';

import { defaultTheme } from './defaultTheme';

declare global {
  namespace DesignSystem {
    interface IProjectTheme {}
  }
}

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type ThemeType = typeof defaultTheme & DesignSystem.IProjectTheme;

export type CustomTheme = RecursivePartial<ThemeType> & RecursivePartial<DesignSystem.IProjectTheme> & Record<string, any>;
interface IThemeContext {
  theme: ThemeType;
  updateTheme: (updatedTheme: CustomTheme) => void;
}

export interface IThemeProvider {
  initial: CustomTheme;
  children?: React.ReactNode;
}

const Context = React.createContext<IThemeContext>({
  theme: defaultTheme,
  updateTheme: () => console.log('ThemeProvider is not rendered yet'),
});

export const ThemeProvider = React.memo(({ initial, children }: IThemeProvider) => {
  const [theme, setTheme] = useState(merge(defaultTheme, initial));

  const UpdateThemeCallback = useCallback(<T,>(updatedTheme: T) => {
    setTheme((currentTheme: any) => merge(currentTheme, updatedTheme));
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: IThemeContext = {
      theme,
      updateTheme: UpdateThemeCallback,
    };
    return value;
  }, [theme, UpdateThemeCallback]);

  return <Context.Provider value={MemoizedValue}>{children}</Context.Provider>;
});

ThemeProvider.displayName = 'ThemeProvider';

export const useTheme = () => useContext(Context);

export const createUseStyles = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, P extends any[]>(
  styles: ((theme: ThemeType, ...args: P) => T) | T
) => {
  const useStyles = (...args: P): T | StyleSheet.NamedStyles<T> => {
    const { theme } = useContext(Context);

    if (typeof styles === 'function') {
      return StyleSheet.create(styles(theme, ...args));
    }
    return StyleSheet.create(styles);
  };

  return useStyles;
};
