import React from 'react'

const Section6upFooter = () => {
  return (
    <div className="absolute -top-[28rem] bg-green-950  rounded-3xl ">
      <div className="container flex flex-col items-center justify-center px-6 mx-auto text-center py-14 md:px-10">
        <h1 className="text-2xl font-semibold text-white md:text-4xl">
          Register your CV now!
        </h1>
        <div className='pl-2 pr-2 md:pl-16 md:pr-16'>
          <p className="w-full pt-8 pb-8 pl-2 pr-2 text-xs text-center text-neutral-300 md:pl-20 md:pr-20 font-momo md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
            euismod vestibulum vitae ut ex.
          </p>
        </div>
        <div>
          <button className='px-5 pt-2 pb-2 text-sm text-white border-2 border-white rounded-lg md:text-xl hover:bg-oceanColor'>Register Now</button>
        </div>
      </div>
    </div>
  )
}

export default Section6upFooter
