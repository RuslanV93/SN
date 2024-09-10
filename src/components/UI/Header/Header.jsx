import logo from './../../../images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles['header-img']} src={logo} alt="Headerimage"></img>
    </header>

  );
};
export default Header;
