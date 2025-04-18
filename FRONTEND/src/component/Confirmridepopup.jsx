import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Confirmridepopup = (props) => {
    const [otp, setoOtp] = useState('')

    const submithandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-6">
            <h5 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Confirm This Ride
            </h5>

            <div className="flex items-center justify-between p-4 bg-[#f3c169] rounded-2xl shadow-md mb-6">
                <div className="flex items-center gap-4">
                    <img
                        className="h-14 w-14 rounded-full object-cover border-2 border-white"
                        src="https://imgs.search.brave.com/_m8FEaZVC5gKUqgho8VOqGnZJUF5EMei1GddD1DM3BE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50NS5iYWJlc2Fy/b3VuZC5jb20vc3Vu/bnlsZW9uZS5jb20v/MDIyOC8wMC5qcGc"
                        alt=""
                    />
                    <h2 className="text-lg font-medium text-gray-900">Sunny Leoni</h2>
                </div>
                <span className="text-base font-semibold text-gray-700">2.2 Km</span>
            </div>

            <div className="space-y-4">
                {/* Pickup */}
                <div className="flex items-start gap-4 p-3 bg-white rounded-xl shadow-sm border">
                    <i className="ri-map-pin-user-fill text-xl text-blue-500"></i>
                    <div>
                        <h3 className="text-base font-medium text-gray-800">DD 252</h3>
                        <p className="text-sm text-gray-500">Newtown School</p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex items-start gap-4 p-3 bg-white rounded-xl shadow-sm border">
                    <i className="ri-square-fill text-lg text-green-600"></i>
                    <div>
                        <h3 className="text-base font-medium text-gray-800">Street 277</h3>
                        <p className="text-sm text-gray-500">Near IEM Public School</p>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex items-start gap-4 p-3 bg-white rounded-xl shadow-sm border">
                    <i className="ri-bank-card-fill text-xl text-purple-600"></i>
                    <div>
                        <h3 className="text-base font-medium text-gray-800">₹193.20</h3>
                        <p className="text-sm text-gray-500">Cash</p>
                    </div>
                </div>
            </div>

            {/* OTP Form */}
            <form onSubmit={submithandler} className="mt-8 flex flex-col items-center space-y-4">
                <input
                    value={otp}
                    onChange={(e) => setoOtp(e.target.value)}
                    type="number"
                    placeholder="Enter OTP"
                    className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-500 placeholder:italic text-sm bg-white shadow-sm"
                />

                <Link
                    to="/captain-riding"
                    className="w-full text-center py-3 rounded-lg bg-[#f3c169]  text-black font-semibold transition-all shadow-md"
                >
                    Confirm
                </Link>

                <button
                    type="button"
                    onClick={() => {
                        props.setConfirmridepopup(false);
                        props.setRidepopup(false);
                    }}
                    className="w-full text-center py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-semibold transition-all shadow-md"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default Confirmridepopup;