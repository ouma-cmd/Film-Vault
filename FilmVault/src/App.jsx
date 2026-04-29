import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <Navbar setMovies={setMovies} movies={movies} />
      
    </div>
  );
}
export default App;
