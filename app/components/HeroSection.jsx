"use client";
import Image from "next/image";
import "./HeroSection.scss";
import { FaChevronRight } from "react-icons/fa6";


export default function HeroSection() {
    return (
        <section className="flex flex-col HeroSection mt-3 md:mt-6 mb-5 sm:mb-5">
            <p className="self-center  text-2xl font-[550] tracking-tight text-center max-w-lg lg:max-w-xl lg:text-3xl">
                Devin Duncan is running for Student Body President to <strong className="markerUnderline delay1 text-blue-1 font-[700]">reimagine advising</strong>, <strong className="markerUnderline delay2 text-blue-1 font-[700]">support basic needs</strong>, and <strong className="markerUnderline delay3 text-blue-1 font-[700]">guarantee transparency</strong>.
            </p>
            <a href="#vote" className="flex items-center self-center mt-7 gap-1 bg-blue-2 text-white rounded-full px-5 py-2 font-semibold shadow-md hover:brightness-103 hover:shadow-lg !no-underline transition-all duration-200">
                <span>Get ready to vote</span>
                <FaChevronRight size={14}/>
            </a>
        </section>
    );
}