
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
   <div className=" overflow-auto bg-white rounded-lg shadow-lg h-auto">
      <img src={image} alt={title} className="w-auto h-20 mr-16 md:w-auto md:h-28 md:pl-0 md:mr-16 md:pt-5 pt-5" />
      <div className="p-4">
        <h2 className="mb-2 md:text-xl text-sm font-bold text-black">{title}</h2>
        <p className="text-gray-600 md:text-xs text-xs">{description}</p>
      </div>
    </div>
    </Link>
  )
}

export default CardsSection1