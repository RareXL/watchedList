import React from 'react'  //investigate why needed
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import MovieList from '../components/movieList'

class Index extends React.Component {

    static async getInitialProps() {
        let movieObject;
        try{
            const moviesResponse = await fetch("https://api.themoviedb.org/4/discover/movie?api_key=" + process.env.MOVIEDB_APIKEY + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
            movieObject = await moviesResponse.json()
        }
        catch(err){
            console.log(err)
            return {
                movies: movieObject.results,
            };
        }

        return {
            movies: movieObject.results,
        };
    }



    render(){
        console.log( this.props)
        const { movies } = this.props

        if(!movies || movies.length == 0){       
            return (
                <Error statusCode={503}/>
            )
        }
        return (
            <React.Fragment>
               <MovieList movies={movies}/>
            </React.Fragment> 
        )
          
    }
}

export default Index;