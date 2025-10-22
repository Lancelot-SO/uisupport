// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Displays a single resource preview card with image, title, and excerpt.
 */
export default function ResourceCard({ id, image, date, title, excerpt }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover border-b-2 border-[#FFD700]"
            />
            <div className="p-6">
                <p className="text-xs uppercase text-[#B68C00] mb-1">
                    {new Date(date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                <h3 className="text-lg font-semibold text-[#0D3B2E] mb-3 leading-snug">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
                <Link
                    to={`/resources/${id}`}
                    className="text-[#B68C00] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                    Read More →
                </Link>
            </div>
        </motion.div>
    );
}

ResourceCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
};
