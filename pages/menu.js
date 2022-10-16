import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Menu() {
    return (
        <nav className={styles.nav}>
            <Link href={"/"}>Logo</Link>
            <div className={styles.menu}>
                <Link className={styles.navLink} href="/movies">Filmler</Link>
                <Link className={styles.navLink} href="/">Diziler</Link>
                <Link className={styles.navLink} href="/">Kişiler</Link>
                <Link className={styles.navLink} href="/">Hakkında</Link>
            </div>
        </nav>
    )
}