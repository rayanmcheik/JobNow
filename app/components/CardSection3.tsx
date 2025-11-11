import React from 'react';
import Link from 'next/link';

interface CardProps {
  image: string;
  hoverImage: string;
  title: string;
  description: string;
}

const CardsSection3: React.FC<CardProps> = ({ image, hoverImage, title, description }) => {
  return (
    <Link href="/" className="group">
      <div className="flex flex-col items-start justify-around w-64 h-64 px-6 overflow-auto text-black transition-colors duration-300 bg-white rounded-3xl hover:bg-oceanColor">
        <div className="relative w-full h-24 pt-5">
          <img
            src={image}
            alt={title}
            className="h-20 duration-300 top-5"
          />
          <img
            src={hoverImage}
            alt={`${title} hover`}
            className="absolute h-20 duration-300 opacity-0 top-5 group-hover:opacity-100"
          />
        </div>

        <h2 className="h-20 mb-2 text-sm font-bold text-black w-36 md:text-2xl group-hover:text-white">
          {title}
        </h2>
        <p className="text-gray-600 group-hover:text-white">{description}</p>
      </div>
    </Link>
  );
};

export default CardsSection3;
