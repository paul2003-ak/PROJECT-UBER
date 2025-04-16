import React from 'react'

const Vehiclepannel = (props) => {
  return (
    <div>
        <div className='flex justify-between '>
          <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
          <h5 onClick={() => {
            props.setVehiclepannel(false)
          }} className='font-medium text-2xl mr-3 text-gray-00'><i className="ri-arrow-down-double-line"></i></h5>
        </div>

        {/*UberGo */}
        <div onClick={()=>{
            props.setConfirmride(true)
            props.setVehiclepannel(false)
        }} className={'p-3 mb-2 flex items-center justify-between w-full rounded-xl border-2  active:border-black  border-gray-100'}>
          <img className='h-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,Compact rides</p>
          </div>
          <h2 className='text-lg font-semibold '>₹193.20</h2>
        </div>

        {/*motorcycle */}
        <div onClick={()=>{
            props.setConfirmride(true)
            props.setVehiclepannel(false)
        }} className='p-3 mb-2 flex items-center justify-between w-full border-2 active:border-black  border-gray-100 rounded-xl'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />

          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold '>₹65.17</h2>
        </div>

        {/*Auto */}
        <div onClick={()=>{
            props.setConfirmride(true)
            props.setVehiclepannel(false)
        }} className='p-3 mb-2 flex items-center justify-between w-full border-2 active:border-black  border-gray-100 rounded-xl'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />

          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Auto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
          </div>
          <h2 className='text-lg font-semibold '>₹118.21</h2>
        </div>
    </div>
  )
}

export default Vehiclepannel