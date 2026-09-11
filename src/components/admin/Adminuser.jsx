import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Adminuser()
{

    const [membersdata, setmembersdata] = useState([])

    useEffect(() =>
    {
        fetchalluser();
    }, [])

    useEffect(() =>
    {
        document.title = "All User";
    }, []);


    async function fetchalluser() 
    {
        try 
        {
            const resp = await axios.get(`${process.env.REACT_APP_APIURL}/api/fetchallusers`, { withCredentials: true })

            if (resp.data.statuscode === 1) 
            {
                setmembersdata(resp.data.usersdata)
            }
            else if (resp.data.statuscode === 0)
            {
                setmembersdata([]);
            }
            else 
            {
                toast.warn("Some Problem Occured")
            }
        }
        catch (e) 
        {
            toast.error("Error Occured " + e.message)
        }
    }

    async function deluser(id)
    {
        var confirm = window.confirm("Are u sure want to delete the user")
        if (confirm === true)
        {
            try
            {
                const resp = await axios.delete(`${process.env.REACT_APP_APIURL}/api/deluser?id=${id}`)

                if (resp.data.statuscode === 1)
                {
                    toast.success("User Deleted Successfully")
                    fetchalluser();
                }
                else if (resp.data.statuscode === 0)
                {
                    alert("User not Deleted")
                }
                else 
                {
                    toast.warn("Some Problem Occured")
                }
            }
            catch (e)
            {
                toast.error("Error Occured " + e.message)
            }
        }
    }



    return (
        <div>
            <Adminpanel />
            <div className='content1 pad'>
                {
                    membersdata.length > 0 ?
                        <>
                            <div className='backcolor '>
                                <h1 class="title12 mt-5">Admin Users Data</h1>

                                <div class="summary">
                                    <div className='row'>
                                        <div className='col-6 '>
                                            <td className="table-cell">
                                                <Link to={`/searchuser`} className="edit-button1">
                                                    Search User
                                                </Link>
                                            </td>
                                        </div>
                                        <div className='col-6 '>
                                            <p class="total-users">Total Users Registered: {membersdata.length}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-container">
                                    <table class="user-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Department</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Update</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                membersdata.map((item, index) =>
                                                    <tr key={index} className="table-row">
                                                        <td className="table-cell">{item.name}</td>
                                                        <td className="table-cell">{item.department}</td>
                                                        <td className="table-cell">{item.email}</td>
                                                        <td className="table-cell">{item.phone}</td>
                                                        <td className="table-cell">
                                                            <Link to={`/updateuser?pid=${item._id}`} className="edit-button">
                                                                Edit
                                                            </Link>
                                                        </td>
                                                        <td className="table-cell">
                                                            <button className="delete-btn" onClick={() => deluser(item._id)} >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </> : null
                }
            </div>
        </div>
    )
}

export default Adminuser
