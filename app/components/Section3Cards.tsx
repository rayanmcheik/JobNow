
import React from 'react'
import Buttonocean from './Buttonocean'
import CardsSection3 from './CardSection3'

const Section3Cards = () => {
  return (
    <div className='w-full h-auto bg-oceanColor2'>
      <div className='w-full h-auto pl-7 px-0 md:pt-32 pb-20 mx-auto max-w-[1200px] container pt-20'>
        <div className='flex flex-col'>
          <div>
            <h1 className="pb-10 text-4xl font-semibold text-center md:text-5xl md:pb-10 font-poppins">
              Popular Job Categories
            </h1>
          </div>

          <div>
            <p className="w-full pb-10 pl-20 pr-20 text-lg text-center text-gray-600 font-momo md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.
            </p>
          </div>

          <div className="grid grid-flow-col-dense gap-3 px-5 pr-5 overflow-hidden space-x-7">
            <CardsSection3
              image="/brain.svg"
              title="Design and Development"
              description="350 job vacancy"
              hoverImage="brainwhite.svg"
            />
             <CardsSection3
              image="/diagram.svg"
              title="Accounting and Finance"
              description="350 job vacancy"
              hoverImage="/diagramwhite.svg"
            />
             <CardsSection3
              image="/bank.svg"
              title="Bank Instituion"
              description="350 job vacancy"
              hoverImage="/bankwhite.svg"
            />
             <CardsSection3
              image="/time.svg"
              title="Product Managment"
              description="350 job vacancy"
              hoverImage="/timewhite.svg"
            />
             <CardsSection3
              image="/register.svg"
              title="Register eijfioej eifji"
              description="350 job vacancy"
              hoverImage="/bankwhite.svg"
            />
          </div>
          <div className="flex items-center justify-center pt-10 pr-5 mb-10">
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

export default Section3Cards