import React, { useState ,useContext} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import {UserDataContext} from '../context/Usercontext';
import axios from 'axios'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

    const navigate=useNavigate();

    const {setUser} = useContext(UserDataContext)


  const submitHandler= async(e)=>{
    e.preventDefault();

    const newuser={
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    }

    try{
    const response=await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newuser
    );

    if(response.status===201){//201 come when create user successfully

      const data=response.data

      setUser(data.user)

      localStorage.setItem('token',data.token);

      navigate('/home')
    }
  }catch(error){
    console.error("Signup Error:", error.response?.data || error.message);
    alert("Signup failed! Please try again.");
  }
  
    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
  };

  return (
    <div className='flex flex-col justify-between min-h-screen bg-white px-6 py-10 md:max-w-md md:mx-auto'>
      {/* Uber Logo */}
      <div className='flex justify-center'>
        <img className='w-24' src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png' alt='Uber Logo' />
      </div>


      {/* Signup Form */}
      <div>
        <h1 className='text-2xl font-bold text-gray-900 mb-6'>Sign Up for Ride</h1>

        <form onSubmit={submitHandler} className='space-y-5'>


          <div className='flex gap-3'>
            <input
              required
              className='bg-gray-100 rounded px-4 py-3 border w-1/2 text-lg'
              type='text'
              placeholder='First Name'
              value={firstname}
              onChange={(e)=>{
                setFirstname(e.target.value);
              }}
            />

            <input
              required
              className='bg-gray-100 rounded px-4 py-3 border w-1/2 text-lg'
              type='text'
              placeholder='Last Name'
              value={lastname}
              onChange={(e)=>{
                setLastname(e.target.value);
              }}
            />
          </div>



          <input
            required
            value={email}
            onChange={(e) => {
            setEmail(e.target.value)
            }}
            className='bg-gray-100 rounded px-4 py-3 border w-full text-lg'
            type='email'
            placeholder='Email Address'
          />



          <input
            required
            value={password}
            onChange={(e) =>{ setPassword(e.target.value)}}
            className='bg-gray-100 rounded px-4 py-3 border w-full text-lg'
            type='password'
            placeholder='Password'
          />


          <button className='bg-black text-white font-semibold rounded px-4 py-3 w-full text-lg hover:bg-gray-800'>
            Sign Up
          </button>

        </form>

        <p className='text-center text-gray-600 text-sm mt-4'>
          Already have an account? <Link to='/login' className='text-blue-600 font-semibold'>Log in here</Link>
        </p>

      </div>



      {/* Disclaimer */}
      <div className='text-xs text-gray-500 text-center mt-6'>
        <p>
          By proceeding, you consent to receive calls, WhatsApp, or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>


    </div>
  );
};

export default UserSignup;