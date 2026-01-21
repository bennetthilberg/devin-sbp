"use client";
import { useState, useEffect } from "react";
import { FaChevronRight, FaCheck } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";
import { submitReminderEmail } from "../actions/submitReminderEmail";

export default function VoteSection() {
    const [timeLeft, setTimeLeft] = useState(null);
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" });

    useEffect(function () {
        // February 10th, 2026 at 5 PM EST = 22:00 UTC
        const targetDate = new Date("2026-02-10T22:00:00Z");

        function calculateTimeLeft() {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(function () {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return function () {
            clearInterval(timer);
        };
    }, []);

    function formatTime() {
        if (!timeLeft) return "Loading...";

        const { days, hours, minutes, seconds } = timeLeft;

        if (days > 0) {
            return `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        } else {
            return `${seconds}s`;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        setIsLoading(true);
        setStatus({ type: null, message: "" });

        try {
            const result = await submitReminderEmail(email);

            if (result.success) {
                setStatus({ type: "success", message: "You're all set! We'll send you one email reminder on election day." });
                setEmail("");
            } else {
                setStatus({ type: "error", message: result.error });
            }
        } catch (err) {
            setStatus({ type: "error", message: "Unable to connect. Please try again later." });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id="vote" className="bg-blue-1 w-full flex flex-col items-center text-white">
            <form className="flex flex-col" onSubmit={handleSubmit}>

                <h3 className="font-[550] text-lg mb-1 mt-3">
                    Polls open in
                </h3>
                <h1 className="text-4xl font-bold mb-2">
                    {formatTime()}
                </h1>
                <p className="font-[540] text-xl mb-7">
                    Vote for Devin starting <strong className="markerUnderlineLight">February 10th at 5 PM</strong> on HeelLife
                </p>
                <p className="font-semibold mb-4 text-lg mx-auto">
                    Get an email reminder to vote
                </p>
                <div className="max-w-xs w-full self-center">
                    <label htmlFor="email-reminder" className="font-semibold text-[14px]">
                        Email address
                    </label>
                    <div className="relative mt-1 mb-2">
                        <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
                        <input
                            type="email"
                            id="email-reminder"
                            name="email"
                            value={email}
                            onChange={function (e) { setEmail(e.target.value); }}
                            className="w-full !pl-9"
                            aria-label="Email address for vote reminder"
                            disabled={isLoading}
                        />
                    </div>
                    {status.message && (
                        <div className={`text-sm font-medium mb-2 p-2 rounded ${
                            status.type === "success" 
                                ? "bg-green-500/20 text-green-200" 
                                : "bg-red-500/20 text-red-200"
                        }`}>
                            {status.type === "success" && <FaCheck className="inline mr-1.5 -mt-0.5" size={12} />}
                            {status.message}
                        </div>
                    )}
                </div>
                <button 
                    type="submit"
                    disabled={isLoading}
                    className="!w-full max-w-xs mt-2 mb-20 !text-black !bg-blue-3 flex justify-center items-center gap-1 text-[17px] !font-bold self-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <ImSpinner8 className="animate-spin" size={16} />
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <>
                            <span>Remind me</span>
                            <FaChevronRight size={15} />
                        </>
                    )}
                </button>
            </form>
        </section>
    )
}