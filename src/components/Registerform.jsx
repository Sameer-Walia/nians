import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { toast } from 'react-toastify'

function Registerform()
{

    const [name, setname] = useState('');
    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [pass, setpass] = useState();
    const [cpass, setcpass] = useState();
    const [dep, setdep] = useState("");
    const [terms, setterms] = useState(false);
    const [loading, setloading] = useState(false);
    const [verrors, setverrors] = useState({});


    const navi = useNavigate();

    useEffect(() =>
    {
        document.title = "Register Page"
    }, [])

    async function onsignup(e) 
    {
        e.preventDefault()
        if (validateForm() === true)
        {
            if (terms === true) 
            {
                if (pass === cpass) 
                {
                    const reqdata = { name, phone, email, pass, dep }
                    try 
                    {
                        setloading(true)
                        const resp = await axios.post(`${process.env.REACT_APP_APIURL}/api/signup`, reqdata)
                        if (resp.data.statuscode === 1)
                        {
                            navi("/thanks")
                            toast.success("Signup Successfull , check your email to activate your account")
                        }
                        else if (resp.data.statuscode === 2)
                        {
                            navi("/nothanks")
                            toast.warn("Signup Successfull , error while sending activation mail")
                        }
                        else if (resp.data.statuscode === 0)
                        {
                            toast.warn(resp.data.msg)
                        }
                        else
                        {
                            toast.error("Some problem occured")
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
                else
                {
                    toast.error("Password Doesnot Match")
                }
            }
            else
            {
                toast.warn("Please accept terms and condition")
            }
        }
        else
        {
            toast.warn("Fill Form Properly")
        }

    }

    function validateForm()
    {
        const errors = {};
        if (name.length < 3)
        {
            errors.name = 'Name must be at least 3 characters long';
        }


        if (dep === "")
        {
            errors.dep = 'Please select department';
        }


        if (!/^\d{10}$/.test(phone))
        {
            errors.phone = 'Phone must be a 10-digit number';
        }

        if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
        {
            errors.email = 'Invalid email format';
        }

        // if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/.test(pass)) 
        // {
        //     errors.password = 'Password must contain at least 1 uppercase, 1 number, 1 special character, and be at least 6 characters long';
        // }

        if (pass !== cpass)
        {
            errors.passmatch = 'Password and confirm password does not match';
        }

        if (terms !== true)
        {
            errors.terms = 'Please accept terms and conditions';
        }

        setverrors(errors);
        if (Object.keys(errors).length > 0) 
        {
            return false
        }
        else
        {
            return true
        }
    }



    return (
        <div>
            <form name="form1" onSubmit={onsignup} className="register-form mb-5" >

                <div className="input-row mt-5">
                    <div className="input-container col">
                        <input type="text" name="username" placeholder="" className="input-field" onChange={(e) => setname(e.target.value)} />
                        {verrors.name ? <span>{verrors.name}</span> : null}
                        <label className="input-label">
                            <span><FontAwesomeIcon icon={faUser} /></span><span>Username</span>
                        </label>
                    </div>


                </div>

                <div className="select-container mt-4 col">
                    <select
                        name="department"
                        className="select-box"

                        onChange={(e) => setdep(e.target.value)}
                    >
                        <option value="">Choose Department</option>
                        <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
                        <option value="B.Tech Electronics and Communication Engineering">B.Tech Electronics and Communication Engineering</option>
                        <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                    </select>
                    {verrors.dep ? <span>{verrors.dep}</span> : null}

                    <label className="select-label">
                        <span><FontAwesomeIcon icon={faBuilding} /></span><span>Department</span>
                    </label>
                </div>


                <div className="input-row mt-4">

                    <div className="input-container col">
                        <input type="tel" name="usernumber" placeholder="" className="input-field" onChange={(e) => setphone(e.target.value)} minLength="10" maxLength="10" />
                        <label className="input-label">
                            <span><FontAwesomeIcon icon={faPhone} /></span><span>Phone</span>
                        </label>
                        {verrors.phone ? <span>{verrors.phone}</span> : null}
                    </div>
                </div>

                <div className="input-container mt-4 ">

                    <input type="email" name="useremail" placeholder="" className="input-field" onChange={(e) => setemail(e.target.value)} />

                    <label className="input-label">
                        <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
                    </label>
                    {verrors.email ? <span>{verrors.email}</span> : null}

                </div>

                <div className="input-container mt-4 ">

                    <input type="password" name="password" placeholder="" className="input-field" onChange={(e) => setpass(e.target.value)} />
                    {/* pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" */}

                    <label className="input-label">
                        <span><FontAwesomeIcon icon={faLock} /></span><span>Password</span>
                    </label>
                    {verrors.password ? <span>{verrors.password}</span> : null}

                </div>
                <div className="input-container mt-4 ">

                    <input type="password" name="confirmpass" placeholder="" className="input-field" onChange={(e) => setcpass(e.target.value)} />

                    <label className="input-label">
                        <span><FontAwesomeIcon icon={faLock} /></span><span>Confirm Password</span>
                    </label>

                    {verrors.passmatch ? <span>{verrors.passmatch}</span> : null}

                </div>
                <label className="checkbox mt-4">
                    <input type="checkbox" name="cbx1" onChange={(e) => setterms(e.target.checked)} /><i> </i>I accept the terms and conditions
                </label>
                {verrors.terms ? <span>{verrors.terms}</span> : null}

                {
                    loading ?
                        <div className="loader-container mt-2">
                            <img src="assets/images/loader.gif" alt="loader" className="loader" />
                        </div> : <input type="submit" className="register-button" value="Submit" />
                }

                <p className="register-text">
                    Already registered? <Link to="/login" className="login-link" >Login</Link>
                </p>

            </form>

        </div>
    )
}

export default Registerform
