import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import PageChange from '../commons/PageChange';
import AllContent from '../assets/AllContent';

const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSeries = async () => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    )

    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
     <span className="page-title">Series</span>
      <div className='content-container'>
            {content && content.map((c)=>
                <AllContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} media_type="tv" date={c.first_air_date || c.release_date}/>
                )}
        </div>
                {numOfPages > 1 && (
                 <PageChange setPage={setPage} numOfPages={numOfPages} />
                 )}
    </div>
  )
}

export default Series
