import ButtonToggle from "./ButtonToggle";
import MovieItem from "./MovieItem";

export default function MoviesList({ isOpen, setIsOpen, movies, onSelect }) {
  const handleClick = (id) => {
    onSelect((seleteId) => (seleteId === id ? null : id));
  };
  return (
    <div className="box">
      <ButtonToggle isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <ul className="list list-movies">
          {movies?.map((movie, i) => (
            <MovieItem movie={movie} key={i} onSelect={handleClick} />
          ))}
        </ul>
      )}
    </div>
  );
}
