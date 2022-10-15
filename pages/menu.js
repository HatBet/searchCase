import styles from '../styles/Home.module.css'

export default function Menu() {
    return (
        <nav className={styles.nav}>
            <a href="">Logo
            </a>
            <div className={styles.menu}>
                <a className={styles.navLink} href="#">Filmler <span className="sr-only"></span></a>
                <a className={styles.navLink} href="#">Diziler</a>
                <a className={styles.navLink} href="#">Kişiler</a>
                <a className={styles.navLink} href="#">Daha Fazla</a>
            </div>
        </nav>
    )
}