import React from 'react';
import Link from 'next/link';

interface CardProps {
    image: string;
    title: string;
    companyName: string;
    description: string;
    location: string;
    jobcategorie: string;
}

const CardSection4: React.FC<CardProps> = ({ image, title, description, companyName, location, jobcategorie, }) => {
    return (
        <Link href="/" className="group">
            <div className="flex flex-col items-start justify-around md:px-10 md:pt-8 pt-3 px-5 overflow-auto text-black transition-colors duration-300 bg-white h-full w-[250px] md:h-full md:w-[400px] rounded-3xl md:pl-8 pl-5">
                <div className="relative w-full h-10 pt-2 md:h-28">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover h-10 duration-300 rounded-full md:h-28 md:top-5 top-2"
                    />

                </div>

                <h2 className="w-16 h-10  text-[10px] font-bold text-black md:h-16 md:w-full md:text-2xl  mb-0 pt-2 md:pt-5 md:pr-0">
                    {title}
                </h2>
                <p className="w-16 h-10 text-[7px]  md:text-sm font-bold text-gray-600 md:h-10 md:w-56   mb-0 ">
                    {companyName}
                </p>
                <p className="text-gray-600 text-[10px]  md:text-sm md:mb-8 md:pr-0 pr-10 mb-5">{description}</p>

                <div className='flex flex-row justify-between space-x-2 md:space-x-3'>
                    <div className='flex flex-row items-center justify-center px-2 pt-2 pb-2 bg-neutral-100'>
                        <img src="/locationblack.svg" alt="location" className="w-3 h-3 md:mr-2 md:h-5 md:w-5 " />
                        <h3 className='text-[10px] md:text-sm'> {location}</h3>
                    </div>
                    <div className='flex flex-row items-center justify-center px-2 pt-2 pb-2 bg-neutral-100'>
                        <img src="/bag.svg" alt="location" className="w-3 h-3 md:mr-2 md:h-5 md:w-5 " />
                        <h3 className='text-[10px] md:text-sm'> {jobcategorie}</h3>
                    </div>
                </div>
                <button className='pt-5 pb-10 text-sm md:text-2xl text-oceanColor'>Apply Now <img src="/rightarrow.svg" alt="arrow up" className="inline w-4 h-4 pt-0" /></button>
            </div>
        </Link>
    );
};

export default CardSection4;
