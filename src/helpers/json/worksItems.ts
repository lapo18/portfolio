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
    name: 'MERN Calendar',
    description: {
      es: '📅 Aplicación React para crear un calendario de eventos [MERN]',
      en: '📅 React application to create an event calendar [MERN].',
    },
    img: {
      src: 'https://i.imgur.com/oMrZDLF.png',
      alt: 'MERN app image',
    },
    tags: ['MERN', 'JS', 'AXIOS', 'ROUTERDOM'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/mern-calendar/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/mern-calendar',
      title: 'Link to Github repository',
    },
  },
  {
    id: 2,
    name: 'MERN Calendar',
    description: {
      es: '📅 Aplicación React para crear un calendario de eventos [MERN]',
      en: '📅 React application to create an event calendar [MERN].',
    },
    img: {
      src: 'https://i.imgur.com/oMrZDLF.png',
      alt: 'MERN app image',
    },
    tags: ['MERN', 'JS', 'AXIOS', 'ROUTERDOM'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/mern-calendar/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/mern-calendar',
      title: 'Link to Github repository',
    },
  },
  {
    id: 3,
    name: 'Diario Personal',
    description: {
      es: '📰 Aplicación React para crear un diario personal',
      en: '📰 React application to create a personal diary',
    },
    img: {
      src: 'https://i.imgur.com/qhlxj2f.png',
      alt: 'Diario app image',
    },
    tags: ['FIREBASE', 'REDUX', 'MUI', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/react-journal-app/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/react-journal-app',
      title: 'Link to Github repository',
    },
  },
  {
    id: 4,
    name: 'Heroes App',
    description: {
      es: '🦸‍♀️ Aplicación React de heroes de DC y Marvel',
      en: '🦸‍♀️ DC and Marvel heroes React application',
    },
    img: {
      src: 'https://i.imgur.com/TeZaTFS.png',
      alt: 'Heroes app image',
    },
    tags: ['BOOTSTRAP', 'ROUTERDOM', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/react-heroes-app/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/react-heroes-app',
      title: 'Link to Github repository',
    },
  },
  {
    id: 5,
    name: 'AddWatermark',
    description: {
      es: '📷 Permite añadir una marca de agua a una o más imágenes, para descargarlas',
      en: '📷 Allows you to add a watermark to one or more images for downloading.',
    },
    img: {
      src: 'https://i.imgur.com/ibCGp5H.png',
      alt: 'Addwatermark app image',
    },
    tags: ['JSZIP', 'JQUERY', 'HTML', 'CSS'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/AddWaterMarkToImage/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/AddWaterMarkToImage',
      title: 'Link to Github repository',
    },
  },
];
