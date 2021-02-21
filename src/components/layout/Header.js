import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/styles.css'


const Header = () => {
  return (
    <>

    <div className="headerContainer">
      <div className="logoheader">
        <img className="mainlogo" src="images/primarylogoblack.jpg" height="200px;" alt=""/>
      </div>
    </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#"><img height="40px" src="images/heartnotext.jpg" alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="https://rabsurvivalgame.web.app/">RAB Survival Game <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about_us">About Us</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/classes">Classes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#">Disabled</Link>
      </li> */}
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
