import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#"><img height="40px" src="images/heartnotext.jpg" alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="#">RAB Stats <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hooks">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/classes">Classes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#">Disabled</Link>
      </li>
    </ul>
  </div>
</nav>

{/* <nav class="navbar navbar-light bg-light">
  <Link class="navbar-brand" href="#">
    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
    Bootstrap
  </Link>
</nav> */}
    </>
  )
}

export default Header
