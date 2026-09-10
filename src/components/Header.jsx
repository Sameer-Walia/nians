import React, { useContext } from 'react'
import { Link, useAsyncValue, useNavigate } from 'react-router-dom'
import { userContext } from '../App'

function Header()
{

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" id="header">
        <div className="container">
          <Link to="/" className="navbar-brand col-3" href="index.html"><h3><span><i className="fa-regular fa-clone"></i></span> Nians</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item sameer">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/nothanks" className="nav-link">Resend Email</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            {/* <span className="search"><i className="fa-solid fa-magnifying-glass"></i></span> */}
            <Link to="/login" className="btn btn1 mx-3">Login</Link>
            <Link to="/register" className="btn btn1 ">Register</Link>
          </div>
          {/* <span className="moon size"><i className="fa-regular fa-moon"></i></span> */}
          {/* <span className="sun size"><i className="fa-regular fa-sun"></i></span> */}
        </div>
      </nav>
    </div>
  )
}

export default Header
