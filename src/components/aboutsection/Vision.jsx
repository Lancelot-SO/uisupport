/* eslint-disable no-unused-vars */
// src/components/Vision.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// 🔁 Replace with your real asset
import nursePortrait from "../../assets/about/portrait.jpg";

/* -------------------- tiny helper for reveal-on-scroll -------------------- */
function useReveal(staggerMs = 0, options = { threshold: 0.14 }) {
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

/* ------------------------------ Bullet Row ------------------------------ */
function Bullet({ title, subtitle, delay = 0 }) {
    const r = useReveal(delay);
    return (
        <div
            ref={r.ref}
            className={`flex items-start gap-4 transition-all duration-700 ease-out ${r.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
        >
            <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F2A900]/15 text-[#F2A900]">
                {/* simple badge icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 9.5 8H3l5.25 3.81L5.5 18 12 13.9 18.5 18l-2.75-6.19L21 8h-6.5L12 2z" />
                </svg>
            </span>
            <div>
                <h4 className="font-semibold text-[#0D3B2E]">{title}</h4>
                <p className="text-sm text-[#25453B]/80">{subtitle}</p>
            </div>
        </div>
    );
}
Bullet.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    delay: PropTypes.number,
};

/* -------------------------------- Vision -------------------------------- */
export default function Vision({
    portrait = nursePortrait,
    className = "",
}) {
    const head = useReveal();
    const mission = useReveal(150);
    const rightImg = useReveal(250);

    return (
        <section className={`relative w-full bg-white ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
                    {/* LEFT: copy + bullets + mission card */}
                    <div className="lg:col-span-7">
                        {/* eyebrow */}
                        <p
                            ref={head.ref}
                            className={`mb-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#B9852E]
                transition-all duration-700 ease-out
                ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                        >
                            Vision & Missson
                        </p>

                        <h2
                            className={`text-[#0D3B2E] text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-tight
                transition-all duration-700 ease-out delay-100
                ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                        >
                            Experienced Recruiters Specialized in Finding
                            <br /> The Right Talent
                        </h2>

                        <p
                            className={`mt-4 max-w-2xl text-[#25453B]/80 leading-7
                transition-all duration-700 ease-out delay-200
                ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                        >
                            “Our company was founded with a simple belief: that everyone
                            deserves access to quality care and meaningful support. We
                            recognized two growing needs—healthcare facilities in need of
                            dependable staff,”
                        </p>

                        <div className="mt-8 space-y-6">
                            <Bullet
                                title="Building Great Network"
                                subtitle="Our company was founded with a simple belief"
                                delay={0}
                            />
                            <Bullet
                                title="Have Talent Resource"
                                subtitle="Our company was founded with a simple belief"
                                delay={80}
                            />
                            <Bullet
                                title="Good Interview Process"
                                subtitle="Our company was founded with a simple belief"
                                delay={160}
                            />
                        </div>

                        {/* MISSION CARD */}
                        <div
                            ref={mission.ref}
                            className={`mt-8 rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-[#F2A900]/30
                bg-gradient-to-br from-[#0D3B2E] via-[#2E923A] to-[#0B2F25]
                transition-all duration-700 ease-out
                ${mission.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            <p className="text-[12px] font-extrabold tracking-[0.14em] text-[#FFC24D] uppercase">
                                Mission
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white/95 max-w-2xl">
                                “Our company was founded with a simple belief: that everyone
                                deserves access to quality care and meaningful support. We
                                recognized two growing needs—healthcare facilities in need of
                                dependable staff, and families seeking safe, supportive
                                environments for loved ones…”
                            </p>

                            <div className="mt-4 inline-flex items-center gap-2 text-[#FFC24D] font-semibold">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2 9.5 8H3l5.25 3.81L5.5 18 12 13.9 18.5 18l-2.75-6.19L21 8h-6.5L12 2z" />
                                    </svg>
                                </span>
                                Building Great Network
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: portrait image with golden border */}
                    <div
                        ref={rightImg.ref}
                        className={`lg:col-span-5 transition-all duration-700 ease-out
              ${rightImg.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <div className="rounded-[26px] p-[6px] bg-[#F2A900] w-full">
                            <div className="rounded-[20px] overflow-hidden bg-white">
                                <img
                                    src={portrait}
                                    alt="Recruiter reviewing candidate"
                                    className="h-[560px] w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Vision.propTypes = {
    portrait: PropTypes.string,
    className: PropTypes.string,
};
