import Image from "next/image";

export default function MeetDevinSection(){
    return(
        <section id="about">
            <Image className="w-full max-w-xl self-center mx-auto mb-6" src="/meet-devin-4.png" alt="Devin wearing a suit with a Carolina Blue tie" height={2342} width={3604} />
            <p className="max-w-lg font-medium leading-snug max-w-lg mx-auto">
                My name is Devin Duncan, and I'm a Public Policy and Media & Journalism major from
                Cincinnati, OH. I came to Carolina believing in its promise not just to
                educate us, but to empower us to <strong className="text-blue-1">think bigger</strong>, <strong className="text-blue-1">serve others</strong>, and <strong className="text-blue-1">make a real difference</strong>. I
                believed in this community and in what it means to live out <strong className="text-blue-1">GDTBATH</strong>.
            </p>
        </section>
    )
}