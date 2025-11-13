import React from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Section6upFooter from './Section6upFooter';

const Footer = () => {
  return (
    <footer className="relative w-full px-6 py-10 pt-56 mx-auto text-white bg-oceanColor">
     
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-10 justify-between relative z-10">
         <Section6upFooter />
        <div className="flex flex-col items-start justify-center">
          <img src='logo-footer.svg' className='md:w-[85%] h-20 mb-4 w-[45%]' />
          <p className="pb-10 mb-4 space-y-2 text-gray-100 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
            euismod vestibulum vitae ut ex.
          </p>
        </div>

        <div className='hidden md:block'>
          <h3 className="mb-4 text-3xl font-bold font-poppins">Company</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="#" className="hover:text-white">Address: 123 Fifth Avenue, New York -1060, USA</a></li>
            <li><a href="#" className="hover:text-white">Call Us: ‪+(1600) 456 7890‬</a></li>
            <li><a href="#" className="hover:text-white">Email: yourid@example.com</a></li>
            <li><a href="#" className="hover:text-white">Mon–Sat: 9:00 AM - 19:00 PM</a></li>
          </ul>
        </div>

        <div className='hidden md:block md:w-auto md:ml-20'>
          <h3 className="mb-4 text-3xl font-bold text-left font-poppins">Pages</h3>
          <ul className="space-y-2 text-left text-gray-100">
            <li><a href="#" className="hover:text-black"> &gt; Home</a></li>
            <li><a href="#" className="hover:text-black"> &gt; Booking</a></li>
            <li><a href="#" className="hover:text-black"> &gt; Facilities</a></li>
            <li><a href="#" className="hover:text-black"> &gt; About Us</a></li>
            <li><a href="#" className="hover:text-black"> &gt; Location</a></li>
            <li><a href="#" className="hover:text-black"> &gt; Contact</a></li>
          </ul>
        </div>

        <div className='flex flex-row justify-between w-full gap-10 md:hidden'>
          <div>
            <h3 className="mb-4 text-3xl font-bold font-poppins">Company</h3>
            <ul className="space-y-2 text-gray-100">
              <li><a href="#" className="hover:text-white">Address: 123 Fifth Avenue, New York -1060, USA</a></li>
              <li><a href="#" className="hover:text-white">Call Us: ‪+(1600) 456 7890‬</a></li>
              <li><a href="#" className="hover:text-white">Email: yourid@example.com</a></li>
              <li><a href="#" className="hover:text-white">Mon–Sat: 9:00 AM - 19:00 PM</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-3xl font-bold text-center font-poppins">Pages</h3>
            <ul className="space-y-2 text-left text-gray-100">
              <li><a href="#" className="hover:text-black"> &gt; Home</a></li>
              <li><a href="#" className="hover:text-black"> &gt; Booking</a></li>
              <li><a href="#" className="hover:text-black"> &gt; Facilities</a></li>
              <li><a href="#" className="hover:text-black"> &gt; About Us</a></li>
              <li><a href="#" className="hover:text-black"> &gt; Location</a></li>
              <li><a href="#" className="hover:text-black"> &gt; Contact</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="pt-10 mb-4 text-3xl font-bold font-poppins md:pt-0">Contact Us</h3>
          <div className="flex space-x-4 text-gray-100">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><FaGoogle size={24} /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaFacebookF size={24} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedinIn size={24} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
