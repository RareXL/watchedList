import { React, useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function SearchBar(props) {
  const handleOnClick = () => {
    // need a work around to access this value
    let query = document.querySelectorAll('[data-test="search-input"]')[0]
      .value;
    if (query.length >= 3) {
      props.searchMovies(query);
    }
  };
  const handleOnSelect = (item) => {
    props.searchMovies(item.name);
  };

  const [movies, setSavedMovies] = useState({ id: 0, name: "Matrix" });

  useEffect(() => {
    let titles = props.titles.map((item) => {
      return {
        id: item.id,
        name: item.title,
      };
    });

    let savedMovies = localStorage.getItem("movies")
      ? (savedMovies = JSON.parse(localStorage.getItem("movies")))
      : [];
    savedMovies = savedMovies.concat(titles);
    savedMovies = [
      ...new Map(savedMovies.map((item) => [item["id"], item])).values(),
    ];
    localStorage.setItem("movies", JSON.stringify(savedMovies));
    setSavedMovies(savedMovies);
  }, [props]);

  return (
    <div onClick={() => handleOnClick()} className={"searchContainer"}>
      <ReactSearchAutocomplete
        items={movies}
        onSelect={handleOnSelect}
        autoFocus
        resultStringKeyName={"name"}
      />

      <style jsx>{`
        .searchContainer {
          position: fixed;
          z-index: 1000;
          width: 30%;
          top: 2rem;
          right: 3rem;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;