import "../css/Card.css"
function MovieCard({movie}) {
  const button = () => {
    alert("liked")
  };

  return (
    <div className="movie-box">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="overlay">
          <button onClick={button}>❤️</button>
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.desc}</p>
      </div>
    </div>
  )
}

export default MovieCard
