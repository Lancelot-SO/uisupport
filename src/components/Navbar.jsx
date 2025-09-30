/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import logo from "../assets/logo.png"


const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Staffing Services", href: "/staffing" },
    { label: "DDA Services", href: "/dda-services" },
    { label: "Careers", href: "/careers" },
    { label: "Resources", href: "/resources" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const activeIdx = 0; // set your active index dynamically if needed

    return (
        <div className="fixed inset-x-0 top-0 z-50">
            {/* Top utility bar */}
            <header className="h-12 bg-white/100 border-b border-neutral-100">
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 text-sm text-neutral-700">
                        <a href="mailto:daviadzadto45@gmail.com" className="flex items-center gap-2 hover:opacity-80">
                            <Mail className="h-4 w-4 text-[#BD8F38]" />
                            <span className="truncate">daviadzadto45@gmail.com</span>
                        </a>
                        <a href="tel:+233245224993" className="flex items-center gap-2 hover:opacity-80">
                            <Phone className="h-4 w-4 text-[#BD8F38]" />
                            <span>+233 24 522 4993</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a aria-label="Facebook" href="#" className="hover:opacity-80">
                            <Facebook className="h-4 w-4 text-[#BD8F38]" />
                        </a>
                        <a aria-label="Instagram" href="#" className="hover:opacity-80">
                            <Instagram className="h-4 w-4 text-[#BD8F38]" />
                        </a>
                        <a aria-label="LinkedIn" href="#" className="hover:opacity-80">
                            <Linkedin className="h-4 w-4 text-[#BD8F38]" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main nav bar */}
            <nav className="relative">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 pt-4 pb-3">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Ultimate Integrated Support"
                            className="h-[78px] w-[80px]"
                        />
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="ml-auto inline-flex items-center justify-center rounded-full p-2 lg:hidden"
                        aria-label="Toggle menu"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                    </button>

                    {/* Center: pill menu (desktop) */}
                    <div
                        className="
              hidden lg:flex items-center justify-center rounded-full
              px-3 py-2 backdrop-blur-md bg-[#E6EAE9]/20
              shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-1 ring-white/10 mx-4
            "
                    >
                        <ul className="flex items-center gap-2 text-sm">
                            {NAV_ITEMS.map((item, idx) => {
                                const isActive = idx === activeIdx; // 'Home' active
                                return (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className={[
                                                "block rounded-full px-4 py-2 transition no-underline",
                                                isActive ? "text-[#FFC34D]" : "text-white/90 hover:text-white",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Right: Contact Us button */}
                    <div className="hidden lg:block">
                        <a
                            href="/contact"
                            className="rounded-full bg-[#BD8F38] px-5 py-2.5 text-sm font-medium text-white shadow-md hover:opacity-95"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                {open && (
                    <div className="px-4 sm:px-6 pb-4 lg:hidden">
                        <div className="rounded-2xl bg-[#E6EAE9]/20 backdrop-blur-md ring-1 ring-white/10 shadow-lg">
                            <ul className="flex flex-col divide-y divide-white/10">
                                {NAV_ITEMS.map((item, idx) => {
                                    const isActive = idx === activeIdx;
                                    return (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                className={[
                                                    "flex items-center justify-between px-4 py-3 transition no-underline",
                                                    isActive ? "text-[#FFC34D]" : "text-white/90 hover:text-white",
                                                ].join(" ")}
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    );
                                })}
                                <li className="p-3">
                                    <a
                                        href="/contact"
                                        onClick={() => setOpen(false)}
                                        className="block w-full rounded-full bg-[#BD8F38] px-5 py-2.5 text-center text-sm font-medium text-white hover:opacity-95"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
