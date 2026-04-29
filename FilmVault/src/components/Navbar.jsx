import { useState } from "react";
import "../components/Navbar.css";

function Navbar({ setMovies, movies }) {
  const [isOpen, setOpen] = useState(false);

  const [movieForm, setMovieForm] = useState({
    id: Date.now(),
    title: "",
    url: "",
    description: "",
    rating: "",
    category: "",
    years: "",
    duration: "",
  });

  function handleSubmitMovieForm(e) {
    e.preventDefault();
    setMovies((movies) => {
      return [...movies, movieForm];
    });
    saveToLocalStorege(movies);
    e.target.reset();
  }

  return (
    <div>
      {isOpen && (
        <div className="form-container">
          <div className="background">
            <form onSubmit={handleSubmitMovieForm}>
              <input
                type="text"
                placeholder="Entre un titre"
                value={movieForm.title}
                onChange={(e) =>
                  setMovieForm({
                    ...movieForm,
                    title: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="entre un image URL"
                value={movieForm.url}
                onChange={(e) =>
                  setMovieForm({
                    ...movieForm,
                    url: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Entre description"
                value={movieForm.description}
                onChange={(e) => {
                  setMovieForm({
                    ...movieForm,
                    description: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Entre Rating"
                value={movieForm.rating}
                onChange={(e) => {
                  setMovieForm({
                    ...movieForm,
                    rating: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Entre category"
                value={movieForm.category}
                onChange={(e) => {
                  setMovieForm({
                    ...movieForm,
                    category: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Entre Years"
                value={movieForm.years}
                onChange={(e) => {
                  setMovieForm({
                    ...movieForm,
                    years: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Entre duration"
                value={movieForm.duration}
                onChange={(e) => {
                  setMovieForm({
                    ...movieForm,
                    duration: e.target.value,
                  });
                }}
              />

              <button className="submit" type="submit">
                Add Movies
              </button>
              <button
                className="close"
                type="button"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="navbar-container">
        <img
          className="logo"
          width={100}
          src="https://th.bing.com/th/id/OIP.qUE__mVadLREI3ZYXJvDggAAAA?w=190&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Film Cube"
        />
        <ul className="list">
          <li>
            <a href="#" className="Home-active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="input-button">
          <img
            className="img-input"
            src="https://th.bing.com/th/id/OIP.UfFXoK9ihlF0CPfVb8fcVAAAAA?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="sherch"
          />
          <input className="input" type="text" placeholder="Search movies" />
          <button
            type="button"
            className="button"
            onClick={() => setOpen(!isOpen)}
          >
            + Add movies
          </button>
        </div>
      </div>
    </div>
  );
}

function saveToLocalStorege(movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

export default Navbar;
