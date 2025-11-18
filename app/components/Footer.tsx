import React from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Section6upFooter from './Section6upFooter';

const Footer = () => {
  return (
    <footer className="relative w-full py-10 text-white bg-oceanColor">
      <div className="w-full h-auto md:pt-20 pt-5 mx-auto max-w-[1200px] container relative px-5">
        <div className='flex flex-col w-full h-auto '>
          <div className='w-full h-auto'>
            <Section6upFooter></Section6upFooter>
          </div>
          <div className="grid grid-cols-1 gap-12 pb-10 pr-16 mx-auto md:grid-cols-4 md:gap-20 pt-28 md:pr-5">
            <div className="flex flex-col items-start">
              <img src="logo-footer.svg" className="w-[45%] md:w-[85%] h-20 mb-4 pt-10" />
              <p className="text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
                euismod vestibulum vitae ut ex.
              </p>
            </div>

            <div className="hidden md:block">
              <h3 className="mb-4 text-3xl font-bold font-poppins">Company</h3>
              <ul className="space-y-2 text-gray-100">
                <li>Address: 123 Fifth Avenue, New York -1060, USA</li>
                <li><a href="tel:+16004567890" className="hover:text-white">Call Us: +(1600) 456 7890‬</a></li>
                <li><a href="mailto:yourid@example.com" className="hover:text-white">Email: yourid@example.com</a></li>
                <li>Mon–Sat: 9:00 AM - 19:00 PM</li>
              </ul>
            </div>

            <div className="hidden md:block ">
              <div className='flex flex-col items-center justify-center'>
                <h3 className="mb-4 text-3xl font-bold font-poppins">Pages</h3>
                <ul className="space-y-2 text-gray-100">
                  <li><a href="#" className="hover:text-black">&gt; Home</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Booking</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Facilities</a></li>
                  <li><a href="#" className="hover:text-black">&gt; About Us</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Location</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between w-full gap-10 md:hidden">
              <div>
                <h3 className="mb-4 text-3xl font-bold font-poppins">Company</h3>
                <ul className="space-y-2 text-gray-100">
                  <li>Address: 123 Fifth Avenue, New York -1060, USA</li>
                  <li><a href="tel:+16004567890" className="hover:text-white">Call Us: +(1600) 456 7890‬</a></li>
                  <li><a href="mailto:yourid@example.com" className="hover:text-white">Email: yourid@example.com</a></li>
                  <li>Mon–Sat: 9:00 AM - 19:00 PM</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-3xl font-bold font-poppins">Pages</h3>
                <ul className="space-y-2 text-gray-100">
                  <li><a href="#" className="hover:text-black">&gt; Home</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Booking</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Facilities</a></li>
                  <li><a href="#" className="hover:text-black">&gt; About Us</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Location</a></li>
                  <li><a href="#" className="hover:text-black">&gt; Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="items-start justify-start w-auto text-left md:items-end md:text-right md:justify-end">
              <div className='w-auto text-left md:px-5 md:text-right'>
              <h3 className="mb-4 text-3xl font-bold font-poppins">Contact Us</h3>

              <div className="flex px-0 space-x-4 text-gray-100 md:px-9">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><FaGoogle size={24} /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaFacebookF size={24} /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedinIn size={24} /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaTwitter size={24} /></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
