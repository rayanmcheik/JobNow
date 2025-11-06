import React from 'react'
import Buttonocean from './Buttonocean'

const Section2image = () => {
    return (
        <div className='w-full h-auto bg-neutral-100'>
            <div className='w-full h-auto pl-10 pr-5 px-0 md:pt-28 pt-5 pb-40 mx-auto max-w-[1200px] container'>
                <div className='flex flex-col md:flex md:flex-row w-full md:justify-between md:gap-20  justify-center'>
                    <div className='md:w-[75%] '>
                        <img src='engineering.jpg' className='w-full h-full object-cover rounded-md shadow-md' />
                    </div>
                    <div className='flex flex-col md:w-3/4'>
                        <div>
                            <h1 className="text-xl w-full md:text-3xl md:h-auto font-bold  md:pb-5 font-momo md:pt-10 md:text-left text-center pt-10">
                                We will help you to become an employee in your dream company
                            </h1>
                        </div>

                        <div className='md:flex md:flex-col md:justify-between flex'>
                            <div>
                                <p className="font-poppins w-full text-gray-600 pt-5 text-lg md:text-2xl pb-10 md:w-full md:text-left text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
                                    euismod vestibulum vitae ut ex.
                                </p>
                            </div>
                            <div className="md:flex hidden md:w-full md:justify-start md:items-center md:pb-10">
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

                    <div className="md:hidden flex w-full justify-center items-center">
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