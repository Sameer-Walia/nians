import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaMobile, FaBuilding, FaListOl } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';


function Editprofile()
{
    const { email, isLoggedIn } = useSelector((state) => state.auth)
    const navigate = useNavigate();

    useEffect(() =>
    {
        document.title = "Edit Profile";
    }, []);


    const [name, setname] = useState();
    const [phone, setphone] = useState();
    const [emailid, setemailid] = useState();
    const [rollno, setrollno] = useState();
    const [sem, setsem] = useState();
    const [dep, setdep] = useState();
    const [loading, setloading] = useState(false);

    useEffect(() =>
    {
        if (isLoggedIn === true) 
        {
            fetchoneuser()
        }
    }, [isLoggedIn])

    async function fetchoneuser() 
    {
        try 
        {
            const resp = await axios.get(`${process.env.REACT_APP_APIURL}/api/fetchoneuserdata/${email}`, { withCredentials: true })

            if (resp.data.statuscode === 1) 
            {
                const user = resp.data.oneuserdata;
                setname(user.name);
                setphone(user.phone);
                setemailid(user.email);
                setdep(user.department);
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("Cannot Fetch User Data")
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
    }

    async function updateuserprofile(e) 
    {
        const uemail = emailid;
        e.preventDefault()
        try 
        {
            setloading(true)
            const updateuserprofile = { name, phone, uemail, rollno, sem, dep }

            const resp = await axios.put(`${process.env.REACT_APP_APIURL}/api/updateuserprofile`, updateuserprofile)

            if (resp.data.statuscode === 1) 
            {
                toast.success("User Profile Updated Successfully")
                navigate("/dashboard");
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("User Profile Cannot Updated Successfully. Do some changes for update")
            }
            else 
            {
                toast.error("Some error occured")
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
        <div>
            <div className="container-center1">
                <div className="card1">
                    <div className="card-header1">
                        <h1 className="card-title1">Update Profile</h1>
                        <img src={`assets/images/line.svg`} alt="underline" className="underline-img1" />
                    </div>
                    <form onSubmit={updateuserprofile} className="form1">
                        <div className="form-grid1">
                            <div className="input-container1">
                                <label className="input-label1">
                                    <FaUser className="inline-block mr-2" /> Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    required
                                    className="input-field1"
                                />
                            </div>

                            <div className="input-container1">
                                <label htmlFor="department" className="input-label1">
                                    <FaBuilding className="inline-block mr-2" /> Department
                                </label>
                                <select
                                    name="department"
                                    className="input-field1"
                                    required
                                    value={dep}
                                    onChange={(e) => setdep(e.target.value)}
                                >
                                    <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
                                    <option value="B.Tech Electronics and Communication Engineering">B.Tech Electronics and Communication Engineering</option>
                                    <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                                </select>
                            </div>

                            <div className="input-container1">
                                <label htmlFor="email" className="input-label1">
                                    <FaEnvelope className="inline-block mr-2" /> Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email + " (ask admin to change email)"}
                                    disabled
                                    required
                                    className="input-field1"
                                />
                            </div>
                            <div className="input-container1">
                                <label htmlFor="phone" className="input-label1">
                                    <FaPhone className="inline-block mr-2" /> Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setphone(e.target.value)}
                                    required
                                    className="input-field1"
                                />
                            </div>
                        </div>
                        {
                            loading ?
                                <div className="loader-container">
                                    <img src="assets/images/loader.gif" alt="loader" className="loader" />
                                </div> : <button type="submit" className="submit-btn">Update</button>
                        }
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Editprofile
