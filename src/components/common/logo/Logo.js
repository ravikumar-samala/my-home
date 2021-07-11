import styles from "./Logo.module.css";
import logo from "../../../images/logo.svg";

const Logo = () => {
    return (
        <div className={styles.logoWrapper}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;