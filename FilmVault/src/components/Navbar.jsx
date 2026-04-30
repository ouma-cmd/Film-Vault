import { useState } from "react";
import "../components/Navbar.css";

function Navbar({ setMovies, movies, setOpen, isOpen }) {
  // make movies variables using use State
  const moviess = useState();

  return (
    <div>
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



export default Navbar;
