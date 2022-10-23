import React from 'react'  //investigate why needed
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import MovieList from '../components/movieList'
import Layout from '../components/Layout'
import Link from 'next/Link'

class Index extends React.Component {

    static async getInitialProps(context) {
        let movieObject;
        let page;
        let query = context.query || null
        try{
            page = query && query.page ? Number(query.page) : 1;
            const moviesResponse = await fetch(`https://api.themoviedb.org/4/discover/movie?page=${page}&api_key=71077aaf11ca21de0ed10709de3c5ca4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
            movieObject = await moviesResponse.json()
        }
        catch(err){
            console.log(err)
            return {
                movies:null,
                page:page,
            };
        }

        return {
            movies: movieObject.results,
            page: page,
        };
    }



    render(){
       // console.log( this.props)
        const { movies, page } = this.props

        if(!movies || movies.length == 0){       
            return (
                <Error statusCode={503}/>
            )
        }
        return (
            <Layout title="Latest Movies">
                <MovieList movies={movies} />
                <footer className={"movie-footer"}>
                    <div>
                    <Link href={`/?page=${page + 1}`}>
                        <a className={"movie-link"}>Next page ({page + 1 })</a>
                    </Link>
                    </div>
                    <div>
                    <Link href={`/?page=${page - 1}`}>
                        <a className={"movie-link"}>Prev page ({page - 1 })</a>
                    </Link>
                    </div>  
                </footer>

                <style jsx>{`
                    .movie-footer{
                        padding: 1rem;
                        background-color: #0c0c0c;
                        border-radius: 0.25rem;
                        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;
                        z-index: 1000;
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: center;
                        align-items: center;
                    }
                    .movie-link{
                        text-decoration: none;
                        padding: 10px;
                        margin: 1rem;
                        color: #fff;
                        background: #0c0c0c;
                        border: 2px solid white;
                        text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
                        box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
                        font-weight: bold;
                        font-size: 16px;
                    }
                    

                `}</style>
               
            </Layout>
        )
          
    }
}

export default Index;