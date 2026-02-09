"use client";
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

import { FaChevronRight, FaCheck } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";
import { submitReminderEmail } from "../actions/submitReminderEmail";
import Link from "next/link";

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
        <section id="vote" className="bg-blue-1 w-full text-white">
            <h3 className="font-[550] text-2xl mb-1 mt-3 text-center mx-auto">
                Polls are <strong className="markerUnderlineLight font-[550]">open now</strong>
            </h3>
            <Link target="_blank" rel="noopener noreferrer" prefetch={true} href="https://heellife.unc.edu/submitter/election/start/714525" className="w-fit mx-auto flex items-center self-center mt-5 gap-1 bg-blue-3 text-black rounded-full px-6 py-2 font-semibold shadow-md hover:brightness-103 xs:order-2 hover:shadow-lg text-lg !no-underline transition-all duration-200">
                <span>Vote now</span>
                <FaChevronRight size={14} />
            </Link>
            <p className="max-w-sm font-medium mx-auto mt-5 mb-12 text-center">
                Rank Devin Duncan #1 for Student Body President on the HeelLife election form
            </p>


            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/devinforsbp" className="w-fit mx-auto py-2 px-3 rounded-lg flex items-center mb-9 text-md font-medium gap-1 bg-blue-1 brightness-120">
                <FaInstagram size={20} />
                <p>Follow Devin on Instagram</p>
                <FaChevronRight size={10} />
            </a>
        </section>
    )
}