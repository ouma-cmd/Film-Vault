import { useState } from "react";
import "../components/Navbar.css";

function Navbar({ setMovies }) {

  const [isOpen, setOpen] = useState(false);
  const [title, istitle] = useState("");
  const [image, isImage] = useState("");

  function addMovie() {
    // get movie data from form
    const newmovies = {
      title: title,
      image: image,
    };
    setMovies((prev) => prev.concat({newmovies}));
  }
  return (
    <div>
      {isOpen && (
        <div className="form-container">
          <div className="background">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Entre un titre" />
              <input type="text" placeholder="entre un image URL" />
              <button className="submit" type="submit">
                Add Movies
              </button>
              <button
                className="close"
                type="button"
                onClick={() => setOpen(false)}>Close
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
            onClick={() => setOpen(!isOpen)}>+ Add movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
