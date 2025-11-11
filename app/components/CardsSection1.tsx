
import React from 'react'
import Link from 'next/link';
interface CardProps{
    image:string;
    title:string;
    description:string;

}
const CardsSection1: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <Link href="/" >
   <div className="h-auto overflow-auto bg-white rounded-lg shadow-lg ">
      <img src={image} alt={title} className="w-auto h-20 pt-5 mr-16 md:w-auto md:h-20 md:pl-0 md:mr-16 md:pt-5" />
      <div className="p-4">
        <h2 className="mb-2 text-sm font-bold text-black md:text-xl">{title}</h2>
        <p className="text-xs text-gray-600 md:text-xs">{description}</p>
      </div>
    </div>
    </Link>
  )
}

export default CardsSection1