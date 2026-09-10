import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { login } from '../reduxslices/authSlice';
import Cookies from 'universal-cookie';

function Loginform()
{

    const usercokkie = new Cookies()
    const [email, setemail] = useState();
    const [pass, setpass] = useState();
    const [loading, setloading] = useState(false);
    const [terms, setterms] = useState(false);

    const dispatch = useDispatch()

    const navi = useNavigate();

    useEffect(() =>
    {
        document.title = "Login Page"
    }, [])


    async function onlogin(e) 
    {
        e.preventDefault()
        const logindata = { email, pass };
        try 
        {
            setloading(true)
            const resp = await axios.post(`${process.env.REACT_APP_APIURL}/api/login`, logindata, { withCredentials: true })

            if (resp.data.statuscode === 0) 
            {
                toast.warn("Incorrect Email/Password")
                cancel();
            }
            else if (resp.data.statuscode === 1) 
            {
                if (resp.data.userdata.actstatus === true)
                {
                    dispatch(login(resp.data.userdata))
                    sessionStorage.setItem("userdata", JSON.stringify(resp.data.userdata));
                  
                    if (resp.data.userdata.usertype === "admin")
                    {
                        toast.success("Successfully Login")
                        navi("/adminhome")
                    }
                    else
                    {
                        toast.success("Successfully Login")
                        navi("/")
                    }
                }
                else
                {
                    toast.error("Your account is not activated , please check your email and activate your account")
                }
            }
            else 
            {
                toast.error("Some Problem Occured")
            }
        }
        catch (e) 
        {
            toast.error("Error Occured " + e.message)
        }
        finally
        {
            setloading(false)
        }
    }

    function cancel()
    {
        setemail("");
        setpass("")
    }





    return (
        <div>
            {/* <form onSubmit={onlogin} class="register-form mt-5"> */}
            <form onSubmit={(e) => onlogin(e)} class="register-form mt-5">

                <div class="input-container mt-5 ">

                    <input type="email" name="useremail" placeholder="" value={email} onChange={(e) => setemail(e.target.value)} class="input-field" required />

                    <label class="input-label">
                        <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
                    </label>

                </div>

                <div class="input-container mt-4 ">

                    <input type="password" name="userpass" placeholder="" value={pass} onChange={(e) => setpass(e.target.value)} class="input-field" required />

                    <label class="input-label">
                        <span><FontAwesomeIcon icon={faLock} /></span><span>Password</span>
                    </label>

                </div>
                <br />

                {
                    loading ?
                        <div className="loader-container mt-2">
                            <img src="assets/images/loader.gif" alt="loader" className="loader" />
                        </div> : <input type="submit" className="register-button" value="Submit" />
                }
                <b>or</b>


                <p className="register-text ">
                    New Here? <Link to="/register" className="login-link" >Sign Up</Link>
                </p>
                <Link to="/forgotpassword" className="login-link" >Forgot Password</Link>

            </form>

        </div>
    )
}

export default Loginform
