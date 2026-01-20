"use client";
import Image from "next/image";
import "./HeroSection.scss";

export default function HeroSection() {
    return (
        <section className="flex flex-col HeroSection mt-3 md:mt-6 mb-4 sm:mb-5">
            <p className="self-center  text-2xl font-[550] tracking-tight text-center max-w-lg lg:max-w-xl lg:text-3xl">
                Devin Duncan is running for Student Body President to <strong className="markerUnderline delay1 text-blue-1 font-[700]">reimagine advising</strong>, <strong className="markerUnderline delay2 text-blue-1 font-[700]">support basic needs</strong>, and <strong className="markerUnderline delay3 text-blue-1 font-[700]">guarantee transparency</strong>.
            </p>
        </section>
    );
}