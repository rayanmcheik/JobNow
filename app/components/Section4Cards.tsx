'use client';

import React from 'react';
import Buttonocean from './Buttonocean';
import CardsSection4 from './CardSection4';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Section4Cards = () => {
    return (
        <div className="w-full h-auto bg-neutral-100">
            <div className="w-full h-auto px-5 md:pt-32 pb-12 mx-auto max-w-[1200px] container pt-20">
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-2xl font-semibold text-center pb-7 md:text-5xl md:pb-10 font-poppins">
                            Recently Added Jobs
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
                        slidesPerView={2.6}

                        className="w-full px-3 pl-0"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,

                            },
                            340:{
                                slidesPerView: 1.2,
                            },
                            414:{
                                slidesPerView: 1.5, 
                            },
                            550:{
                                slidesPerView: 2, 
                            },
                            700:{
                                slidesPerView: 2.5, 
                            },
                            768: {
                                slidesPerView: 1.8,

                            },
                            920: {
                                slidesPerView: 2.2,
                            },
                            1024: {
                                slidesPerView: 2.2,

                            },
                            1440: {
                                slidesPerView: 2.8,

                            },
                            1462: {
                                slidesPerView: 2.6,
                            }
                            
                        }}
                    >
                        <SwiperSlide>
                            <CardsSection4
                                image="/ds.png"
                                title="UI/WX Designer"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex."
                                companyName='Dimension Studio'
                                jobcategorie='Full Time'
                                location='San Fransisco,CA'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardsSection4
                                image="/ALpander.webp"
                                title="Full Stack Developer"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex."
                                companyName='Alpander'
                                jobcategorie='Full Time'
                                location='San Fransisco,CA'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardsSection4
                                image="/react.png"
                                title="Product Designer"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex."
                                companyName='Xreact Teck'
                                jobcategorie='Full Time'
                                location='San Fransisco,CA'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardsSection4
                                image="/react.png"
                                title="Product Designer"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
              euismod vestibulum vitae ut ex."
                                companyName='Xreact Teck'
                                jobcategorie='Full Time'
                                location='San Fransisco,CA'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardsSection4
                                image="/react.png"
                                title="Product Designer"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
                                        euismod vestibulum vitae ut ex."
                                companyName='Xreact Teck'
                                jobcategorie='Full Time'
                                location='San Fransisco,CA'
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

export default Section4Cards;
