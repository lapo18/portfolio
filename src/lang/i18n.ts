/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        Home: 'Home',
        About: 'About',
        Works: 'Projects',
        Contact: 'Contact',
        passionate: 'I am a passionate aspiring',
        compromised:
          'with a firm commitment to turn my passion for technology into a solid career in the world of web development.',
        myStory:
          'My story begins with a love for the web and digital creativity, which has led me to embark on a journey of',
        passion: ' constant learning and growth ',
        on: 'in the programming field.',
        HomeButton: 'Download CV',
        IAM: 'I am Carlo La Porta',
        SocialLinks: 'Social links',
        toLinkedin: 'Link to my LinkedIn',
        toGithub: 'Link to my Github',
        toTwitter: 'Link to my Twitter',
        toBehance: 'Link to my Behance',
        myApp: 'Link to my App',
        about_p1:
          'Freelance Frontend Developer based in Milano, Italy. Cursed Computer Engineering in the Universidad Catolica de Santa Maria, where I acquired skills in programming, databases, working methodologies, etc. {{spacer}}{{spacer}} My passion lies in creating applications with attractive and functional designs, my future goal is to work with a company where I can become a senior Front-End developer.{{spacer}} {{spacer}}',
        about_p2:
          'I am working on personal projects. {{spacer}}{{spacer}}In my free time, I enjoy watching series, movies, animes, reading and playing video games. Find inspiration in simple things and believe in balancing work and leisure. Excited for future opportunities and open to interesting collaborations. {{spacer}}{{spacer}}',
        about_contact:
          'Contact me to create something amazing together!',
        see_all: 'See all',
        stack_title: 'Stack and other',
        frontend_title: 'Front-end, developer',
        design_title: 'Designs, UI Designer',
        Behance: 'Behance',
        View_More: 'View More',
        Github: 'Github',
        Live: 'Live',
        loveTo: 'Love to hear from you',
        sendMessage: 'Send Message',
        madeWith:
          'Made with 💖(code) by me, for me and for everyone.',
        konami: 'Pss... try the Konami code 😜, use your keyboard',
        anyKey: 'Press any key to leave',
      },
    },
    es: {
      translation: {
        Home: 'Inicio',
        About: 'Acerca de',
        Works: 'Proyectos',
        Contact: 'Contacto',
        passionate: 'Soy un apasionado aspirante a',
        compromised:
          'con un firme compromiso de convertir mi pasión por la tecnología en una carrera sólida en el mundo del desarrollo web.',
        myStory:
          'Mi historia comienza con un amor por la web y la creatividad digital, que me ha llevado a embarcarme en un viaje de',
        passion: ' aprendizaje constante y crecimiento ',
        on: 'en el campo de la programación.',
        HomeButton: 'Descargar CV',
        IAM: 'Soy Carlo La Porta',
        SocialLinks: 'Redes sociales',
        toLinkedin: 'Enlace a mi LinkedIn',
        toGithub: 'Enlace a mi Github',
        toTwitter: 'Enlace a mi Twitter',
        toBehance: 'Enlace a mi Behance',
        myApp: 'Enlace a mi Aplicación ',
        about_p1:
          'Diseñador UI y desarrollador Front-end freelance con sede en Guadalajara, México. Graduado de Ingeniería en Informática por la Universidad de Guadalajara, donde adquirí habilidades en programación, bases de datos, metodologías de trabajo, etc. Mi pasión radica en crear aplicaciones con diseños atractivos y funcionales, mi objetivo a futuro es trabajar con una empresa en donde pueda convertirme en un desarrollador senior Front-End.{{spacer}}{{spacer}} He desarrollado una aplicación para finanzas personales disponible en Play Store llamada ',
        about_p2:
          ' y continúo trabajando en proyectos personales. {{spacer}}{{spacer}} En mi tiempo libre, disfruto de ver series, películas, leer y jugar videojuegos. Encuentro inspiración en las cosas simples y creo en el equilibrio entre el trabajo y el ocio. Estoy emocionado por las oportunidades futuras y abierto a colaboraciones interesantes. {{spacer}}{{spacer}}',
        about_contact:
          '¡Contáctame para crear algo increíble juntos!',
        see_all: 'Ver todo',
        stack_title: 'Tecnologías y otros',
        frontend_title: 'Front-end, desarrollador',
        design_title: 'Diseños, Diseñador UI',
        Behance: 'Behance',
        View_More: 'Ver Más',
        Github: 'Github',
        Live: 'En línea',
        loveTo: 'Me encantaría tener noticias suyas',
        sendMessage: 'Enviar Mensaje',
        madeWith: 'Hecho con 💖(código) por mi, para mi y todos.',
        konami:
          'Pss... intenta usar el código Konami 😜, usa tu teclado',
        anyKey: 'Pulse cualquier tecla para salir',
      },
    },
    it: {
      translation: {
        Home: 'Inizio',
        About: 'Chi sono',
        Works: 'Progetti',
        Contact: 'Contatto',
        passionate: 'Sono un appassionato aspirante',
        compromised:
          'con il fermo proposito di trasformare la mia passione per la tecnologia in una solida carriera nel mondo dello sviluppo web.',
        myStory:
          "La mia storia inizia con l'amore per il web e la creatività digitale, che mi ha portato a intraprendere un viaggio di",
        passion: ' costante apprendimento e crescita ',
        on: 'nel campo della programmazione.',
        HomeButton: 'Scarica CV',
        IAM: 'Sono Carlo La Porta',
        SocialLinks: 'Social Media',
        toLinkedin: 'Link a LinkedIn',
        toGithub: 'Link a Github',
        about_p1:
          "Sviluppatore Frontend freelance con sede a Milano, Italia. Ho studiato Ingegneria Informatica presso l'Universidad Catolica de Santa Maria, dove ho acquisito competenze in programmazione, database, metodologie di lavoro, ecc. {{spacer}}{{spacer}} La mia passione è creare applicazioni dal design accattivante e funzionale, il mio obiettivo futuro è lavorare con un'azienda dove poter diventare uno sviluppatore Front-End senior.{{spacer}} {{spacer}}",
        about_p2:
          " Sto lavorando a progetti personali. {{spacer}}{{spacer}}Nel tempo libero mi piace guardare serie, film, anime, leggere e giocare ai videogiochi. Trovo ispirazione nelle cose semplici e credo nell'equilibrio tra lavoro e tempo libero. Sono entusiasta delle opportunità future e aperto a collaborazioni interessanti. {{spacer}}{{spacer}}",
        about_contact:
          'Contattatemi per creare insieme qualcosa di straordinario!',
        see_all: 'Mostra tutto',
        stack_title: 'Tecnologie e altro',
        frontend_title: 'Front-end, sviluppatore',
        design_title: 'Diseños, Diseñador UI',
        Behance: 'Behance',
        View_More: 'Mostra di più',
        Github: 'Github',
        Live: 'Online',
        loveTo: 'Mi farebbe piacere avere tue notizie',
        sendMessage: 'Invia Messagio',
        madeWith: 'Fatto con il 💖(código)',
        konami:
          'Pss... prova questo codice Konami 😜, usa la tastiera',
        anyKey: 'Premi un tasto qualsiasi per uscire',
      },
    },
  },
  
})

export default i18n
