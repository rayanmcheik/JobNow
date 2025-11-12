'use client';

import React from 'react';
import Buttonocean from './Buttonocean';
import CardsSection3 from './CardSection3';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Section3Cards = () => {
  return (
    <div className="w-full h-auto bg-oceanColor2">
      <div className="w-full h-auto pl-7 px-0 md:pt-32 pb-20 mx-auto max-w-[1200px] container pt-20">
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl font-semibold text-center pb-7 md:text-5xl md:pb-10 font-poppins">
              Popular Job Categories
            </h1>
          </div>
          <div>
            <p className="w-full pb-10 pl-5 pr-5 text-xs text-center text-gray-600 md:pl-20 md:pr-20 font-momo md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex.
            </p>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            className="w-full px-5"
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween:5,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <CardsSection3
                image="/brain.svg"
                title="Design and Development"
                description="350 job vacancy"
                hoverImage="/brainwhite.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardsSection3
                image="/diagram.svg"
                title="Accounting and Finance"
                description="350 job vacancy"
                hoverImage="/diagramwhite.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardsSection3
                image="/bank.svg"
                title="Bank Institution"
                description="350 job vacancy"
                hoverImage="/bankwhite.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardsSection3
                image="/time.svg"
                title="Product Management"
                description="350 job vacancy"
                hoverImage="/timewhite.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardsSection3
                image="/register.svg"
                title="Register eijfioej eifji"
                description="350 job vacancy"
                hoverImage="/bankwhite.svg"
              />
            </SwiperSlide>
          </Swiper>
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
  );
};

export default Section3Cards;
