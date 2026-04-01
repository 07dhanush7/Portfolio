import profileImage from "../assets/profile_img.svg";
import Reveal from "../components/Reveal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = ({ profile, onOpenResume }) => {
  const iconMap = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Email: <FaEnvelope />,
  };

  return (
    <section
      id="home"
      className="relative px-6 pt-24 pb-16 sm:px-8 lg:px-10 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

        {/* IMAGE */}
        <Reveal className="order-1 flex justify-center lg:order-1">
          <div className="relative -mt-8 lg:-mt-10">

            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-purple-500/20 blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">

              <div className="flex items-center justify-center overflow-hidden rounded-full border border-fuchsia-300/30 bg-white/[0.05] shadow-[0_0_40px_rgba(168,85,247,0.25)]
                w-60 h-60 
                sm:w-72 sm:h-72 
                lg:w-[360px] lg:h-[360px]"
              >
                <img
                  src={profileImage}
                  alt={profile.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-6 lg:translate-x-0 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-lg">
              <p className="text-[10px] uppercase tracking-widest text-white/50">
                Focus
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-white">
                Frontend + MERN
              </p>
            </div>

          </div>
        </Reveal>

        {/* TEXT */}
        <Reveal className="order-2 text-center lg:order-2 lg:text-left">

          <span className="inline-flex rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/[0.7]">
            Available for Full Stack Projects
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-white">
            <span className="block">{profile.shortIntro}</span>
            <span className="mt-3 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-8 text-white/[0.7] lg:mx-0">
            {profile.description}
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

            <a
              href={profile.ctaHref}
              className="rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(168,85,247,0.35)]"
            >
              {profile.ctaLabel}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/14 bg-white/[0.05] px-7 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white whitespace-nowrap"
            >
              Start a Conversation
            </a>

            <button
              onClick={onOpenResume}
              className="rounded-full border border-white/14 bg-white/[0.05] px-7 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white whitespace-nowrap"
            >
              View Resume
            </button>

          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/70 transition hover:text-white hover:border-fuchsia-400/40"
              >
                <span className="text-base">{iconMap[link.label]}</span>
                {link.label}
              </a>
            ))}
          </div>

        </Reveal>

      </div>
    </section>
  );
};

export default HeroSection;