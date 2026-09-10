import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../reduxslices/authSlice";

function ChangePassword()
{

    const [currpass, setcurrpass] = useState();
    const [newpass, setnewpass] = useState();
    const [cnewpass, setcnewpass] = useState();
    const [loading, setloading] = useState(false);

    const navi = useNavigate();
    const dispatch = useDispatch()
    const { email } = useSelector((state) => state.auth)


    useEffect(() =>
    {
        document.title = "Change Password"
    }, [])

    async function onchangepassword(e)
    {
        e.preventDefault()

        const apidata = { currpass, newpass, email };

        try
        {
            if (currpass !== newpass)
            {
                if (newpass === cnewpass)
                {
                    setloading(true)
                    const resp = await axios.put(`${process.env.REACT_APP_APIURL}/api/changepassword`, apidata)

                    if (resp.data.statuscode === 0)
                    {
                        toast.warn("Current Password Incorrect")
                    }
                    else if (resp.data.statuscode === 1)
                    {
                        toast.success("Password changed successfully");
                        dispatch(LogOut())
                        sessionStorage.clear();
                        navi("/login")
                        toast.info("You have been logged out , login with new password");
                    }
                    else
                    {
                        toast.warn("Some Problem Occured")
                    }
                }
                else
                {
                    toast.info("New Password and confirm new password does not match")
                }
            }
            else
            {
                toast.info("Current Password and new Pasword are same")
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

    return (
        <>
            <div className="change-password-page">
                <div className="change-password-container">
                    <h2 className="change-password-title">Change Password</h2>

                    <div className="change-password-form-wrapper" data-wow-delay=".5s">
                        <form name="form1" onSubmit={onchangepassword} className="change-password-form">

                            <input type="password" name="currpass" placeholder="Current Password" required onChange={(e) => setcurrpass(e.target.value)} className="change-password-input" />

                            <input type="password" name="newpass" placeholder="New Password" required onChange={(e) => setnewpass(e.target.value)} className="change-password-input" />

                            <input type="password" name="cnewpass" placeholder="Confirm New Password" required onChange={(e) => setcnewpass(e.target.value)} className="change-password-input" />

                            {
                                loading ?
                                    <div className="loader-container">
                                        <img src="assets/images/loader.gif" alt="loader" className="loader" />
                                    </div> : <input type="submit" name="btn" value="Change Password" className="change-password-btn" />
                            }

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ChangePassword;