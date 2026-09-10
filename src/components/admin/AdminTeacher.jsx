import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function AdminTeacher() {

    const [teacher, setteacher] = useState([])

    useEffect(() => {
        fetchallTeachers()
    }, [])

    useEffect(() => {
        document.title = "All Teacher";
    }, []);
    

    async function fetchallTeachers()
    {
        
        try
        {
            const resp = await axios.get(`${process.env.REACT_APP_APIURL}/api/fetchallteachers`)
            if (resp.data.statuscode === 1) 
            {
                setteacher(resp.data.teacherdata)
            }
            else if (resp.data.statuscode === 0) 
            {
                setteacher([]);
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

    async function delteacher(id)
    {
        const pass = window.confirm("Are U Sure To Delete Teacher Data")
        if(pass===true)
        {
            try
            {
                const resp = await axios.delete(`${process.env.REACT_APP_APIURL}/api/delteacher/${id}`)

                if(resp.data.statuscode===1)
                {
                    toast.success(resp.data.msg)
                    fetchallTeachers();
                }
                else if(resp.data.statuscode===0)
                {
                    toast.warn(resp.data.msg)
                }
                else
                {
                    toast.error("some problem occured")
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

                <div className='backcolor btm'>
                    <h1 class="title12 mt-5">Admin Teacher Data</h1>
                    <Link to="/addteacher" className="btn btn23 ">Add New Teacher</Link>

                {
                    teacher.length > 0 ?

                    <div class="table-container mt-5">
                    <table class="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Subject</th>
                                <th>Subject-Code</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                    teacher.map((item, index) => 
                                        <tr key={index} className="table-row">
                                            <td className="table-cell">{item.name}</td>
                                            <td className="table-cell">{item.email}</td>
                                            <td className="table-cell">{item.phone}</td>
                                            <td className="table-cell">{item.department}</td>
                                            <td className="table-cell">{item.subject}</td>
                                            <td className="table-cell">{item.subjectcode}</td>
                                            <td className="table-cell">
                                                <Link to={`/updateteacher?tid=${item._id}`} className="edit-button">
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="table-cell">
                                                <button className="delete-btn" onClick={()=>delteacher(item._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )   
                                }
                        </tbody>
                    </table>
                </div>
                : <div class="no-user-message">No Teacher Added</div>
                }
                </div>

            </div>
        </div>
    )
}

export default AdminTeacher
