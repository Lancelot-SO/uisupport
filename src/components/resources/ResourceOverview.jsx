/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/about/abt1.jpg";
import img2 from "../../assets/about/abt2.jpg";

export default function ResourceOverview() {
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.25 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="bg-gradient-to-br from-[#0C3B2E] via-[#0E5139] to-[#1E633E] py-20 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:px-10 px-0">
                {/* LEFT SIDE IMAGES */}
                <motion.div
                    className="flex flex-col gap-6 w-full lg:w-1/2 items-center lg:items-start"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.img
                        src={img1}
                        alt="Healthcare professional holding heart-shaped stethoscope"
                        className="rounded-2xl object-cover w-[340px] h-[380px] border-2 border-[#FFD700]"
                        variants={item}
                    />
                    <motion.img
                        src={img2}
                        alt="Healthcare consultation"
                        className="rounded-2xl object-cover w-[250px] h-[180px] border-2 border-[#FFD700] self-end lg:mr-12"
                        variants={item}
                    />
                </motion.div>

                {/* RIGHT SIDE CONTENT */}
                <motion.div
                    className="text-white w-full lg:w-1/2"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="uppercase text-[#FFD700] text-xs font-medium tracking-widest mb-2"
                        variants={item}
                    >
                        Overview
                    </motion.p>
                    <motion.h2
                        className="text-3xl sm:text-4xl font-semibold leading-snug text-white mb-4"
                        variants={item}
                    >
                        Your Go-To Resource Center for Care,
                        <br /> Support, and Careers
                    </motion.h2>
                    <motion.p
                        className="text-gray-200 text-base leading-relaxed"
                        variants={item}
                    >
                        We know that finding the right information can make all the difference —
                        whether you're a healthcare facility navigating staffing needs, a family
                        exploring disability support options, or a professional building your career.
                        That's why we've created this resource center: a place where you can access
                        helpful guides, practical tools, and clear answers to your most common
                        questions. Explore our articles, downloads, and FAQs designed to support you
                        every step of the way.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
