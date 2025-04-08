import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { captainDatacontext } from '../context/captaincontext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();

  const { setCaptain } = useContext(captainDatacontext);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Corrected spacing here
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem('token');
        navigate('/captain-login');
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

export default CaptainProtectedWrapper;