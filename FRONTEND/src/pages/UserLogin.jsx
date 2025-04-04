import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/Usercontext';
import axios from 'axios';

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext); // Corrected

  const submitHandler=async(e)=> {
    e.preventDefault();

    const newuser ={
      email:email,
      password:password
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        newuser
      );

      if (response.status === 200) {

        const data = response.data;
        setUser(data.user); // Corrected

        localStorage.setItem('token',data.token);//set the token for furthur login authorization

        console.log("User logged in:", data);

        navigate('/home');
      }

    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Login failed! Please try again.");
    }


    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-5' 
             src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" 
             alt="Logo" 
        />

        <form onSubmit={submitHandler}> {/* Fixed */}
          <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Password'
          />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>
        </form>

        <p className='text-center'>
          New Here? <Link to='/signup' className='text-blue-600'>Create New Account</Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login' 
              className='bg-[#10b461] text-white font-semibold mb-7 flex justify-center items-center rounded px-4 py-2 w-full text-lg placeholder:text-base'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default Userlogin;