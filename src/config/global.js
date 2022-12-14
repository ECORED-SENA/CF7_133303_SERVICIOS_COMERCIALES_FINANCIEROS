export default {
  global: {
    componenteFormativo: 'Modelamiento y relacionamiento de los datos',
    descripcionCurso:
      'En la presente unidad temática el aprendiz descubrirá la importancia de la gestión de los datos para los servicios comerciales y financieros con el propósito de mitigar los diferentes riesgos asociados a su gestión como la pérdida de clientes, el lavado de activos, transacciones ilícitas, fraudes y fallas operacionales en la entidad por medio del análisis y el uso de técnicas y herramientas para ello. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciencia de los datos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ciclo de vida',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de análisis de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modelos y metodologías de analítica',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Minería de datos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Métodos de recopilación e integración de datos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Preparación de datos estructurados',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Ecosistema de datos abiertos',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Modelos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Sistemas de Gestión de bases de datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Big Data</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de datos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Principios del análisis masivo de datos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Tecnologías para analizar grandes volúmenes de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de gestión de datos masivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Metodologías',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Almacenamiento',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Lenguajes de consulta y manipulación de datos',
            hash: 't_4_3',
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
      tema: 'Técnicas de análisis de datos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA.  [Ecosistema de Recursos Educativos Digitales]. (2022, 4 de marzo). Analítica de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eK0QG1SUk9A',
    },
    {
      tema: 'Bases de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. [Ecosistema de Recursos Educativos Digitales SENA]. (2021, 24 de mayo). Sistemas de gestión de bases de datos: Ventajas MySQL.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DubJRQFmLLk',
    },
    {
      tema: '<em>Big Data</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. [Ecosistema de Recursos Educativos Digitales SENA] . (2020, 20 de octubre). Analítica de Datos',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LFupF0du7b4',
    },
    {
      tema: 'Técnicas de gestión de datos masivos',
      referencia:
        'Huarcaya Almeyda, R. [Remigio Huarcaya Almeyda].   (2020, 18 de octubre). Relación muchos a muchos | Modelamiento de datos',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HL7EHau2tbA',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento de datos',
      significado:
        'Guardar datos en un <em>software</em> u otra herramienta, generalmente de forma ordenada, para poder disponer cuando se necesite o convenga.',
    },
    {
      termino: 'Análisis',
      significado:
        'Examen detallado de una cosa para conocer sus características o cualidades, o su estado, y extraer conclusiones, que se realiza separando o considerando por separado las partes que la constituyen.',
    },
    {
      termino: '<em>Big Data</em>',
      significado:
        'Datos que contienen una mayor variedad y que se presentan en volúmenes crecientes y a mayor velocidad.',
    },
    {
      termino: 'Datos',
      significado:
        'Información concreta sobre hechos, elementos, etc., que permite estudiarlos, analizarlos o conocerlos.',
    },
    {
      termino: 'Gestión',
      significado:
        'Acción o trámite que se lleva a cabo para conseguir o resolver una situación.',
    },
    {
      termino: 'Herramienta digital',
      significado:
        'Paquetes informáticos que están en las computadoras, o en dispositivos electrónicos como celulares y tabletas, entre otros.',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos, ya procesados y ordenados para su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'Conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso en el cual un individuo o grupo de individuos deben elegir entre varias opciones. Este proceso se activa cuando hay que resolver un conflicto o situación que requiere de una acción concreta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Big Data. Técnicas, herramientas y aplicaciones María Pérez Marqués Copyright © 2015 RC Libros',
    },
    {
      referencia:
        'Elmasri, R. & Shamkant, B. (2001). Introducción a los sistemas de bases de datos. Prentice Hall 7ª edición',
    },
    {
      referencia:
        'Connolly. T. & Begg, C. (2007). Sistemas de bases de datos. Addison-Wesley, 5ª edición.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo:
          'Responsable equipo de Desarrollo Curricular Ecosistema de Recursos Educativos Digitales',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Villalobos Barreto',
        cargo: 'Experto temático',
        centro: 'Grupo De Apoyo Administrativo - Cgi - Sena Distrito Capital',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesor metodológico',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
