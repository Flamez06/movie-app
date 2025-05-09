import MovieCard from "../components/Card"
import "../css/Home.css"
import { useState, useEffect } from "react"
import { getPopMovie, searchPopMovie } from "../services/Api"


function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const loadPopMovie = async () => {
            try {
                const popMovie = await getPopMovie()
                setMovies(popMovie)
            } catch (err) {
                console.log(err)
            }
        }
        loadPopMovie() 
    }, [])
    
    const searchmovie = (e) => {
        e.preventDefault()
        const loadSearchMovie = async () => {
            const searchMovie= await searchPopMovie(searchQuery)
            setMovies(searchMovie)
        }
        loadSearchMovie()
        setSearchQuery("")
    }
    

    return (
        <div className="home-page">
            <form className="search-form" action="">
                <input type="text" name="" className="search-bar" value={searchQuery} placeholder="Search for a movie" onChange={(e) => { setSearchQuery(e.target.value) }} />
                <button className="search-bttn" onClick={searchmovie}>Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </div>
        </div>
    )
}

export default Home
