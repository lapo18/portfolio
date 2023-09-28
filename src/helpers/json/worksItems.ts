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
      es: 'Aplicación en Astro para una Agendia Digital.',
      en: 'Web app in Astro for a Web Agency.',
      it: 'Web in Astro per una Web Agency.',
    },
    img: {
      src: 'https://imgur.com/2zZbZcB.png',
      alt: 'Astro app image',
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
      es: 'Aplicación React ',
      en: 'React application.',
      it: 'React app.',
    },
    img: {
      src: 'https://i.imgur.com/1KmRSe1.png',
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
      es: 'Landing Page hecha con TailwindCSS',
      en: 'Landing Page build with TailwindCSS',
      en: 'Landing Page fatta con TailwindCSS',
    },
    img: {
      src: 'https://i.imgur.com/N3OSUCH.png',
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
      es: 'Ejercicio de calculo de impuestos',
      en: 'Sales taxes problem',
      it: 'Problema di calcolo di tasse',
    },
    img: {
      src: 'https://i.imgur.com/Yw7876V.png',
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
