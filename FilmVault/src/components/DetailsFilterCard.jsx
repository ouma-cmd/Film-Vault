import "../components/FilterCard.css";
function DetailsFilterCard({ movie, setShowDetails }) {
  return (
    <div className="test">
    <div className="details-holder">
      <div className="details-card">
        <img src={movie.url} alt="" />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
        <p>{movie.category}</p>
        <p>{movie.years}</p>
        <p>{movie.duration}</p>
        <div className="button">
          {" "}
          <button onClick={() => setShowDetails(false)}>Close</button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default DetailsFilterCard;
