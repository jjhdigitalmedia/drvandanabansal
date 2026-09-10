import React from "react";

// Replace this image with Dr. Vandana Bansal's professional portrait when available.
// import doctorImage from "../assets/doctor-vandana-bansal.jpg";
import PhotoDrVandana from "../assets/PhotoDrVandana.jpeg";

const highlights = [
  {
    number: "01",
    title: "Patient-Centred Care",
    text: "A personalised approach focused on understanding each patient's concerns and treatment needs.",
  },
  {
    number: "02",
    title: "Clinical Experience",
    text: "A professional medical practice built around clinical knowledge, careful evaluation and patient trust.",
  },
  {
    number: "03",
    title: "Compassionate Approach",
    text: "Clear communication and a reassuring environment throughout the patient's healthcare journey.",
  },
];

const values = [
  ["01", "Listen", "Understanding the patient is the first step towards meaningful care."],
  ["02", "Evaluate", "Every case deserves a careful and individual clinical assessment."],
  ["03", "Guide", "Patients should understand their options and feel confident about their care."],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f1f1f1] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-pink-950">
        <div className="absolute -right-28 -top-32 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-pink-200">
            <span className="h-px w-10 bg-pink-300" />
            About Dr. Vandana Bansal
          </p>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Medicine with
                <span className="block text-pink-200">knowledge, care & trust.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-pink-100/80 sm:text-lg">
                Get to know Dr. Vandana Bansal, her approach to patient care,
                and the values that shape her medical practice.
              </p>
            </div>

            <div className="hidden border-l border-white/15 pl-8 lg:block">
              <p className="text-4xl font-semibold text-white">Care</p>
              <p className="mt-1 text-sm text-pink-100/60">Beyond consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor intro */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="group relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] border border-pink-800/10 transition duration-500 group-hover:rotate-1" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-2xl bg-pink-800/10" />

            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-xl ring-1 ring-slate-200">
              <img
                src={PhotoDrVandana}
                alt="Dr. Vandana Bansal"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-800">
              Meet the Doctor
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Dr. Vandana Bansal
            </h2>

            <div className="mt-6 h-px w-16 bg-pink-800" />

            <p className="mt-7 text-lg leading-8 text-slate-700">
              Dr. Vandana Bansal believes that good healthcare begins with
              listening. Her approach combines clinical expertise with
              individual attention, helping patients feel informed,
              comfortable and cared for.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              From the first consultation through ongoing care, the focus is
              on understanding the patient's needs, explaining the available
              options clearly and building a relationship based on trust.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-2xl font-semibold text-pink-900">Care</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">Patient First</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-2xl font-semibold text-pink-900">Trust</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">At the Core</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:block">
                <p className="text-2xl font-semibold text-pink-900">Focus</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">Individual Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-800">
              Philosophy
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Healthcare should feel personal.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Every patient has a different story. The goal is not simply to
              treat a condition, but to understand the person behind it and
              provide care that is thoughtful, transparent and appropriate.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl bg-[#f1f1f1] p-7 transition duration-500 hover:-translate-y-1 hover:bg-pink-950 hover:text-white"
              >
                <span className="text-sm font-semibold text-pink-800 group-hover:text-pink-200">
                  {item.number}
                </span>
                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 group-hover:text-pink-100/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-800">
              The Approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Three principles behind every consultation.
            </h2>
          </div>

          <div className="divide-y divide-slate-300 rounded-3xl bg-white px-6 shadow-sm ring-1 ring-slate-200">
            {values.map(([number, title, text]) => (
              <div key={number} className="grid gap-4 py-7 sm:grid-cols-[70px_150px_1fr] sm:items-start">
                <span className="text-sm font-semibold text-pink-800">{number}</span>
                <h3 className="font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-pink-950 px-6 py-12 text-center sm:px-10 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200">
            Your health matters
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Take the next step towards better care.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-pink-100/70">
            Connect with Dr. Vandana Bansal for a consultation and discuss
            your healthcare needs.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-pink-950 transition hover:bg-pink-100"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
