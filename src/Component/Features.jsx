"use client";

import { motion } from "framer-motion";
import {
  Award,
  Baby,
  Users,
  Mic2,
  Crown,
  Sparkles,
} from "lucide-react";
import speaker1 from '../assets/speaker1.jpg'

const achievements = [
  {
    icon: Baby,
    title: "40,000+",
    subtitle: "Successful Pregnancies",
    desc: "Helping thousands of families experience the joy of parenthood.",
    image: speaker1,
  },
  {
    icon: Award,
    title: "Gold Medalist",
    subtitle: "IVF Specialist",
    desc: "Recognized for academic excellence in reproductive medicine.",
    image: 'slkgh',
  },
  {
    icon: Users,
    title: "50,000+",
    subtitle: "Women Cared For",
    desc: "Trusted by generations of women for compassionate care.",
    image: 'slkgh',
  },
  {
    icon: Mic2,
    title: "National Speaker",
    subtitle: "CME Faculty",
    desc: "Invited speaker at conferences and medical education programs.",
    image: 'slkgh',
  },
  {
    icon: Crown,
    title: "Former President",
    subtitle: "ISOPARB Prayagraj",
    desc: "Recognized leadership in reproductive medicine.",
    image: 'slkgh',
  },
  {
    icon: Sparkles,
    title: "Professional Leadership",
    subtitle: "FOGSI & Medical Societies",
    desc: "Actively contributing to women's healthcare initiatives.",
    image: 'slkgh',
  },
];

export default function LegacySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50 to-pink-50 py-16 sm:py-20 lg:py-28">

      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-pink-300/30 blur-[120px]" />
      <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-rose-200/40 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/30 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#9d174d 1px,transparent 1px),linear-gradient(90deg,#9d174d 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-100 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-pink-800 sm:px-6 sm:text-sm">
            Legacy of Excellence
          </span>

          <h2 className="mt-6 text-3xl tracking-tight font-cambria  text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl">
            Excellence Built
            <span className="block text-pink-800">
              Over Decades
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A journey defined by dedication, innovation, leadership and the
            trust of thousands of families.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:mt-24 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">

          {/* Left Cards */}
          <div className="order-2 space-y-5 lg:order-1">
            {achievements.slice(0, 3).map((item, index) => (
              <FeatureCard
                key={index}
                {...item}
                delay={index * 0.15}
              />
            ))}
          </div>

          {/* Center Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 flex justify-center py-6 lg:order-2 lg:py-0"
          >
            <div className="relative">

              {/* Rotating Ring */}
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 animate-[spin_22s_linear_infinite] rounded-full border border-dashed border-pink-300/40 sm:h-[270px] sm:w-[270px] md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px]" />

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-700/20 blur-[80px] sm:h-72 sm:w-72 lg:h-96 lg:w-96" />

              {/* Circle */}
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-pink-700 via-pink-800 to-rose-900 shadow-[0_30px_80px_rgba(157,23,77,.35)] sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">

                <div className="text-center text-white">

                  <h3 className="text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
                    38+
                  </h3>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[4px] text-pink-100 sm:text-sm lg:mt-4 lg:text-lg">
                    Years
                  </p>

                  <div className="mx-auto my-3 h-px w-12 bg-pink-300/50 sm:w-16 lg:my-5 lg:w-20" />

                  <p className="text-[10px] uppercase tracking-[3px] text-pink-100 sm:text-xs lg:text-sm">
                    Of Excellence
                  </p>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="order-3 space-y-5">
            {achievements.slice(3).map((item, index) => (
              <FeatureCard
                key={index}
                {...item}
                delay={index * 0.15}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  desc,
  delay,
  image
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-pink-100/70 bg-white/75 p-5 backdrop-blur-xl transition-all duration-500 hover:border-pink-300 hover:shadow-[0_25px_70px_rgba(157,23,77,.18)] sm:p-6 lg:p-7"
    >
      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-pink-700 via-pink-600 to-rose-500 transition-all duration-500 group-hover:w-full" />

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
      </div>

      <div className="relative flex items-start gap-4">

        {/* Icon */}
        {/* <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-700 to-pink-900 text-white shadow-lg shadow-pink-700/20 sm:h-16 sm:w-16"
        >
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.div> */}

        {/* Content */}
        <div className="flex-1">
          <div>
            <img src={speaker1} className="rounded-2xl h-40" alt="" />
          </div>
          <h3 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 font-semibold text-pink-800">
            {subtitle}
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-[15px]">
            {desc}
          </p>

          {/* Bottom Link */}
          {/* <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-pink-800"> */}

            {/* <span className="transition duration-300 group-hover:tracking-wide">
              Learn More
            </span> */}

            {/* <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg> */}

          {/* </div> */}

        </div>

      </div>

      {/* Decorative Corner */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full border border-pink-100 opacity-40 transition duration-500 group-hover:scale-125 group-hover:opacity-100" />

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-pink-50/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}