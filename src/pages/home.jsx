import MovieCard from "../components/Card"
import "../css/Home.css"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const searchmovie = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    const movies = [
        { id: 1, title: "John Wick", desc: "God" },
        { id: 2, title: "Interstellar", desc: "Space" },
        { id: 3, title: "Death", desc: "Scary" },
    ]

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
