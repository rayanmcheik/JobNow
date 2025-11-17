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
      <div className="flex flex-col items-start justify-around w-32 h-32 px-6 overflow-auto text-black transition-colors duration-300 bg-white pl-7 md:h-64 md:w-64 rounded-3xl hover:bg-oceanColor">
        <div className="relative w-full h-10 pt-2 md:pt-5 md:h-20">
          <img
            src={image}
            alt={title}
            className="h-10 duration-300 md:h-16 md:top-5 top-2"
          />
          <img
            src={hoverImage}
            alt={`${title} hover`}
            className="absolute h-10 duration-300 opacity-0 md:h-20 md:top-5 top-2 group-hover:opacity-100"
          />
        </div>

        <h2 className="w-16 h-10 md:mb-2 text-[10px] font-bold text-black md:h-20 md:w-36 md:text-xl group-hover:text-white mb-0 pt-2 md:pt-0">
          {title}
        </h2>
        <p className="text-gray-600 text-[7px] group-hover:text-white md:text-sm pb-3">{description}</p>
      </div>
    </Link>
  );
};

export default CardsSection3;
