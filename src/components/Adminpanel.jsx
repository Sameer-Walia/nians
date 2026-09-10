import React, { useEffect, useState } from 'react'
import { FaUser, FaHome, FaBookOpen, FaYoutube, FaClipboardList, FaBlogger } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Adminpanel()
{

    useEffect(() =>
    {
        document.title = "Admin Panel";
    }, []);

    const [activeTab, setactiveTab] = useState("Users");

    useEffect(() =>
    {
        const savedActiveLink = localStorage.getItem("tabLink");
        if (savedActiveLink)
        {
            setactiveTab(savedActiveLink);
        }
    }, []);

    function handleTabClick(tabname)
    {
        setactiveTab(tabname);
        localStorage.setItem("tabLink", tabname);
    };


    return (
        <>
            <aside class="sidebar">
                <br />

                <div class="admin-panel">
                    Admin Panel
                </div>

                <nav className="sidebar-nav">
                    <Link to="/adminuser" className={`sidebar-link , ${activeTab === "user" ? "active" : ""}`} onClick={() => handleTabClick("user")}><span className="sidebar-icon">{<FaUser />}</span>Users</Link>

                    <Link to="/admincontact" className={`sidebar-link , ${activeTab === "contact" ? "active" : ""}`} onClick={() => handleTabClick("contact")}><span className="sidebar-icon">{<FaClipboardList />}</span>Contact</Link>

                    <Link to="/adminhome" className="sidebar-link"><span className="sidebar-icon">{<FaHome />}</span>Home</Link>

                </nav>
            </aside>
        </>
    )

}

export default Adminpanel
