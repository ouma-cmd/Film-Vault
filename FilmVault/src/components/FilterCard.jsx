import "../components/FilterCard.css";

function FilterCard({ movies }) {
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
          {movies?.map((movie) => (
            <div key={movie.id} className="card2">
              <img src={movie.url} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>
                <i className="fa-solid fa-star"></i>
                {movie.rating}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="card">
            <div>
              <a href="#">
                <img width={320} src="/card4.png" alt="" />
              </a>
              <h2>Window's Bay</h2>
              <p>
                {" "}
                <i className="fa-solid fa-star"></i>
                4,5{" "}
              </p>
            </div>
            <div>
              <a href="#">
                {" "}
                <img width={320} src="/card5.png" alt="" />
              </a>
              <h2>Toy Story</h2>
              <p>
                {" "}
                <i className="fa-solid fa-star"></i>
                4,5{" "}
              </p>
            </div>
            <div>
              <a href="#">
                <img width={350} src="/card6.png" alt="" />
              </a>
              <h2>Mtiny</h2>
              <p>
                {" "}
                <i className="fa-solid fa-star"></i>
                4,5{" "}
              </p>
            </div>
            <div>
              <a href="#">
                {" "}
                <img width={310} src="/card7.png" alt="" />
              </a>
              <h2>Godzila</h2>
              <p>
                {" "}
                <i className="fa-solid fa-star"></i>
                4,5{" "}
              </p>
            </div>
            <div>
              <a href="#">
                <img width={330} src="/card8.png" alt="" />
              </a>
              <h2>Street Fighter</h2>
              <p>
                {" "}
                <i className="fa-solid fa-star"></i>
                4,5{" "}
              </p>
            </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
export default FilterCard;
