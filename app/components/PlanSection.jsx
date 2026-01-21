import "./PlanSection.scss";

export default function PlanSection() {
    return (
        <section className="PlanSection w-full flex flex-col bg-gray-100">
            <div className="self-center max-w-lg">
                <h1 className="z-20 relative bg-blue-2 mb-3 text-white text-3xl font-bold py-1 px-2 w-fit">
                    GAMEPLAN
                </h1>
                <p className="font-[550] mb-6">
                    Three task forces will take <strong className="markerUnderline text-blue-1 font-bold">real</strong> and <strong className="markerUnderline text-blue-1 font-bold">meaningful</strong> action.
                </p>
            </div>
            <div className="bg-white p-2 pl-3 border-l-6 border-blue-3 self-center max-w-md w-full mb-7 shadow-md">
                <h3 className="font-bold text-lg mb-1">
                    AI & Academic Affairs
                </h3>
                <p>
                    Devin's Academic Affairs team will strengthen advising and mentorship to ensure <strong className="markerUnderline font-[650]">every</strong> Tar Heel has the tools needed to reach their full potential, both <strong className="markerUnderline font-[650]">inside and outside the classroom.</strong> This group will focus on AI, accessibility, academic well-being, and innovation in teaching, learning, and advising.
                </p>
            </div>

            <div className="bg-white p-2 pl-3 border-l-6 border-blue-3 self-center max-w-md w-full mb-7 shadow-md">
                <h3 className="font-bold text-lg mb-1">
                    Community & Belonging
                </h3>
                <p>
                    Carolina is at its best when every student feels they belong here. Devin's Community & Belonging team will restore <strong className="markerUnderline font-[650]">connection</strong>, <strong className="markerUnderline font-[650]">unity</strong>, and <strong className="markerUnderline font-[650]">school spirit</strong> across campus, and work to address the growing sense of disconnection many students feel.
                </p>
            </div>

            <div className="bg-white p-2 pl-3 border-l-6 border-blue-3 self-center max-w-md w-full mb-7 shadow-md">
                <h3 className="font-bold text-lg mb-1">
                    Civic Engagement & Outreach
                </h3>
                <p>
                    Carolina was founded on a promise to serve the people of North Carolina, and that promise begins with us. Devin's Civic Engagement & Outreach team will work to renew Carolina's spirit of service and leadership, empowering students to engage in their communities, strengthen democracy, and <strong className="markerUnderline font-[650]">build bridges beyond campus</strong>.
                </p>
            </div>
        </section>
    );
}