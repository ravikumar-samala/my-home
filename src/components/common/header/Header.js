import Logo from "../logo/Logo";
import styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={styles.appHeader}>
            <Logo />
        </header>
    )
}

export default Header;