import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internship', href: '#internship' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    const closeMenu = () => setIsOpen(false);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', closeMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', closeMenu);
    };
  }, []);

  return (
     <header className="sticky top-0 z-[9999] px-4 pt-4 sm:px-6">
      <nav
      className={`flex items-center justify-between px-8 py-4 rounded-[40px] border transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-white/10 shadow-lg"
          : "bg-white/5 backdrop-blur-md border-white/10"
      }`}
    >
        <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-white sm:text-xl">
          Dhanush
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-sm text-white/[0.72]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative py-2 transition duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-violet-400 after:to-fuchsia-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(168,85,247,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(217,70,239,0.4)]"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/[0.7] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto max-h-[28rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 p-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/[0.08] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 block rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
