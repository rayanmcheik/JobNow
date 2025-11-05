import React from 'react'
import CardsSection1 from './CardsSection1'

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

        <div>
            <p className="font-poppins text-left text-lg md:text-2xl pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.
            </p>
        </div>
        <div className='grid grid-cols-4 gap-5'>
            <CardsSection1 image='/register.svg' title='Register' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='/createResume.svg' title='Create a resume ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='/findjob.svg' title='Find job ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>
            <CardsSection1 image='apply.svg' title='Apply job ' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.'></CardsSection1>

        </div>
        </div>
    </div>
    </div>
  )
}

export default SectionCards