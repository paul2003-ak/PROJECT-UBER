import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Captaindetails from '../component/Captaindetails'
import Ridepopup from '../component/Ridepopup'
import Confirmridepopup from '../component/Confirmridepopup'

const Captainhome = () => {

  const [ridepopup, setRidepopup] = useState(true)
  const [confirmridepopup, setConfirmridepopup] = useState(false)


  const ridepopupref = useRef(null)
  const confirmridepopupref = useRef(null)


  useGSAP(() => {
    if (ridepopup) {
      gsap.to(ridepopupref.current, {
        transform:'translateX(0)'
      });
    } else {
      gsap.to(ridepopupref.current, {
        transform:'translateX(100%)'
      });
    }

  }, [ridepopup])

  useGSAP(() => {
    if (confirmridepopup) {
      gsap.to(confirmridepopupref.current, {
        transform:'translateY(0)'
      });
    } else {
      gsap.to(confirmridepopupref.current, {
        transform:'translateY(100%)'
      });
    }

  }, [confirmridepopup])


  return (
    <div className='h-screen'>

      <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
        <img className='w-16 ' src="https://www.pngall.com/wp-content/uploads/13/Uber-Logo-PNG-Photo.png" alt="" />
        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full ml-1'>
          <i className=" text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      

      <div className='h-3/5 '>
        <img className='h-full w-full object-cover' src="ubercab.jpeg" alt="" />
      </div>

      <div className='h-2/5 p-6 '>
        <Captaindetails />
      </div>

      <div ref={ridepopupref} className='fixed w-full z-10 bottom-0 translate-X-full px-3 py-6 bg-white'>
        <Ridepopup  setRidepopup={setRidepopup} setConfirmridepopup={setConfirmridepopup}/>
      </div>

      <div ref={confirmridepopupref} className='fixed h-screen w-full z-10 bottom-0 translate-Y-full px-3  bg-white'>
        <Confirmridepopup  setConfirmridepopup={setConfirmridepopup} setRidepopup={setRidepopup}/>
      </div>

    </div>
  )
}

export default Captainhome