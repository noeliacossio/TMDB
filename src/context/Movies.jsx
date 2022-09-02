import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import AllContent from '../assets/AllContent';
import PageChange from '../commons/PageChange';

const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )

      setContent(data.results)
      setNumOfPages(data.total_pages)
    }

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);


  return (
    <div>
      <span className='page-title'>Movies</span>
      <div className='content-container'>
            {content && content.map((c)=>
                <AllContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} media_type="movie" date={c.first_air_date || c.release_date}/>
                )}
        </div>
                {numOfPages > 1 && (
                <PageChange setPage={setPage} numOfPages={numOfPages} />
                )}
    </div>
  )
}

export default Movies
