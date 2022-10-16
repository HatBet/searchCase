import styles from '../styles/Home.module.css'

let value = null;

function Search({movie}) {
   const  searchEvent = (e) => {
        value = e.target.value;

    }

    return <div className={styles.search}>
        <input className={styles.searchInput}
            type={"search"} placeholder={"Film, dizi, kişi ara..."}
            onChange={searchEvent}/>
            {movie}
        <input className={styles.button} type={"submit"} value={"Search"}/></div>
}


export async function getServerSideProps({params}) {
    const request = await fetch(`
   https://api.themoviedb.org/3/search/keyword?api_key=c114dd6a1bdd3e75c58b3cf94af8425e&query=${params.value}&page=1`)
	const movies = await request.json()
    return {
        props: { movie: movies},
    };
}

export default Search
//c114dd6a1bdd3e75c58b3cf94af8425e