"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./InitialAnim.scss";

export default function InitialAnim() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(function () {
        const timer = setTimeout(function () {
            setIsVisible(false);
        }, 4600);
        return function () { clearTimeout(timer); };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="InitialAnim z-9999">
            <p className="tagline">BUILDING A CAROLINA THAT&apos;S</p>
            <div className="words">
                <span className="word word1">FIRST</span>
                <span className="word word2">BEST</span>
                <span className="word word3">
                    <span className="andText">AND</span>
                    FOR ALL
                </span>
                <div className="logoContainer">
                    <Image src="/logo-white.svg" alt="Logo" width={178} height={90} />
                </div>
            </div>
        </div>
    );
}