import { useState } from "react";
import "../components/FilterCard.css";
import DetailsFilterCard from "../components/DetailsFilterCard";
import MovieCard from "./MovieCard";

function FilterCard({ movies }) {
  const [selectMovies, setselectMovies] = useState();
  //  console.log(movies);
  //  console.log(selectMovies);

  return (
    <div>
      <div className="Filtrage">
        <div className="titre-Filter">
          <i className="fa-solid fa-filter"></i>
          <h1>Filters</h1>
        </div>
        <div className="barre-shearch">
          <h2>Genre</h2>
          <select>
            <option value="">All Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
          </select>
        </div>
        <div className="rating">
          <h2>Munimum Rating</h2>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="botton">
          <button>Clear Filter</button>
        </div>
      </div>
      <div className="part2">
        <h1>All Movies</h1>
        <div className="movies-container">
          {movies?.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FilterCard;
