/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import m1 from "../../assets/staffing/m1.jpg";
import m2 from "../../assets/staffing/m2.jpg";

/**
 * Partner.jsx
 * Two-column section: reasons list (left) + stacked images (right)
 * Smooth staggered animations via Framer Motion.
 */

const ease = [0.22, 1, 0.36, 1];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function CheckBadge() {
    return (
        <span className="grid h-11 w-11 place-items-center rounded-full bg-amber-400 text-white shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

function Reason({ title, desc }) {
    return (
        <motion.li variants={fadeUp} className="flex gap-4">
            <CheckBadge />
            <div>
                <h3 className="text-[16px] font-semibold text-amber-700 md:text-[17px]">{title}</h3>
                <p className="mt-1 text-[15px] leading-7 text-gray-600">{desc}</p>
            </div>
        </motion.li>
    );
}

Reason.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

function MediaCard({ src, alt, className = "" }) {
    return (
        <motion.figure
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className={`relative overflow-hidden rounded-[22px] border-2 border-amber-300 bg-white/5 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.18)] ${className}`}
        >
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                {src ? (
                    <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-emerald-100 to-emerald-300" />
                )}
                <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-amber-300/50" />
            </div>
        </motion.figure>
    );
}

MediaCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default function Partner({
    tag = "Partner With Us",
    title = "Why Choose Us As Your Staffing Partner",
    intro =
    "At [Your Company Name], we know that the success of your facility depends on the quality of the people behind it. That's why we go beyond filling positions—we build lasting partnerships grounded in trust, reliability, and excellence. When you work with us, you gain:",
    reasons = [
        {
            title: "24/7 Staffing Support",
            desc: "Immediate assistance whenever staffing gaps arise, including nights, weekends, and emergencies.",
        },
        {
            title: "Pre-Screened & Credentialed Professionals",
            desc: "Every nurse, caregiver, and allied health worker undergoes thorough background checks, licensing verification, and skills assessments.",
        },
        {
            title: "Flexible Solutions",
            desc: "Whether you need short-term, per diem, or long-term placements, we adapt to your unique staffing needs.",
        },
        {
            title: "Seamless Integration",
            desc: "Our professionals are trained to quickly adapt to new environments, reducing disruptions and ensuring continuity of care.",
        },
        {
            title: "Commitment to Quality Care",
            desc: "We carefully match professionals to your facility’s culture and standards, so patients receive consistent, compassionate care.",
        },
    ],
    imgTop = m1,
    imgBottom = m2,
}) {
    return (
        <section className="relative overflow-hidden bg-[#F7F8F6] py-16 md:py-24">
            {/* soft backdrop accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
                <div className="absolute -right-24 bottom-16 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-4 md:px-8 lg:grid-cols-[1.25fr,1fr]"
            >
                {/* Left: copy + reasons */}
                <div>
                    <motion.p variants={fadeUp} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {tag}
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="mt-2 text-[28px] font-semibold leading-tight text-[#184C3D] md:text-[36px]">
                        {title}
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mt-3 max-w-3xl text-[15px] leading-7 text-gray-600">
                        {intro}
                    </motion.p>

                    <motion.ul variants={container} className="mt-8 space-y-6">
                        {reasons.map((r, i) => (
                            <Reason key={i} title={r.title} desc={r.desc} />
                        ))}
                    </motion.ul>
                </div>

                {/* Right: stacked images */}
                <div className="relative grid gap-8">
                    <MediaCard src={imgTop} alt="Team reviewing tablet" className="h-[360px] md:h-[420px]" />
                    <MediaCard src={imgBottom} alt="Team consulting" className="h-[220px] md:h-[260px]" />
                </div>
            </motion.div>
        </section>
    );
}

Partner.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
    intro: PropTypes.string,
    reasons: PropTypes.arrayOf(
        PropTypes.shape({ title: PropTypes.string.isRequired, desc: PropTypes.string.isRequired })
    ),
    imgTop: PropTypes.string,
    imgBottom: PropTypes.string,
};
