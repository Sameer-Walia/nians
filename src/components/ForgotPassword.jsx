import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { toast } from 'react-toastify';

function ForgotPassword()
{

    const [email, setemail] = useState();
    const [loading, setloading] = useState(false);

    const navi = useNavigate();

    useEffect(() =>
    {
        document.title = "Forgot Password Page"
    }, [])


    async function handlesubmit(e) 
    {
        e.preventDefault()
        try 
        {
            setloading(true)
            const resp = await axios.get(`${process.env.REACT_APP_APIURL}/api/forgotpassword?un=${email}`)

            if (resp.data.statuscode === 1)
            {
                toast.success("Mail sent. Please check your email to reset Password")
            }
            else if (resp.data.statuscode === 3)
            {
                toast.warn("Incorrect Email")
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
    }



    return (
        <div className="change-password-page">
            <div className="change-password-container">
                <h2 className="change-password-title">Forgot Password</h2>

                <div className="change-password-form-wrapper" data-wow-delay=".5s">
                    <form name="form1" onSubmit={handlesubmit} className="change-password-form">

                        <input type="email" name="email" placeholder="Register Email" required onChange={(e) => setemail(e.target.value)} className="change-password-input" />

                        {
                            loading ?
                                <div className="loader-container">
                                    <img src="assets/images/loader.gif" alt="loader" className="loader" />
                                </div> : <input type="submit" name="btn" value="Submit" className="change-password-btn" />
                        }

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ForgotPassword
