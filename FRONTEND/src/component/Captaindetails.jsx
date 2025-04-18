import React from 'react'

const Captaindetails = () => {
  return (
    <div>
        <div className='flex justify-between items-center '>
          <div className='flex justify-start items-center gap-2'>
            <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/Pa-_SlhgG-z_8-6nZIKEsAhligbbvuCZ8H5AD8Rhfpo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL1lL/U1dlMjFsWlJvUUJi/anBCR2F6d0EtLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMHhO/alUyL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL3doZXJl/X2lzX3RoZV9idXp6/XzgxNC85N2Y2N2Vm/ZTcyOGNiMDU5YWIw/Zjg5N2NhYzdhYzE0/MA" alt="" />
            <h4 className='text-lg font-medium '>Mia didi</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold '>₹255.2</h4>
            <p className='text-sm font-medium text-gray-600'>Earned</p>
          </div>
        </div>


        <div className='flex justify-center gap-5 items-start bg-[#f3c169] rounded-2xl mt-8 p-2'>

          <div className='text-center'>
            <i className=" text-2xl font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-xs text-gray-600 '>HOURES ONLINE</p>
          </div>

          <div className='text-center'>
            <i className="text-2xl font-thin ri-speed-up-fill"></i>
            <h5 className='text-lg font-medium'>30km</h5>
            <p className='text-xs text-gray-600 '>TOTAL DISTANCE</p>
          </div>

          <div className='text-center'>
            <i className="text-2xl font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-xs text-gray-600 '>Hours Online</p>
          </div>

        </div>
    </div>
  )
}

export default Captaindetails