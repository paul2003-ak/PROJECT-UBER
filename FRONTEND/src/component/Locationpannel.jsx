import React from 'react';

const Locationpannel = (props) => {

    //sample array location 
    const locations =[
        'Howrah Railway Station, Howrah, West Bengal',
        'Tata Medical Center',
        'Biswa Bangla Gate',
        'Sister Nivedita University (SNU)'
    ]
    return (
        <div>
            {
                locations.map(function(elem,idx){
                    return  <div key={idx} onClick={()=>{
                        props.setVehiclepannel(true)
                        props.setPannelOpen(false)
                    }} className='bg-white shadow-md p-4 mb-2 rounded-xl flex items-center gap-4 w-full border-2  active:border-black  border-gray-100'>

                    <div className='bg-gray-200 p-2 rounded-full'>
                        <i className="ri-map-pin-fill text-black text-xl"></i>
                    </div>
    
                    <div className='flex-1'>
                        <p className='text-gray-400 text-sm'>Pickup Location</p>
                        <h2 className='text-lg font-semibold'>
                           {elem}
                        </h2>
                    </div>
                </div>
                })
            }

        </div>
    );
};

export default Locationpannel;