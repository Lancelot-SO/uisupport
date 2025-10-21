/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Network, X } from "lucide-react";
import nurse3 from "../../assets/services/nurse3.jpg"; // replace with your actual image

export default function ApplyServices() {
    const [open, setOpen] = useState(false);

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } },
    };

    const item = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const features = [
        {
            title: "24/7 Staffing Support",
            text: "Our team is more than qualified—they are deeply committed to the well-being and growth of each individual we support.",
        },
        {
            title: "Pre-Screened & Credentialed Professionals",
            text: "Families can feel confident knowing our group homes and services meet all state licensing requirements and DDA regulations.",
        },
        {
            title: "Flexible Solutions",
            text: "We believe every person deserves the chance to live with dignity and purpose. Our programs are designed to build confidence, encourage independence, and create opportunities for meaningful participation in community life.",
        },
    ];

    // modal form state
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        relationship: "",
        supportType: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setOpen(false);
    };

    return (
        <section className="bg-[#F6F8F7] py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side - Image and Mission BELOW */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                    viewport={{ once: true }}
                >
                    {/* Image */}
                    <motion.img
                        src={nurse3}
                        alt="Healthcare professional assisting"
                        className="rounded-2xl object-cover w-full h-[420px] border-[3px] border-[#F6F8F7] shadow-lg"
                        variants={item}
                    />

                    {/* Mission Card */}
                    <motion.div
                        className="bg-[#B68C00] text-white p-6 rounded-xl w-full shadow-lg"
                        variants={item}
                    >
                        <h4 className="uppercase text-xs font-semibold tracking-wider mb-2">
                            Mission
                        </h4>
                        <p className="text-sm leading-relaxed mb-3">
                            "Our company was founded with a simple belief: that everyone
                            deserves access to quality care and meaningful support. We
                            recognized two growing needs—healthcare facilities in need of
                            dependable staff, and families seeking safe, supportive
                            environments for loved ones with"
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <Network className="w-4 h-4 text-white" />
                            <span className="text-xs font-medium">
                                Building Great Network
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side - Text and Features */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-sm uppercase text-[#B68C00] tracking-wider mb-2"
                        variants={item}
                    >
                        Choose Us
                    </motion.p>

                    <motion.h2
                        className="text-3xl sm:text-4xl font-semibold text-[#0D3B2E] leading-snug mb-6"
                        variants={item}
                    >
                        The Difference Families Experience <br />
                        <span className="text-[#0D3B2E]">With Our Care</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-700 leading-relaxed mb-8"
                        variants={item}
                    >
                        Choosing the right support for a loved one is one of the most
                        important decisions a family can make. That's why we go beyond
                        providing services—we build trust, safety, and a true sense of
                        belonging. From our compassionate staff and licensed programs to our
                        focus on dignity, independence, and open communication, families
                        choose us because they know their loved ones will be cared for with
                        respect and heart.
                    </motion.p>

                    {/* Features */}
                    <div className="space-y-6 mb-10">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 bg-white"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                                }}
                            >
                                <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-[#0D3B2E] text-base mb-1">
                                        {f.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {f.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Button */}
                    <motion.button
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setOpen(true)}
                        className="bg-[#B68C00] text-white px-6 py-3 rounded-full text-sm font-medium shadow-md"
                    >
                        Apply For Services
                    </motion.button>
                </motion.div>
            </div>

            {/* Slide-In Modal */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Modal Panel */}
                        <motion.div
                            className="fixed top-0 left-0 h-full w-full sm:w-1/2 bg-white z-50 shadow-2xl rounded-r-xl overflow-y-auto"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.5 }}
                        >
                            <div className="p-8">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        DDA Services Application Form
                                    </h2>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="text-gray-500 hover:text-red-500 transition"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <hr className="mb-6" />

                                {/* Intro */}
                                <h3 className="text-center text-lg font-semibold text-gray-900 mb-2">
                                    Start The Application Process Today
                                </h3>
                                <p className="text-center text-gray-600 text-sm mb-8">
                                    Tell us a little about yourself or your loved one, and
                                    we’ll guide you through the next steps.
                                </p>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            placeholder="Enter name here e.g Davida Dzato"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            required
                                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                        />
                                    </div>

                                    {/* Phone & Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Enter your number here"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email here"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Relationship & Support */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Relationship
                                            </label>
                                            <select
                                                name="relationship"
                                                value={formData.relationship}
                                                onChange={handleChange}
                                                required
                                                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                            >
                                                <option value="">Select Relationship</option>
                                                <option value="Self">Self</option>
                                                <option value="Parent">Parent</option>
                                                <option value="Guardian">Guardian</option>
                                                <option value="Sibling">Sibling</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Type of Support Interested In
                                            </label>
                                            <select
                                                name="supportType"
                                                value={formData.supportType}
                                                onChange={handleChange}
                                                required
                                                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0D3B2E] outline-none"
                                            >
                                                <option value="">Select Support Interested</option>
                                                <option value="Group Homes">Group Homes</option>
                                                <option value="Day Programs">Day Programs</option>
                                                <option value="Personal Support">
                                                    Personal Support
                                                </option>
                                                <option value="Transportation">Transportation</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Terms */}
                                    <p className="text-xs text-gray-600 mt-2">
                                        By proceeding, you agree to our{" "}
                                        <a href="#" className="underline text-[#0D3B2E]">
                                            Terms of Use
                                        </a>{" "}
                                        and confirm you have read our{" "}
                                        <a href="#" className="underline text-[#0D3B2E]">
                                            Privacy
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="underline text-[#0D3B2E]">
                                            Cookie Statement
                                        </a>
                                        .
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex justify-between mt-6">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="px-6 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 rounded-full bg-[#B68C00] text-white font-medium hover:bg-[#A17B00] transition"
                                        >
                                            Submit Form
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
