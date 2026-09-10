import React, { useContext, useEffect } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function UserRouteProtector(props)
{

  // const{udata} = useContext(userContext)
  const navigate = useNavigate()

  // useEffect(()=>
  // {
  //     if(udata===null)
  //     {
  //       navigate("/login")
  //       toast.error("please login to access the page")
  //     }
  // },[udata])

  useEffect(() =>
  {
    if (sessionStorage.getItem("userdata") === null)
    {
      navigate("/login")
      toast.error("please login to access the page")
    }
  }, [])

  return (
    <div>
      <props.compname />
    </div>
  )
}

export default UserRouteProtector
