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
                As Student Body President, Devin Duncan will <strong className="markerUnderline delay1 text-blue-1 font-[700]">reimagine advising</strong>, <strong className="markerUnderline delay2 text-blue-1 font-[700]">support basic needs</strong>, and <strong className="markerUnderline delay3 text-blue-1 font-[700]">guarantee transparency</strong>.
            </p>
            <div className="mx-auto max-w-lg mt-7 bg-blue-1 px-2 py-4 rounded-lg">
                <h3 className="font-bold text-2xl mx-auto text-center text-white">
                    Devin has been elected UNC's 2026-2027 Student Body President!
                </h3>
                <div className="h-[2px] bg-blue-3 w-[80%] mx-auto my-3"/>
                <p className="text-white font-medium text-center">
                    Transition updates will be posted here soon.
                </p>
                <p className="text-white font-medium text-center">
                    Thank you for your support!
                </p>
            </div>
            {showVideo && (
                <iframe className="mx-auto mt-8 w-90/100 max-w-lg h-[220px] xs:h-[288px]" src="https://www.youtube.com/embed/ujmegtyO2J0?si=Hvwu1x5DSt9qztO_&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            )}
        </section>
    );
}