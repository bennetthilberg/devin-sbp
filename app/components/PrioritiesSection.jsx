import Image from "next/image";
import "./PrioritiesSection.scss";

export default function PrioritiesSection() {
    return (
        <section className="PrioritiesSection text-white w-full flex flex-col gap-4 bg-blue-1">
            <div className="mx-auto flex flex-col p-8">
                <h1 className="font-bold text-4xl text-blue-1 bg-blue-3 w-fit px-2">5 PRIORITIES</h1>
                <p className="text-white font-medium mt-2">
                    For a Carolina that's first, best, and for all
                </p>
            </div>
            <div className="p-3 mx-auto">
                <h2 className="font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    1) Empower academic success
                </h2>
                <div className="font-medium tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    <ul className="list-disc pl-8 my-3">
                        <li>Ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    </ul>
                    Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
            <Image className="max-w-lg mx-auto mt-3 mb-4" src="/academic-success.png" alt="Devin smiling with a group of students at a formal event" width={1000} height={800} />
            <div className="p-3 mx-auto">
                <h2 className="font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    2) Support basic needs and wellbeing
                </h2>
                <div className="font-medium tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    <ul className="list-disc pl-8 my-3">
                        <li>Ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    </ul>
                    Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
            <Image className="max-w-lg mx-auto mt-3 mb-4" src="/cookout.png" alt="Devin smiling with an anthropomorphic Cookout mascot" width={1000} height={800} />

            <div className="p-3 mx-auto">
                <h2 className="font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    3) Build civic and community engagement
                </h2>
                <div className="font-medium tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    <ul className="list-disc pl-8 my-3">
                        <li>Ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    </ul>
                    Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>

            <Image className="max-w-lg mx-auto mt-3 mb-4" src="/uncp.png" alt="Devin wearing a suit in front of a UNCP sign" width={1000} height={800} />


            <div className="p-3 mx-auto">
                <h2 className="font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    4) Celebrate identity & foster belonging
                </h2>
                <div className="font-medium tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    <ul className="list-disc pl-8 my-3">
                        <li>Ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    </ul>
                    Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>

            <Image className="max-w-lg mx-auto mt-3 mb-4" src="/floor.png" alt="Devin smiling with the residents on his floor" width={1000} height={800} />


            <div className="p-3 mx-auto">
                <h2 className="font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    5) Strengthen communication and transparency
                </h2>
                <div className="font-medium tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    <ul className="list-disc pl-8 my-3">
                        <li>Ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    </ul>
                    Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
        </section>
    );
}