import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Finishride from '../component/Finishride'

const Captainriding = () => {

    const [finishriding, setFinishriding] = useState(false)

    const finishridingref = useRef(null)

    useGSAP(() => {
        if (finishriding) {
            gsap.to(finishridingref.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(finishridingref.current, {
                transform: 'translateY(100%)'
            });
        }

    }, [finishriding])

    return (
        <div className='h-screen'>

            <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
                <img className='w-16 ' src="https://www.pngall.com/wp-content/uploads/13/Uber-Logo-PNG-Photo.png" alt="" />
                <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full ml-1'>
                    <i className=" text-lg font-medium ri-logout-box-line"></i>
                </Link>
            </div>

            <div className='h-4/5 '>
                <img className='h-full w-full object-cover' src="ubercab.jpeg" alt="" />
            </div>

            <div className='h-1/5 p-6 bg-[#f3c169] flex flex-col justify-center items-center relative'>
                <h5 className='text-center w-[93%] absolute top-0 h-1'><i className="text-4xl text-gray-600 ri-subtract-line"></i></h5>

                <h4 className='text-xl font-semibold mt-4'>4 Km Away</h4>
                <button onClick={()=>{
                    setFinishriding(true)
                }}
                 className="w-[80%] mt-2  bg-black text-white text-lg font-semibold py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-300">
                Complete
                </button>
            </div>


            <div ref={finishridingref} className='fixed h-screen w-full z-10 bottom-0 translate-Y-full px-3  bg-white'>
                <Finishride />
            </div>

        </div>
    )
}

export default Captainriding