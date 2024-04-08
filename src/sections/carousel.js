import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

import { testeria, hsa, v2ray } from "@/assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    let sliderRef = useRef(null);
    const [centeredSlideIndex, setCenteredSlideIndex] = useState(0);
    const [slides, setSlides] = useState(3)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: slides,
        speed: 500,
        afterChange: (index) => {
            setCenteredSlideIndex(index);
        },
    };

    useEffect(() => {
        const updateResolution = () => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                // md
                setSlides(1)
            } else if (window.matchMedia('(max-width: 640px)').matches) {
                // sm
                setSlides(1)
            } else {
                setSlides(3)
            }
        };

        // Initial check
        updateResolution();

        // Add event listener for window resize
        window.addEventListener('resize', updateResolution);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', updateResolution);
        };
    }, []);

    const next = () => {
        console.log(sliderRef);
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <section
            // className={`min-h-screen flex flex-col justify-center py-24 px-6 lg:px-24 overflow-hidden`}
            className="overflow-x-hidden"
        >
            <div className={`flex flex-col justify-center px-6 lg:px-24`}>
                <div className="text-left">
                    <h1 className="text-[180px] sm:text-[250px] md:text-[300px] xl:text-[500px] text-primary-red leading-[0.8] pt-8 font-right_grotesk">
                        OUR<span className="text-black">WORKS</span>
                    </h1>
                    <p className="text-xl/normal xl:text-3xl/normal max-w-xl">
                        Our products are AI-centric, but we aim to satisfy all
                        kinds of customer.
                    </p>

                    <div className="flex items-center py-2 md:py-4">
                        <button onClick={previous}>
                            <IoIosArrowDropleft
                                size={40}
                                className="hover:fill-primary-red active:fill-[#A10000] transition-colors duration-200 ease-in-out"
                            />
                        </button>
                        <button onClick={next}>
                            <IoIosArrowDropright
                                size={40}
                                className="hover:fill-primary-red active:fill-[#A10000] transition-colors duration-200 ease-in-out"
                            />
                        </button>
                        <div className="h-1 w-1/4 bg-[#CCCCCC] rounded-lg ml-2"></div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden py-4">
                <Slider
                    {...settings}
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                >
                    <div className="px-2" key={1}>
                        <Image
                            src={hsa}
                            alt="Hust Smart Ass"
                            className={`aspect-video object-cover w-full h-auto ${centeredSlideIndex == 2 && "shadow-md"} transition ease-in-out `}
                        />
                    </div>
                    <div className="px-2" key={2}>
                        <Image
                            src={testeria}
                            alt="Testeria"
                            className={`aspect-video object-cover w-full h-auto ${centeredSlideIndex == 0 && "shadow-md"} transition ease-in-out`}
                        />
                    </div>
                    <div className="px-2" key={3}>
                        <Image
                            src={v2ray}
                            alt="V2ray Project"
                            className={`aspect-video object-cover w-full h-auto ${centeredSlideIndex == 1 && "shadow-md"} transition ease-in-out`}
                        />
                    </div>
                </Slider>
            </div>
        </section>
    );
}
