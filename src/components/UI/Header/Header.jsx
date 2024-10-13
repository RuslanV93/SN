import logo from './../../../images/logo.png';
import styles from './Header.module.css';
import ThemeSwitcher from '../../../features/ThemeSwitcher/ThemeSwitcher';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <img className={styles['header-img']} src={logo} alt="Headerimage"></img>
      <div className={styles['login-block']}>
        <div>{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}</div>
      </div>
      <ThemeSwitcher />
    </header>
  );
};
export default Header;
