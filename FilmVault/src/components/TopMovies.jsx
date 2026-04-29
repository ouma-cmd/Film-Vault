import '../components/TopMovies.css'

function TopMovies(){
    return(
        <div className='card'>
            <h1>Top 3 Movies</h1>
            <div className='image-card'>
            <div >
               <a href="#"><img width={520} src="/HeroSection.png" alt="" /></a> 
                <h2>Jack Ryan</h2>
            </div>
            <div>
               <a href="#"><img width={520} src="/card2.png" alt="" /></a> 
                <h2>Street Fighter</h2>
            </div>
            <div>
               <a href="#"><img width={520} src="card3.png" alt="" /></a> 
                <h2>Les ensorceleuses</h2>
            </div>
            </div>
        </div>
    )
}

export default TopMovies;