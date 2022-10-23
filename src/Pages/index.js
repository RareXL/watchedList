import React from 'react'  //investigate why needed
import fetch from 'isomorphic-fetch'
import { NextFetchEvent } from 'next/server';

class Index extends React.Component {

    static async getInitialProps() {
        let movies;
        try{
            const moviesResponse = await fetch("https://api.themoviedb.org/4/discover/movie?api_key=" + process.env.MOVIEDB_APIKEY + "&page=1&include_adult=false")
            movies = await moviesResponse.json()
            console.log(movies)
        }
        catch(err){
            console.log(err)
            movies = []
        } 
        return movies
    }



    render(){
        return (
            <div>Movie Watched List</div>
        )
    }
}

export default Index;