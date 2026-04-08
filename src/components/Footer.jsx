/* eslint-disable no-unused-vars */
// src/components/Footer.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import LegalModal from "./LegalModal"; // Import the modal

// 🔁 Replace with your real asset
import heroBg from "../assets/footerbg.png";
import logo from "../assets/logo.png";

/* -------------------- tiny helper for reveal-on-scroll -------------------- */
function useReveal(staggerMs = 0, options = { threshold: 0.12 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setVisible(true), staggerMs);
                io.unobserve(entry.target);
            }
        }, options);
        io.observe(el);
        return () => io.disconnect();
    }, [staggerMs, options]);
    return { ref, visible };
}

export default function Footer() {
    const cta = useReveal(0);
    const colA = useReveal(0);
    const colB = useReveal(120);
    const colC = useReveal(240);
    const colD = useReveal(360);

    // Modal state
    const [modal, setModal] = useState({ isOpen: false, title: "", content: null });

    const openLegal = (title, content) => {
        setModal({ isOpen: true, title, content });
    };

    const closeLegal = () => {
        setModal({ ...modal, isOpen: false });
    };

    const privacyContent = (
        <div className="space-y-4">
            <p><strong>Last Updated: April 2026</strong></p>
            <p>Your privacy is important to us. This Privacy Policy explains how Ultimate Integrated Support collects, uses, and protects your personal information when you use our website.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">1. Information Collection</h4>
            <p>We collect information you provide directly to us through contact forms, career applications, and newsletter subscriptions. This may include your name, email address, phone number, and resume.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">2. Use of Information</h4>
            <p>We use your information to provide our services, respond to inquiries, process job applications, and send updates if you have subscribed to our newsletter.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">3. Data Protection</h4>
            <p>We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">4. Cookies</h4>
            <p>Our website may use cookies to enhance user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.</p>
        </div>
    );

    const termsContent = (
        <div className="space-y-4">
            <p><strong>Last Updated: April 2026</strong></p>
            <p>Welcome to Ultimate Integrated Support. By accessing our website, you agree to comply with and be bound by the following terms and conditions of use.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">1. Use of Website</h4>
            <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">2. Disclaimer</h4>
            <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">3. Intellectual Property</h4>
            <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited.</p>
            <h4 className="text-lg font-bold text-[#0D3B2E]">4. Governing Law</h4>
            <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of the State of Maryland, United States.</p>
        </div>
    );

    // utility: style for nav items with active yellow text
    const navItem = ({ isActive }) =>
        [
            "transition hover:opacity-90",
            "text-sm",
            isActive ? "text-[#F2A900] font-semibold" : "text-white/90",
        ].join(" ");

    return (
        <footer className="w-full bg-[#0B2F25] text-white">
            {/* ======================= CTA STRIP ======================= */}
            <section className="relative overflow-hidden" aria-label="Staffing support call to action">
                <div
                    className="absolute inset-0 will-change-transform animate-[slowpan_18s_linear_infinite]"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: "110% 110%",
                        backgroundPosition: "center",
                        filter: "grayscale(15%)",
                    }}
                />
                <div className="absolute inset-0 bg-black/35" />

                <div
                    ref={cta.ref}
                    className={[
                        "relative mx-auto max-w-6xl px-6 py-16 text-center transition-all duration-700 ease-out",
                        cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                    ].join(" ")}
                >
                    <h2 className="mx-auto max-w-3xl text-2xl sm:text-3xl md:text-[28px] font-extrabold leading-tight text-white drop-shadow-md">
                        Need Staffing Support Today? Let’s <span className="whitespace-nowrap">Connect.</span>
                    </h2>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/staffing"
                            className="rounded-full bg-[#F2A900] px-7 py-3 text-sm font-semibold text-[#0B2F25] shadow-[0_8px_30px_rgba(0,0,0,.25)] hover:brightness-95 active:scale-[0.98] transition-transform"
                        >
                            Find Staff
                        </Link>
                        <Link
                            to="/contact"
                            className="rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-[2px] hover:bg-white/15 active:scale-[0.98] transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* =================== MAIN FOOTER CONTENT =================== */}
            <section className="relative w-full bg-gradient-to-r from-[#0B2F25] via-[#2E923A] to-[#0B2F25]">
                <div className="pointer-events-none absolute -top-10 left-1/4 h-40 w-40 rounded-full bg-lime-400/20 blur-3xl animate-pulse" />
                <div className="mx-auto max-w-6xl px-6 py-10">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                        {/* Brand + blurb */}
                        <div
                            ref={colA.ref}
                            className={[
                                "md:col-span-4 transition-all duration-700",
                                colA.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                            ].join(" ")}
                        >
                            <img src={logo} alt="Ultimate Integrated" className="h-[78px] w-[80px] object-contain" loading="lazy" />

                            <p className="mt-6 max-w-sm text-sm leading-6 text-white/85">
                                No matter who you are, we’re here to support you. Healthcare facilities can rely.
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition transform hover:-translate-y-0.5 hover:scale-105"
                                >
                                    <FaFacebookF className="text-white" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition transform hover:-translate-y-0.5 hover:scale-105"
                                >
                                    <FaInstagram className="text-white" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="X (Twitter)"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition transform hover:-translate-y-0.5 hover:scale-105"
                                >
                                    <FaXTwitter className="text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav
                            ref={colB.ref}
                            className={[
                                "md:col-span-3 transition-all duration-700",
                                colB.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                            ].join(" ")}
                        >
                            <h3 className="text-[15px] font-extrabold tracking-wide">Navigation</h3>
                            <ul className="mt-5 space-y-3">
                                <li>
                                    <NavLink to="/" className={navItem}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={navItem}>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/staffing" className={navItem}>Staffing Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dda-services" className={navItem}>DDA Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/careers" className={navItem}>Careers</NavLink>
                                </li>
                            </ul>
                        </nav>

                        {/* Contact */}
                        <div
                            ref={colC.ref}
                            className={[
                                "md:col-span-3 transition-all duration-700",
                                colC.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                            ].join(" ")}
                        >
                            <h3 className="text-[15px] font-extrabold tracking-wide">Contact Us</h3>
                            <ul className="mt-5 space-y-3 text-sm text-white/90">
                                <li>+1 (856) 879-4171</li>
                                <li>ultintegrated@gmail.com</li>
                                <li>14502 Green view Dr. Suite # 431</li>
                                <li>Laurel, MD 20708</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div
                            ref={colD.ref}
                            className={[
                                "md:col-span-2 transition-all duration-700",
                                colD.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                            ].join(" ")}
                        >
                            <h3 className="text-[15px] font-extrabold tracking-wide">Get the Latest Information</h3>

                            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex items-center rounded-full bg-white/15 p-1 pr-1">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="h-10 w-full rounded-full bg-transparent px-4 text-sm text-white placeholder:text-white/70 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F2A900] text-[#0B2F25] font-bold transition-transform hover:scale-105 active:scale-95"
                                    aria-label="Subscribe"
                                    title="Subscribe"
                                >
                                    ›
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-white/10" />
            </section>

            {/* ========================= BOTTOM BAR ========================= */}
            <div className="w-full bg-[#B68C4A] text-white">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-3 text-xs sm:flex-row">
                    <p className="opacity-90">
                        Copyright © {new Date().getFullYear()} Artfrica Studios.
                    </p>

                    <div className="flex flex-wrap items-center gap-5">
                        <button
                            onClick={() => openLegal("User Terms & Conditions", termsContent)}
                            className="hover:underline transition-colors"
                        >
                            User Terms &amp; Conditions
                        </button>
                        <span className="opacity-50">|</span>
                        <button
                            onClick={() => openLegal("Privacy Policy", privacyContent)}
                            className="hover:underline transition-colors"
                        >
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </div>

            {/* Legal Modal */}
            <LegalModal
                isOpen={modal.isOpen}
                onClose={closeLegal}
                title={modal.title}
                content={modal.content}
            />

            {/* keyframes for background pan */}
            <style>{`
        @keyframes slowpan {
          0%   { transform: scale(1.02) translate3d(0,0,0); }
          50%  { transform: scale(1.02) translate3d(-1%, -1%, 0); }
          100% { transform: scale(1.02) translate3d(0,0,0); }
        }
      `}</style>
        </footer>
    );
}
