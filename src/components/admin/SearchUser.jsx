import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function SearchUser() {

    const[flag , setflag] = useState(false)
    const[email , setemail] = useState()
    const[userdata , setuserdata] = useState()
    const[loading , setloading] = useState(false);

    useEffect(() => {
        document.title = "Search User";
    }, []);
    

    async function searchuser(e)
    {
        e.preventDefault()
        try
        {
            setloading(true)
            const resp = await axios.get(`${process.env.REACT_APP_APIURL}/api/searchuser?email=${email}`)
        
            if(resp.data.statuscode===0)
            {
                toast.warning("No User Found");
                setflag(false)
            }
            else if(resp.data.statuscode===1)
            {
                setuserdata(resp.data.userdata)
                setflag(true)
            }
            else
            {
                toast.error("Some Problem Occured")
            }
        }
        catch(e)
        {
            toast.error("Error Occured " + e.message)
        }
        finally
        {
            setloading(false)
        }

    }

    async function deluser(id)
    {
        var confirm = window.confirm("Are u sure want to delete the user")
        if(confirm===true)
        {
            try
            {
                const resp = await axios.delete(`${process.env.REACT_APP_APIURL}/api/deluser?id=${id}`)
               
                if(resp.data.statuscode===1)
                {
                    toast.success("User Deleted Successfully")
                    setflag(false)
                }
                else if(resp.data.statuscode===0)
                {
                    toast.error("User not Deleted")
                }
                else
                {
                    toast.error("Some Problem Occured")
                }
            }
            catch(e)
            {
                toast.error("Error Occured " + e.message)
            }
           
        }
    }

    return (
        <div>
            <Adminpanel />
            <div className='content1'>
                <div class="text-center pt-3">
                    <h1 className='mhd mt-5'>Search User</h1>
                    <section class="form-container1 mx-auto">
                        <form onSubmit={searchuser}>

                            <div className="input-container mt-4 ">

                                <input type="email" name="useremail" placeholder="" onChange={(e)=>setemail(e.target.value)} className="input-field" required />

                                <label className="input-label">
                                    <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
                                </label>

                            </div>
                            {
                                loading? 
                                <div className="loader-container">
                                    <img src="assets/images/loader.gif" alt="loader" className="loader" />
                                </div>:
                                <div class="form-actions ">
                                    <input type="submit" className='subbtn mt-3' value="Search" />
                                </div>
                            }
                        </form>
                    </section>
                </div>

                {
                    flag===true?
                    <>  
                        <div class="table-container mt-5">
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
                                            <tr className="table-row">
                                                <td className="table-cell">{userdata.name}</td>
                                                <td className="table-cell">{userdata.department}</td>
                                                <td className="table-cell">{userdata.email}</td>
                                                <td className="table-cell">{userdata.phone}</td>
                                                <td className="table-cell">
                                                    <Link to={`/updateuser?pid=${userdata._id}`} className="edit-button">
                                                        Edit
                                                    </Link>
                                                </td>
                                                <td className="table-cell">
                                                    <button className="delete-btn" onClick={()=>deluser(userdata._id)} >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                    </>:null
                }

            </div>
        </div>
    )
}

export default SearchUser
