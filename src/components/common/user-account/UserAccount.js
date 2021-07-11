import styles from "./UserAccount.module.css";
import { BsCaretDownFill } from "react-icons/bs";

const UserAccount = () => {
    return (
        <div className={styles.userAccount}>
            <span>Vineeth Viswanathan</span>
            <BsCaretDownFill className="ml-2" />
        </div>
    )
}

export default UserAccount;