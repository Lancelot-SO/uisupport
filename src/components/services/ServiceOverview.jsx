/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import nurse1 from "../../assets/services/nurse1.jpg";

export default function ServiceOverview() {
    return (
        <section className="bg-[#F6F8F7] py-16 px-4 md:px-6">
            <div className="m-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Section - Images */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Background Frame */}
                    <div className="absolute top-10 left-10 w-[85%] h-[90%] bg-gradient-to-br from-green-500 to-green-800 rounded-2xl" />

                    {/* Foreground Image */}
                    <img
                        src={nurse1}
                        alt="Smiling caregivers"
                        className="relative w-[85%] h-auto object-cover rounded-2xl border-4 border-[#F6F8F7] shadow-lg"
                    />
                </motion.div>

                {/* Right Section - Text + Image Side by Side */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-start lg:items-center gap-8 relative"
                >
                    {/* Text Content */}
                    <div className="flex-1">
                        <p className="text-sm text-[#B68C00] uppercase font-medium mb-2">
                            Overview
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D3B2E] leading-snug mb-6">
                            Empowering Lives Through <br />
                            Compassionate Disability Support
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At <span className="font-semibold">Ultimate Integrated Support Services</span>,
                            we believe every person deserves the opportunity to thrive in a
                            safe, caring environment. Through our Developmental Disabilities
                            Administration (DDA) programs, we provide a range of services
                            tailored to meet the unique needs of each individual.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            From supportive living arrangements to skill-building activities
                            and personal assistance, our goal is to empower individuals while
                            offering peace of mind to families.
                        </p>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
