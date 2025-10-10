/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import m1 from "../../assets/staffing/m1.jpg";
import m2 from "../../assets/staffing/m2.jpg";

/**
 * MainSection.jsx
 * Overview hero with stacked media cards (left) and content (right).
 * Includes Apply modal wired to the CTA.
 */

const ease = [0.22, 1, 0.36, 1];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

function MediaCard({ src, alt, height = "h-56" }) {
    return (
        <motion.figure
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className={`relative ${height} w-full max-w-xs overflow-hidden rounded-3xl border-2 border-amber-300 bg-white p-1 shadow-sm md:max-w-sm`}
        >
            <div className="absolute inset-0 -z-10 rounded-[22px] ring-1 ring-amber-200/60" />
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full rounded-[18px] object-cover"
                />
            ) : (
                <div className="h-full w-full rounded-[18px] bg-[radial-gradient(circle_at_30%_20%,#FFE6BF,transparent_35%),radial-gradient(circle_at_80%_60%,#FFD6A3,transparent_40%),#f8fafc]" />
            )}
        </motion.figure>
    );
}

MediaCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.string,
};

function CloseIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function ApplyModal({ open, onClose }) {
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 800)); // simulate
        setSubmitting(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.button
                        aria-label="Close"
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ y: 24, scale: 0.98, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1, transition: { duration: 0.3, ease } }}
                        exit={{ y: 12, scale: 0.98, opacity: 0, transition: { duration: 0.2 } }}
                        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 pt-5">
                            <h3 className="text-[15px] font-semibold text-gray-900">
                                Staffing Request Form (Facilities & Clinics)
                            </h3>
                            <button
                                onClick={onClose}
                                className="grid h-8 w-8 place-items-center rounded-full border border-gray-200 text-amber-500 transition hover:bg-rose-50"
                                aria-label="Close modal"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="px-5 pb-0 pt-3">
                            <div className="h-px w-full bg-gray-100" />
                        </div>

                        {/* Intro */}
                        <div className="px-5 text-center">
                            <h4 className="mt-2 text-[15px] font-semibold text-gray-900">
                                Need Qualified Staff? We’re Here To Help
                            </h4>
                            <p className="mx-auto mt-1 max-w-xl text-sm text-gray-600">
                                Complete this quick form and our team will connect you with the right healthcare professionals.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="px-5 pb-5 pt-4">
                            <div className="grid grid-cols-1 gap-4">
                                <label className="block">
                                    <span className="mb-1.5 block text-sm font-medium text-gray-800">Full Name</span>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter name here e.g Davida Dzato"
                                        required
                                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                                    />
                                </label>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <label className="block">
                                        <span className="mb-1.5 block text-sm font-medium text-gray-800">Phone Number</span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your number here"
                                            required
                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="mb-1.5 block text-sm font-medium text-gray-800">Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email here"
                                            required
                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <label className="block">
                                        <span className="mb-1.5 block text-sm font-medium text-gray-800">Facility Name</span>
                                        <input
                                            type="text"
                                            name="facility"
                                            placeholder="Enter your facility name here"
                                            required
                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="mb-1.5 block text-sm font-medium text-gray-800">Type of Staff Needed</span>
                                        <div className="relative">
                                            <select
                                                name="staffType"
                                                defaultValue=""
                                                required
                                                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                                            >
                                                <option value="" disabled>Select type of Staff</option>
                                                <option>Registered Nurse</option>
                                                <option>Midwife</option>
                                                <option>Care Assistant</option>
                                                <option>Lab Technician</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden>
                                                ▼
                                            </span>
                                        </div>
                                    </label>
                                </div>

                                <label className="block">
                                    <span className="mb-1.5 block text-sm font-medium text-gray-800">
                                        Notes <span className="font-normal text-gray-400">(Optional)</span>
                                    </span>
                                    <textarea
                                        name="notes"
                                        rows={4}
                                        placeholder="Enter your notes here"
                                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                                    />
                                </label>

                                <p className="mt-1 text-[12px] leading-5 text-gray-500">
                                    By Proceeding, you agree to our{" "}
                                    <a href="#" className="font-medium text-emerald-700 underline underline-offset-2">Terms of Use</a>{" "}
                                    and confirm you have read our{" "}
                                    <a href="#" className="font-medium text-emerald-700 underline underline-offset-2">Privacy</a> and{" "}
                                    <a href="#" className="font-medium text-emerald-700 underline underline-offset-2">Cookie Statement</a>.
                                </p>

                                <div className="flex items-center justify-between gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-amber-400 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 disabled:opacity-70"
                                    >
                                        {submitting ? "Submitting..." : "Submit Form"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

ApplyModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default function MainSection({
    tag = "Overview",
    title = "Bridging Staffing Gaps With Qualified, Compassionate Professionals",
    blurb1 =
    "At Ultimate Integrated Support Services, we understand that staffing challenges can place a heavy burden on healthcare facilities of every size. Unexpected absences, seasonal surges, and growing patient demands can all affect the quality of care your team strives to deliver.",
    blurb2 =
    "That’s why we provide more than just staffing—we provide peace of mind. Whether you require temporary coverage to bridge a short-term gap, long-term placements to strengthen your workforce, or last-minute emergency support, our agency is equipped to respond quickly and efficiently.",
    ctaText = "Apply Now",
    imgTop = m1,
    imgBottom = m2,
    onCta, // optional external callback
}) {
    const [open, setOpen] = useState(false);

    const handleCta = () => {
        onCta && onCta();
        setOpen(true);
    };

    return (
        <section className="relative overflow-hidden bg-[#F7F8F6] py-14 md:py-20">
            {/* soft backdrop accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
                <div className="absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-[1.05fr,1.2fr]"
            >
                {/* Left: stacked media */}
                <div className="relative flex min-h-[340px] flex-col items-start gap-8 lg:min-h-[380px]">
                    <div className="flex w-full justify-start">
                        <MediaCard src={imgTop} alt="Team reviewing tablet" height="h-56 md:h-64" />
                    </div>
                    <div className="flex w-full justify-end">
                        <MediaCard src={imgBottom} alt="Stethoscope heart" height="h-64 md:h-72" />
                    </div>
                </div>

                {/* Right: content */}
                <motion.div variants={fadeUp} className="max-w-2xl">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">{tag}</p>
                    <h2 className="text-[28px] font-semibold leading-tight text-[#1C3C33] md:text-[36px]">
                        {title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-7 text-gray-600">{blurb1}</p>
                    <p className="mt-4 text-[15px] leading-7 text-gray-600">{blurb2}</p>

                    <motion.button
                        onClick={handleCta}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-600/20"
                        type="button"
                    >
                        {ctaText}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                            →
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Modal */}
            <ApplyModal open={open} onClose={() => setOpen(false)} />
        </section>
    );
}

MainSection.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
    blurb1: PropTypes.string,
    blurb2: PropTypes.string,
    ctaText: PropTypes.string,
    imgTop: PropTypes.string,
    imgBottom: PropTypes.string,
    onCta: PropTypes.func,
};
