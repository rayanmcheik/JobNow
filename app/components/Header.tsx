'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full h-auto overflow-hidden shadow-md">
      <div className="flex-col h-auto md:absolute md:inset-0 md:flex md:h-auto md:flex-row md:bg-neutral-200">
        <div className="w-[55%] bg-neutral-200 h-auto"></div>
        <div className="w-[45%] bg-oceanColor rounded-bl-3xl h-auto"></div>
      </div>

      <div className="relative flex flex-col md:flex-row w-full h-auto mx-auto max-w-[1200px] ">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-between w-full h-auto px-6 pt-8 pb-10 md:pt-16 bg-neutral-200 md:pb-0">
            <div className='flex md:hidden'></div>
            <Link href="/" className="flex items-center">
              <img src="logo.svg" alt="Logo" className="w-auto h-7" />
            </Link>

            <nav className="items-center hidden space-x-10 text-[16px] font-bold text-black md:flex">
              <a href="#" className="hover:text-oceanColor">Home</a>
              <a href="#" className="hover:text-oceanColor">Job</a>
              <a href="#" className="hover:text-oceanColor">About Us</a>
              <a href="#" className="hover:text-oceanColor">Contact</a>
            </nav>

            <button
              className="flex flex-col items-center justify-center w-10 h-10 gap-1 rounded-lg md:hidden bg-oceanColor "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="block w-7 h-0.5 bg-white"></span>
              <span className=" w-5 h-0.5 ml-1.5 bg-white "></span>
              <span className="block w-7 h-0.5 bg-white "></span>
            </button>
          </div>

          {menuOpen && (
            <div className="fixed inset-0 z-50 flex flex-col bg-neutral-200 md:hidden">
              <div className="flex items-end justify-end px-6 py-4 ">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-5xl font-bold text-black transition-all duration-200 hover:text-oceanColor"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-col items-center justify-start w-full px-6 py-6 pb-0 mt-10 space-y-5 text-black">
                {[
                  { name: "Home", href: "/" },
                  { name: "Job", href: "/" },
                  { name: "About Us", href: "/" },
                  { name: "Contact", href: "/" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-semibold transition-all duration-200 hover:text-oceanColor"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center w-full px-5 pb-10 mt-10 space-y-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 text-[16px] font-bold text-black hover:text-oceanColor transition-all duration-300"
                >
                  Sign In
                </button>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-[16px] text-black transition-all duration-300 border border-gray-400 rounded-md group hover:bg-oceanColor hover:text-white"
                >
                  <img
                    src="/createAccount.svg"
                    alt="icon"
                    className="w-5 h-5 group-hover:hidden"
                  />
                  <img
                    src="/createAccountWhite.svg"
                    alt="icon hover"
                    className="hidden w-5 h-5 group-hover:inline-block"
                  />
                  <span className="text-[16px] font-bold">Create Account</span>
                </button>
              </div>
            </div>
          )}


          <div className="flex flex-col items-center justify-center w-full h-full px-6 pt-16 bg-neutral-100 md:items-start md:pt-32 md:bg-neutral-200">
            <h1 className="pb-10 text-2xl font-bold text-center md:text-left md:text-5xl md:pb-14 font-momo">
              Search, Find, & Apply
            </h1>

            <p className="text-sm text-center md:text-left font-poppins md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.
            </p>

            <div className="flex flex-col w-full h-auto gap-1 pt-10 pb-40 md:pb-10">
              <div className="flex flex-row justify-between w-full h-auto gap-2 pt-2 pb-2 pl-2 pr-2 space-x-0 bg-white rounded-lg md:gap-3 md:pb-4 md:pt-4 md:pr-4 md:pl-4">
                <div className="flex items-center flex-1 px-1 py-2 mx-0 bg-gray-100 rounded-lg md:px-3 md:mx-0">
                  <img src="/searchblack.svg" alt="search" className="w-3 h-3 md:mr-2 md:h-5 md:w-5 " />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full text-xs bg-transparent outline-none md:text-sm"
                  />
                </div>
                <div className="flex items-center flex-1 px-1 py-2 mx-5 bg-gray-100 rounded-lg md:px-3 md:mx-0">
                  <img src="/locationblack.svg" alt="location" className="w-3 h-3 md:mr-2 md:h-5 md:w-5 " />
                  <select className="w-full text-xs bg-transparent outline-none md:text-sm">
                    <option value="">Location</option>
                    <option value="beirut">Beirut</option>
                    <option value="tripoli">Tripoli</option>
                    <option value="zahle">Zahle</option>
                  </select>
                </div>
                <button className="px-1 py-2 mx-5 text-xs font-medium text-white transition-colors duration-300 rounded-lg md:mx-0 md:px-6 bg-oceanColor hover:text-black">
                  Search
                </button>
              </div>
              <div className='md:pb-32'></div>
            </div>
          </div>
        </div>

        <div className="relative flex-col items-end justify-start w-full px-0 pb-20 md:flex md:w-1/2 md:px-4 h-80 md:bg-transparent bg-oceanColor md:pb-9 md:h-auto 2xl:left-20">
          <div className="flex-row items-center justify-end hidden w-full pt-10 pr-16 mt-5 space-x-7 md:flex">
            <button className="px-3 py-2 text-[16px] font-bold text-white transition-all duration-300 rounded-md hover:text-black">
              Sign In
            </button>
            <button className="flex items-center gap-2 px-3 py-2 font-medium text-black transition-all duration-300 bg-white border border-gray-300 rounded-md group hover:bg-oceanColor hover:text-white">
              <img src="/createAccount.svg" alt="O" className="w-8 h-8 ml-4 group-hover:hidden" />
              <img
                src="/createAccountWhite.svg"
                alt="O hover"
                className="hidden w-8 h-8 ml-4 group-hover:inline-block"
              />
              <span className="pr-4 text-[16px] font-bold">Create Account</span>
            </button>
          </div>

          <div className="flex items-center justify-center w-full pt-12 pb-0 pr-24 md:absolute md:left-15 md:top-24 md:pt-20 md:pr-16 md:pb-11 2xl:left-6">
            <div className="relative p-3 bg-white rounded-lg shadow-md md:w-20 md:h-20 w-14 h-14 -rotate-6 group">
              <img src="/SearchFolder.svg" alt="searchfolder" className="inline" />
            </div>
          </div>

          <div className="flex items-center justify-center w-full pt-0 pb-0 pl-24 ml-12 md:absolute md:left-[7.5rem] md:top-60 md:pt-20 md:pl-2 md:pb-11 zoom-adjust-left zoom-150-fix">
            <div className="relative p-3 mx-0 bg-white rounded-lg shadow-md md:w-20 md:h-20 w-14 h-14 rotate-12 group">
              <img src="/chatbar.svg" alt="chatbar" className="inline" />
            </div>
          </div>

          <div className="flex items-end justify-center w-full pt-10 pb-40 pr-32 md:pr-72 md:absolute md:left-1 md:top-96 md:pt-16 2xl:left-28">
            <div className="relative p-3 mx-0 bg-white rounded-lg shadow-md md:w-20 md:h-20 w-14 h-14 -rotate-6 group">
              <img src="/protection.svg" alt="protection" className="inline" />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
