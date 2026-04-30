import { useState } from "react";
import DetailsFilterCard from "./DetailsFilterCard";

export default function MovieCard({ movie, selectMovies }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
  
      <div
        key={movie.id}
        className="card2"
        onClick={() => {
          setShowDetails(true);
        }}
      >
        <img src={movie.url} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>
          <i className="fa-solid fa-star"></i>
          {movie.rating}
        </p>
      </div>
      {showDetails && (
        <DetailsFilterCard movie={movie} setShowDetails={setShowDetails} />
      )}
    </>
  );
}
