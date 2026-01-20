"use client";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const links = [
    { label: "ABOUT", href: "#about" },
    { label: "PLATFORM", href: "#platform" },
    { label: "GAMEPLAN", href: "#policy" },
    { label: "VOTE", href: "#vote" },
];

export default function Nav() {
    return (
        <nav className="p-3 w-full bg-blue-1 flex items-center px-4 sm:px-7 md:px-20 space-between">
            <Image src="/logo-white.svg" alt="Devin for SBP" height={58} width={120} />

            {/* Desktop links - visible at xs and above */}
            <div className="hidden xs:flex items-center text-[15px] font-bold gap-6 ml-auto text-white">
                {links.map((link) => (
                    <a key={link.label} href={link.href}>{link.label}</a>
                ))}
            </div>

            {/* Mobile hamburger menu - visible below xs */}
            <div className="xs:hidden ml-auto">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <button className="text-white p-2 cursor-pointer outline-none hover:opacity-90 z-999 transition-opacity" aria-label="Menu">
                            <HamburgerMenuIcon width={24} height={24} />
                        </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            className="bg-blue-2 rounded-md p-2 min-w-[140px] shadow-xl outline-none"
                            sideOffset={5}
                            align="end"
                        >
                            {links.map((link) => (
                                <DropdownMenu.Item key={link.label} asChild>
                                    <a
                                        href={link.href}
                                        className="block px-3 py-2 text-white text-[15px] font-bold outline-none rounded"
                                    >
                                        {link.label}
                                    </a>
                                </DropdownMenu.Item>
                            ))}
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
        </nav>
    );
}