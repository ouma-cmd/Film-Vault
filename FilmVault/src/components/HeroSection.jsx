import "../components/HeroSection.css";

function HeroSection() {
  return (
    <div className="herosection">
      <div className="part1-heroSection">
        <h1>Jack Ryan</h1>
        <div className="stars">
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div>
            <p>4,5/5</p>
          </div>
        </div>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          harum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus, veritatis Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facere, error! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dicta, corrupti.
        </p>
        <div className="button">
          <button className="watch">
            {" "}
            <i className="fa-solid fa-circle-play"></i> Watch
          </button>
          <button className="view">View Details</button>
        </div>
      </div>
      <div className="part2">
        <img
          width={1000}
          height={430}
          src="/HeroSection.png"
          alt="Hero Section"
        />
      </div>
    </div>
  );
}
export default HeroSection;
