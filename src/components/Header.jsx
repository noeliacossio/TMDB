import React from 'react'
import styles from "../styles/styles.css";
import Search from "./Search";
import '../styles/header.css'


const Header = () => {
  return (
    <header>
        <div className='content'>   
        <h2>Welcome to</h2>                 
            <h1 className={styles.title}>The Movie Database</h1>
            <Search />
        </div>

    </header>
  )
}

export default Header