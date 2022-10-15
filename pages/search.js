import styles from '../styles/Home.module.css'

export default function Search() {
    this.searchEvent (e){
        console.log(e);
    }

    return <div className={styles.search}>
        <input className={styles.searchInput}
            type={"search"} placeholder={"Film, dizi, kişi ara..."}
            value={(e) =>this.searchEvent(e)}/>
        <input className={styles.button} type={"submit"} value={"Search"} /></div>
}