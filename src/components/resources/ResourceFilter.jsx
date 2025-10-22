// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

/**
 * Provides filtering tabs and sorting dropdown for resources.
 */
export default function ResourceFilter({ category, setCategory, sort, setSort }) {
    const categories = [
        "All",
        "Healthcare Facilities",
        "Family & Individuals",
        "For Job Seekers",
    ];
    const sorts = ["Most Recent", "Most Popular"];

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex gap-6 text-sm font-medium text-[#0D3B2E]">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`pb-2 border-b-2 ${category === cat
                            ? "border-[#FFD700] text-[#0D3B2E]"
                            : "border-transparent text-gray-500 hover:text-[#0D3B2E]"
                            } transition`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Dropdown */}
            <div className="relative">
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-gray-200 rounded-md px-3 py-2 text-sm text-[#0D3B2E] focus:ring-[#FFD700]"
                >
                    {sorts.map((s) => (
                        <option key={s}>{s}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

ResourceFilter.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
    setSort: PropTypes.func.isRequired,
};
