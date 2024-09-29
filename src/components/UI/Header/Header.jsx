import logo from './../../../images/logo.png';
import styles from './Header.module.css';
import ThemeSwitcher from '../../../features/ThemeSwitcher/ThemeSwitcher';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <img className={styles['header-img']} src={logo} alt="Headerimage"></img>
      <ThemeSwitcher />
    </header>
  );
};
export default Header;
