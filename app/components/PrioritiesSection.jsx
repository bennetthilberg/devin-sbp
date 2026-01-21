import Image from "next/image";
import "./PrioritiesSection.scss";

export default function PrioritiesSection() {
    return (
        <section id="platform" className="PrioritiesSection text-white w-full flex flex-col gap-4 bg-blue-1">
            <div className="mx-auto flex flex-col p-8">
                <h1 className="font-bold text-4xl text-blue-1 bg-blue-3 w-fit px-2">5 PRIORITIES</h1>
                <p className="text-white font-medium mt-2">
                    For a Carolina that's first, best, and for all
                </p>
            </div>

            <div className="p-3 mx-auto max-w-2xl">
                <h2 className="!font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    1) Empower academic success
                </h2>
                <div className="font-medium tracking-tight">
                    <p>
                        Carolina should feel navigable. Devin will push for clearer advising, stronger
                        academic support, and better planning tools so students can focus on learning, not guessing.
                    </p>
                    <ul className="list-disc pl-8 my-3">
                        <li>Make advising easier to access, with clearer pathways for majors, minors, and graduation.</li>
                        <li>Fight for smarter registration support so students can plan ahead and stay on track.</li>
                        <li>Expand peer tutoring and mentorship where students actually struggle.</li>
                    </ul>
                    <p>When you show up and work hard, Carolina should meet you halfway.</p>
                </div>
            </div>

            <Image
                className="sm:max-w-lg max-w-[89vw] mx-auto mt-3 mb-4"
                src="/academic-success.png"
                alt="Devin smiling with a group of students at a formal event"
                width={1000}
                height={800}
            />

            <div className="p-3 mx-auto max-w-2xl">
                <h2 className="!font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    2) Support basic needs and wellbeing
                </h2>
                <div className="font-medium tracking-tight">
                    <p>
                        No one thrives when they feel hungry, overwhelmed, or one emergency away from falling behind.
                        Devin will treat basic needs as academic needs and work to connect students to support fast and
                        without stigma.
                    </p>
                    <ul className="list-disc pl-8 my-3">
                        <li>Simplify how students find food, housing, and emergency resources.</li>
                        <li>Advocate for stronger mental health access and wellbeing support.</li>
                        <li>Reduce the small barriers that keep students from getting help early.</li>
                    </ul>
                    <p>You deserve a campus that supports you before you burn out.</p>
                </div>
            </div>

            <Image
                className="sm:max-w-lg max-w-[89vw] mx-auto mt-3 mb-4"
                src="/cookout.png"
                alt="Devin smiling with an anthropomorphic Cookout mascot"
                width={1000}
                height={800}
            />

            <div className="p-3 mx-auto max-w-2xl">
                <h2 className="!font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    3) Build civic and community engagement
                </h2>
                <div className="font-medium tracking-tight">
                    <p>
                        Carolina leads when students lead. Devin will make it easier to serve, organize, and shape the
                        decisions that affect our daily lives, on campus and in the broader community.
                    </p>
                    <br />
                    <p>
                        He will strengthen the bridge between students and administration, and between UNC and the
                        communities we call home.
                    </p>
                    <ul className="list-disc pl-8 my-3">
                        <li>Create clearer pathways from student ideas to real campus action.</li>
                        <li>Support service and civic engagement that fits busy student schedules.</li>
                        <li>Protect student voice, especially when the issues get hard.</li>
                    </ul>
                </div>
            </div>

            <Image
                className="sm:max-w-lg max-w-[89vw] mx-auto mt-3 mb-4"
                src="/uncp.png"
                alt="Devin wearing a suit in front of a UNCP sign"
                width={1000}
                height={800}
            />

            <div className="p-3 mx-auto max-w-2xl">
                <h2 className="!font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    4) Celebrate identity & foster belonging
                </h2>
                <div className="font-medium tracking-tight">
                    <p>
                        Belonging does not happen by accident. Devin will show up for every Tar Heel and help build a
                        campus culture where students feel respected, supported, and proud of who they are.
                    </p>
                    <ul className="list-disc pl-8 my-3">
                        <li>Amplify and invest in the organizations that create community and connection.</li>
                        <li>Center students who too often feel overlooked, including first-gen, transfer, and international students.</li>
                        <li>Listen, then act, when policies exclude people in practice.</li>
                    </ul>
                    <p>Carolina should feel like home for all of us.</p>
                </div>
            </div>

            <Image
                className="sm:max-w-lg max-w-[89vw] mx-auto mt-3 mb-4 "
                src="/floor.png"
                alt="Devin smiling with the residents on his floor"
                width={1000}
                height={800}
            />

            <div className="p-3 mx-auto max-w-2xl">
                <h2 className="!font-bold tracking-tight text-2xl text-blue-1 bg-blue-3 w-fit px-2 mb-6">
                    5) Strengthen communication and transparency
                </h2>
                <div className="font-medium tracking-tight">
                    <p>
                        Students should not have to guess what Student Government is doing. Devin will communicate
                        clearly, share progress publicly, and own the results, good or bad.
                    </p>
                    <ul className="list-disc pl-8 my-3">
                        <li>Publish simple updates: what we promised, what we did, and what comes next.</li>
                        <li>Hold regular open forums, then report back after meetings with administrators.</li>
                        <li>Make budgets, votes, and timelines easy to find and easy to understand.</li>
                    </ul>
                    <p>When students trust the process, we can move faster and win bigger.</p>
                </div>
            </div>
        </section>
    );
}
