import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";

const InternshipSection = ({ internships }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="internship"
      className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <SectionIntro
          eyebrow="Internship"
          title="Internship Experience"
          description="Hands-on experience in building responsive user interfaces, designing React components, and developing frontend-focused applications with client-side data handling."
        />

        {/* CENTER CARD */}
        <div className="flex justify-center mt-12">
          {internships.slice(0, 1).map((internship, index) => (
            <Reveal
              key={`${internship.role}-${internship.duration}`}
              delay={index * 110}
              className="group relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:shadow-[0_25px_60px_rgba(168,85,247,0.2)]"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-indigo-500/10" />

              {/* TOP */}
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-fuchsia-300/80">
                    {internship.company}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white transition group-hover:text-fuchsia-200">
                    {internship.role}
                  </h3>
                </div>

                <span className="inline-flex shrink-0 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs text-white/70">
                  {internship.duration}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="relative mt-6 text-base leading-7 text-white/80">
                {internship.description}
              </p>

              {/* TECH */}
              <div className="relative mt-7 flex flex-wrap gap-3">
                {internship.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs text-white/80 transition-all duration-300 hover:border-fuchsia-400/50 hover:text-white hover:bg-fuchsia-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setSelectedCert(internship.certificate)}
                className="mt-8 inline-block px-5 py-2 rounded-full border border-fuchsia-400 text-fuchsia-300 hover:bg-fuchsia-500/10 transition"
              >
                Preview Certificate
              </button>

            </Reveal>
          ))}
        </div>

        {/* 🔥 MODAL (FIXED BELOW NAVBAR) */}
        {selectedCert && (
          <div
            className="fixed inset-x-0 top-24 bottom-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative w-full max-w-3xl rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-4 sm:p-6 animate-[fadeIn_0.3s_ease]"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white text-lg"
              >
                ✕
              </button>

              {/* TITLE */}
              <p className="text-sm text-white/60 mb-3">
                Internship Certificate
              </p>

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
                <img
                  src={selectedCert}
                  alt="Certificate"
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>

              {/* ACTIONS */}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-white/40">
                  Click outside to close
                </span>

                <a
                  href={selectedCert}
                  download
                  className="text-sm px-4 py-1.5 rounded-full border border-fuchsia-400 text-fuchsia-300 hover:bg-fuchsia-500/10 transition"
                >
                  Download
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default InternshipSection;