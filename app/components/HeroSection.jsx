"use client";
import { useState, useEffect } from "react";
import "./HeroSection.scss";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";


export default function HeroSection() {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(function () {
        // Wait for InitialAnim to finish before showing video with autoplay
        const timer = setTimeout(function () {
            setShowVideo(true);
        }, 4000);

        return function () {
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="flex flex-col HeroSection mt-3 md:mt-6 mb-5 sm:mb-5">
            <p className="self-center  text-2xl font-[550] tracking-tight text-center max-w-lg lg:max-w-xl lg:text-3xl">
                Devin Duncan is running for Student Body President to <strong className="markerUnderline delay1 text-blue-1 font-[700]">reimagine advising</strong>, <strong className="markerUnderline delay2 text-blue-1 font-[700]">support basic needs</strong>, and <strong className="markerUnderline delay3 text-blue-1 font-[700]">guarantee transparency</strong>.
            </p>
            <div className="flex flex-col xs:flex-row xs:items-center xs:justify-center xs:gap-4">
                <Link prefetch={true} href="https://heellife.unc.edu/submitter/form/start/712144" target="_blank" rel="noopener noreferrer" className="flex items-center self-center mt-9 xs:mt-8 gap-1 bg-blue-1 text-white rounded-full px-6 py-2 font-semibold shadow-md hover:brightness-103 xs:order-2 hover:shadow-lg text-lg !no-underline transition-all duration-200">
                    <span>Sign the petition</span>
                    <FaChevronRight size={14} />
                </Link>
                <a  href="#vote" className="flex items-center xs:h-[44px] self-center mt-5 xs:mt-8 gap-1 shadow-sm hover:shadow-md text-blue-1 border-1 border-blue-1 rounded-full px-4 py-2 font-semibold  hover:brightness-103 !no-underline transition-all xs:text-lg duration-200 xs:order-1">
                    <span>Remind me to vote</span>
                    <FaChevronRight size={14} />
                </a>
            </div>
            {showVideo && (
                <iframe className="mx-auto mt-8 w-90/100 max-w-lg h-[220px] xs:h-[288px]" src="https://www.youtube.com/embed/ujmegtyO2J0?si=Hvwu1x5DSt9qztO_&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            )}
        </section>
    );
}