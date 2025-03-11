import NavBar from "./NavBar";
import { tempMovieData, tempWatchedData } from "./Data";
import MoviesList from "./MoviesList";

import MovieSummaryList from "./MovieSummaryList";
import { useState } from "react";

function App() {
  const [isOpen, setIsopen] = useState(true);

  

  return (
    <>
      <NavBar movies={tempMovieData} />
      <div className="main">
        <MoviesList movies={tempMovieData} isOpen={isOpen} setIsOpen={setIsopen} />

        <MovieSummaryList isOpen={isOpen} setIsOpen={setIsopen} watched={tempWatchedData} />
      </div>
    </>
  );
}

export default App;
