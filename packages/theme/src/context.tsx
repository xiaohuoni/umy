import canUseDom from 'rc-util/lib/Dom/canUseDom';
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import React from 'react';
import { dark, light, variables } from './theme';
type IThemeType = string;

const dynamicStyleMark = `-md-${Date.now()}-${Math.random()}`;

const defaultConfig = 'light';
export const ThemeContext = React.createContext<IThemeType>(defaultConfig);
export const ThemeContextSetter = React.createContext<
  React.Dispatch<React.SetStateAction<IThemeType>>
>(() => {});

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  const setTheme = React.useContext(ThemeContextSetter);
  return { theme, setTheme };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState(defaultConfig);
  React.useEffect(() => {
    const style = `
    :root {
      ${variables}
    }
    `.trim();

    if (canUseDom()) {
      updateCSS(style, `-md-dynamic-theme`);
    }
  }, []);
  React.useEffect(() => {
    registerTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextSetter.Provider value={setTheme}>
        {children}
      </ThemeContextSetter.Provider>
    </ThemeContext.Provider>
  );
};

export function registerTheme(theme: string) {
  const themes: any = {
    dark,
    light,
  };
  const style = `
    :root {
      ${themes[theme]}
    }
    `.trim();

  if (canUseDom()) {
    updateCSS(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
    console.warn(
      'ThemeProvider SSR do not support dynamic theme with css variables.',
    );
  }
}
