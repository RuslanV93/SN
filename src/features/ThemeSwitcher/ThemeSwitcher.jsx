import React, { useContext } from 'react';
import styles from './ThemeSwitcher.module.css';
import { ThemeContext } from '../../context/ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.switcher} ${styles[theme]}`}>
      <input
        id={'theme-toggle'}
        onChange={toggleTheme}
        className={styles.checkbox}
        type="checkbox"
      />
      <label htmlFor="theme-toggle" className={styles.slider}></label>
    </div>
  );
};

export default ThemeSwitcher;
