import React from 'react'
import CardsSection1 from './CardsSection1'
import Buttonocean from './Buttonocean'

const SectionCards = () => {
  return (
    <div className='w-full h-auto bg-neutral-100'>
      <div className='w-full h-auto pl-7 px-0 md:pt-48 pb-20 mx-auto max-w-[1200px] container pt-20'>
        <div className='flex flex-col'>
          <div>
            <h1 className="pb-10 text-4xl font-bold md:text-4xl md:pb-14 font-momo">
              How it works
            </h1>
          </div>
          <div className='flex md:flex md:flex-row md:justify-around'>
            <div> 
              <p className="w-full pb-10 text-lg text-left text-gray-600 font-poppins md:text-2xl md:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.
            </p>
            </div>
            <div className="hidden md:block md:pt-0 md:mb-10 md:pr-5">
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
          <div className='grid grid-cols-2 gap-3 pr-5 md:grid md:grid-cols-4 md:gap-5'>
            <CardsSection1 image='/register.svg' title='Register' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='/createResume.svg' title='Create a resume ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='/findjob.svg' title='Find job ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='apply.svg' title='Apply job ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>

          </div>
          <div className="flex items-center justify-center w-full pt-10 md:hidden">
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

export default SectionCards