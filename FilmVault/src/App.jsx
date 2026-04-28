import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopMovies from "./components/TopMovies";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopMovies />
    </div>
  );
}
export default App;
