import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-amber-50 flex items-center justify-center rounded-full ml-1'>
            <i className=" text-lg font-medium ri-home-4-line"></i>
            </Link>

            <div className='h-1/2 '>
                <img className='h-full w-full object-cover' src="ubercab.jpeg" alt="" />
            </div>

            <div className='h-1/2 p-4 '>
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

                        <div className='flex items-center gap-5 p-2 '>
                            <i className="ri-bank-card-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹193.20</h3>
                                <p className='text-sm text-gray-600'>Cash</p>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="w-full mt-2 bg-black text-white text-lg font-semibold py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-300">Pay</button>
            </div>

        </div>
    )
}

export default Riding