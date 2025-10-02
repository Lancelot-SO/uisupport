/* eslint-disable no-unused-vars */
// src/components/HomeResource.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Swap these with your real image paths
import coverA from "../../assets/home/res1.jpg";
import coverB from "../../assets/home/res2.jpg";

/* ------------------------- tiny reveal on scroll ------------------------- */
function useReveal(staggerMs = 0, options = { threshold: 0.15 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setVisible(true), staggerMs);
                io.unobserve(entry.target);
            }
        }, options);

        io.observe(el);
        return () => io.disconnect();
    }, [staggerMs]);

    return { ref, visible };
}

/* --------------------------------- card --------------------------------- */
function ResourceCard({ cover, date, title, excerpt, href = "#", reveal }) {
    return (
        <article
            ref={reveal?.ref}
            className={`grid grid-cols-1 sm:grid-cols-[280px,1fr] gap-6 items-start
        transition-all duration-700 ease-out
        ${reveal?.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
        >
            {/* Image with rounded gold border */}
            <div className="rounded-3xl p-[6px] bg-[#F2A900]">
                <div className="rounded-[22px] overflow-hidden bg-white">
                    <img
                        src={cover}
                        alt={title}
                        className="h-[220px] w-full object-cover sm:h-[260px] scale-100 transition-transform duration-500 hover:scale-[1.03]"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Copy */}
            <div className="pt-1">
                <p className="text-[11px] tracking-[0.12em] font-semibold uppercase text-[#C6902B]">
                    {date}
                </p>

                <h3 className="mt-2 text-[#0D3B2E] text-xl sm:text-[22px] font-extrabold leading-snug">
                    {title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#25453B]/80 line-clamp-3">
                    {excerpt}
                </p>

                <a
                    href={href}
                    className="group mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0D3B2E]"
                >
                    <span className="tracking-wide">READ MORE</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F2A900] text-[#0D3B2E] transition-transform group-hover:translate-x-1">
                        →
                    </span>
                </a>
            </div>
        </article>
    );
}

ResourceCard.propTypes = {
    cover: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    href: PropTypes.string,
    reveal: PropTypes.shape({
        ref: PropTypes.any,
        visible: PropTypes.bool,
    }),
};

/* ------------------------------- section ------------------------------- */
export default function HomeResource() {
    const eyebrow = useReveal(0);
    const heading = useReveal(100);
    const cards = [useReveal(0), useReveal(120)]; // stagger each card

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-16">
                {/* Eyebrow */}
                <p
                    ref={eyebrow.ref}
                    className={`text-[11px] tracking-[0.12em] font-semibold uppercase text-[#C6902B]
            transition-all duration-700 ease-out
            ${eyebrow.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                >
                    Resources
                </p>

                {/* Heading */}
                <h2
                    ref={heading.ref}
                    className={`mt-2 text-[#0D3B2E] text-3xl sm:text-[34px] font-extrabold leading-tight max-w-3xl
            transition-all duration-700 ease-out
            ${heading.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                >
                    Guides, Tools, and Insights for Every Step of the Journey
                </h2>

                {/* Cards row */}
                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <ResourceCard
                        cover={coverA}
                        date="15th September, 2025"
                        title="How to Quickly Fill Staffing Gaps Without Compromising Care"
                        excerpt={`"Our company was founded with a simple belief: that everyone deserves access to quality care and meaningful support. We recognized two growing needs....."`}
                        reveal={cards[0]}
                    />
                    <ResourceCard
                        cover={coverB}
                        date="15th September, 2025"
                        title="Understanding the DDA Intake Process: Step by Step"
                        excerpt={`The intake process for disability support can feel overwhelming at first. We break it down into simple steps — from checking eligibility to developing a personalized support plan ...`}
                        reveal={cards[1]}
                    />
                </div>
            </div>
        </section>
    );
}
