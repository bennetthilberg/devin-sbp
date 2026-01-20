import Image from "next/image";
import "./HeroSection.scss";

export default function HeroSection() {
    // 
    return (
        <section className="flex flex-col HeroSection">
            <p className="self-center font-medium text-lg text-center max-w-md">
                <strong className="font-young-serif bg-blue-1 text-white px-[4px] text-xl font-[400]">Devin Duncan</strong> is running for Student Body President to <strong className="font-young-serif text-blue-1 text-xl font-[400]">reimagine advising</strong>, <strong className="font-young-serif text-blue-1 text-xl font-[400]">support basic needs</strong>, and <strong className="font-young-serif text-blue-1 text-xl font-[400]">guarantee transparency</strong>.
            </p>
            <Image src="/headshot-transparent.png" alt="Devin wearing a suit and Carolina Blue tie" height={300} width={200} />
        </section>
    )
}