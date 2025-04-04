//this work only a loged in user can access further for that .....

import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Userprottectedwraper = ({children}) => {

    const token =localStorage.getItem('token');
    const navigate=useNavigate()
    
    useEffect(()=>
        {if(!token){
            navigate('/login')
        }
        },[ token ] ); //use useeffect for authentication of home page 

//else if token exist |
//                    \/
  return (
    <>
        {children}
    </>
  )
}

export default Userprottectedwraper