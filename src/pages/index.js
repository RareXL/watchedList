import React from 'react'  //investigate why needed
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import MovieList from '../components/MovieList'
import Layout from '../components/Layout'
import Link from 'next/link'
import SearchBar from '../components/Autocomplete'
import { useRef, useState } from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      isSearch:false
    };
  }


  setIsSearch = () => {
    this.setState({
      isSearch:false
    });
  }
  

  searchMovies = async (query) => {
    let movieObject;
    fetch(origin + "/api/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((res) => {
        movieObject = res.movies
        this.setState({
          movies: movieObject,
          isSearch:true
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidUpdate() {
    if (
      !this.state.isSearch &&
      this.props.movies &&
      this.state.movies &&
      this.props.movies[0].id != this.state.movies[0].id
    ) {
      this.setState({
        movies: this.props.movies,
        isSearch:false
      });
    }
  }

  render() {
    const { page } = this.props;
    const { movies } = this.state;

  
  


    if (!movies || movies.length == 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title="Latest Movies">
        <SearchBar titles={movies} searchMovies={this.searchMovies} />
        <MovieList movies={movies}  isOpen={true}/>
        <footer className={"movie-footer"}>
          <div>
            <Link href={`/?page=${page + 1}`}>
              <a onClick={this.setIsSearch} className={"movie-link"}>Next page [{page + 1}]</a>
            </Link>
          </div>
          {page > 1 ? (
            <div>
              <Link href={`/?page=${page - 1}`}>
                <a nClick={this.setIsSearch} className={"movie-link"}>Prev page [{page - 1}]</a>
              </Link>
            </div>
          ) : null}
        </footer>

        <style jsx>{`
          .movie-footer {
            padding: 2rem;
            background-color: #0c0c0c;
            border-radius: 0.25rem;
            box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
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
          .movie-link {
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
    );
  }
}

// Not usinging getSaticProps becuase we need the query object
export async function getServerSideProps(context) {
  let movieObject;
  let page;
  let query = context.query || null
  try{
      page = query && query.page ? Number(query.page) : 1;
      const moviesResponse = await fetch(`https://api.themoviedb.org/4/discover/movie?page=${page}&api_key=${process.env.MOVIEDB_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
      movieObject = await moviesResponse.json()
  }
  catch(err){
      console.log(err)
      return {
        props: {
          movies:null,
          page: page,
        }
      };
  }

  return {
    props: {
      movies: movieObject.results,
      page: page,
    }
  };
}

export default Index;