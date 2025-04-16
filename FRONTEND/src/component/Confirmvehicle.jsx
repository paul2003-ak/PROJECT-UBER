import React from 'react'

const Confirmvehicle = (props) => {
  return (
    <div>
      <div className='flex justify-between '>
        <h3 className='text-2xl font-semibold mb-3'>Confirm your Ride</h3>
        <h5 onClick={() => {
          props.setConfirmride(false)
        }} className='font-medium text-2xl mr-3 text-gray-00'><i className="ri-arrow-down-double-line"></i></h5>
      </div>

      <div className='flex justify-between flex-col items-center gap-2'>
        <img className='h-25 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

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

        <button onClick={()=>{
          props.setLookingforadriver(true);
          props.setConfirmride(false);
        }} className="w-full mt-2 bg-black text-white text-lg font-semibold py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-300">
          Confirm
        </button>
      </div>

    </div>
  )
}

export default Confirmvehicle