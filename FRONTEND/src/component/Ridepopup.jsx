import React from 'react'

const Ridepopup = (props) => {
    return (
        <div>
            <div className='flex justify-between '>

                <h5 onClick={() => {
                    props.setRidepopup(false)
                }} className='font-medium text-2xl mr-3 '><i className="text-gray-400 ri-arrow-down-s-line"></i></h5>
            </div>

                <div className='flex items-center justify-between mb-2 p-3 bg-[#f3c169] rounded-b-2xl'>
                    <div className='flex items-center gap-3'>
                        <img className='h-12 w-12 rounded-full object-center' src="https://imgs.search.brave.com/_m8FEaZVC5gKUqgho8VOqGnZJUF5EMei1GddD1DM3BE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50NS5iYWJlc2Fy/b3VuZC5jb20vc3Vu/bnlsZW9uZS5jb20v/MDIyOC8wMC5qcGc" alt="" />
                        <h2 className='text-lg font-medium'>Sunny Leoni</h2>
                    </div>
                    <h5 className='text-lg font-semibold '>2.2 Km</h5>
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



                <div className='flex justify-between items-center w-full gap-2'>
                    <button onClick={() => {
                        props.setRidepopup(false);
                    }} className="w-1/2 mt-2 bg-gray-100 text-black text-lg font-semibold py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-300">
                        Ignore
                    </button>

                    <button onClick={() => {
                        props.setConfirmridepopup(true)
                    }} className="w-1/2 mt-2 bg-[#f3c169] text-white text-lg font-semibold py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-300">
                        Accept
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Ridepopup