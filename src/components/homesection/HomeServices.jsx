/* eslint-disable no-unused-vars */
// src/components/HomeServices.jsx
import React, { useEffect, useRef, useState } from "react";

// Replace with your real asset paths
import nursesMain from "../../assets/home/nurses.jpg";
import kidsGroup from "../../assets/home/family.png";

/** Tiny hook: toggles `visible` once the element is in view */
function useInView(options = { threshold: 0.15 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                io.unobserve(el); // fire once
            }
        }, options);

        io.observe(el);
        return () => io.disconnect();
    }, [options]);

    return { ref, visible };
}

export default function HomeServices() {
    // animate blocks independently
    const imgBlock = useInView();
    const textBlock = useInView();
    const card1 = useInView();
    const card2 = useInView();

    return (
        <section className="relative w-full bg-[#EFF4F2] overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* LEFT: image collage + decorations */}
                    <div
                        ref={imgBlock.ref}
                        className={[
                            "relative lg:col-span-5 transition-all duration-700",
                            imgBlock.visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6",
                        ].join(" ")}
                    >
                        {/* dotted rounded outline (top) */}
                        <div
                            className="
                absolute -top-6 -left-6 w-[88%] h-[86%] rounded-[36px]
                border-2 border-dashed border-[#F2A900]/70
              "
                            aria-hidden
                        />
                        {/* corner dotted cap (right) */}
                        <div
                            className="
                absolute top-5 -right-3 h-[86%] w-[48px] rounded-[12px]
                border-2 border-dashed border-[#F2A900]/70
              "
                            aria-hidden
                        />

                        {/* main image */}
                        <div className="relative rounded-[36px] border-4 border-[#F2A900]/80 overflow-hidden bg-white">
                            <img
                                src={nursesMain}
                                alt="Qualified nursing staff"
                                className="w-full h-[420px] object-cover scale-100 transition-transform duration-[2000ms] ease-out will-change-transform hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </div>

                        {/* bottom image with pill bg */}
                        <div className="relative mt-8 pl-6">
                            {/* pill block behind */}
                            <div
                                className="
                  absolute -left-2 bottom-[-28px] w-40 h-24 rounded-xl
                  bg-[#CBB892]/60
                "
                                aria-hidden
                            />
                            <div className="relative rounded-[28px] border-4 border-[#F2A900]/80 overflow-hidden bg-white w-[88%]">
                                <img
                                    src={kidsGroup}
                                    alt="Developmental program"
                                    className="w-full h-56 object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: copy + cards */}
                    <div
                        ref={textBlock.ref}
                        className={[
                            "lg:col-span-7 transition-all duration-700 delay-100",
                            textBlock.visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6",
                        ].join(" ")}
                    >
                        {/* Eyebrow */}
                        <p className="text-[12px] tracking-[0.12em] font-semibold text-[#C6902B] uppercase mb-3">
                            Services
                        </p>

                        {/* Title */}
                        <h2 className="text-[#0D3B2E] text-3xl sm:text-4xl font-extrabold leading-tight">
                            Our Services, Tailored to Your Needs
                        </h2>

                        {/* Subcopy */}
                        <p className="mt-4 text-[#25453B]/80 leading-relaxed">
                            We provide two core services designed to support both healthcare
                            facilities and families. For facilities, we offer qualified,
                            reliable staff who are ready to step in whenever you need them.
                        </p>

                        {/* Cards */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <article
                                ref={card1.ref}
                                className={[
                                    // base card
                                    "relative rounded-2xl p-6 sm:p-7 text-white shadow-xl overflow-hidden",
                                    "border border-[#F2A900]/70",
                                    "bg-gradient-to-br from-[#004E3C] via-[#2E923A] to-[#003024]",
                                    // animation
                                    "transition-all duration-700",
                                    card1.visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6",
                                    // hover motion
                                    "hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]",
                                ].join(" ")}
                            >
                                {/* subtle corner glow */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F2A900]/20 blur-2xl" />

                                {/* content */}
                                <div className="relative z-10">
                                    {/* icon ring */}
                                    <div className="mb-5 inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/80">
                                        <span className="text-lg leading-none">🩺</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#FFC24D]">
                                        Staffing Services
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/90">
                                        At Ultimate Integrated Support Services, we understand that
                                        staffing challenges can place a heavy burden on healthcare
                                        facilities of every size. Unexpected absences, seasonal
                                        surges, and growing patient needs—our qualified team is ready
                                        to help.
                                    </p>

                                    <button
                                        type="button"
                                        className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#FFC24D]"
                                    >
                                        Learn More
                                        <span className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </article>

                            {/* Card 2 */}
                            <article
                                ref={card2.ref}
                                className={[
                                    "relative rounded-2xl p-6 sm:p-7 text-white shadow-xl overflow-hidden",
                                    "border border-[#F2A900]/70",
                                    "bg-gradient-to-br from-[#003024] via-[#2E923A] to-[#00402F]",
                                    "transition-all duration-700 delay-150",
                                    card2.visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6",
                                    "hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]",
                                ].join(" ")}
                            >
                                <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#F2A900]/20 blur-2xl" />

                                <div className="relative z-10">
                                    <div className="mb-5 inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/80">
                                        <span className="text-lg leading-none">🤝</span>
                                    </div>

                                    <h3 className="text-xl font-bold">DDA Services</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/90">
                                        We believe every person deserves the opportunity to thrive in
                                        a safe, caring environment. Through our Developmental
                                        Disabilities Administration (DDA) programs, we partner with
                                        families to support daily living and independence.
                                    </p>

                                    <button
                                        type="button"
                                        className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#FFC24D]"
                                    >
                                        Learn More
                                        <span className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
