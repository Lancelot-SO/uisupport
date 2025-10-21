/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import nurse1 from "../../assets/services/nurse2.jpg";
import nurse2 from "../../assets/services/nurse1.jpg";

export default function AllServices() {
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const services = [
        {
            title: "Group Homes",
            text: "Safe, welcoming residences where individuals can live in a supportive community. Each home is staffed by trained professionals who provide 24/7 assistance, promote independence, and foster meaningful relationships.",
            highlight: true,
        },
        {
            title: "Day Programs & Community Integration",
            text: "Structured activities, life-skills training, and community participation opportunities that encourage growth, confidence, and inclusion in everyday life.",
        },
        {
            title: "Personal Support Services",
            text: "One-on-one or in-home support tailored to daily needs such as meal preparation, personal care, mobility, and household management—designed to promote dignity and independence.",
        },
        {
            title: "Transportation Services (if applicable)",
            text: "Reliable transportation to medical appointments, day programs, and community events to help individuals stay connected and engaged.",
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                {/* Left Side - Images */}
                <motion.div
                    className="flex flex-col gap-8 w-full lg:w-[45%]"
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src={nurse1}
                        alt="nurses"
                        className="rounded-2xl w-full object-cover border-[3px] border-[#F6B800]"
                        variants={item}
                    />
                    <motion.img
                        src={nurse2}
                        alt="nurse group"
                        className="rounded-2xl w-full object-cover border-[3px] border-[#F6B800]"
                        variants={item}
                    />
                </motion.div>

                {/* Right Side - Text & Grid */}
                <motion.div
                    className="w-full lg:w-[55%]"
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-sm uppercase tracking-wider text-[#D4AF37] mb-2"
                        variants={item}
                    >
                        Our Services
                    </motion.p>

                    <motion.h2
                        className="text-3xl md:text-4xl font-semibold leading-snug text-white mb-10"
                        variants={item}
                    >
                        <span className="text-[#F6B800] font-semibold">Support Options</span>{" "}
                        Designed Around Your Needs
                    </motion.h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                }}
                                className={`rounded-2xl border p-6 backdrop-blur-md ${service.highlight
                                    ? "border-[#F6B800] bg-[#155E3F]/30"
                                    : "border-white/20 bg-white/5"
                                    }`}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="p-2 rounded-full bg-white/10 text-[#F6B800]">
                                        <HeartPulse className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F6B800]">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-white/90">
                                    {service.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
