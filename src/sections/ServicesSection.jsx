import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="My Services"
          title="Services tailored for polished digital products"
          description="From portfolio websites to full stack interfaces, I focus on modern design, clean development, and smooth responsive behavior."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 90}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-fuchsia-300/30 hover:shadow-[0_24px_55px_rgba(168,85,247,0.18)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/35 to-fuchsia-500/20 text-lg font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.18)]">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/[0.66]">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/[0.7] transition duration-300 group-hover:border-fuchsia-300/25 group-hover:text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
