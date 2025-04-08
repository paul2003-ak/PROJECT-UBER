import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Captainlogout = () => {

  const token=localStorage.getItem('token');

  const navigate=useNavigate();

  axios.get(`${import.meta.env}/captains/logout`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
  }).then((response)=>{
    if(response.status ===200){
      localStorage.removeItem('token')
      navigate('/captain-login')
    }
  })


  return (
    <div>Captainlogout</div>
  )
}

export default Captainlogout
