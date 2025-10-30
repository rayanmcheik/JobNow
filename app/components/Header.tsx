'use client';
import React from 'react';

export default function Header() {
  return (
    <nav className="w-full shadow-md h-auto ">
      <div className="flex flex-row w-full max-w-[1200px] mx-auto h-full bg-neutral-200">

        <div className='w-[70%] flex flex-col'>
          <div className="flex justify-between px-6 w-full h-auto pt-4">

            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold flex items-center font-sans">
                <span className="text-black">Job</span>
                <span className="text-[#00ff9d] flex items-center">
                  N
                  <img
                    src="/search.svg"
                    alt="O"
                    className="w-7 h-6 mx-0 inline-block align-middle pt-1"
                  />
                  w
                </span>
              </h1>
            </div>


            <nav className="hidden md:flex items-center space-x-10 text-black text-sm font-normal">
              <a href="#" className="hover:text-black ">Home</a>
              <a href="#" className="hover:text-black">Job</a>
              <a href="#" className="hover:text-black">About Us</a>
              <a href="#" className="hover:text-black">Contact</a>
            </nav>
            <div></div>
          </div>
          <div className='w-full h-full px-1 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold pb-7'>Search, Find, & Apply</h1>
            <div className='text-left  w-lvh pl-5 '>
              <p className='px-10 text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
              </p>
            </div>
            <div className='w-lvh pl-5  pt-5 flex justify-center '>
              <div className='bg-white w-lvh h-auto rounded-2xl flex flex-row justify-between gap-3 mx-5'>
                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg flex-1 mt-2 mb-2 ml-2 mr-2">
                  <img src="/searchblack.svg" alt="search" className="w-5 h-5 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none w-full text-sm"
                  />
                </div>
                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg flex-1 m-2">
                  <img src="/locationblack.svg" alt="location" className="w-5 h-5 mr-2" />
                  <select className="bg-transparent outline-none w-full text-sm">
                    <option value="">Location</option>
                    <option value="beirut">Beirut</option>
                    <option value="tripoli">Tripoli</option>
                    <option value="Zahle">Zahle</option>
                  </select>
                </div>
                <button className="bg-[#1bcf8a] m-2 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] h-80 mr-1  bg-[#1bcf8a] rounded-bl-3xl flex flex-col items-center justify-start px-4">
          <div className="flex flex-row justify-center space-x-2 w-full mt-5 items-center">

            <button className="text-white font-medium hover:text-black px-3 py-2 text-sm rounded-md transition-all duration-300">
              Sign In
            </button>

            <button className="group flex items-center gap-2 border bg-white text-black border-gray-300 px-3 py-2 rounded-md font-medium hover:bg-[#1bcf8a] hover:text-white transition-all duration-300">
              <img
                src="/createAccount.svg"
                alt="O"
                className="w-5 h-5 group-hover:hidden"
              />
              <img
                src="/createAccountWhite.svg"
                alt="O hover"
                className="w-5 h-5 hidden group-hover:inline-block"
              />
              <span className="text-sm">Create Account</span>
            </button>

          </div>

          <div className="flex-1 w-full"></div>
        </div>

      </div>
    </nav>
  );
}
