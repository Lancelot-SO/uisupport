/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [category, setCategory] = useState("All FAQ");

    const categories = ["All FAQ", "Healthcare Facilities", "Families & Individuals", "Job Seekers"];

    const faqs = [
        {
            question: "How quickly can you provide staff?",
            answer:
                "We understand the importance of timely staffing. Depending on your request, we can often place qualified professionals within 24–48 hours.",
            category: "Healthcare Facilities",
        },
        {
            question: "Do you screen and verify staff credentials?",
            answer:
                "Absolutely. Every candidate undergoes a comprehensive screening process that includes background checks, credential verification, and reference reviews to ensure top-quality professionals.",
            category: "Healthcare Facilities",
        },
        {
            question: "How do I know if my loved one qualifies for DDA services?",
            answer:
                "Eligibility for DDA services is determined by factors such as age, residency, and the nature of the disability. Our team can help guide you through the assessment process and required documentation.",
            category: "Families & Individuals",
        },
        {
            question: "What types of support do your group homes provide?",
            answer:
                "Our group homes offer 24-hour residential support, skill development programs, healthcare coordination, recreational activities, and individualized care plans to promote independence and well-being.",
            category: "Families & Individuals",
        },
        {
            question: "What documents do I need to apply?",
            answer:
                "Applicants are typically required to submit valid identification, professional certifications (if applicable), references, and proof of eligibility or work authorization.",
            category: "Job Seekers",
        },
    ];

    // Filter FAQ by category
    const filteredFaqs =
        category === "All FAQ" ? faqs : faqs.filter((faq) => faq.category === category);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-br from-[#0C3B2E] via-[#0E4E38] to-[#1A6B43] py-20 px-6 text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <p className="uppercase text-[#FCBF4A] text-sm font-semibold tracking-wide">
                    FAQs
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    Frequently <span className="text-[#FCBF4A]">Asked</span> Questions
                </h2>
                <p className="text-gray-200 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    We've gathered the most common questions from facilities, families, and job seekers to make it easier for you to find the answers you need in one place.
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition border ${category === cat
                            ? "bg-[#FCBF4A] text-[#0D3B2E] border-[#FCBF4A]"
                            : "border-white/40 text-white hover:bg-white/10"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
                {filteredFaqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        layout
                        className={`bg-white/10 rounded-2xl p-6 cursor-pointer transition border ${activeIndex === index
                            ? "border-[#FCBF4A] shadow-lg bg-white/15"
                            : "border-transparent hover:bg-white/10"
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-full border border-white/20">
                                    <HelpCircle className="text-[#FCBF4A]" size={18} />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold">
                                    {faq.question}
                                </h3>
                            </div>
                            {activeIndex === index ? (
                                <ChevronUp className="text-[#FCBF4A]" />
                            ) : (
                                <ChevronDown className="text-[#FCBF4A]" />
                            )}
                        </div>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-gray-200 text-sm md:text-base mt-3 leading-relaxed pl-10"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
