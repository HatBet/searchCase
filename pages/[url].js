import Head from 'next/head';
//Movie Detail
export default function movieDetail({movie}) {
	console.log(movie)
	return (
		<div >
			<Head>
				<title>{movie.title}</title>
			</Head>
			<div 
			     style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}></div>
			<h3>{movie.title}</h3>
			<div className="summary">
				{movie.overview}
			</div>
			<style jsx>{`
              .movie {
                width: 1200px;
                margin: 0 auto;
                position: relative;
                padding: 20px;
                h3 {
                  font-size: 30px;
                  font-weight: bold;
                  margin-bottom: 20px;
                }
                .summary {
                  font-size: 18px;
                  color: #666;
                  line-height: 1.7;
                }
                .cover {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 600px;
                  background-size: cover;
                  opacity: .3;
                  z-index: -1;
                  &::before {
                    content: '';
                    background: linear-gradient(to bottom, transparent, #ddd);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
			`}</style>
		</div>
	)
}

export async function getServerSideProps({params}) {
	const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=c114dd6a1bdd3e75c58b3cf94af8425e&language=tr-TR`)
	const movie = await request.json()

	return {
		props: {
			movie,
		},
	}

}