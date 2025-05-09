import { loadFav } from "../services/Api"
import '../css/Home.css'
import MovieCard from "../components/Card"
import { useEffect, useState } from "react"
function Favourites() {
    const [fmovie,setFmovie] = useState([])
    useEffect(() => {
        setFmovie(loadFav())
    }, [])
    console.log(fmovie)
    return (
        <div className="movies-grid">
            {fmovie.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />
            })}
        </div>
    )
}
export default Favourites