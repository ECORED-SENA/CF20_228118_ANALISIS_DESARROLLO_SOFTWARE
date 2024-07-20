export default {
  global: {
    componenteFormativo: 'Desarrollo de aplicaciones web con Java',
    descripcionCurso:
      'El componente proporciona una guía sobre tecnologías y <i>frameworks</i> en el ecosistema Java. Cubre Java con JDBC para la conectividad de bases de datos, Servlets y JSP para el desarrollo web, React JS para interfaces de usuario, Hibernate para ORM, y Spring <i>Framework</i> para aplicaciones empresariales, destacando la inyección de dependencias y la configuración simplificada con Spring Boot.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Java con JDBC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clases e interfaces Java',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conexión a base de datos desde aplicación Java',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servlets y JSP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Introducción a Servlets',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Formulario HTML con Servlets',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'HTTP <i>Session</i>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Elementos de JSP',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'MVC',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fundamentos de React JS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Instalando React JS',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Crear un proyecto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Propiedades y estados de los componentes',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<i>Framework</i> Hibernate',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Operaciones básicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Asociaciones',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: '<i>Framework</i> Spring',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Introducción',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Spring Data',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Spring Boot y MySQL',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Validaciones',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF20_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Instalando React',
      referencia:
        'Editor HTML gratuito en línea limpiador y convertidor. (2021, 27 de octubre). <i>Editor HTML gratuito en línea limpiador y convertidor</i>.',
      tipo: 'Página web',
      link: 'https://htmled.it/or/',
    },
    {
      tema: 'Instalando React',
      referencia: 'Cubic Factory. (2021, 27 de octubre). <i>Cubic Factory</i>.',
      tipo: 'Página web',
      link: 'https://www.cubicfactory.com/jseditor/',
    },
    {
      tema: 'Propiedades y estados de los componentes',
      referencia:
        'CodeSandbox. (2021, 27 de octubre). <i>CodeSandbox: Online Code Editor and IDE for Rapid Web Development</i>.',
      tipo: 'Página web',
      link: 'https://codesandbox.io/',
    },
    {
      tema: 'Crear un proyecto',
      referencia:
        'React Playground. (2021, 27 de octubre). <i>React Playground</i>. ',
      tipo: 'Página web',
      link: 'https://playcode.io/react',
    },
    {
      tema: 'Hibernate',
      referencia:
        'Hibernate Community Documentation. (s. f.). <i>Capítulo 15. HQL: El lenguaje de consulta de Hibernate</i>.',
      tipo: 'Página web',
      link:
        'https://docs.jboss.org/hibernate/orm/3.5/reference/es-ES/html/queryhql.html',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'conjunto de métodos ofrecidos por una librería que puede ser utilizado por otro <i>software</i> por medio de un conjunto de reglas establecidas.',
    },
    {
      termino: 'CGI',
      significado:
        'interfaz de entrada común se refiere a un sistema de comunicación que le indica al servidor web cómo enviar y recibir datos de una aplicación de servidor a un cliente.',
    },
    {
      termino: 'CSS3',
      significado: 'hojas de estilo en cascada versión 3.',
    },
    {
      termino: 'DOM',
      significado: 'modelo de objetos de un documento HTML.',
    },
    {
      termino: 'ES6',
      significado: 'abreviación del estándar ECMA SCRIPT. Versión 6.',
    },
    {
      termino: '<i>Framework</i>',
      significado:
        'es un marco o esquema de trabajo que define un conjunto de utilidades implementadas para un contexto particular para ser reutilizadas por los desarrolladores y así facilitar y acelerar el desarrollo de ciertas actividades propias de la construcción de <i>software</i>.',
    },
    {
      termino: '<i>Groovy</i>',
      significado:
        'lenguaje de programación efectuado sobre la plataforma JAVA el cual permite realizar APIs de JAVA.',
    },
    {
      termino: 'HQL',
      significado:
        'lenguaje de consulta parecido al SQL implementado por el <i>framework</i> Hibernate.',
    },
    {
      termino: 'HTML',
      significado:
        ' HyperText Markup Language, lenguaje de Marcas de Hipertexto.',
    },
    {
      termino: 'JAVASCRIPT',
      significado: 'lenguaje de programación.',
    },
    {
      termino: 'JDBC',
      significado:
        ' API para JAVA que permite el acceso y manipulación de bases de datos relacionales.',
    },
    {
      termino: 'JDK',
      significado: 'kit de Desarrollo de Java.',
    },
    {
      termino: 'JPA',
      significado: ' API de persistencia de JAVA.',
    },
    {
      termino: 'JSX',
      significado:
        'sintaxis propuesta en React JS para escribir elementos de interfaz web.',
    },
    {
      termino: 'Kotlin',
      significado:
        'lenguaje de programación de tipado estático, sencillo y fácil de entender y aprender.',
    },
    {
      termino: 'NODE.js',
      significado: 'es un servidor de aplicaciones.',
    },
    {
      termino: 'NPM',
      significado: 'es un manejador de paquetes de sistema operativo.',
    },
    {
      termino: '<i>Plugin</i>',
      significado:
        'programas pequeños que se anexan a otros para ofrecer alguna funcionalidad nueva.',
    },
    {
      termino: 'SPA',
      significado: 'tipo de aplicación Web.',
    },
    {
      termino: 'URL',
      significado:
        'localizador uniforme de recursos, facilita la recuperación de información determinada en internet, se escribe en el navegador para ingresar a una página determinada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Berzal, F., Cubero, J., & Cortijo, F. (2007). Desarrollo profesional de aplicaciones web con Asp. net. ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=J1d_9l6zlAIC&oi=fnd&pg=PA3&dq=servlests+y+jsp+fernando+berzal&ots=GsR9oMYn8M&sig=YaCnuz6ed8E_kEo_G1CPHH-KjjU',
    },
    {
      referencia:
        'Gallagher, J. (2021, 4 de mayo). Los lenguajes de programación más populares. Career Karma. ',
      link: 'https://careerkarma.com/blog/top-programming-languages-2021/',
    },
    {
      referencia:
        'Gómez, M., & Cervantes, J. (2017). Introducción a la Programación Web con Java: JSP y Servlets JavaServer Faces. ',
      link: '',
    },
    {
      referencia:
        'Johnson, R. (2004). Expert one-on-one J2EE design and development. John Wiley & Sons. ',
      link: '',
    },
    {
      referencia:
        'Martínez, P. E. (2015). Hibernate. Persistencia de objetos en JEE (1ª ed.). Ra-Ma. ',
      link: '',
    },
    {
      referencia: 'Node. (2021). Node JS Server. ',
      link: 'https://nodejs.org/en/',
    },
    {
      referencia:
        'React JS. (2021). React - A JavaScript library for building user interfaces. ',
      link: 'https://reactjs.org/',
    },
    {
      referencia: 'Spring. (2021). Spring makes Java simple. ',
      link: 'https://spring.io',
    },
    {
      referencia:
        'Statistics Times. (2021). Principales idiomas informáticos. STATISTICSTIMES. ',
      link: 'https://statisticstimes.com/tech/top-computer-languages.php',
    },
    {
      referencia:
        'Capítulo 15. HQL: El lenguaje de consulta de Hibernate. (s. f.). Hibernate Community Documentation. ',
      link:
        'https://docs.jboss.org/hibernate/orm/3.5/reference/es-ES/html/queryhql.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Hernán Muñoz Carvajal',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta Temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
