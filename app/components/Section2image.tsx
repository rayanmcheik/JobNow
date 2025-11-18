import React from 'react'
import Buttonocean from './Buttonocean'

const Section2image = () => {
    return (
        <div className='w-full h-auto bg-neutral-100'>
            <div className='w-full h-auto px-5 md:pt-28 pt-5 pb-40 mx-auto max-w-[1200px] container'>
                <div className='flex flex-col justify-center w-full md:flex md:flex-row md:justify-between md:gap-20'>
                    <div className='md:w-[55%] '>
                        <img src='engineering.jpg' className='object-cover w-full h-full rounded-md shadow-md' />
                    </div>
                    <div className='flex flex-col md:w-3/4'>
                        <div>
                            <h1 className="w-full pt-10 text-xl font-bold text-center md:text-3xl md:h-auto md:pb-5 font-momo md:pt-10 md:text-left">
                                We will help you to become an employee in your dream company
                            </h1>
                        </div>

                        <div className='flex md:flex md:flex-col md:justify-between'>
                            <div>
                                <p className="w-full pt-5 pb-10 text-lg text-center text-gray-600 font-poppins md:text-2xl md:w-full md:text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
                                    euismod vestibulum vitae ut ex.
                                </p>
                            </div>
                            <div className="hidden md:flex md:w-full md:justify-start md:items-center md:pb-10">
                                <Buttonocean
                                    Text="Learn More"
                                    bgcolor="bg-transparent"
                                    bgcolorhover="hover:bg-oceanColor"
                                    color="text-oceanColor"
                                    hovercolor="hover:text-white"
                                    src="/"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full md:hidden">
                        <Buttonocean
                            Text="Learn More"
                            bgcolor="bg-transparent"
                            bgcolorhover="hover:bg-oceanColor"
                            color="text-oceanColor"
                            hovercolor="hover:text-white"
                            src="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2image