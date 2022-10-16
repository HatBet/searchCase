import { useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

function Search() {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [result, setResult] = useState([]);
    const searchRef = useRef(null);

    const searchEvent = async (e) => {
        value = e.target.value;
        setValue(value);
        if (value.length) {
            fetch(`
            https://api.themoviedb.org/3/search/keyword?api_key=c114dd6a1bdd3e75c58b3cf94af8425e&query=${value}&page=1`)
            .then((res) => 
             {const movies = res.json()
                 setResult(movies);
                 setVisible(true);
             }).catch((error) => 
            {console.log(error)})
            return value;
        }
    }
    console.log(visible, result)
    //Promise ?
    return <div className={styles.search}
        ref={searchRef}>
        <input className={styles.searchInput}
            type={"search"} placeholder={"Film, dizi, kişi ara..."}
            onChange={searchEvent}
            value={value} />
        {visible && result.length > 0 && (
            <ul>
                {result.map((obj, id) =>
                    <li key={id}>
                        <Link href={`/` + obj.id}>{obj.title}</Link>
                    </li>)}
            </ul>
        )}
        {/* <input className={styles.button} type={"submit"} value={"Search"}/> */}
    </div>
}


export async function getServerSideProps({value}) {
   const request = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=c114dd6a1bdd3e75c58b3cf94af8425e&query=${value}&page=1`)
   const searchBar = await request.json()

   return {
       props: { movies: searchBar },
   };
  
}

export default Search
