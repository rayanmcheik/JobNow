import React from 'react'
import Buttonocean from './Buttonocean'

const Section5feedback = () => {
    return (
        <div className='w-full h-auto bg-neutral-100'>
            <div className='w-full h-auto pl-10 pr-5 px-0 md:pt-28 pt-5 pb-52 mx-auto max-w-[1200px] container'>
                <div>
                    <h1 className="w-full pt-10 text-xl font-bold text-center md:text-4xl md:h-auto md:pb-5 font-momo md:pt-8 md:text-left">
                        People's Feedback about JobNow!
                    </h1>
                </div>
                <div className='flex flex-col justify-center w-full md:flex md:flex-row md:justify-between md:gap-5'>
                    <div className='flex flex-col md:w-3/4'>
                        <div className='flex flex-col md:flex md:flex-col md:justify-between'>
                            <div>
                                <p className="w-full pt-5 pb-5 text-xs text-center text-gray-600 md:pb-10 font-poppins md:text-2xl md:w-full md:text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
                                    euismod vestibulum vitae ut ex.
                                </p>
                            </div>
                            <div>
                                <p className="w-full pt-5 pb-16 text-sm font-semibold text-center text-black font-momo md:text-2xl md:w-full md:text-left">
                                    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
                                    euismod vestibulum vitae ut ex.Lorem ipsum dolor sit amet."
                                </p>
                            </div>
                            <div className='flex md:hidden w-[350px] h-[300px] pl-10 pr-10 text-center'>
                        <img src='feedback.jpg' className='object-cover w-full h-full pt-3 shadow-md rounded-3xl' />
                    </div>
                            <div>
                                <h1 className="w-full pt-8 text-sm font-bold text-center md:text-3xl md:h-auto md:pb-5 font-momo md:pt-8 md:text-left">
                                    Brown Garcia
                                </h1>
                            </div>
                            <div>
                                <p className="w-full pt-2 pb-6 text-xs text-center text-gray-600 font-poppins md:text-xl md:w-full md:text-left">
                                    Full Stack Developer in XReact Tech
                                </p>
                            </div>
                            <div className="flex items-center justify-center space-x-5 md:w-full md:justify-start md:items-center md:flex-row md:pb-10 md:space-x-5">
                                <div className="relative w-10 h-10 md:w-16 md:h-16 group">
                                    <img src="/left.svg" alt="arrow left" className="absolute inset-0 w-full h-full group-hover:hidden" />
                                    <img src="/leftwhite.svg" alt="arrow left white" className="absolute inset-0 hidden w-full h-full group-hover:block" />
                                </div>
                                <div className="relative w-10 h-10 md:w-16 md:h-16 group">
                                    <img src="/right.svg" alt="arrow right" className="absolute inset-0 w-full h-full group-hover:hidden" />
                                    <img src="/rightwhite.svg" alt="arrow right white" className="absolute inset-0 hidden w-full h-full group-hover:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:w-[68%] md:h-[550px] pl-16'>
                        <img src='feedback.jpg' className='object-cover w-full h-full pt-3 shadow-md rounded-3xl' />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Section5feedback