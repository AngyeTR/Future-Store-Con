"use client"
import { handleLogout } from "app/actions";
import styles from "./LogoutButton.module.sass"
export const LogoutButton = () => {
 
    return(
        <button onClick={e => handleLogout()} className={styles.LogoutButton}>LogOut</button>
    )
    
}