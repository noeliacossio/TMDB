import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../styles/MovieDetails.css";

const MovieDetails = () =>{
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => { 
    axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bd778e5e1022d1c35862b21da16fa2df&language=en-US`)
    .then((data) => {
      setMovie(data.data);
    });
  }, [movieId]);

    const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    
  return (
    <div className="box">
    <div className="detailsContainer">
      <img
        className="col movieImage"
        src={`${imageUrl}`}
        alt={movie.title}
      />
      <div className="col movieDetails">
        <p className="firstItem">
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres?.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
    </div>
  );
}

export default MovieDetails