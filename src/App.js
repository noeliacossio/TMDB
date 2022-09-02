import Navbar from "./components/Navbar"
import Search from "./components/Search";

import Login from './components/Login';
import Register from "./components/Register";

import { Route, Routes } from 'react-router';
 import { useEffect} from 'react';
import { useContext } from 'react';
/* import axios from 'axios'; */
import { UserContext } from "./index";


import MovieDetails from './commons/MovieDetails';
import MovieGrid from "./components/MovieGrid";
import "./index.css"
import Header from "./components/Header";
import Trending from "./context/Trending";
import Movies from "./context/Movies";
import Series from "./context/Series";
import Favorites from "./context/Favorites";

const App = () => {

    const val = window.localStorage.getItem('user');

    const { setUser } = useContext(UserContext);

    useEffect(() => {
      setUser(JSON.parse(val))
    }, []);
  


    return (
        <div>

            <Navbar />
            <Header />
            <div >
                <Routes>   
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path='/' element={<MovieGrid />} />
                    <Route path="/trending" element={<Trending/>} />
                    <Route path="/movies" element={<Movies/> } />
                    <Route path="/series" element={<Series/> } />
                    <Route path="/favorites" element={<Favorites/>} />
                </Routes>
            </div>
        </div>
    )
};

export default App;
