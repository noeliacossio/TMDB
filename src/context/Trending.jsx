import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import AllContent from '../assets/AllContent';
import PageChange from '../commons/PageChange';
import '../styles/styles.css'


const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        )
        setContent(data.results)
    }

   useEffect(() => {
    window.scroll(0, 0);
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

  return (
    <div>
        <span className='page-title'>Trending</span>
        <div className='content-container'>
            {content && content.map((c)=>
                <AllContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} media_type={c.media_type} date={c.first_air_date || c.release_date}/>
                )}
        </div>
                <PageChange setPage={setPage}/>

    </div>
  )
}


export default Trending
