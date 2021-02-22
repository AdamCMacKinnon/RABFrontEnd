import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
          <Link to = "/">
            <p className="navbartext">Home Page</p>
          </Link>
          <Link to = "/blog">
            <p className="navbartext">Blog</p>
          </Link>
          <Link to = "/rab_stats">
            <p className="navbartext">RAB Stats</p>
          </Link>
          <Link to = "/about_us">
            <p className="navbartext">About Us</p>
          </Link>

      </div>
    </>
  )
}

export default Navbar
