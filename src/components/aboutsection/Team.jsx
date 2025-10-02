/* eslint-disable no-unused-vars */
// src/components/Team.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/*  Replace with your real assets  */
import leaderA from "../../assets/about/abt1.jpg";
import leaderD from "../../assets/about/portrait.jpg";

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

/* ------------------------------- Image Card ------------------------------- */
function Frame({ src, alt, className = "", delay = 0 }) {
    const r = useReveal(delay);
    return (
        <div
            ref={r.ref}
            className={[
                "rounded-[24px] bg-[#F2A900]",
                "transition-all duration-700 ease-out",
                r.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                className,
            ].join(" ")}
        >
            <div className="rounded-[18px] overflow-hidden bg-white">
                <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
        </div>
    );
}
Frame.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number,
};

/* --------------------------------- Team ---------------------------------- */
export default function Team({
    images = [leaderA, leaderD],
    className = "",
}) {
    const head = useReveal();

    return (
        <section className={`w-full bg-[#E9F0ED] ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
                {/* Header */}
                <div
                    ref={head.ref}
                    className={`text-center transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        }`}
                >
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#B9852E]">
                        Leadership Team
                    </p>
                    <h2 className="mt-2 text-[#0D3B2E] text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-tight">
                        Meet the Dedicated Leaders Guiding Our Mission of
                        <br className="hidden sm:block" /> and Inclusive Support
                    </h2>
                    <p className="mx-auto mt-3 max-w-3xl text-[#25453B]/80">
                        Behind our mission is a dedicated team of professionals who bring years of
                        experience in healthcare and disability support services.
                    </p>
                </div>

                {/* Collage */}
                <div className="mt-12 flex flex-col gap-6 md:flex-row items-center justify-center">
                    {/* Small tall left */}
                    <Frame
                        src={images[0]}
                        alt="Leader 1"
                        delay={0}
                        className=" h-full w-[300px]"
                    />

                    {/* Slim far right */}
                    <Frame
                        src={images[1]}
                        alt="Leader 4"
                        delay={280}
                        className=" h-full w-[300px]"
                    />
                </div>
            </div>
        </section>
    );
}

Team.propTypes = {
    /** Array of 4 image URLs (left -> center -> right -> far right) */
    images: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
};
