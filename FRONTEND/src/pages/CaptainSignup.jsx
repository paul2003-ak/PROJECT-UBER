import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { captainDatacontext } from '../context/captaincontext';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { setCaptain } = useContext(captainDatacontext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newcaptain = {
      fullname:{
        firstname:firstname,
        lastname:lastname,
      },
      email:email,
      password:password,
      vehicle: {
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType,
      }
    };
   

      try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newcaptain);

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captainhome');
      }

      // Reset form fields
      setEmail('');
      setFirstname('');
      setLastname('');
      setPassword('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div className='flex flex-col justify-between min-h-screen bg-white px-6 py-10 md:max-w-md md:mx-auto'>
      {/* Uber Logo */}
      <div className='flex justify-center'>
        <img className='w-24' src='https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc' alt='Uber Logo' />
      </div>


      {/* Signup Form */}
      <div>
        <h1 className='text-2xl font-bold text-gray-900 mb-6'>Sign Up to Drive</h1>

        <form onSubmit={submitHandler} className='space-y-5'>


          <div className='flex gap-3'>
            <input
              required
              className='bg-gray-100 rounded px-4 py-3 border w-1/2 text-lg'
              type='text'
              placeholder='First Name'
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />

            <input
              required
              className='bg-gray-100 rounded px-4 py-3 border w-1/2 text-lg'
              type='text'
              placeholder='Last Name'
              value={lastname}
              onChange={(e) => {
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
            onChange={(e) => { setPassword(e.target.value) }}
            className='bg-gray-100 rounded px-4 py-3 border w-full text-lg'
            type='password'
            placeholder='Password'
          />


          {/*start the information for vahicle*/}
          <h3 className='text-lg font-medium mb-2'>Vahicle Information</h3>

          <div className='flex gap-4 mb-7'>

            <input
              required
              value={vehicleColor}
              onChange={(e) => { setVehicleColor(e.target.value) }}
              className='bg-gray-100 rounded px-4 py-2 border w-full text-lg'
              type='text'
              placeholder='vahicle Color'
            />

            <input
              required
              value={vehiclePlate}
              onChange={(e) => { setVehiclePlate(e.target.value) }}
              className='bg-gray-100 rounded px-4 py-3 border w-full text-lg'
              type='text'
              placeholder='vahicle Plate'
            />
          </div>


          <div className='flex gap-4 mb-7'>

            <input
              required
              value={vehicleCapacity}
              onChange={(e) => { setVehicleCapacity(e.target.value) }}
              className='bg-gray-100 rounded px-4 py-2 border w-full text-lg'
              type='Number'
              placeholder='vehicle Capacity'
            />

            <select
              required
              className='bg-gray-100 rounded px-4 py-2 border w-full text-lg'
              placeholder='vehicleType'
              value={vehicleType}
              onChange={(e)=>{
                setVehicleType(e.target.value)
              }}
            >
              
              <option value="" disabled>Select Vhicle Type</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>
{/* here the vehcle information end */}

          <button className='bg-black text-white font-semibold rounded px-4 py-3 w-full text-lg hover:bg-gray-800'>
            Sign Up
          </button>

        </form>

        <p className='text-center text-gray-600 text-sm mt-4'>
          Already have an account? <Link to='/captain-login' className='text-blue-600 font-semibold'>Log in here</Link>
        </p>

      </div>



      {/* Disclaimer */}
      <div className='text-xs text-gray-500 text-center mt-6'>
        <p>
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and  <span className='underline'>Terms of Service apply</span>.</p>
      </div>


    </div>
  )
}

export default CaptainSignup