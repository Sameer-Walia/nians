import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Authpage from './Authpage'
import ScrollToTop from './ScrollToTop'
import Dashboard from './Dashboard'
import Editprofile from './Editprofile'
import Contact from './Contact'
import AdminHome from './AdminHome'
import Adminuser from './admin/Adminuser'
import Updateuser from './admin/Updateuser'
import SearchUser from './admin/SearchUser'
import AdminContact from './admin/AdminContact'
import AdminTeacher from './admin/AdminTeacher'
import UpdateTeacher from './admin/UpdateTeacher'
import AdminRouteProtector from './AdminRouteProtector'
import UserRouteProtector from './UserRouteProtector'
import Thanks from './Thanks'
import NoThanks from './NoThanks'
import ActivateAccount from './ActivateAccount'
import ChangePassword from './ChangePassword'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import Cookies from 'universal-cookie'
import AiAgents from './AiAgents'

function Siteroutes()
{

  const navi = useNavigate()


  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adminhome" element={<AdminRouteProtector compname={AdminHome} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Authpage />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
        <Route path="/nothanks" element={<NoThanks />}></Route>
        <Route path="/activateaccount" element={<ActivateAccount />}></Route>
        <Route path="/login" element={<Authpage />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>
        <Route path="/dashboard" element={<UserRouteProtector compname={Dashboard} />}></Route>
        <Route path="/editprofile" element={<UserRouteProtector compname={Editprofile} />}></Route>
        <Route path="/contact" element={<UserRouteProtector compname={Contact} />}></Route>
        <Route path="/adminuser" element={<AdminRouteProtector compname={Adminuser} />}></Route>
        <Route path="/updateuser" element={<AdminRouteProtector compname={Updateuser} />}></Route>
        <Route path="/searchuser" element={<AdminRouteProtector compname={SearchUser} />}></Route>
        <Route path="/admincontact" element={<AdminRouteProtector compname={AdminContact} />}></Route>
        <Route path="/adminteacher" element={<AdminRouteProtector compname={AdminTeacher} />}></Route>
        <Route path="/updateteacher" element={<AdminRouteProtector compname={UpdateTeacher} />}></Route>

        {/* <Route path="/givefeedback1" element={<Givefeedback1/>}></Route> */}

        <Route path="/ai_agent" element={<AiAgents />} />
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>


      </Routes>
    </div>
  )
}

export default Siteroutes
