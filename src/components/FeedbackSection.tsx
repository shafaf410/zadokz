"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function FeedbackSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-cream overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Icon Circle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mb-8"
      >
        <Mail size={32} className="text-forest" strokeWidth={1.5} />
      </motion.div>

      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl text-charcoal font-light mb-6 tracking-wide"
      >
        Get In Touch
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="text-charcoal/70 text-lg max-w-2xl leading-relaxed mb-10"
      >
        Click below to send us an email directly. We look forward to hearing your thoughts and will respond as quickly as possible.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <a 
          href="mailto:hello@zadokzfarmstay.com?subject=Feedback" 
          className="group flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-forest text-cream hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-1"
        >
          <span className="font-medium text-sm tracking-wide uppercase">Send Feedback</span>
          <MessageSquare size={16} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
        </a>

      </motion.div>
    </section>
  );
}
