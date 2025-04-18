import React from 'react'
import { Link } from 'react-router-dom'

const Finishride = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Handlebar */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-1.5 bg-gray-400 rounded-full"></div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Finish This Ride
      </h2>

      {/* Driver Info */}
      <div className="flex items-center justify-between bg-[#f3c169] p-4 rounded-2xl shadow-md mb-6">
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-14 rounded-full object-cover border-2 border-white"
            src="https://imgs.search.brave.com/_m8FEaZVC5gKUqgho8VOqGnZJUF5EMei1GddD1DM3BE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50NS5iYWJlc2Fy/b3VuZC5jb20vc3Vu/bnlsZW9uZS5jb20v/MDIyOC8wMC5qcGc"
            alt="driver"
          />
          <h3 className="text-lg font-medium text-gray-800">Sunny Leoni</h3>
        </div>
        <span className="text-sm font-semibold text-gray-700">2.2 Km</span>
      </div>

      {/* Ride Details */}
      <div className="space-y-4">
        {/* Pickup */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border">
          <i className="ri-map-pin-user-fill text-xl text-blue-500"></i>
          <div>
            <h4 className="text-base font-medium text-gray-800">DD 252</h4>
            <p className="text-sm text-gray-500">Newtown School</p>
          </div>
        </div>

        {/* Drop */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border">
          <i className="ri-square-fill text-lg text-green-600"></i>
          <div>
            <h4 className="text-base font-medium text-gray-800">Street 277</h4>
            <p className="text-sm text-gray-500">Near IEM Public School</p>
          </div>
        </div>

        {/* Fare */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border">
          <i className="ri-bank-card-fill text-xl text-purple-600"></i>
          <div>
            <h4 className="text-base font-medium text-gray-800">₹193.20</h4>
            <p className="text-sm text-gray-500">Cash</p>
          </div>
        </div>
      </div>

      {/* Complete Button */}
      <div className="flex flex-col justify-center mt-10">
        <Link
          to="/captainhome"
          className="w-full text-center max-w-md bg-[#f3c169] text-black font-semibold text-lg py-3 rounded-xl shadow-lg transition-all"
        >
          Finish Ride
        </Link>

      </div>
    </div>
  )
}

export default Finishride