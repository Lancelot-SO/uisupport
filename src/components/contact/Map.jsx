/* eslint-disable no-unused-vars */
import React from 'react'

const Map = () => {
    return (
        <div>
            <section className="relative overflow-hidden py-12 md:py-16">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(140%_80%_at_50%_0%,#22c55e_0%,#107a4f_45%,#083b37_100%)]" />
                <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
                    <div className="overflow-hidden rounded-[24px] bg-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-1 ring-black/10 backdrop-blur">
                        <iframe
                            title="Baltimore, MD, USA"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98820.85419821244!2d-76.70288565957031!3d39.284810232736106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x44896a84223e758!2sBaltimore%2C%20MD%2C%20USA!5e0!3m2!1sen!2sgh!4v1760095139878!5m2!1sen!2sgh"
                            className="h-[460px] w-full grayscale-[65%] contrast-125 opacity-95"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Map