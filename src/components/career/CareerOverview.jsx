/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import img1 from "../../assets/career/career1.jpg";      // bottom-left
import img2 from "../../assets/career/career2.jpg";  // top-center
import img3 from "../../assets/career/career3.jpg";      // top-right
import img4 from "../../assets/career/career4.jpg";       // bottom-center

export default function CareerOverview() {
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="bg-[#FBF7EF] py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.p
                        className="text-sm text-[#B68C00] uppercase font-medium mb-3"
                        variants={item}
                    >
                        Overview
                    </motion.p>

                    <motion.h2
                        className="text-3xl sm:text-4xl font-semibold text-[#0D3B2E] mb-6"
                        variants={item}
                    >
                        The Difference You’ll Experience When You Join <br /> Our Team
                    </motion.h2>

                    <motion.p
                        className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
                        variants={item}
                    >
                        At <span className="font-semibold">Ultimate Integrated Support Services Inc</span>, exceptional
                        care starts with exceptional people. We’re more than an employer — we’re a
                        compassionate, respectful, and collaborative team. Whether you’re a nurse,
                        caregiver, or support staff member, you’ll find growth opportunities, a
                        culture that values you, and the chance to make a real impact on the lives
                        of others.
                    </motion.p>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                    viewport={{ once: true }}
                >
                    {[img1, img2, img3, img4].map((img, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className={`overflow-hidden rounded-2xl border-4 border-[#F6B800] shadow-lg bg-white ${i === 0 ? "lg:translate-y-8" : ""
                                } ${i === 3 ? "lg:-translate-y-4" : ""}`}
                        >
                            <img
                                src={img}
                                alt={`career-${i}`}
                                className="object-cover w-full h-[260px]"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
