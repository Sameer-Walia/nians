import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminRouteProtector(props)
{

    const navigate = useNavigate()

    // Because udata is null in app.js, the condition fires → it navigates to /login.
    // Later, when your context finishes loading and updates udata with the real user, it’s already too late — the redirect has already happened.
    // So this version fails because you treat null as “not logged in”, but in reality at first render it means “not loaded yet”.
    // so donot use this useeffect , use 2nd one

    // once your useEffect in App.js (or API call) finishes and sets udata to the real logged-in user, it’s already too late: the redirect already happened, so the user never gets to stay on the page.

    // useEffect(()=>
    // {
    //     if(udata===null)
    //     {
    //         navigate("/login")
    //         toast.error("please login to access the page")
    //     }
    //     else 
    //     {
    //         if(udata.usertype!=="admin")
    //         {
    //             navigate("/login")
    //             toast.error("please login to access the admin page") 
    //         }
    //     }
    // },[udata])


    useEffect(() =>
    {
        if (sessionStorage.getItem("userdata") === null)
        {
            navigate("/login")
            toast.error("please login to access the page")
        }
        else
        {
            const uinfo = JSON.parse(sessionStorage.getItem("userdata"))
            if (uinfo.usertype !== "admin")
            {
                navigate("/login")
                toast.error("please login to access the admin page")
            }
        }
    }, [])

    return (
        <div>
            <props.compname />
        </div>
    )
}

export default AdminRouteProtector
