import '../components/TopMovies.css'

function TopMovies(){
    return(
        <div className='card'>
            <h1>Top 3 Movies</h1>
            <div className='image-card'>
            <div >
                <img width={520} src="/HeroSection.png" alt="" />
                <h2>Jack Ryan</h2>
            </div>
            <div>
                <img width={520} src="/card2.png" alt="" />
                <h2>Street Fighter</h2>
            </div>
            <div>
                <img width={520} src="card3.png" alt="" />
                <h2>Les ensorceleuses</h2>
            </div>
            </div>
        </div>
    )
}

export default TopMovies;