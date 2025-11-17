'use client';

import React, { useState, } from 'react';

const feedbackSlides = [
  {
    image: '/feedback.jpg',
    name: 'Brown Garcia',
    title: 'Full Stack Developer at XReact Tech',
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.”',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.',
  },
  {
    image: '/feedback2.jpeg',
    name: 'Sophia Turner',
    title: 'UI/UX Designer at FlowStudio',
    quote:
      '“JobNow helped me find my dream job in just a week — smooth, fast, and reliable!”',
    description:
      'Thanks to JobNow, I could connect with companies that truly matched my skills and vision.',
  },
  {
    image: '/feedback3.jpeg',
    name: 'David Chen',
    title: 'Software Engineer at NovaTech',
    quote:
      '“Fantastic experience! The platform is easy to use and offers real opportunities.”',
    description:
      'I applied to three jobs via JobNow and got hired within two weeks. Highly recommended!',
  },
];

const Section5feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? feedbackSlides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === feedbackSlides.length - 1 ? 0 : prev + 1
    );
  };

  const current = feedbackSlides[currentIndex];

  return (
    <div className="w-full h-auto bg-neutral-100">
      <div className="w-full h-auto pl-10 pr-5 px-0 md:pt-20 pt-5 pb-72 mx-auto max-w-[1200px] container">
    
        <h1 className="w-full pt-10 text-xl font-bold text-center md:text-4xl md:h-auto md:pb-5 font-momo md:pt-8 md:text-left">
          People's Feedback about JobNow!
        </h1>

        <div className="flex flex-col justify-center w-full md:flex md:flex-row md:justify-between md:gap-5">
          <div className="flex flex-col transition-all duration-700 ease-in-out md:w-3/4">
            <p className="w-full pt-5 pb-5 text-xs text-center text-gray-600 md:pb-8 font-poppins md:text-xl md:w-full md:text-left">
              {current.description}
            </p>
            <p className="w-full pt-5 pb-10 text-sm font-semibold text-center text-black font-momo md:text-xl md:w-full md:text-left">
              {current.quote}
            </p>
            <div className="flex md:hidden w-full h-[300px] text-center justify-center items-center">
              <img
                src={current.image}
                className="object-cover w-[350px]  h-full pt-3 transition-all duration-700 rounded-3xl"
              />
            </div>

            <h1 className="w-full pt-8 text-sm font-bold text-center md:text-2xl md:h-auto md:pb-5 font-momo md:pt-8 md:text-left">
              {current.name}
            </h1>

            <p className="w-full pt-2 pb-6 text-xs text-center text-gray-600 font-poppins md:text-sm md:w-full md:text-left">
              {current.title}
            </p>
            <div className="flex items-center justify-center space-x-5 md:w-full md:justify-start md:items-center md:flex-row md:pb-10 md:space-x-5">
              <div className="relative w-10 h-10 cursor-pointer md:w-16 md:h-16 group" onClick={prevSlide}>
                <img
                  src="/left.svg"
                  alt="arrow left"
                  className="absolute inset-0 w-full h-full group-hover:hidden"
                />
                <img
                  src="/leftwhite.svg"
                  alt="arrow left white"
                  className="absolute inset-0 hidden w-full h-full group-hover:block"
                />
              </div>
              <div className="relative w-10 h-10 cursor-pointer md:w-16 md:h-16 group" onClick={nextSlide}>
                <img
                  src="/right.svg"
                  alt="arrow right"
                  className="absolute inset-0 w-full h-full group-hover:hidden"
                />
                <img
                  src="/rightwhite.svg"
                  alt="arrow right white"
                  className="absolute inset-0 hidden w-full h-full group-hover:block"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:w-[68%] md:h-[550px] pl-16 relative">
            <img
              src={current.image}
              className="object-cover w-full h-full pt-3 transition-all duration-700 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5feedback;
