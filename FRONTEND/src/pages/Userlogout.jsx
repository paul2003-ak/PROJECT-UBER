import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Userlogout = () => {

  const token=localStorage.getItem('token');

  const navigate=useNavigate();

  axios.get(`${import.meta.env}/users/logout`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
  }).then((response)=>{
    if(response.status ===200){
      localStorage.removeItem('token')
      navigate('/login')
    }
  })


  return (
    <div>Userlogout</div>
  )
}

export default Userlogout