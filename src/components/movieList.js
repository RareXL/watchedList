import Image from 'next/image'

const MovieList = ({ movies }) => (
    <ul className='.movie-cards'>
    {movies.map(movie => {
        return (
            <li className={"movie-card"} key={movie.id}>
                <div className={"movie-container"}>
                    <div className={"movie-block"}>
                    <Image
                    className={"card-image"}
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        height={300}
                        width={300}
                        alt={movie.title}
                    />
                    </div>
                    <div  className={"card-content"}>
                        <span className={"movie-title"}>{movie.title}</span>
                        <span className={"movie-year"}>{movie.release_date}</span>
                        <div className={"movie-description"}>{movie.overview}</div>
                    </div>
                </div>

            </li>
        );
    })}

    <style jsx>{`
    .movie-cards {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .movie-card {
        height: 40rem;
        display: inline-flex;
        padding: 1rem;
        width: 300px;
    }
    .movie-container {
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .card-image:hover {
        filter: contrast(100%);
      }
    .card-image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        filter: contrast(70%);
        overflow: hidden;
        position: relative;
        transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);
        &::before {
          display: block;
          padding-top: 56.25%; 
        }
        @media(min-width: 40rem) {
          &::before {
            padding-top: 66.6%; 
          }
        }
    }
    .card-content{
        font-family: monospace;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        padding: 15px;
    }
    .movie-title{
        font-size: 22px;
        font-family: monospace;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    .movie-year{
        font-family: monospace;
        font-weight: 500;
        flex: 1 1 auto;
        font-size: 0.875rem;
        line-height: 1.5;
    }
    .movie-description{
        font-family: monospace;
        font-size: 18px;
        flex: 1 1 auto;
        font-size: 0.875rem;
        line-height: 1.5;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 12rem;
    }
    `}</style>
</ul> 
)

export default MovieList