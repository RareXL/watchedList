import { findUserListByUserId  } from '../backendLibs/db';
import { getMongoDb } from '../backendLibs/mongodb';
import React from 'react'  //investigate why needed
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import MovieList from '../components/MovieList'
import Layout from '../components/Layout'
import Link from 'next/link'
import SearchBar from '../components/Autocomplete'
import { useRef, useState } from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  

  componentDidUpdate(nextProps) {
    if (
      nextProps.movies &&
      nextProps.movies.length>0 &&
      nextProps.movies[0].id != this.state.movies[0].id
    ) {
      this.setState({
        movies: this.props.movies,
      });
    }
  }

  componentDidMount() {
    if(
      !this.state.movies 
       || (this.state.movies.length == 0 && !this.props.userId)
    ){
      window.location.reload(false);
    }   
}


  render() {

    const { movies } = this.state;

    return (
      <Layout title="Latest Movies">
        <MovieList movies={movies} />
        <footer className={"movie-footer"}>
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
   let userId = context.query.userId
    const db = await getMongoDb();
    let userList = await findUserListByUserId(db,userId)
    if(!userList){
        return {
            props: {
              movies: [],
              userId:userId?userId:null
            }
          };
    }
    return {
        props: {
          movies: userList.movies,
          userId:userId
        }
      };


}

export default UserList;