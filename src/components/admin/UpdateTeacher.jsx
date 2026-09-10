import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function UpdateTeacher() {

    const [params] = useSearchParams();
    const tid = params.get("tid")

    const navigate= useNavigate();

    const [name, setname] = useState();
    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [subjectname, setsubjectname] = useState();
    const [subjectcode, setsubjectcode] = useState();
    const [dep, setdep] = useState();
    const[loading , setloading] = useState(false);

    useEffect(()=>
    {
        if(tid)
        {
            oneteacher();
        }
    },[tid])

    useEffect(() => {
        document.title = "Update Teacher";
    }, []);
    

    async function oneteacher()
    {
        try
        {
            const resp = await axios.get(`${process.env.REACT_APP_APIURL}/api/fetchoneteacher?id=`+tid)
           
            if (resp.data.statuscode === 1) 
            {
                const teacher = resp.data.oneteacherdata
                setname(teacher.name)
                setphone(teacher.phone)
                setemail(teacher.email)
                setdep(teacher.department)
                setsubjectname(teacher.subject)
                setsubjectcode(teacher.subjectcode)
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("Cannot Fetch Teacher")
            }
            else 
            {
                toast.warn("Some Problem Occured")
            }
        }
        catch(e)
        {
            toast.error("Error Occured " + e.message)
        }
    }

    async function updateteacher(e)
    {
        e.preventDefault()
        try 
        {
            setloading(true)
            const updateteacher = { name, phone, email ,subjectname, subjectcode, dep , tid}

            const resp = await axios.put(`${process.env.REACT_APP_APIURL}/api/updateteacher` , updateteacher)
          
            if (resp.data.statuscode === 1) 
            {
                toast.success("Teacher Updated Successfully")
                navigate("/adminteacher");
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("Teacher Cannot Updated Successfully. Do some changes for update")
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
      <Adminpanel/>
      <div className='content1'>
      <div class="text-center pt-3">
                    <h1 className='mhd'>Update Teacher Data</h1>
                </div>
                <section class="form-container ssss">
                    <form onSubmit={updateteacher}>
                        <div class="form-group">
                            <label for="username">Name</label>
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
                                <option value="B.Tech Electronics and Communication ">B.Tech Electronics and Communication </option>
                                <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="rollno">Subject</label>
                            <input type="text" name="rollno" id="rollno" value={subjectname} required onChange={(e) => setsubjectname(e.target.value)} />
                        </div>

                        <div class="form-group">
                            <label for="rollno">Subject-Code</label>
                            <input type="text" name="rollno" id="rollno" value={subjectcode} required  onChange={(e) => setsubjectcode(e.target.value)} />
                        </div>
                        
                        {
                            loading? 
                            <div className="loader-container">
                                <img src="assets/images/loader.gif" alt="loader" className="loader" />
                            </div>:
                            <div class="form-actions ">
                                <input type="submit" className='subbtn1 mt-3' value="Update Teacher" />
                            </div>
                        }

                        
                    </form>
                </section>

            </div>
    </div>
  )
}

export default UpdateTeacher
