import React, { createContext, useState, useContext, useEffect } from "react";

const defaultValue = {
  theme: undefined as string | undefined,
  setTheme: (unused: string) => { },
}

export const SettingsContext = createContext(defaultValue);

/* const usePersistedState = (key: string, defaultValue: any) => {
  const [state, setState] = React.useState(() => {
    const persistedState = localStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}; */

export const SettingsContextProvider = (props: { children: any }) => {
  /*const [theme, setTheme] = usePersistedState(
    "theme",
    document.body.dataset.theme
  );*/

  const [theme, _setTheme] = useState<string | undefined>(
    // "theme",
    // document.body.dataset.theme
    undefined
  );

  // useEffect(() => {
  //   if (theme && theme !== document.body.dataset.theme) {
  //     window.localStorage.setItem("theme", theme);
  //     document.body.dataset.theme = theme;
  //   }
  // }, [theme]);

  useEffect(() => {
    console.log("???", window);
    let theme = window.localStorage.getItem("theme");
    if (!theme) {
      theme = "light";
      window.localStorage.setItem("theme", theme);
    }
    console.log(theme);
    _setTheme(theme);
  }, []);

  const setTheme = (theme: string) => {
    _setTheme(theme);
    window.localStorage.setItem('theme', theme);
    document.body.dataset.theme = theme;
  }

  const context = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [
      theme,
      setTheme,
    ]
  );

  return <SettingsContext.Provider
    value={context}
    {...props} />;
};