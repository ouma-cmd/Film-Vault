import { useState } from "react";
import "../components/Navbar.css";
import { movies } from "../moviesStore";

const MovieForm = ({ setMovies, setOpen }) => {
  // make state for form inputs
  const [currentMovies, setCurrentMovies] = useState(movies);
  const [movieForm, setMovieForm] = useState({
    title: "",
    url: "",
    description: "",
    rating: "",
    category: "",
    years: "",
    duration: "",
  });

  // make onsubmit function
  const onSubmitMovie = (e) => {
    e.preventDefault();
    console.log(movieForm);

    // finish logic
    setMovies((movies) => {
      return [...movies, { ...movieForm, id: Date.now() }];
    });

    // saveToLocalStorege(movieForm);
    localStorage.setItem("movies", JSON.stringify(movieForm));
    
    e.target.reset();
  };

  return (
    <div className="test">
      <div className="form-container">
        <h1>movie form </h1>

        <form onSubmit={onSubmitMovie}>
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
  );
};

export default MovieForm;
