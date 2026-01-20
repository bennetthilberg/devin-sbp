import Image from "next/image";
import "./HeroSection.scss";

export default function HeroSection() {
    const priorities = ["Reimagine advising", "Support basic needs", "Guarantee transparency", "Build civic engagement", "Foster belonging", "Strengthen communication"];
    return (
        <section className="flex flex-col HeroSection">
            <p className="self-center font-medium text-lg text-center max-w-sm">
                Devin Duncan is running for Student Body President to:
            </p>
            <Image src="/headshot.png" height={200} width={100} />
        </section>
    )
}