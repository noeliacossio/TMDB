import React from 'react'
import TransitionsModal from '../commons/ContentDetail'
import '../styles/allcontent.css'

const AllContent = ({
    id, poster, title, media_type, date
}) => {

    const image_300 = "https://image.tmdb.org/t/p/w300"


  return (
    <TransitionsModal media_type={media_type} id={id}>
      <img className='poster-container' src={`${image_300}/${poster}`} alt={title} ></img>
      <b className="title-container">{title}</b>
      <span className="subtitle-container">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span>{date}</span>
      </span>
    </TransitionsModal>
  )
}

export default AllContent;
