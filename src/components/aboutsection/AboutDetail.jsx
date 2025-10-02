/* eslint-disable no-unused-vars */
// src/components/AboutDetail.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// ⬇️ Replace these with your real assets
import imgA from "../../assets/about/abt1.jpg";
import imgB from "../../assets/about/abt2.jpg";
import imgC from "../../assets/about/abt3.jpg";
import videoCover from "../../assets/about/abt1.jpg";

/* -------------------- reveal-on-scroll helper -------------------- */
function useReveal(stagger = 0, options = { threshold: 0.14 }) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                const t = setTimeout(() => setShow(true), stagger);
                io.unobserve(entry.target);
                return () => clearTimeout(t);
            }
        }, options);
        io.observe(el);
        return () => io.disconnect();
    }, [stagger, options]);

    return { ref, show };
}

/* ------------------------------- UI -------------------------------- */
export default function AboutDetail({ onPlay }) {
    const leftA = useReveal(0);
    const leftB = useReveal(120);
    const leftC = useReveal(240);
    const rightHdr = useReveal(160);
    const rightVid = useReveal(260);

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0d3b2e] via-[#2e923a] to-[#0b2f25]">
            {/* subtle vignette blobs */}
            <div className="pointer-events-none absolute -top-20 left-1/4 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-1/5 h-64 w-64 rounded-full bg-emerald-300/10 blur-[90px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    {/* ================= LEFT STACK ================= */}
                    <div className="lg:col-span-5 grid grid-cols-6 gap-6 items-start">
                        {/* Big image A */}
                        <figure
                            ref={leftA.ref}
                            className={`col-span-6 sm:col-span-3 rounded-[28px] border-4 border-[#F2A900]/80 overflow-hidden bg-white transition-all duration-700 ${leftA.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <img
                                src={imgA}
                                alt="Nurse reviewing chart with client"
                                className="h-[280px] w-full object-cover"
                                loading="lazy"
                            />
                        </figure>

                        {/* Big image B */}
                        <figure
                            ref={leftB.ref}
                            className={`col-span-6 sm:col-span-3 rounded-[28px] border-4 border-[#F2A900]/80 overflow-hidden bg-white transition-all duration-700 delay-75 ${leftB.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <img
                                src={imgB}
                                alt="Care with heart"
                                className="h-[280px] w-full object-cover"
                                loading="lazy"
                            />
                        </figure>

                        {/* Small image tile */}
                        <figure
                            ref={leftC.ref}
                            className={`col-span-3 rounded-[24px] border-4 border-[#F2A900]/80 overflow-hidden bg-white transition-all duration-700 delay-150 ${leftC.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <img
                                src={imgC}
                                alt="Care discussion"
                                className="h-[160px] w-full object-cover"
                                loading="lazy"
                            />
                        </figure>

                        {/* Experience card */}
                        <div
                            className={`col-span-3 rounded-[24px] bg-[#B68C4A]/85 px-5 py-6 text-white shadow-lg transition-all duration-700 delay-200 ${leftC.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <p className="text-[15px] font-extrabold">15 Years Experiences</p>
                            <p className="mt-2 text-[13px] leading-6 text-white/95">
                                No matter who you are, we’re here to support you. Healthcare facilities can
                                rely on us for qualified and compassionate staff.
                            </p>
                        </div>
                    </div>

                    {/* ================= RIGHT COPY & VIDEO ================= */}
                    <div className="lg:col-span-7">
                        {/* eyebrow + heading + paragraph */}
                        <div
                            ref={rightHdr.ref}
                            className={`transition-all duration-700 ${rightHdr.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <p className="text-[11px] tracking-[0.12em] font-semibold uppercase text-[#F2A900]">
                                About Us
                            </p>
                            <h2 className="mt-2 text-white text-3xl sm:text-[34px] font-extrabold">
                                We’d Love To Hear From You
                            </h2>
                            <p className="mt-4 text-white/90 leading-7">
                                “Our company was founded with a simple belief: that everyone deserves access
                                to quality care and meaningful support. We recognized two growing
                                needs—healthcare facilities in need of dependable staff, and families seeking
                                safe, supportive environments for loved ones with disabilities. By bridging
                                these gaps, we empower both providers and individuals to thrive.”
                            </p>
                        </div>

                        {/* video card */}
                        <div
                            ref={rightVid.ref}
                            className={`mt-8 rounded-[28px] border-4 border-[#F2A900]/80 overflow-hidden relative transition-all duration-700 ${rightVid.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <img
                                src={videoCover}
                                alt="About video cover"
                                className="w-full h-[260px] sm:h-[300px] md:h-[340px] object-cover"
                                loading="lazy"
                            />

                            {/* play button */}
                            <button
                                type="button"
                                onClick={onPlay}
                                className="group absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0b2f25] backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95 transition"
                                aria-label="Play video"
                                title="Play about video"
                            >
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="translate-x-[2px]"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>

                            {/* soft inner gradient sweep */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

AboutDetail.propTypes = {
    /** Optional handler for when the play button is clicked */
    onPlay: PropTypes.func,
};

AboutDetail.defaultProps = {
    onPlay: () => { },
};
