import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import Locationpannel from '../component/Locationpannel'
import Vehiclepannel from '../component/Vehiclepannel'
import Confirmvehicle from '../component/Confirmvehicle'
import LookingforDriver from '../component/LookingforDriver'
import WaitforDriver from '../component/WaitforDriver'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [pannelOpen, setPannelOpen] = useState(false)
  const [vehiclepannel, setVehiclepannel] = useState(false)
  const [confirmride, setConfirmride] = useState(false)
  const [lookingforadriver, setLookingforadriver] = useState(false)
  const [waitingfordriver, setWaitingfordriver] = useState(false)


  const PanelRef = useRef(null)
  const PannelCloseRef = useRef(null)
  const vehiclepanelref = useRef(null)
  const confirmpanelref = useRef(null)
  const lookingforadriverref = useRef(null)
  const waitingfordriverref = useRef(null)

  const submithandler = (e) => {
    e.preventDefault()
  }


  useGSAP(() => {
    if (pannelOpen) {
      gsap.to(PanelRef.current, {
        height: '70%',
        padding: 24,
        duration: 0.5,
        ease: 'power2.out',
        opacity: 1
      });
      gsap.to(PannelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(PanelRef.current, {
        height: '0%',
        padding: 0,
        duration: 0.5,
        ease: 'power3.inOut',
        opacity: 0
      });
      gsap.to(PannelCloseRef.current, {
        opacity: 0
      });
    }

  }, [pannelOpen, PannelCloseRef])


  useGSAP(function () {
    if (vehiclepannel == true) {
      gsap.to(vehiclepanelref.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclepanelref.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclepannel])

  useGSAP(function () {
    if (confirmride == true) {
      gsap.to(confirmpanelref.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmpanelref.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmride])

  useGSAP(function () {
    if (lookingforadriver == true) {
      gsap.to(lookingforadriverref.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(lookingforadriverref.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [lookingforadriver])

  useGSAP(function () {
    if (waitingfordriver == true) {
      gsap.to(waitingfordriverref.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingfordriverref.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingfordriver])


  return (
    <div className='h-screen relative overflow-hidden'>

      <img className='w-20 absolute left-5 top-5 ' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />

      <div className='h-screen w-screen '>
        <img className='h-full w-full object-cover' src="ubercab.jpeg" alt="" />
      </div>


      <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>

        <div className='h-[30%] bg-white p-5 relative'>

          <h5 ref={PannelCloseRef} onClick={() => setPannelOpen(false)}
            className='absolute opacity-0 top-4 right-6 text-2xl '>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className='text-2xl font-semibold'>Find a trip</h4>

          <form onSubmit={(e) => {
            submithandler(e)
          }}>

            <div className="line absolute h-16 w-1 top-[44%] left-10 bg-gray-800 rounded-full "></div>

            <input className='bg-[#eee] px-8 py-3 text-base rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location'
              onClick={() => setPannelOpen(true)}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
            />

            <input className='bg-[#eee] px-8 py-3 text-base rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination'
              onClick={() => setPannelOpen(true)}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
            />

          </form>

        </div>


        <div ref={PanelRef} className='opacity-0 bg-white h-0 '>
          <Locationpannel setVehiclepannel={setVehiclepannel} setPannelOpen={setPannelOpen} />
        </div>

      </div>



      <div ref={vehiclepanelref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white'>
        <Vehiclepannel setConfirmride={setConfirmride} setVehiclepannel={setVehiclepannel} />
      </div>

      <div ref={confirmpanelref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white'>
        <Confirmvehicle setConfirmride={setConfirmride} setLookingforadriver={setLookingforadriver} />
      </div>

      <div ref={lookingforadriverref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white'>
        <LookingforDriver setLookingforadriver={setLookingforadriver} />
      </div>

      <div ref={waitingfordriverref} className='fixed w-full z-10 bottom-0  px-3 py-6 bg-white'>
        <WaitforDriver setWaitingfordriver={setWaitingfordriver} />
      </div>


    </div>
  )
}

export default Home