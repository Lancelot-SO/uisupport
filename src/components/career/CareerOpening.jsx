/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Briefcase, X, Upload } from "lucide-react";

// Utility: format “time ago”
function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Today";
    if (diff === 1) return "1 day ago";
    return `${diff} days ago`;
}

export default function CareerOpening() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setSelectedFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        if (file) setSelectedFile(file);
    };

    const jobs = [
        {
            title: "Registered Nurse (RN)",
            postedAt: "2025-10-12",
            type: "Full Time",
            location: "USA-Texas",
            mode: "Hybrid",
            description: `As a Registered Nurse (RN), you will play a vital role in delivering high-quality patient care and supporting the overall healthcare team. Your responsibilities will include assessing patient needs, developing and implementing care plans, administering medications and treatments, and monitoring patient progress. You’ll collaborate closely with physicians, licensed practical nurses (LPNs), and certified nursing assistants (CNAs) to ensure compassionate, effective, and safe care.`,
            requirements: ["Valid RN license", "2+ years clinical experience preferred"],
            benefits: ["Health insurance", "Flexible scheduling"],
        },
        {
            title: "Registered Nurse (RN)",
            postedAt: "2025-10-14",
            type: "Full Time",
            location: "USA-Texas",
            mode: "Hybrid",
            description: `Safe, welcoming residences where individuals can live in a supportive community. Each home is staffed by trained professionals who provide compassionate care and daily support.`,
            requirements: ["Valid RN license", "5+ years clinical experience preferred"],
            benefits: ["Career advancement", "Work-life balance"],
        },
        {
            title: "Registered Nurse (RN)",
            postedAt: "2025-10-18",
            type: "Full Time",
            location: "USA-Texas",
            mode: "Hybrid",
            description: `Safe, welcoming residences where individuals can live in a supportive community. Each home is staffed by trained professionals who value teamwork, empathy, and patient-centered care.`,
            requirements: ["Valid RN license", "4+ years clinical experience preferred"],
            benefits: ["Retirement plan", "Paid vacation"],
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-[#0C3B2E] via-[#0D4C36] to-[#1E633E] py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center text-white mb-14">
                <p className="text-sm text-[#FFD700] uppercase tracking-wider">
                    Current Openings
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                    <span className="text-[#FFD700]">Explore</span> Our Current Job Openings
                </h2>
            </div>

            {/* Job Cards */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        layout
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                        className={`relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 text-white transition-all duration-300 ${activeIndex === index
                            ? "shadow-2xl border-[#FFD700] scale-[1.02]"
                            : "hover:shadow-lg"
                            }`}
                    >
                        <motion.div layout="position">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold text-[#FFD700]">
                                    {job.title}
                                </h3>
                                <span className="text-xs text-gray-300">{timeAgo(job.postedAt)}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs">
                                    <Briefcase size={14} /> {job.type}
                                </span>
                                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs">
                                    <MapPin size={14} /> {job.location}
                                </span>
                                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs">
                                    <Clock size={14} /> {job.mode}
                                </span>
                            </div>
                        </motion.div>

                        <AnimatePresence initial={false}>
                            {activeIndex === index ? (
                                <motion.div
                                    key="expanded"
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-sm text-gray-100 mb-4 leading-relaxed">
                                        {job.description}
                                    </p>

                                    {job.requirements.length > 0 && (
                                        <>
                                            <h4 className="text-[#FFD700] font-semibold text-sm mb-2">
                                                Requirements:
                                            </h4>
                                            <ul className="list-disc list-inside text-sm text-gray-100 mb-4">
                                                {job.requirements.map((req, i) => (
                                                    <li key={i}>{req}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {job.benefits.length > 0 && (
                                        <>
                                            <h4 className="text-[#FFD700] font-semibold text-sm mb-2">
                                                Benefits:
                                            </h4>
                                            <ul className="list-disc list-inside text-sm text-gray-100 mb-6">
                                                {job.benefits.map((ben, i) => (
                                                    <li key={i}>{ben}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setActiveIndex(null)}
                                            className="bg-white/10 border border-white/30 text-white px-5 py-2 rounded-full text-sm hover:bg-white/20 transition"
                                        >
                                            Hide Details
                                        </button>
                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="bg-[#FF9900] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#e68900] transition"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="collapsed"
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-sm text-gray-100 mb-6 leading-relaxed line-clamp-4">
                                        {job.description}
                                    </p>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setActiveIndex(index)}
                                            className="bg-white/10 border border-white/30 text-white px-5 py-2 rounded-full text-sm hover:bg-white/20 transition"
                                        >
                                            More Details
                                        </button>
                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="bg-[#FF9900] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#e68900] transition"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 flex justify-end z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="bg-white w-full max-w-2xl h-screen overflow-y-auto shadow-2xl rounded-l-2xl p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Careers Application Form (Job Seekers)
                            </h2>
                            <hr className="border-gray-200 mb-6" />

                            <h3 className="text-xl font-semibold text-[#0D3B2E] mb-2">
                                Apply for {selectedJob?.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Complete your application and we’ll be in touch soon about next steps.
                            </p>

                            {/* Form */}
                            <form className="space-y-5">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name here e.g Davida Dzato"
                                        className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your number here"
                                            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email here"
                                            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Upload */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Upload Resume <span className="text-red-500">*</span>
                                    </label>
                                    <div
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        className={`border-2 border-dashed rounded-lg p-6 text-center text-sm cursor-pointer transition ${dragActive
                                            ? "border-[#B68C00] bg-[#fff9e6]"
                                            : "border-[#B68C00]/40 bg-white"
                                            }`}
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            ref={fileInputRef}
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                        <Upload className="mx-auto text-[#B68C00]" size={28} />
                                        <p className="text-gray-700 mt-2">
                                            {selectedFile
                                                ? `📄 ${selectedFile.name}`
                                                : "Drag your file(s) here or click to browse"}
                                        </p>
                                        <p className="text-gray-400 text-xs mt-1">
                                            Supported: PDF, DOC, DOCX
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Cover Note <span className="text-gray-400 text-xs">(Optional)</span>
                                    </label>
                                    <textarea
                                        placeholder="Enter your cover note here"
                                        className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <p className="text-xs text-gray-500 leading-relaxed">
                                    By proceeding, you agree to our{" "}
                                    <a href="#" className="text-[#0D3B2E] underline">
                                        Terms of Use
                                    </a>{" "}
                                    and confirm you have read our{" "}
                                    <a href="#" className="text-[#0D3B2E] underline">
                                        Privacy and Cookie Statement
                                    </a>
                                    .
                                </p>

                                <div className="flex justify-between items-center pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="border border-gray-300 px-5 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[#B68C00] text-white px-6 py-2 rounded-full text-sm hover:bg-[#a07a00]"
                                    >
                                        Submit Form
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
