/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import s1 from "../../assets/staffing/s1.jpg"


const ease = [0.22, 1, 0.36, 1];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function HeroUnderline({ children }) {
    return (
        <span className="relative inline-block">
            <span className="relative z-10 text-amber-300">{children}</span>
            <span className="absolute -bottom-1 left-0 right-0 z-0 mx-auto h-1 w-[92%] rounded-full bg-amber-300/60" />
        </span>
    );
}

HeroUnderline.propTypes = { children: PropTypes.node };

function BadgeIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 8.4l6-.9L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
    );
}

function SkillCard({ title, body, highlight = false }) {
    return (
        <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className={[
                "relative overflow-hidden rounded-2xl p-5 sm:p-6",
                "ring-1 ring-white/10 backdrop-blur-[1px]",
                highlight
                    ? "bg-[radial-gradient(120%_120%_at_30%_10%,#2F7C6E_0%,#0E3F38_80%)] ring-amber-300/60 border-2 border-amber-300"
                    : "bg-[radial-gradient(120%_120%_at_30%_10%,#225A4D_0%,#0B332D_80%)] ring-emerald-300/20",
                "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
            ].join(" ")}
        >
            <div className="mb-3 inline-flex items-center gap-2 text-emerald-100">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-emerald-300/40 bg-white/5 text-emerald-200">
                    <BadgeIcon />
                </span>
                <h3 className="text-base font-semibold text-white">{title}</h3>
            </div>
            <p className="text-sm leading-6 text-emerald-100/90">{body}</p>
        </motion.article>
    );
}

SkillCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    highlight: PropTypes.bool,
};

export default function SkilledSection({
    tag = "Types of Professionals",
    title = "Skilled Healthcare Professionals We Provide",
    subtitle = "To Support Your Facility",
    imgLeft = s1,
    items = [
        {
            title: "Registered Nurses",
            body:
                "Our RNs are highly trained and licensed to deliver comprehensive medical care. They oversee patient treatment plans, administer medications, monitor vital signs, and provide critical support during procedures.",
            highlight: true,
        },
        {
            title: "Licensed Practical Nurses",
            body:
                "LPNs are essential in providing direct bedside care. They assist with medication administration, wound care, and monitoring patients' health status. Under the supervision of RNs and physicians, LPNs help bridge the gap between complex medicals.",
        },
        {
            title: "Caregivers",
            body:
                "Caregivers extend personalized, non-medical support to residents in long-term care facilities, assisted living, or home settings. Their responsibilities may include meal preparation, companionship, light housekeeping.",
        },
        {
            title: "Allied Health Professionals",
            body:
                "We also provide a wide range of allied health experts, including medical technicians, respiratory therapists, physical and occupational therapists, and other specialists. These professionals bring specialized skills to enhance patient recovery.",
        },
    ],
}) {
    return (
        <section className="relative overflow-hidden py-16 md:py-24">
            {/* Green gradient background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_20%_10%,#2BB673_0%,#0F4D3E_45%,#082F2A_100%)]" />

            <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                {/* Heading */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-10 text-center md:mb-14"
                >
                    <motion.p variants={fadeUp} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                        {tag}
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="mt-2 text-[26px] font-semibold leading-tight text-white md:text-[34px]">
                        {title}
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mt-1 text-lg font-semibold text-emerald-100">
                        <HeroUnderline>{subtitle}</HeroUnderline>
                    </motion.p>
                </motion.div>

                {/* Content Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.05fr,1.4fr]"
                >
                    {/* Left image */}
                    <motion.figure
                        variants={fadeUp}
                        className="relative overflow-hidden rounded-[22px] border-2 border-amber-300 bg-white/5 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                    >
                        <div className="relative h-[420px] w-full overflow-hidden rounded-[18px] md:h-[520px]">
                            {imgLeft ? (
                                <img src={imgLeft} alt="Healthcare worker" className="h-full w-full object-cover" loading="lazy" />
                            ) : (
                                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#3AAE84,transparent_40%),radial-gradient(circle_at_80%_60%,#1B6B56,transparent_45%),#0C3A34]" />
                            )}
                            <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-amber-300/50" />
                        </div>
                    </motion.figure>

                    {/* Right: 2x2 cards */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {items.map((it, i) => (
                            <SkillCard key={i} title={it.title} body={it.body} highlight={!!it.highlight} />)
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

SkilledSection.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imgLeft: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            highlight: PropTypes.bool,
        })
    ),
};
