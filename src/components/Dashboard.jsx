import { FaEnvelope, FaPhone, FaEdit, FaUniversity, FaIdBadge, FaListOl, FaUser } from "react-icons/fa";
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Dashboard()
{

    useEffect(() =>
    {
        document.title = "DashBoard";
    }, []);

    const navi = useNavigate();

    const [phone, setphone] = useState();
    const [name, setname] = useState();
    const [rollno, setrollno] = useState();
    const [sem, setsem] = useState();
    const [dep, setdep] = useState();

    const { isLoggedIn, email } = useSelector((state) => state.auth)

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
                setdep(user.department);
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("Cannot Fetch User Data. Please Login again")
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

    function edit()
    {
        navi("/editprofile")
    }

    return (
        <div>
            <div class="container2">
                <h2 class="header">
                    <span class="title">
                        <span class="title-text">User Information</span>
                        <img src={`assets/images/line1.svg`} class="underline11" alt="underline" />
                    </span>
                </h2>
                <div class="content">
                    <div class="avatar-container">
                        <img src="assets/images/profile2.jpg" alt="User Avatar" class="avatar" />
                    </div>
                    <div class="info-grid">
                        <div class="info-card">
                            <FaUser className="iconn" />
                            <div>
                                <p class="label">Name</p>
                                <p class="value">{name}</p>
                            </div>
                        </div>
                        <div class="info-card">
                            <FaEnvelope className="iconn" />
                            <div>
                                <p class="label">Email</p>
                                <p class="value">{email}</p>
                            </div>
                        </div>
                        <div class="info-card">
                            <FaPhone className="iconn" />
                            <div>
                                <p class="label">Phone</p>
                                <p class="value">{phone}</p>
                            </div>
                        </div>
                        <div class="info-card">
                            <FaUniversity className="iconn" />
                            <div>
                                <p class="label">Department</p>
                                <p class="value">{dep}</p>
                            </div>
                        </div>

                    </div>
                    <div class="edit-button-container">
                        <button class="edit-button " onClick={edit}><FontAwesomeIcon icon={faEdit} />&nbsp;&nbsp;Edit Profile</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
