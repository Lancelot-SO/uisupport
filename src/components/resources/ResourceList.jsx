// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";
import ResourceCard from "./ResourceCard";
import ResourceFilter from "./ResourceFilter";
import { resourcesData } from "../../data/resourcesData";

export default function ResourceList() {
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("Most Recent");

    const filtered = resourcesData.filter(
        (r) => category === "All" || r.category === category
    );

    return (
        <section className="bg-[#F6F8F7] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <ResourceFilter
                    category={category}
                    setCategory={setCategory}
                    sort={sort}
                    setSort={setSort}
                />

                <h2 className="text-2xl md:text-3xl font-semibold text-[#0D3B2E] mt-8 mb-10">
                    {category}
                </h2>

                <motion.div
                    key={category}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
                    }}
                >
                    {filtered.map((res) => (
                        <ResourceCard key={res.id} {...res} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
