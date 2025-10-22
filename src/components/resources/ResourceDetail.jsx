// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ResourceHero from "./ResourceHero";
import { resourcesData } from "../../data/resourcesData";

export default function ResourceDetail() {
    const { id } = useParams();

    // Find the resource that matches the clicked ID
    const resource = resourcesData.find(
        (item) => item.id === parseInt(id, 10)
    );

    if (!resource) {
        return (
            <div className="py-32 text-center text-gray-600 text-lg">
                Resource not found.
            </div>
        );
    }

    return (
        <>
            <ResourceHero />
            <section className="bg-[#F6F8F7] py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
                    {/* Sidebar */}
                    <aside className="md:w-1/4 bg-white rounded-xl shadow p-6 text-sm text-[#0D3B2E]">
                        <p className="mb-2">
                            <strong>DATE</strong>
                            <br />
                            {new Date(resource.date).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                        <p className="mb-2">
                            <strong>READING MINS</strong>
                            <br /> {resource.readMins} Mins
                        </p>
                        <p className="mb-2">
                            <strong>TYPE OF BLOG</strong>
                            <br /> {resource.type}
                        </p>
                        <p>
                            <strong>FILTER</strong>
                            <br /> {resource.filter}
                        </p>
                    </aside>

                    {/* Main Content */}
                    <article className="md:w-3/4 bg-white rounded-xl shadow p-8">
                        <h1 className="text-2xl font-semibold text-[#0D3B2E] mb-4">
                            {resource.title}
                        </h1>

                        <img
                            src={resource.image}
                            alt={resource.title}
                            className="rounded-2xl border-2 border-[#FFD700] my-6"
                        />

                        {resource.content.map((section, i) => (
                            <div key={i} className="mb-6">
                                <h2 className="text-lg font-semibold text-[#0D3B2E] mb-2">
                                    {section.heading}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">{section.text}</p>
                            </div>
                        ))}

                        <Link
                            to="/resources"
                            className="inline-block mt-4 text-[#B68C00] hover:underline"
                        >
                            ← Back to Resources
                        </Link>
                    </article>
                </div>
            </section>
        </>
    );
}

ResourceDetail.propTypes = {
    resource: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        readMins: PropTypes.string,
        type: PropTypes.string,
        filter: PropTypes.string,
        content: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                text: PropTypes.string,
            })
        ),
        image: PropTypes.string,
    }),
};
