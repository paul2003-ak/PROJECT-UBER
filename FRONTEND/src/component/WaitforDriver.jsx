import React from 'react'

const WaitforDriver = (props) => {
  return (
    <div>
    <div className='flex justify-between '>
      
      <h5 onClick={()=>{
          props.setWaitingfordriver(false)
      }} className='font-medium text-2xl mr-3 text-gray-00 p-1 text-center w-[93%] absolute top-0'><i className=" text-3xl text-gray-200 ri-arrow-down-double-line"></i></h5>
    </div>

      <div className='flex justify-between items-center '>
      <img className='h-16 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium '>Ayan</h2>
          <h4 className='text-xl font-semibold -mb-1 -mt-1'>WB38 2003</h4>
          <p className='txt-sm text-gray-600'>BMW M5</p>
        </div>
      </div>

    <div className='flex justify-between flex-col items-center gap-2'>

      <div className='w-full mt-2'>
        <div className='flex items-center gap-5 p-2 border-b-1 border-gray-300'>
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>DD 252</h3>
            <p className='text-sm text-gray-600'>Newtown school</p>
          </div>
        </div>

        <div className='flex items-center gap-5 p-2 border-b-1 border-gray-300'>
          <i className="ri-square-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>street 277</h3>
            <p className='text-sm text-gray-600'> Near IEM public school</p>
          </div>
        </div>

        <div className='flex items-center gap-5 p-2 '>
          <i className="ri-bank-card-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>₹193.20</h3>
            <p className='text-sm text-gray-600'>Cash</p>
          </div>
        </div>
      </div>
      
    </div>

  </div>
  )
}

export default WaitforDriver