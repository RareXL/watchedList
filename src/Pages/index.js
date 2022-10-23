import React from 'react'  //investigate why needed
import fetch from 'isomorphic-fetch'
import { NextFetchEvent } from 'next/server';

class Index extends React.Component {

    static async getInitialProps() {
        let movies;
        try{
            const moviesResponse = await fetch("https://api.themoviedb.org/4/discover/movie?api_key=71077aaf11ca21de0ed10709de3c5ca4&page=1&include_adult=false")
            movies = await moviesResponse.json()
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