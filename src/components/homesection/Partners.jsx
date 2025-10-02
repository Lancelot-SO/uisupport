/* eslint-disable no-unused-vars */
// src/components/Partners.jsx
import React, { useEffect, useRef } from "react";

import walmart from "../../assets/home/part1.png";
import linkedin from "../../assets/home/part2.png";
import google from "../../assets/home/part3.png";
import slack from "../../assets/home/part4.png";
import airbnb from "../../assets/home/part5.png";
import natgeo from "../../assets/home/part6.png";

export default function Partners() {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const animateAll = () => {
            const items = root.querySelectorAll("[data-animate]");
            items.forEach((el, i) => {
                el.style.transitionDelay = `${i * 120}ms`; // stagger
                el.classList.add("animate-in");
            });
        };

        // Observe the whole section once
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    animateAll();
                    io.disconnect();
                }
            },
            { threshold: 0.01 } // tiny visibility is enough
        );

        io.observe(root);
        return () => io.disconnect();
    }, []);

    const logos = [walmart, linkedin, google, slack, airbnb, natgeo];
    const alts = ["Walmart", "LinkedIn", "Google", "Slack", "Airbnb", "National Geographic"];

    return (
        <section
            ref={rootRef}
            className="
        w-full overflow-hidden
        bg-gradient-to-r from-[#003024] via-[#2E923A] to-[#003024]
        bg-[length:200%_100%] animate-[bg-pan_18s_ease-in-out_infinite]
      "
        >
            <div className="mx-auto max-w-[1200px] px-5 pt-7 pb-8 text-center">
                <h3
                    data-animate
                    className="mb-6 font-extrabold text-[#F2A900] tracking-[0.01em]
                     text-[clamp(16px,2vw,22px)] leading-snug
                     opacity-0 translate-y-3 will-change-[opacity,transform]"
                >
                    Trusted By 1000+ Families And Healthcare Facilities
                </h3>

                <div
                    className="grid items-center justify-items-center
                     gap-[clamp(10px,3vw,40px)]
                     grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                    aria-label="Partner logos"
                >
                    {logos.map((src, i) => (
                        <img
                            key={alts[i]}
                            src={src}
                            alt={alts[i]}
                            loading="lazy"
                            data-animate
                            className="
                h-7 w-auto object-contain
                opacity-0 translate-y-3 will-change-[opacity,transform]
                transition-transform duration-300 ease-out
                hover:scale-[1.06] hover:brightness-110
              "
                        /* If your logos are dark, add: className+=" invert brightness-0" */
                        />
                    ))}
                </div>
            </div>

            {/* tiny CSS for bg-pan + enter animation */}
            <style>{`
        @keyframes bg-pan {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 0%; }
          100% { background-position: 0% 0%; }
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 600ms ease-out, transform 600ms ease-out;
        }
      `}</style>
        </section>
    );
}
