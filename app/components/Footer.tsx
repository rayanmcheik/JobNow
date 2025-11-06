import React from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 text-white bg-oceanColor mx-auto">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-10 justify-between">
        <div className="flex flex-col justify-center items-start">
          <img src='logo2.png' className='w-[85%] h-20 mb-4' />
          <p className="mb-4  font-semibold space-y-2 text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
            euismod vestibulum vitae ut ex.
          </p>
        </div>
        <div>

          <h3 className="mb-4 text-3xl font-bold font-poppins">Company</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="#" className="hover:text-white">Address: 123 Fifth Avenue, New York -1060, USA</a></li>
            <li><a href="#" className="hover:text-white">Call Us: ‪+(1600) 456 7890‬</a></li>
            <li><a href="#" className="hover:text-white">Email: yourid @example.com</a></li>
            <li><a href="#" className="hover:text-white">Mon Sot: 9:00 AM - 19:00 PM</a></li>
          </ul>
        </div>
        <div className=''>
          <h3 className="mb-4 text-3xl font-bold font-poppins text-center">Pages</h3>
          <ul className="space-y-2 text-gray-100 text-center">
            <li><a href="#" className="hover:text-white"> Home</a></li>
            <li><a href="#" className="hover:text-white">Booking</a></li>
            <li><a href="#" className="hover:text-white">Facilities</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Location</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-3xl font-bold font-poppins">Contact Us</h3>
          <div className="flex space-x-4 text-gray-100">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <FaGoogle size={24} />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;