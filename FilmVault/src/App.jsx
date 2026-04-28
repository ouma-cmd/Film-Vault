import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopMovies from "./components/TopMovies";
import FilterCard from "./components/FilterCard";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopMovies />
      <FilterCard />
    </div>
  );
}
export default App;
