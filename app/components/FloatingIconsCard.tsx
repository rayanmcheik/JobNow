'use client';
import { FaSearch, FaChartBar, FaShieldAlt } from 'react-icons/fa';

export default function FloatingIconsCard() {
  return (
    <div className="relative w-[350px] h-[350px] rounded-3xl bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center overflow-hidden shadow-xl">
   
      <div className="absolute p-4 bg-white rounded-lg shadow-md top-10 left-10">
        <FaSearch className="text-2xl text-green-500" />
      </div>

      <div className="absolute p-4 bg-white rounded-lg shadow-md top-1/3 right-12">
        <FaChartBar className="text-2xl text-green-500" />
      </div>

      <div className="absolute p-4 bg-white rounded-lg shadow-md bottom-10 left-12">
        <FaShieldAlt className="text-2xl text-green-500" />
      </div>
    </div>
  );
}
