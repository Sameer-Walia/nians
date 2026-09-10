import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Updateuser() {

    const [params] = useSearchParams();
    const uid = params.get("pid")
    const navigate = useNavigate()


    const [name, setname] = useState();
    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [rollno, setrollno] = useState();
    const [sem, setsem] = useState();
    const [dep, setdep] = useState();
    const[loading , setloading] = useState(false);

    useEffect(() => {
        if (uid) {
            fetchoneuser()
        }
    }, [uid])

    useEffect(() => {
        document.title = "Update User";
    }, []);

    async function fetchoneuser() 
    {
        try 
        {
            const resp = await axios.get(`${process.env.REACT_APP_APIURL}/api/fetchoneuser/${uid}`)
          
            if (resp.data.statuscode === 1) 
            {
                const user = resp.data.oneuserdata
                setname(user.name);
                setphone(user.phone);
                setemail(user.email);
                setrollno(user.rollno);
                setdep(user.department);
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("Cannot Fetch User Data")
            }
            else 
            {
                alert("Some Problem Occured")
            }
        }
        catch (e) 
        {
            toast.error("Error Occured " + e.message)
        }
    }

    async function updateoneuser(e) 
    {
        e.preventDefault()
        try 
        {
            setloading(true)
            const updateoneuser = { name, phone, email, rollno, sem, dep, uid }

            const resp = await axios.put(`${process.env.REACT_APP_APIURL}/api/updateoneuser`, updateoneuser)
           
            if (resp.data.statuscode === 1) 
            {
                toast.success("User Updated Successfully")
                navigate("/adminuser");
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("User Cannot Updated Successfully. Do some changes for update")
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
            <Adminpanel />
            <div className='content1 bcolor'>
                <div class="text-center pt-3">
                    <h1 className='mhd'>Update User Data</h1>
                </div>
                <section class="form-container ssss">
                    <form onSubmit={updateoneuser}>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" required value={name} onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" required value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                        </div>
                      
                        <div class="form-group">
                            <label for="department">Department</label>
                            <select
                                name="department"
                                id="department"
                                required
                                value={dep}
                                onChange={(e) => setdep(e.target.value)}
                            >
                                <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
                                <option value="B.Tech Electronics and Communication Engineering">B.Tech Electronics and Communication Engineering</option>
                                <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                            </select>
                        </div>


                        
                         {
                            loading? 
                            <div className="loader-container">
                                <img src="assets/images/loader.gif" alt="loader" className="loader" />
                            </div>:
                            <div class="form-actions ">
                                <input type="submit" className='subbtn mt-3' value="update User" />
                            </div>
                        }
                    </form>
                </section>

            </div>
        </div>
    )
}

export default Updateuser
