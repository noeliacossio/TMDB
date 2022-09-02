import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../index";
import {GiHamburgerMenu} from 'react-icons/gi'
import "../styles/navbar.css"

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLogout = (e) => {
    axios.post("/api/logout");
    setUser({});
    window.localStorage.removeItem("user")
    navigate("/");
  }; 

  return (
    <nav className="navigation" >
      <a href="/" className="brand-name">
        TMDB
      </a>
      <button className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
       <GiHamburgerMenu/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
        <li>
            <a href="/trending">Trending</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/series">TV Series</a>
          </li>
          {user.id ? (<li>
            <a href="/favorites">Favorites</a>
          </li>) : "" }
          
          
          <div >
       {user.id ? (
            <li onClick={handleLogout}><a>Logout</a></li>
        ) : (
          <div>
              <li><a href="/login">Login</a></li>
          </div>
        )} 
      </div>
        <li><a href="/register">Register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
