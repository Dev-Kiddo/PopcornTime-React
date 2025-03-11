import NavBar from "./NavBar";
import { tempMovieData, tempWatchedData, KEY } from "./Data";
import MoviesList from "./MoviesList";

import MovieSummaryList from "./MovieSummaryList";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen, setIsopen] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);

  // const tempQuery = "interstellar";

  /*
  useEffect(function () {
    console.log("A");
  }, []);

  useEffect(function () {
    console.log("B");
  });

  console.log("C");
  */

  console.log(selectedMovie);

  const handleBackBtn = function () {
    setSelectedMovie(null);
  };

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

          if (!res.ok) throw new Error("Something Went Wrong");

          const data = await res.json();
          console.log(data);

          if (data.Response === "False") throw new Error("Movie not Found");

          setMovies(data.Search);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 2) {
        setMovies([]);
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <NavBar movies={tempMovieData} query={query} setQuery={setQuery} />
      <div className="main">
        {isloading ? <Loader>Loading...</Loader> : <MoviesList movies={movies} isOpen={isOpen} setIsOpen={setIsopen} onSelect={setSelectedMovie} />}

        {selectedMovie ? (
          <MovieDetails selectedMovie={selectedMovie} onClickBack={handleBackBtn} />
        ) : (
          <MovieSummaryList isOpen={isOpen} setIsOpen={setIsopen} watched={watched} selectedMovie={selectedMovie} />
        )}
      </div>
    </>
  );
}

export default App;
