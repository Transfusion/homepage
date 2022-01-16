import React from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import { SettingsContext } from '../../contexts/SettingsContextProvider';
import styles from '../../styles/ThemeToggler.module.css'

export default () => {
  const { theme, setTheme } = React.useContext(SettingsContext);

  const toggleTheme = () => {
    let newTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const Icon = theme == 'light' ? MdWbSunny : MdDarkMode
  return (
    <Icon size={'1.5em'} onClick={() => {
      console.log("toggle clicked");
      toggleTheme();
    }} className={styles.toggler} />
  )
}