import React from 'react'
import { useState, useEffect } from 'react';
import AllContent from '../assets/AllContent';
import axios from 'axios';

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);
  const [content, setContent] = useState([]);

  const fetchFavorites = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`
      )
      console.log(data.results);

      setContent(data.results)
     
    }

    useEffect(() => {
      fetchFavorites();
      // eslint-disable-next-line
    }, []);

  

  return (
    <div>
      <span className='page-title'>Favorites</span>
      <div className='content-container'>
            {content && content.map((c)=>
                <AllContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} media_type="movie" date={c.first_air_date || c.release_date}/>
                )}
        </div>
    </div>
  )
}

export default Favorites