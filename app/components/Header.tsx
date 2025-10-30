'use client';
import React from 'react';

export default function Header() {
  return (
    <nav className="w-full shadow-md h-auto ">
      <div className="flex flex-row w-full max-w-[1200px] mx-auto h-full">

        <div className='w-[70%] border-2 border-amber-500 flex flex-col'>
          <div className="flex justify-between px-6 border-2 w-full h-auto pt-4">

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
          <div className='w-full h-full border-4 border-b-fuchsia-900 px-1 flex flex-col justify-center items-center'>
<h1 className='text-4xl font-bold pb-7'>Search, Find, & Apply</h1>
<div className='text-left border w-lvh pl-5 '>
<p className='px-10 font-serif text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.

</p></div>
          </div>
        </div>

        <div className="w-[40%] h-80 mr-1 border-2 bg-[#1bcf8a] border-blue-800 rounded-bl-3xl flex flex-col items-center justify-start px-4">
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
