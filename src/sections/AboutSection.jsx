import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiR,
  SiPhp,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const AboutSection = ({ profile }) => {
  const aboutCards = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "R", icon: <SiR /> },
        { name: "PHP", icon: <SiPhp /> },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaNodeJs /> },
        { name: "Authentication", icon: <FaNodeJs /> },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
  ];

  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="About Me"
          title="Full stack development with a strong eye for UI detail"
          description={`${profile.extendedAbout} I enjoy building clean interfaces, reliable backend flows, and responsive layouts that feel premium on every screen.`}
          align="left"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-200/80">
              What I bring
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Reliable execution from concept to interface delivery
            </h3>

            <p className="mt-4 text-base leading-8 text-white/[0.68]">
              I build modern web applications with a focus on performance,
              clean architecture, and user-friendly interfaces. I ensure
              smooth interaction, responsive layouts, and scalable backend integration.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-lg font-semibold text-white">3 Projects</p>
                <p className="mt-1 text-sm text-white/[0.6]">
                  Real-world projects showcasing frontend and backend skills
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-lg font-semibold text-white">MERN Stack</p>
                <p className="mt-1 text-sm text-white/[0.6]">
                  Experience with React, Node.js, Express, and MongoDB
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {aboutCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 90}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300/30 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {card.items.map((item) => (
                    <span
                      key={item.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-sm text-white/80"
                    >
                      <span className="text-white/70 text-sm">
                        {item.icon}
                      </span>
                      {item.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;