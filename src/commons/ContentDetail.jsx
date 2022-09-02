import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button } from "@material-ui/core";
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/allcontent.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/contentdetail.css'


export default function TransitionsModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )

    setContent(data)
  }

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key)
  }

  useEffect(() => {
    fetchData();
    fetchVideo();
  // eslint-disable-next-line
  }, []);

  const image_500 = "https://image.tmdb.org/t/p/w500"

  return (
    <div>
      <div className='media-container' 
      style={{ cursor: "pointer" }}
      color="inherit" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className='modal'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        {content && (
          <div className='box'>
            <div className='modal-container'>
              <img
                  src={
                    content.poster_path
                      ? `${image_500}/${content.poster_path}`
                      : 'unavailable'
                  }
                  alt={content.name || content.title}
                  className="modal-portrait"
                />
               <img
                src={ content.backdrop_path ? `${image_500}/${content.backdrop_path}` : 'unavailableLandscape'
                }
                alt={content.name || content.title}
                className="modal-landscape"
                />
                <div className="modal-about">
                  <span className="modal-title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="modal-description">
                    {content.overview}
                  </span>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
        )}
        </Fade>
      </Modal>
    </div>
  );
}
