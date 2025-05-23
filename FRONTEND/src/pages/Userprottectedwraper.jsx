//this work only a loged in user can access further for that .....

import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/Usercontext';
import axios from 'axios';

const Userprottectedwraper = ({ children }) => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {

    if (!token) {
      navigate('/login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Corrected spacing here
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem('token');
        navigate('/login');
      });
  },[token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return(
    <>
    {children}
    </>
  )
};

export default Userprottectedwraper;