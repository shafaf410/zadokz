"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, AlertCircle } from "lucide-react";

export default function FeedbackSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#faf9f6] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Icon Circle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-24 h-24 rounded-full bg-[#f3ede4] flex items-center justify-center mb-8"
      >
        <Mail size={40} className="text-[#b49157]" strokeWidth={1.5} />
      </motion.div>

      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl text-[#2a2a2a] font-light mb-6 tracking-wide"
      >
        Get In Touch
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="text-[#4a5568] text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
      >
        Click below to send us an email directly. We look forward to hearing your thoughts and will respond as quickly as possible.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-6 items-center"
      >
        <a 
          href="mailto:contact@zadokz.com?subject=Feedback" 
          className="flex items-center justify-center gap-6 w-[220px] py-5 rounded-[2.5rem] bg-[#1e1e1e] text-white hover:bg-black transition-colors"
        >
          <div className="text-left leading-tight font-medium text-lg">
            Send<br />Feedback
          </div>
          <MessageSquare size={20} strokeWidth={1.5} />
        </a>

        <a 
          href="mailto:contact@zadokz.com?subject=Complaint" 
          className="flex items-center justify-center gap-6 w-[220px] py-5 rounded-[2.5rem] bg-white text-[#1e1e1e] border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <div className="text-left leading-tight font-medium text-lg">
            File a<br />Complaint
          </div>
          <AlertCircle size={20} strokeWidth={1.5} />
        </a>
      </motion.div>
    </section>
  );
}
