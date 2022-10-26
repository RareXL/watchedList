import Image from "next/image";
import { useCurrentUser } from '../frontendLibs/user';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';

const MovieList = ({ movies, isOpen }) => {
    console.log(movies)
    const [currentMovies, setMovies] = useState(movies);
    const router = useRouter();
    const { data: { user } = {}, mutate, isValidating } = useCurrentUser();

    const addToList = (movie) => {
        if(!user){
            router.replace('/login');
        }
        else{
            fetch(origin + "/api/userList", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user: user,
                movie:movie
              }),
            }).then((response) => {
                if (response.status === 200) return response.json();
                throw new Error("something went wrong");
              })
              .then((res) => {
                toast.success("Happy days, movie has beed added to your persoanl list.");
              })
              .catch((error) => {
                console.log(error);
              }); 
        }     
    };

    const deleteFromList = (movie) => {
        if(!user){
            router.replace('/login');
        }
        else{
            fetch(origin + "/api/userList", {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user: user,
                movie:movie
              }),
            }).then((response) => {
                if (response.status === 200) return response.json();
                throw new Error("something went wrong");
              })
              .then((res) => {
                movies = res.movies
                setMovies(movies)
                toast.success("Happy days, movie removed");
              })
              .catch((error) => {
                console.log(error);
              }); 
        }     
    };

  

  return (
    <ul className="movie-cards">
      {currentMovies.map((movie) => {
        return (
          <li className={"movie-card"} key={movie.id}>
            <Toaster />
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
              <div className={"card-content"}>
                <span className={"movie-title"}>{movie.title}</span>
                <span className={"movie-year"}>{movie.release_date}</span>
                <div className={"movie-description"}>
                  {movie.overview.length < 220
                    ? movie.overview
                    : movie.overview.substring(0, 220) + "..."}
                </div>
                {isOpen ? (
                  <button
                    onClick={() => addToList(movie)}
                    className="watchList"
                  >
                    <span>Add to watched List</span>
                  </button>
                ) : 
                <button
                    onClick={() => deleteFromList(movie)}
                    className="watchList"
                  >
                    <span>Delete Movie</span>
                  </button>
                }
              </div>
            </div>
          </li>
        );
      })}

      <style jsx>{`
        .watchList {
          text-decoration: none;
          padding: 10px;
          margin: 1rem;
          color: #fff;
          background: #0c0c0c;
          border: 2px solid white;
          text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
          -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          -moz-box-shadow: 0 2px 0 rgb(0 0 0/5%);
          box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          font-weight: bold;
          font-size: 16px;
        }
        .movie-cards {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
          margin-top: 6rem;
          margin-bottom: 6rem;
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
          box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
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
          transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
          &::before {
            display: block;
            padding-top: 56.25%;
          }
          @media (min-width: 40rem) {
            &::before {
              padding-top: 66.6%;
            }
          }
        }
        .card-content {
          font-family: monospace;
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          padding: 15px;
        }
        .movie-title {
          font-size: 22px;
          font-family: monospace;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .movie-year {
          font-family: monospace;
          font-weight: 500;
          margin-bottom: 1px;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        .movie-description {
          font-family: monospace;
          font-size: 18px;
          flex: 1 1 auto;
          font-size: 0.875rem;
          line-height: 1.5;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 6rem;
        }
      `}</style>
    </ul>
  );
};

export default MovieList;
