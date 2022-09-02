import { useState } from "react";
import "../styles/Search.css";
import { ImSearch } from 'react-icons/im';
import axios from "axios";
import AllContent from "../assets/AllContent";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //pedido axios para peliculas
    axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=bd778e5e1022d1c35862b21da16fa2df&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(data => setSearchMovies(data.data.results));

      e.target.reset();
  };


  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <form class="searchContainer" onSubmit={handleSubmit}>
        <div class="searchBox">
          <input
            class= "searchInput"
            type="text"
            placeholder="Search for movies..."
            onChange={handleChange}
          />
          <button class="searchButton" type="submit">
            <ImSearch size={20} />
          </button>
        </div>
      </form>
      <div className='content-container'>
            {searchMovies && searchMovies.map((c)=>
                <AllContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} media_type={c.media_type} date={c.first_air_date || c.release_date}/>
                )}
        </div>
    </>
  );
}

export default Search;