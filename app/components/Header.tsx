'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full h-auto overflow-hidden shadow-md">
      <div className="md:absolute md:inset-0 md:flex h-auto md:h-auto flex-col md:flex-row md:bg-neutral-200">
        <div className="w-[55%] bg-neutral-200 h-auto"></div>
        <div className="w-[45%] bg-oceanColor rounded-bl-3xl h-auto"></div>
      </div>

      <div className="relative flex flex-col md:flex-row w-full h-auto mx-auto max-w-[1200px]">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-between w-full h-auto px-6 pt-8 md:pt-16 bg-neutral-200 pb-10 md:pb-0">
            <div className='flex md:hidden'></div>
            <Link href="/" className="flex items-center">
              <img src="logo.svg" alt="Logo" className="w-auto h-7" />
            </Link>

            <nav className="items-center hidden space-x-10 text-[16px] font-bold text-black md:flex">
              <a href="#" className="hover:text-black">Home</a>
              <a href="#" className="hover:text-black">Job</a>
              <a href="#" className="hover:text-black">About Us</a>
              <a href="#" className="hover:text-black">Contact</a>
            </nav>

            <button
              className="flex flex-col gap-1 md:hidden bg-oceanColor w-10 h-10 rounded-lg justify-center items-center "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="block w-7 h-0.5 bg-white"></span>
              <span className=" w-5 h-0.5 ml-1.5 bg-white "></span>
              <span className="block w-7 h-0.5 bg-white "></span>
            </button>
          </div>

          {menuOpen && (
            <div className='flex flex-row justify-between w-full h-auto mb-10'>
              <div className="flex flex-col items-start w-full px-6 py-3 space-y-3 bg-neutral-200 md:hidden">
                <a href="#" className="text-[16px] font-bold text-black">Home</a>
                <a href="#" className="text-[16px] font-bold text-black">Job</a>
                <a href="#" className="text-[16px] font-bold text-black">About Us</a>
                <a href="#" className="text-[16px] font-bold text-black">Contact</a>
              </div>
              <div className="flex flex-col items-center justify-center w-full bg-neutral-200 pr-5 md:hidden">
                <button className="px-3 py-2 pb-10 text-sm font-bold hover:text-black transition-all duration-300 rounded-md text-black">
                  Sign In
                </button>
                <button className="flex items-center gap-2 px-3 py-2 font-medium text-black transition-all duration-300  border border-gray-300 rounded-md group hover:bg-oceanColor hover:text-white">
                  <img src="/createAccount.svg" alt="O" className="w-5 h-5 group-hover:hidden" />
                  <img
                    src="/createAccountWhite.svg"
                    alt="O hover"
                    className="hidden w-5 h-5 group-hover:inline-block"
                  />
                  <span className="text-sm font-bold">Create Account</span>
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col items-start justify-center w-full h-full px-6 pt-16 md:pt-32 md:bg-neutral-200 bg-white">
            <h1 className="text-4xl md:text-6xl font-bold pb-10 md:pb-14 font-momo">
              Search, Find, & Apply
            </h1>
            <p className="font-poppins text-left text-lg md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.
            </p>

            <div className="flex flex-row justify-between w-full h-auto md:gap-3 pt-10 pb-40 gap-1 md:pb-40 ">
              <div className="flex items-center flex-1 px-1 md:px-3 py-2 bg-gray-100 rounded-lg mx-2 md:mx-0">
                <img src="/searchblack.svg" alt="search" className="w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full text-sm bg-transparent outline-none"
                />
              </div>
              <div className="flex items-center flex-1 px-1 md:px-3 py-2 bg-gray-100 rounded-lg mx-2 md:mx-0">
                <img src="/locationblack.svg" alt="location" className="w-5 h-5 mr-2" />
                <select className="w-full text-sm bg-transparent outline-none">
                  <option value="">Location</option>
                  <option value="beirut">Beirut</option>
                  <option value="tripoli">Tripoli</option>
                  <option value="zahle">Zahle</option>
                </select>
              </div>
              <button className="mx-5 md:mx-0 md:px-6 px-1 py-2 font-medium text-white transition-colors duration-300 rounded-lg bg-oceanColor hover:text-black">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="relative md:flex flex-col items-end justify-start md:w-1/2 w-full px-0 md:px-4 h-80">
          <div className="hidden md:flex flex-row items-center justify-end w-full mt-5 space-x-2 pt-10">
            <button className="px-3 py-2 text-sm font-bold text-white transition-all duration-300 rounded-md hover:text-black">
              Sign In
            </button>
            <button className="flex items-center gap-2 px-3 py-2 font-medium text-black transition-all duration-300 bg-white border border-gray-300 rounded-md group hover:bg-oceanColor hover:text-white">
              <img src="/createAccount.svg" alt="O" className="w-5 h-5 group-hover:hidden" />
              <img
                src="/createAccountWhite.svg"
                alt="O hover"
                className="hidden w-5 h-5 group-hover:inline-block"
              />
              <span className="text-sm font-bold">Create Account</span>
            </button>
          </div>

          <div className="flex flex-col justify-between w-full md:w-full h-auto pl-0 md:pl-4 md:pr-4 md:bg-transparent bg-oceanColor">
            <div className="flex items-center justify-center w-full pt-12 md:pt-20 md:pr-16 pr-52 md:pb-11 pb-0">
              <div className="p-3 bg-white rounded-lg shadow-md md:w-20 md:h-20 w-14 h-14 -rotate-6">
                <img src="/SearchFolder.svg" alt="searchfolder" className="inline" />
              </div>
            </div>
            <div className="flex justify-center items-center md:items-end md:justify-end w-full md:pt-20 pt-0 pl-24 md:pl-10 ml-12 md:pb-11 pb-0 ">
              <div className="p-3 mx-0 bg-white rounded-lg shadow-md md:w-20 md:h-20 w-14 h-14 rotate-12">
                <img src="/chatbar.svg" alt="" />
              </div>
            </div>
            <div className="flex items-end justify-center w-full pt-10 md:pt-16 pr-40 pb-14">
              <div className="p-3 mx-0 bg-white rounded-lg shadow-md md:w-20 md:h-20 w-14 h-14 -rotate-6">
                <img src="/protection.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
