import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './main'
import Menu from './menu'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Movie Database (TMDB)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Menu />
      </header>

      <main className={styles.main}>
        <Main/>
      </main>
    </div>
  )
}
