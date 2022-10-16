/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import Menu from './menu';
// Yakında vizyona girecekler
function Movies({ movies }) {
    const data = movies.results;
    return <div >
        <header className={styles.header}>
            <Menu />
        </header>
        <main className={styles.movieMain}>
            <div className={styles.moviePoster}>
                {
                    Object.values(data).map((obj, index) =>
                        <div key={index} className={styles.moviePosterInfo}>
                            <h5 >{obj.title}</h5>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${obj.poster_path}`}
                                alt={obj.title} />
                        </div>
                    )
                }
            </div>
        </main>
    </div>
}


export async function getServerSideProps() {
    const request = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c114dd6a1bdd3e75c58b3cf94af8425e&language=tr-TR&page=1`)
    const upcomingMovie = await request.json()

    return {
        props: { movies: upcomingMovie },
    };
}

export default Movies


