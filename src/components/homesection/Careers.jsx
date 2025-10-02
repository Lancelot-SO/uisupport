/* eslint-disable no-unused-vars */
// src/components/Careers.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/* -------------------- utilities -------------------- */

function useReveal(stagger = 0) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const t = setTimeout(() => setVisible(true), stagger);
                    io.unobserve(entry.target);
                    return () => clearTimeout(t);
                }
            },
            { threshold: 0.18 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [stagger]);

    return { ref, visible };
}

/** Wrap any block that should fade/slide in */
function Reveal({ delay = 0, className = "", children, as: As = "div" }) {
    const { ref, visible } = useReveal(delay);
    return (
        <As
            ref={ref}
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${className}`}
        >
            {children}
        </As>
    );
}
Reveal.propTypes = {
    delay: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    as: PropTypes.elementType,
};

/* -------------------- small presentational bits -------------------- */

function Highlite({ children, color = "#F2A900" }) {
    return (
        <span className="relative inline-block">
            <span style={{ color }}>{children}</span>
            <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-[6px]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, transparent 0 6px, rgba(242,169,0,.9) 6px 18px)",
                    mask:
                        "radial-gradient(6px at 6px 50%,#000 98%,#0000) repeat-x left/24px 6px",
                    WebkitMask:
                        "radial-gradient(6px at 6px 50%,#000 98%,#0000) repeat-x left/24px 6px",
                }}
            />
        </span>
    );
}
Highlite.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
};

function Chip({ children, icon }) {
    return (
        <span
            className="
        inline-flex items-center gap-2 rounded-md
        bg-white/12 px-3 py-2 text-xs font-semibold text-white/95
        ring-1 ring-white/15
      "
        >
            <span className="text-sm/none">{icon}</span>
            {children}
        </span>
    );
}
Chip.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
};

/* -------------------- main component -------------------- */

export default function Careers({ jobs, onViewOpenings, className = "" }) {
    return (
        <section
            className={`
        relative w-full overflow-hidden
        bg-gradient-to-br from-[#0d3b2e] via-[#206b43] to-[#0b2f25]
        text-white
        ${className}
      `}
        >
            {/* soft vignette blobs */}
            <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-emerald-400/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-lime-400/20 blur-[110px]" />

            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
                {/* Eyebrow */}
                <Reveal as="p" className="mb-4 text-center text-[11px] font-semibold tracking-[0.18em] text-yellow-300/90 uppercase">
                    Careers Highlight
                </Reveal>

                {/* Headline */}
                <Reveal delay={100}>
                    <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold sm:text-4xl">
                        Build A <Highlite color="#F2A900">Career</Highlite> That Makes A{" "}
                        <Highlite color="#F2A900">Difference</Highlite>
                    </h2>
                </Reveal>

                {/* Subcopy */}
                <Reveal delay={200}>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-white/85">
                        Join our team of nurses, caregivers, and support staff who bring
                        compassion to every role. We offer flexible opportunities,
                        professional growth, and a culture that values your contributions.
                    </p>
                </Reveal>

                {/* Top CTA */}
                <div className="mt-6 flex justify-center">
                    <button
                        type="button"
                        onClick={onViewOpenings}
                        className="
              rounded-full bg-[#F2A900] px-6 py-3 text-sm font-semibold text-[#0b2f25]
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              ring-1 ring-black/10
              transition hover:brightness-95 active:scale-[0.98]
            "
                    >
                        View All Openings
                    </button>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((j, i) => (
                        <Reveal key={`${j.title}-${i}`} delay={i * 120}>
                            <article
                                className="
                  relative rounded-3xl p-6 sm:p-7
                  border border-white/15
                  bg-gradient-to-br from-white/8 via-white/6 to-white/4
                  backdrop-blur-md
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  transition
                  hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]
                "
                            >
                                {/* subtle inner green sweep */}
                                <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#0d3b2e]/40 via-[#2E923A]/30 to-[#0b2f25]/30" />

                                {/* corner ring icon */}
                                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50">
                                    <span className="text-xl">🩺</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-lg font-bold text-[#F2A900]">{j.title}</h3>
                                    <span className="text-xs text-white/75">– {j.age}</span>
                                </div>

                                {/* chips */}
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <Chip icon="🏢">{j.type}</Chip>
                                    <Chip icon="📍">{j.location}</Chip>
                                    <Chip icon="🏠">{j.mode}</Chip>
                                </div>

                                {/* blurb */}
                                <p className="mt-4 text-sm leading-relaxed text-white/90">{j.blurb}</p>

                                {/* actions */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <button
                                        className="
                      rounded-full border border-white/35 bg-white/5 px-5 py-2 text-sm
                      text-white/95 backdrop-blur-sm transition hover:bg-white/10
                    "
                                    >
                                        More Details
                                    </button>
                                    <button
                                        className="
                      rounded-full bg-[#F2A900] px-5 py-2 text-sm font-semibold text-[#0b2f25]
                      shadow ring-1 ring-black/10 transition hover:brightness-95 active:scale-[0.98]
                    "
                                    >
                                        Apply Now
                                    </button>
                                </div>

                                {/* faint outline to match mock */}
                                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------- prop types & defaults -------------------- */

Careers.propTypes = {
    /** Array of job cards to display */
    jobs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            mode: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            blurb: PropTypes.string.isRequired,
        })
    ),
    /** Optional handler for the top CTA */
    onViewOpenings: PropTypes.func,
    /** Extra classNames for the root section */
    className: PropTypes.string,
};

Careers.defaultProps = {
    jobs: [
        {
            title: "Registered Nurse (RN)",
            age: "8 days ago",
            type: "Full Time",
            mode: "Hybrid",
            location: "USA-Texas",
            blurb:
                "Safe, welcoming residences where individuals can live in a supportive community. Each home is staffed by trained professionals ....",
        },
        {
            title: "Registered Nurse (RN)",
            age: "8 days ago",
            type: "Full Time",
            mode: "Hybrid",
            location: "USA-Texas",
            blurb:
                "Safe, welcoming residences where individuals can live in a supportive community. Each home is staffed by trained professionals ....",
        },
        {
            title: "Registered Nurse (RN)",
            age: "8 days ago",
            type: "Full Time",
            mode: "Hybrid",
            location: "USA-Texas",
            blurb:
                "Safe, welcoming residences where individuals can live in a supportive community. Each home is staffed by trained professionals ....",
        },
    ],
    onViewOpenings: () => { },
    className: "",
};
