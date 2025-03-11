export default function MovieDetails({ selectedMovie, onClickBack }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onClickBack}>
        &larr;
      </button>
      {selectedMovie}
    </div>
  );
}
