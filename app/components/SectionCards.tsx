import React from 'react'
import CardsSection1 from './CardsSection1'
import Buttonocean from './Buttonocean'

const SectionCards = () => {
  return (
    <div className='w-full h-auto bg-neutral-100'>
      <div className='w-full h-auto pl-7 px-0 pt-48 pb-40 mx-auto max-w-[1200px] container'>
        <div className='flex flex-col'>
          <div>
            <h1 className="text-4xl md:text-4xl font-bold pb-10 md:pb-14 font-momo">
              How it works
            </h1>
          </div>

          <div className='md:flex md:flex-row md:justify-between flex'>
            <div> 
              <p className="font-poppins w-full text-gray-600 text-left text-lg md:text-2xl pb-10 md:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.
            </p>
            </div>
            <div className="hidden md:block md:w-1/4 md:pt-0 md:mb-10 md:pr-5">
              <Buttonocean
                Text="Learn More"
                bgcolor="bg-white"
                bgcolorhover="hover:bg-oceanColor"
                color="text-oceanColor"
                hovercolor="hover:text-white"
                src="/"
              />
            </div>
          </div>
          <div className='md:grid md:grid-cols-4 md:gap-5 grid grid-cols-2 gap-3 pr-5'>
            <CardsSection1 image='/register.svg' title='Register' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='/createResume.svg' title='Create a resume ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='/findjob.svg' title='Find job ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='apply.svg' title='Apply job ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>

          </div>
          <div className="md:hidden flex w-full justify-center items-center pt-10">
              <Buttonocean
                Text="Learn More"
                bgcolor="bg-white"
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

export default SectionCards