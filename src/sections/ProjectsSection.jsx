import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Projects"
          title="Four builds that reflect my frontend and full stack work"
          description="Each project highlights practical development, modern UI thinking, and implementation choices centered on usability."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 100}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300/30 hover:shadow-[0_24px_55px_rgba(168,85,247,0.18)]"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.65]">
                  Project 0{index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {project.tech.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/[0.72]"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-white/[0.66]">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-20 mt-7 inline-flex rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(168,85,247,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(217,70,239,0.34)]"
                >
                  Explore My Work
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
