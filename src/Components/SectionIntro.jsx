import Reveal from './Reveal';

const SectionIntro = ({ eyebrow, title, description, align = 'center' }) => {
  const alignment = align === 'left' ? 'mx-0 text-left' : 'mx-auto text-center';

  return (
    <Reveal className={`mb-12 max-w-3xl ${alignment}`}>
      <span className="mb-4 inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-200">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-white/[0.68] sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
};

export default SectionIntro;
