interface Props {
  id: number;
  name: string;
  description: {
    [key: string]: string;
  };
  img: {
    src: string;
    alt: string;
  };
  tags: string[];
  anchor_live: {
    href: string;
    title: string;
  };
  anchor_github: {
    href: string;
    title: string;
  };
}

export const worksItems: Props[] = [
  {
    id: 1,
    name: 'Doctor Web',
    description: {
      es: '📅 Aplicación React para crear un calendario de eventos [MERN]',
      en: '📅 React application to create an event calendar [MERN].',
      it: '📅 React application to create an event calendar [MERN].',
    },
    img: {
      src: '../src/assets/img/doctorweb-bg.png',
      alt: 'MERN app image',
    },
    tags: ['ASTRO', 'JS', 'TAILWIND'],
    anchor_live: {
      href: 'https://doctorwebaqp.com',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/lapo18/doctor-web',
      title: 'Link to Github repository',
    },
  },
  {
    id: 2,
    name: 'HooBank',
    description: {
      es: '📅 Aplicación React para crear un calendario de eventos [MERN]',
      en: '📅 React application to create an event calendar [MERN].',
    },
    img: {
      src: '../src/assets/img/Hoobank-bg.png',
      alt: 'MERN app image',
    },
    tags: ['REACT', 'JS', 'TAILWIND'],
    anchor_live: {
      href: 'https://resilient-bunny-d733e4.netlify.app',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/lapo18/drweb',
      title: 'Link to Github repository',
    },
  },
  {
    id: 3,
    name: 'Landing Page',
    description: {
      es: '📰 Aplicación React para crear un diario personal',
      en: '📰 React application to create a personal diary',
    },
    img: {
      src: '../src/assets/img/landing-page-bg.png',
      alt: 'Diario app image',
    },
    tags: ['HTML', 'TAILWIND'],
    anchor_live: {
      href: 'https://magical-chebakia-281332.netlify.app',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/lapo18/agencylandingpage',
      title: 'Link to Github repository',
    },
  },
  {
    id: 4,
    name: 'Sales taxes Problem',
    description: {
      es: '🦸‍♀️ Aplicación React de heroes de DC y Marvel',
      en: '🦸‍♀️ DC and Marvel heroes React application',
    },
    img: {
      src: '../src/assets/img/sales-taxes-bg.png',
      alt: 'Heroes app image',
    },
    tags: ['BOOTSTRAP', 'JAVASCRIPT', 'HTML'],
    anchor_live: {
      href: 'https://transcendent-croquembouche-1b73a3.netlify.app',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/lapo18/sales_taxes_bootstrap',
      title: 'Link to Github repository',
    },
  },
];
