/* eslint-disable no-unused-vars */
import React from "react";
import herobg from "../../assets/home/herobg.png";

const ContactHero = () => {
    return (
        <section
            className="
        relative w-full
        "
            aria-label="Hero"
        >
            {/* Background image */}
            <div className="relative">
                <div
                    className="
            relative w-full h-[380px]
            bg-center bg-cover
          "
                    style={{ backgroundImage: `url(${herobg})` }}
                >
                    {/* Teal overlay/gradient to match screenshot */}
                    <div
                        className="
              absolute inset-0
              bg-[#1F4160]/70
              sm:bg-transparent
              from-[#182F3F]/80 via-[#1F4160]/65 to-[#1F4160]/60
              backdrop-blur-[1px]
            "
                    />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="
                flex h-[60vh] md:h-[58vh] lg:h-[68vh]
                items-center
              ">
                            <h1
                                className="
                  text-white font-semibold leading-tight
                  text-3xl sm:text-4xl md:text-5xl lg:text-[44px]
                  max-w-[32ch]
                  drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]
                "
                            >
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
