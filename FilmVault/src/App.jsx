import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopMovies from "./components/TopMovies";
import FilterCard from "./components/FilterCard";
import MovieForm from "./components/MovieForm";

function App() {
  // make state thqt handles showing popup form (create new movie)
  const [isOpen, setOpen] = useState(false);

  const [movies, setMovies] = useState([]);


  return (
    <div>
      <Navbar isOpen={isOpen} setOpen={setOpen} />
      <HeroSection />
      <TopMovies />
      <FilterCard />
      {isOpen && <MovieForm setMovies={setMovies} setOpen={setOpen}/>}
    </div>
  );
}
export default App;
