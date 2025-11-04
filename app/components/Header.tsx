'use client';

import React from 'react';
import Link from 'next/link';
import { FaChartBar } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className="relative w-full h-auto overflow-hidden shadow-md">

      <div className="absolute inset-0 flex h-auto bg-neutral-200">
        <div className="w-[55%] bg-neutral-200 h-auto"></div>
        <div className="w-[45%] bg-oceanColor rounded-bl-3xl h-auto"></div>
      </div>


      <div className="relative flex flex-row w-full h-auto mx-auto max-w-[1200px]">

        <div className="flex flex-col w-1/2">
          <div className="flex justify-between w-full h-auto px-6 pt-10 ">
            <div className="flex items-center">
              <Link href="/">
                <img src="logo.webp" alt="Logo" className="w-auto h-7" />
              </Link>
            </div>

            <nav className="items-center hidden space-x-10 text-sm font-bold text-black md:flex">
              <a href="#" className="hover:text-black">Home</a>
              <a href="#" className="hover:text-black">Job</a>
              <a href="#" className="hover:text-black">About Us</a>
              <a href="#" className="hover:text-black">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col items-start justify-center w-full h-full px-6 pt-20 ">
            <h1 className="text-4xl font-bold pb-7 font-momo">Search, Find, & Apply</h1>
            <p className="font-sans text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet
              at turpis.
            </p>
          </div>
          <div className="flex w-full pb-32 pt-11">
            <div className="flex flex-row justify-between w-full h-auto gap-3 pl-0 bg-white rounded-2xl">
              <div className="flex items-center flex-1 px-3 py-2 mt-2 mb-2 ml-2 mr-2 bg-gray-100 rounded-lg">
                <img src="/searchblack.svg" alt="search" className="w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full text-sm bg-transparent outline-none"
                />
              </div>
              <div className="flex items-center flex-1 px-3 py-2 m-2 bg-gray-100 rounded-lg ">
                <img src="/locationblack.svg" alt="location" className="w-5 h-5 mr-2" />
                <select className="w-full text-sm bg-transparent outline-none">
                  <option value="">Location</option>
                  <option value="beirut">Beirut</option>
                  <option value="tripoli">Tripoli</option>
                  <option value="zahle">Zahle</option>
                </select>
              </div>
              <button className="px-6 py-2 m-2 font-medium text-white transition-colors duration-300 rounded-lg bg-oceanColor hover:text-black">
                Search
              </button>
            </div>
          </div>

        </div>


        <div className="flex flex-col items-center justify-start w-1/2 px-4 h-80">
          <div className="flex flex-row items-center justify-center w-full mt-5 space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-white transition-all duration-300 rounded-md hover:text-black">
              Sign In
            </button>

            <button className="flex items-center gap-2 px-3 py-2 font-medium text-black transition-all duration-300 bg-white border border-gray-300 rounded-md group hover:bg-oceanColor hover:text-white">
              <img src="/createAccount.svg" alt="O" className="w-5 h-5 group-hover:hidden" />
              <img
                src="/createAccountWhite.svg"
                alt="O hover"
                className="hidden w-5 h-5 group-hover:inline-block"
              />
              <span className="text-sm">Create Account</span>
            </button>
          </div>

          <div className="flex flex-col justify-between w-full h-full pl-4 pr-4">
      
            <div className="flex items-center justify-center w-full pt-20 pr-15">
              <div className="p-3 bg-white rounded-lg shadow-md w-14 h-14 -rotate-6">
                <img src="/SearchFolder.svg" alt="searchfolder" className="inline" />
              </div>
            </div>
            <div className="z-20 flex items-end justify-end w-full pt-20 pr-10">
              <div className="p-4 mx-0 bg-white rounded-lg shadow-md w-14 h-14 rotate-6">
                <FaChartBar className="text-3xl text-oceanColor" />
              </div>
            </div>
            <div className="flex items-end justify-center w-full pt-16 pr-15">
              <div className="p-3 mx-0 bg-white rounded-lg shadow-md w-14 h-14 -rotate-6">
                <img src="/protection.svg" alt="" />
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </nav>
  );
}
