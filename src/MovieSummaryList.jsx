import ButtonToggle from "./ButtonToggle";
import SummaryDesc from "./SummaryDesc";
import SummaryItem from "./SummaryItem";

export default function MovieSummaryList({ isOpen, setIsOpen, watched, selectedMovie }) {
  const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="box">
      <ButtonToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <>
          <SummaryDesc watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} />

          <ul className="list">
            {watched.map((movie, index) => (
              <SummaryItem movie={movie} key={index} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
