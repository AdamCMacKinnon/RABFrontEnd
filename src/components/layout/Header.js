import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/styles.css'
import Navbar from './navbar'   


const Header = () => {
  return (
    <>

    <div className="headerContainer">
      <div className="logoheader">
        <img className="mainlogo" src="images/primarylogoblack.jpg" height="200px;" alt=""/>
      </div>
    </div>
    <Navbar />

    </>
  )
}

export default Header
