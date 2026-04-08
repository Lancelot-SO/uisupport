import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LegalModal({ isOpen, onClose, title, content }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 sm:px-8">
              <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 h-full custom-scrollbar">
              <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                {content}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-6 py-5 sm:px-8 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-full bg-[#F2A900] px-8 py-2.5 text-sm font-bold text-[#0D3B2E] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-600/20"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
