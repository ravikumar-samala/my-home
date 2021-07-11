import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import UserAccount from './../user-account/UserAccount';


const Header = () => {
    return (
        <header className={styles.appHeader}>
            <Logo />
            <UserAccount />
        </header>
    )
}

export default Header;