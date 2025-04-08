import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { captainDatacontext } from '../context/captaincontext'
import axios from 'axios'

const CaptainLogin = () => {

const navigate=useNavigate();
const {setCaptain}=useContext(captainDatacontext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


const submitHandler= async(e)=>{
  e.preventDefault();

  const newcaptain={
    email:email,
    password:password
  }

  console.log(newcaptain);

  try{
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,newcaptain);

    if(response.status===200){
      const data=response.data;

      setCaptain(data.captain)

      localStorage.setItem('token',data.token)

      navigate('/captainhome')
    }
  }catch(error){
    console.log(error)
  }

  setEmail('')
  setPassword('')
}


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-20 mb-5' src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc" alt="" />

        <form  onSubmit={(e)=>{
          submitHandler(e)
        }}>

          <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>

          <input
            required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />




          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>

        </form>

        <p className='text-center'>Join a fleet? <Link to='/captain-Signup'className='text-blue-600'>Register new Captain</Link>
          </p>
      </div>



      <div>
        <Link
        to='/login'
          className='bg-[#f3c169] text-white font-semibold mb-7 flex justify-center items-center rounded px-4 py-2 w-full text-lg placeholder:text-base'>
          Sign in as User
        </Link>

      </div>


    </div>
  )
}

export default CaptainLogin