import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from '../reduxslices/authSlice';

function CommonHeader()
{

  const { isLoggedIn, usertype } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const navi = useNavigate();

  async function logout()
  {
    dispatch(LogOut())
    sessionStorage.clear()
    const resp = await axios.post(`${process.env.REACT_APP_APIURL}/api/logout`, {}, { withCredentials: true })
    navi("/login")
    toast.info("You have successfully Logged Out")
  }

  function selectpage(e)
  {
    e.preventDefault()
    // const user = udata.usertype
    // if(user==="admin")
    // {
    //     navi("/adminhome")
    // }
    // else
    // {
    //     navi("/")
    // }
    // both are correct
    const user = JSON.parse(sessionStorage.getItem("userdata"))
    if (user.usertype === "admin")
    {
      navi("/adminhome")
    }
    else
    {
      navi("/")
    }
  }

  function page(e)
  {
    e.preventDefault()
    if (isLoggedIn === false)
    {
      navi("/")
    }
    else
    {
      if (usertype === "admin")
      {
        navi("/adminhome")
      }
      else
      {
        navi("/")
      }
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top theme1" id="header">
        <div className="container">
          <Link onClick={selectpage} className="navbar-brand col-3" href="index.html"><h3><span><i className="fa-regular fa-clone"></i></span> Nians</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item sameer">
                <Link onClick={page} className="nav-link active sameerr" aria-current="page" href="index.html">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/ai_agent" className="nav-link">AI Agent</Link>
              </li>
              <li className="nav-item ">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item ">
                <Link to="/changepassword" className="nav-link">Change Password</Link>
              </li>
            </ul>

            <Link to="/dashboard" className="btn btn1 mx-3">DashBoard</Link>
            <button onClick={logout} className="boder">Logout</button>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default CommonHeader
