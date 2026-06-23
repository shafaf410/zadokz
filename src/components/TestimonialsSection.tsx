"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Filtered 5-star Google reviews
const testimonials = [
  {
    text: "I've stayed at Zadokz farm stay more than once. Everytime the experience has been wonderful. It's a cosy little resort where you feel so much at home. The staff and the manager are very warm and accommodating. There was privacy, comfort and beauty all in one.",
    name: "Shahnaz M C Sherief",
    role: "Google Review",
  },
  {
    text: "Had the most incredible experience at Zadokz Farmstay with my family and cousins! The place is absolutely beautiful, and the views are unmatched, especially with the amazing weather we had.",
    name: "Namratha Prasanth",
    role: "Google Review",
  },
  {
    text: "Perfect getaway! We stayed at Zadokz Farm House with our entire family of 13 members, and it was an absolutely wonderful experience. Everyone in our group loved it here.",
    name: "Sushma Prasanth",
    role: "Google Review",
  },
  {
    text: "We recently spent a weekend at Zadokz Farmstay in Padinjarathara, Wayanad and it turned out to be one of the most relaxing getaways we have had in a long time.",
    name: "Reya Jayaraj M",
    role: "Google Review",
  },
  {
    text: "From the moment we arrived, there was a sense of peace that made us feel like we had left all our worries behind. I usually don't write reviews, but our stay at Zadokz Farmstay deserves one.",
    name: "Ravi Menon",
    role: "Google Review",
  },
  {
    text: "Zadokz has always given a great feeling when we have been there. The rooms are clean and well equipped. The food is served neat and tasty. Its a cozy place with a tidy pool to add to its beauty. Mist in the mornings is breathtaking.",
    name: "Aparna Byju",
    role: "Google Review",
  },
  {
    text: "Our time at Zadokz Farmstay was really something special. When we got there, we felt an immediate sense of calm.",
    name: "DEEPCHAND KP",
    role: "Google Review",
  },
  {
    text: "Some places impress you with their facilities, but Zadokz Farmstay won our hearts with the feeling it gave us. Sitting with a cup of tea overlooking the hills, watching the clouds roll by, and enjoying the quietness of nature was exactly what we needed.",
    name: "Rukmini Menon",
    role: "Google Review",
  },
  {
    text: "One of the best stays in Wayanad, especially if you are going with a large group. Visited Zadokz with my extended family and all of us had a wonderful time.",
    name: "Anirudh Madhusudhanan",
    role: "Google Review",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-8 rounded-2xl border border-forest/10 bg-cream/80 backdrop-blur-sm shadow-sm max-w-sm w-full" key={i}>
                  <div className="flex gap-1 mb-4 text-wood">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-charcoal/80 font-light leading-relaxed mb-6">{text}</div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-forest text-cream flex items-center justify-center font-serif text-lg">
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium text-charcoal tracking-tight">{name}</div>
                      <div className="text-xs text-forest/70 uppercase tracking-widest mt-1">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="bg-transparent pt-24 md:pt-32 pb-16 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 text-center"
        >
          <div className="text-forest text-sm font-medium tracking-[0.2em] uppercase mb-4">Guest Stories</div>
          <h2 className="text-3xl md:text-5xl font-light text-charcoal tracking-wide">
            Words from our guests
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>
      </div>
    </section>
  );
}
