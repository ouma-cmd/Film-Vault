import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
export default App;
