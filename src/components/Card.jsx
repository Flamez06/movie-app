import "../css/Card.css"
import Likebtn from "./Likebtn"
import { useState } from "react"
function MovieCard({movie}) {
  const [btn,setBtn] = useState(0)
  return (
    <div className="movie-box">
      <div className="movie-poster">
        <Likebtn movie={movie}></Likebtn> 
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-details"> 
        <h3>{movie.title}</h3>
        <div className="txt-wrap"><p>{movie.overview}</p></div>  
      </div>
    </div>
  )
}

export default MovieCard
