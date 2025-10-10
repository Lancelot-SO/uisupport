/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ease = [0.22, 1, 0.36, 1];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function IconWrap({ children }) {
    return (
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#D7A65A] text-white shadow-md">
            {children}
        </div>
    );
}
IconWrap.propTypes = { children: PropTypes.node };

function PhoneIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C11.4 21 3 12.6 3 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="currentColor" />
        </svg>
    );
}
function MailIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
        </svg>
    );
}
function PinIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" />
        </svg>
    );
}

function Field({ label, required, placeholder, type = "text", name, area = false, value, onChange }) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-gray-800">
                {label}
                {required && <span className="text-rose-500">*</span>}
            </span>
            {area ? (
                <textarea
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    rows={5}
                    value={value}
                    onChange={onChange}
                    className="w-full rounded-lg border border-amber-100 bg-white/90 px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full rounded-lg border border-amber-100 bg-white/90 px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
                />
            )}
        </label>
    );
}
Field.propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    area: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
};

export default function MainContact() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulated request
        await new Promise((r) => setTimeout(r, 800));
        setSubmitting(false);
        setSent(true);
        setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <section className="relative overflow-hidden bg-[#F7F8FA] py-16 md:py-24">
            {/* soft background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-[1.05fr,1.2fr]"
            >
                {/* Left: Copy + Contact details */}
                <motion.div variants={fadeUp} className="space-y-8">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Contact Us</p>
                        <h2 className="text-[28px] font-semibold leading-tight text-[#1C2237] md:text-[36px]">
                            We’d Love To Hear From You
                        </h2>
                        <p className="max-w-prose text-[15px] leading-7 text-gray-600">
                            No matter who you are, we’re here to support you. Healthcare facilities can rely on us for qualified and
                            reliable staff, families can turn to us for compassionate disability support services, and job seekers can
                            explore meaningful career opportunities with us.
                        </p>
                        <p className="pt-2 font-semibold text-amber-700">
                            Reach Out Today—We’d Love To Hear From You
                        </p>
                    </div>

                    <div className="space-y-6">
                        <motion.div variants={fadeUp} className="flex items-start gap-4">
                            <IconWrap>
                                <PhoneIcon />
                            </IconWrap>
                            <div>
                                <p className="font-semibold text-[#1C2237]">Phone Number</p>
                                <p className="text-gray-600">+233 24 522 4993</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex items-start gap-4">
                            <IconWrap>
                                <MailIcon />
                            </IconWrap>
                            <div>
                                <p className="font-semibold text-[#1C2237]">Email Address</p>
                                <p className="text-gray-600">davidadzato45@gmail.com</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex items-start gap-4">
                            <IconWrap>
                                <PinIcon />
                            </IconWrap>
                            <div>
                                <p className="font-semibold text-[#1C2237]">Address</p>
                                <p className="text-gray-600">Adringano - First Central Link. P.O Box 224</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right: Form card */}
                <motion.div
                    variants={fadeUp}
                    className="relative rounded-3xl border border-amber-100 bg-amber-50 p-4 shadow-sm md:p-6 lg:p-8"
                >

                    <form onSubmit={onSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Field
                                label="First Name"
                                required
                                name="firstName"
                                placeholder="Ex. Davida Dzato"
                                value={form.firstName}
                                onChange={onChange}
                            />
                            <Field
                                label="Last Name"
                                required
                                name="lastName"
                                placeholder="Ex. Davida Dzato"
                                value={form.lastName}
                                onChange={onChange}
                            />
                            <Field
                                label="Email"
                                required
                                type="email"
                                name="email"
                                placeholder="Ex. Davida Dzato"
                                value={form.email}
                                onChange={onChange}
                            />
                            <Field
                                label="Phone Number"
                                required
                                type="tel"
                                name="phone"
                                placeholder="+233 24 522 4993"
                                value={form.phone}
                                onChange={onChange}
                            />
                        </div>

                        <Field
                            label="Subject"
                            required
                            name="subject"
                            placeholder="Ex. Davida Dzato"
                            value={form.subject}
                            onChange={onChange}
                        />

                        <Field
                            label="Message"
                            required
                            name="message"
                            placeholder="Tell us a bit about your needs..."
                            area
                            value={form.message}
                            onChange={onChange}
                        />

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-600/20 transition active:scale-[.99] disabled:opacity-70"
                            >
                                {submitting ? "Sending..." : sent ? "Message Sent" : "Send Message"}
                                <span
                                    className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden
                                >
                                    →
                                </span>
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}
