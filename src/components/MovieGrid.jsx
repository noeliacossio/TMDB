import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "../styles/MovieGrid.css";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const MovieGrid = () => {
  
  const [movies, setMovies] = useState([]);
 
  const items = movies?.map((movie) => (
        <MovieCard onDragStart={handleDragStart} key={movie.id} movie={movie} date={movie.date} />
      ))

      const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
      };

 useEffect(()=>{
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <AliceCarousel 
    mouseTracking 
    infinite
    disableDotsControls
    disableButtonsControls
    responsive={responsive}
     items={items} 
     autoPlay />    
  );
}


export default MovieGrid;
