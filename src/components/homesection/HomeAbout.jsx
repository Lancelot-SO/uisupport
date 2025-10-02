/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Default slides (replace with your local assets any time)
const DEFAULT_SLIDES = [
    {
        src: "https://images.unsplash.com/photo-1580281657527-47f249e8f5f2?q=80&w=1200&auto=format&fit=crop",
        alt: "Nurse reading on a tablet",
    },
    {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        alt: "Healthcare discussion",
    },
    {
        src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
        alt: "Doctor at desk",
    },
    {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
        alt: "Hospital hallway",
    },
];

const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=32",
    "https://i.pravatar.cc/80?img=47",
    "https://i.pravatar.cc/80?img=5",
    "https://i.pravatar.cc/80?img=9",
];

export default function HomeAbout({ slides = DEFAULT_SLIDES }) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        cssEase: "ease",
        appendDots: (dots) => (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <ul className="custom-dots flex items-center gap-2 m-0 p-0">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <button
                type="button"
                className="block h-1.5 w-1.5 rounded-full"
                aria-label="slide-dot"
            />
        ),
        dotsClass: "slick-dots",
    };

    return (
        <section className="w-full bg-white">
            {/* dot color tweaks */}
            <style>{`
        .custom-dots li { width: auto; height: auto; margin: 0; padding: 0; }
        .custom-dots li button { background: rgba(255,255,255,0.6); border: none; padding: 0; }
        .custom-dots li.slick-active button { background: rgba(255,255,255,0.95); }
      `}</style>

            <div className="mx-auto max-w-7xl px-8 py-20 grid gap-14 grid-cols-1 lg:grid-cols-2 items-start">
                {/* Left: Copy + CTAs */}
                <div className="flex flex-col gap-5">
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-emerald-800 uppercase">
                        About Us
                    </span>

                    <h2 className="lg:text-[40px] text-[20px] leading-tight font-extrabold text-emerald-900">
                        Dedicated to Better Care for Facilities,
                        <br /> Families, and Communities
                    </h2>

                    <p className="text-base text-slate-600 leading-7 max-w-xl">
                        "At Ultimate Support Services, we provide staffing solutions to healthcare
                        facilities and offer Developmental Disabilities Administration (DDA)
                        services that empower individuals to live with dignity and
                        independence. Backed by compassionate staff and a commitment to
                        excellence, we make care more accessible and supportive for
                        everyone."
                    </p>

                    {/* Primary CTA */}
                    <div className="pt-2">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                            style={{
                                background:
                                    "linear-gradient(90deg, #E3B23C 0%, #C98F22 50%, #B87A17 100%)",
                            }}
                        >
                            More About Us
                        </button>
                    </div>

                    {/* Social proof card */}
                    <div
                        className="mt-2 rounded-2xl border-[3px] p-4 md:w-[340px] w-full"
                        style={{
                            borderColor: "#D3A641",
                            background:
                                "linear-gradient(135deg, #0F5132 0%, #0E7A49 55%, #2CB67D 100%)",
                        }}
                    >
                        <div className="flex items-start justify-between">
                            <p className="text-white font-semibold text-base">
                                2000+ Applied with Us
                            </p>

                            {/* Plus button (top-right) */}
                            <button
                                type="button"
                                aria-label="Add"
                                className="shrink-0 grid place-items-center h-10 w-10 rounded-full text-white font-bold"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(255,186,73,1) 0%, rgba(224,149,23,1) 100%)",
                                    boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
                                }}
                            >
                                +
                            </button>
                        </div>

                        {/* Avatars row under the heading */}
                        <div className="mt-3 flex -space-x-3">
                            {avatars.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="Applicant avatar"
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Image card slider with gold border + overlay text + dots */}
                <div className="relative">
                    <div
                        className="relative overflow-hidden rounded-3xl border-[3px]"
                        style={{ borderColor: "#D3A641" }}
                    >
                        {/* Slider */}
                        <Slider {...settings}>
                            {slides.map((s, idx) => (
                                <div key={idx} className="relative h-[520px] w-full">
                                    <img
                                        src={s.src}
                                        alt={s.alt || `slide-${idx + 1}`}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </Slider>

                        {/* Dark bottom overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Bottom text */}
                        <div className="absolute bottom-16 left-6 right-6 z-10">
                            <p className="text-white text-sm leading-relaxed max-w-[90%]">
                                Whether you're a healthcare facility in need of qualified staff, a
                                family seeking disability support services, or a professional
                                looking to grow your career, we're here to help.
                            </p>
                        </div>
                        {/* Dots are injected by react-slick via appendDots */}
                    </div>
                </div>
            </div>
        </section>
    );
}

HomeAbout.propTypes = {
    // Array of { src, alt? }
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ),
};
