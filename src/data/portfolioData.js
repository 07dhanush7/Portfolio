import certificateImg from "../assets/Internship.jpeg";
export const profile = {
  name: 'Dhanush Ragava RV',
  role: 'Full Stack Developer',
  shortIntro: "I'm Dhanush Ragava RV",
  description:
    'I build responsive web experiences that balance clean code, modern visuals, and real-world usability. My focus is on crafting full stack products that feel fast, polished, and easy to use.',
  extendedAbout:
    'From React interfaces to backend APIs, I enjoy turning ideas into production-ready products with thoughtful UI structure, scalable code, and performance-first decisions.',
  ctaLabel: 'Explore My Work',
  ctaHref: '#projects',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/07dhanush7' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhanush-rv/' },
    { label: 'Email', href: 'mailto:dhanushragavarv@gmail.com' },
  ],
};

export const aboutCards = [
  {
    title: 'Languages',
    items: ['JavaScript', 'Python', 'R','PHP'],
  },
  {
    title: 'Frontend',
    items: ['React','HTML5', 'CSS3', 'Bootstrap','Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
];

export const services = [
  {
    title: 'Web Development',
    description:
      'Custom websites and web apps built with a clean architecture, responsive layouts, and production-ready frontend interactions.',
    tags: ['React', 'Vite', 'Responsive UI'],
  },
  {
    title: 'Template Design',
    description:
      'Modern landing pages and portfolio templates designed to look sharp, load fast, and adapt beautifully across devices.',
    tags: ['Figma to Code', 'Landing Pages', 'Glass UI'],
  },
  {
    title: 'UI Enhancement',
description:
  'Improving interface design with better layout structure, consistent spacing, and intuitive interactions to enhance user experience.',
tags: ['UI Design', 'UX Improvements', 'Responsive Layout'],
  },
];

export const projects = [
    {
    title: 'NAVAVERSE – Community & Opportunity Platform',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'A full-stack MERN application that connects users with jobs, events, startups, and blogs. Features a role-based system where admins manage approvals and users can interact through applications and registrations..',
    href: 'https://github.com/07dhanush7',
  },
  {
    title: 'WOODORA – E-commerce Website',
    tech: ['React', 'CSS', 'Vite','Local Storage'],
    description:
      'A personal portfolio experience built with React and Tailwind, focused on polished UI, smooth interactions, and responsive design.',
    href: 'https://07dhanush7.github.io/WOODORA-E-commerce-Website/',
  },
  {
    title: 'HeritageFlavors – Hotel Management System',
    tech: ['React', 'CSS', 'Vite','Local Storage'],
    description:
      'A platform where users can post or apply for jobs and events, with structured listings, forms, and role-based workflows.',
    href: 'https://07dhanush7.github.io/Heritage-Flavors-Hotel-Management-System/',
  },
    {
    title: 'Weather Forecast App',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    description:
      'A weather dashboard that shows live conditions and forecast details through a simple, user-friendly interface.',
    href: 'https://07dhanush7.github.io/Weather_web_application/',
  },
];

  export const internships = [
  {
    company: "OBII KRIATIONZ WEB LLP",
    role: "Frontend Developer Intern",

    description:'Worked on developing and improving frontend web applications using React.js. Focused on building responsive user interfaces, implementing core features, and managing client-side data using local storage',
    tech: ['React', 'CSS', 'JavaScript','PHP','laravel'],
    certificate: certificateImg, 
  },
];

export const contactDetails = {
  title: 'Let us build something modern together',
  description:
    'If you want a portfolio, landing page, or full stack product with clean visuals and reliable implementation, I would love to connect.',
  email: 'dhanushragavarv727@gmail.com',
  phone: '+91 9353394179',
  location: 'Bangalore, India',
};
