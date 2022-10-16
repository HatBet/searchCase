import styles from '../styles/Home.module.css'
import Search from './search'

export default function Main() {
    return (
        <section>
        <div className={styles.title}><h2>Hoş Geldiniz.</h2>
        <h3>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h3></div>
        <Search/>
      </section>
    )
}