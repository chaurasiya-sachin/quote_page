 import styles from "./header.module.css";
 
 const Menu =({menuName})=>{
    console.log(menuName);
    
    return <p>{menuName}</p>
 }
 
 const Header = ()=>{
    return (
        <div className={styles.headerDiv}>
        <div className={styles.header}>
            <div className={styles.logoSection}>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
                <p>GeekFood</p>

            </div>
            <div className={styles.menuIcon}>
            <i class="ri-menu-line"></i>
            </div>
            <div className={styles.menu}>
                
                <p className={styles.menuItem} style={{color:"rgb(60,79,201)"}}>Home</p>
                <p className={styles.menuItem}>Quote</p>                
                <p className={styles.menuItem}>Resturants</p>
                <p className={styles.menuItem}>Foods</p>
                <p className={styles.menuItem}>Contact</p>
            </div>
            <div className={styles.loginBtn}>
                <button>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default Header;