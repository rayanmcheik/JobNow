
import React from 'react'

interface CardProps{
    image:string;
    title:string;
    description:string;

}
const CardsSection1: React.FC<CardProps> = ({ image, title, description }) => {
  return (
   <div className=" overflow-auto bg-white rounded-lg shadow-lg h-auto">
      <img src={image} alt={title} className="text-left w-28 h-28 pl-5 pt-10" />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold text-black">{title}</h2>
        <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </div>
  )
}

export default CardsSection1