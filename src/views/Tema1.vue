<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Ciencia de los datos
    .bg2 
      .row
        .col
          p Para iniciar este tema es importante contextualizar sobre el significado de estas dos palabras:
        .row.justify-content-center(data-aos="fade-left").mb-5
        .col-lg-6.mb-4
          .tarjeta-avatar-b.mb-0.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h4 Ciencia
                p.mt-4 Es un conjunto de métodos, investigaciones y preguntas que tiene el propósito de dar solución a diferentes problemas o situaciones existentes en la humanidad, por medio de la creación de información útil y veraz. 
        .col-lg-6.mb-4
          .tarjeta-avatar-b.mb-0.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h4 Datos
                p.mt-4 Es una serie de información que se recopila con el propósito de analizarla, estudiarla y responder algún enigma o requerimiento que necesite una solución.
        p.mb-5 Una vez teniendo claros estos dos conceptos, es importante hacerse este cuestionamiento #[span.txt-color1 ¿Qué es ciencia de datos?]
    .row.mb-5.justify-content-center
      .col-10.bg3.p-4
        .row.align-items-center.justify-content-center
          .col-lg-2.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img4.svg').mx-auto(data-aos="fade-right").mx-auto
          .col-lg-10
            p.mb-0 Es la unión de las áreas estadística, científica y digital con la llamada inteligencia artificial, que tiene la función de recopilar todos los datos de interés, con el propósito de analizar la información obtenida y dar solución a un requerimiento o situación presentada.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Ciclo de vida
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-1.mb-3
        figure
          img.img-t(src='@/assets/curso/tema1/img5.svg').mx-auto(data-aos="fade-right").mx-auto
      .col-lg-11
        p Los datos tienen una importancia en la gestión diaria de las entidades, ya que de esa información que se recoge se genera un análisis para planes de acción o estrategias según la razón por la cual se recolecta.
        p Como todas las actividades de las organizaciones, la Ciencia de datos también tiene unas etapas o ciclos, que se presentan a continuación:
    .bg4 
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
        .col-xxl-8.col-lg-8.col-8.p-0
          ImagenInfograficaB.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img9.svg')
            div(x="35.5%" y="22.6%" tooltip="Identificación de la necesidad y creación" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Identificación de la necesidad y creación
                  p En esta primera fase las entidades hacen un diagnóstico de los datos que necesita tener ya sea de sus clientes, partes interesadas o transacciones según su actividad económica. 
                  h4 Ejemplo
                  p Una entidad de servicios financieros necesita tener control de las consignaciones para mitigar el lavado de activos, por lo consiguiente implementa que cuando se haga una consignación el cajero solicitara los datos de la persona o empresa que deposita el dinero.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img10.svg').mx-auto
            div(x="65.3%" y="21.2%" tooltip="Recepción" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Recepción
                  p Es el momento el cual llega la información a la empresa ya sea de forma automática por medio de las herramientas digitales o con intervención humana.
                  h4 Ejemplo
                  p Un cliente entrega diligenciado un formato de solicitud de crédito con la información que requiere la empresa según las políticas establecidas, elaborándolo de forma manual o digital.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img11.svg').mx-auto
            div(x="85.3%" y="43.2%" tooltip="Apropiación y archivo" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Apropiación y archivo
                  p Una vez se recibe la documentación se guarda una copia con el propósito de tener un historial de los datos. Para esta gestión se recomienda tener una herramienta de almacenamiento masivo ya que los volúmenes de transacciones pueden ser elevados.
                  h4 Ejemplo
                  p Se establece un procedimiento de almacenamiento adoptado por una herramienta digital el cual genera una copia de las transferencias bancarias según su fecha.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img12.svg').mx-auto
            div(x="85.3%" y="70.5%" tooltip="Filtros")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Filtros
                  p En esta fase se selecciona la información por contenido, se organiza y revisa para evitar duplicidad, también se genera un solo formato para todos los datos ya sea por medio del <em>software</em> empleado o de forma manual, por último, se hace una limpieza que consiste en corregir faltas o incoherencias, para un entendimiento y facilitar su análisis. 
                  h4 Ejemplo
                  p Se configuran los archivos de Excel en un solo formato CSV para su lectura.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img13.svg').mx-auto
            div(x="64.6%" y="93.7%" tooltip="Análisis de la información")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Análisis de la información
                  p Se analiza por medio de la estadística la probabilidad de algún tipo de fraude o lavado de activos en las transacciones en caja.
                  h4 Ejemplo
                  p Se toman los datos arrojados por el sistema o de forma manual, se evalúa a nivel cualitativo, teórico, estructural, experimental o según sea su necesidad.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img14.svg').mx-auto
            div(x="36%" y="93.4%" tooltip="Presentación de las estrategias o contenido ")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Generación de estrategias o contenido 
                  p Se crea el procedimiento en caja para el reporte de actividades sospechosas de fraude o lavado de activos.
                  h4 Ejemplo
                  p Según el análisis presentado se generan medidas para mitigar los riesgos, o mejoras pertinentes que impulsen la sostenibilidad de la entidad.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img15.svg').mx-auto
            div(x="15.6%" y="72.4%" tooltip="Presentación de las estrategias o contenido")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Presentación de las estrategias o contenido 
                  p Se comparte a las partes interesadas de la organización por medio de su página web o medios digitales la información correspondiente tanto a las estrategias como los datos arrojados por el análisis, su presentación puede ser de forma virtual o presencial. 
                  h4 Ejemplo
                  p Se presenta una herramienta digital para el almacenamiento de datos que ayude en la evaluación de movimientos fraudulentos en la entidad de forma virtual.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img16.svg').mx-auto
            div(x="14.6%" y="43.4%" tooltip="Implementación de los planes de acción, estrategias o contenido ")
              .row.justify-content-center.align-items-center
                .col-lg-10
                  h4.mb-3.text-dark Implementación de los planes de acción, estrategias o contenido 
                  p En esta última fase se lleva a cabo la gestión de poner en marcha los planes o estrategias arrojados por los análisis de los datos.
                  h4 Ejemplo
                  p Se difunde y capacita al personal de servicios financieros el nuevo sistema de información para reportar las transacciones y se ejecuta el programa.
                .col-lg-2
                  img.mb-3.img-t(src='@/assets/curso/tema1/img17.svg').mx-auto
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
        .col-8.bg5.p-4
          .row.align-items-center.justify-content-center.bg6
            .col-lg-2.mb-3
              figure
                img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
            .col-lg-10
              h4.mt-2 Nota:
              p.mb-0 Cabe resaltar que la información obtenida queda en una base de datos creada por la entidad por si en algún momento se requiere consultar.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Técnicas de análisis de datos
    .row.mb-5.bg3.p-4.align-items-center.justify-content-center
      .col-lg-2.mb-3
        figure
          img.img-t(src='@/assets/curso/tema1/img19.svg').mx-auto(data-aos="fade-right").mx-auto
      .col-lg-10
        p.mb-0 Hace unas décadas #[b el hablar de obtener información, requería de grandes actividades para conseguirla y su forma de adquisición era escasa, ahora gracias a las diferentes herramientas digitales y canales, la obtención de la misma es abundante]. En la actualidad el reto es administrar bien los datos e interpretar de forma correcta su análisis.   
    
    p.mb-4 Teniendo en cuenta lo anterior, las entidades aplican una serie de métodos de recolección de datos desde las más básicas hasta las más modernas, #[span.txt-color1 los medios utilizados son la entrevista, la observación, la encuesta, el análisis documental] y los demás instrumentos que son manejados para su análisis por medio de las siguientes técnicas:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Media aritmética")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Sirve para hallar la tendencia y promedio de datos.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img21.svg', alt='Texto que describa la imagen').mx-auto
          .row(titulo="Desviación estándar")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Sirve para hallar de forma ágil la distribución de los datos. 
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img22.svg').mx-auto
          .row(titulo="Según tamaño de la muestra")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Sirve para recopilar el tamaño de una población y medirla.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img23.svg').mx-auto
          .row(titulo="De regresión")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Sirve para hallar tendencias en el transcurso del tiempo. 
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img24.svg').mx-auto
          .row(titulo="Prueba de hipótesis")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Sirve para identificar si lo expuesto es real.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img25.svg').mx-auto
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img20.svg', alt='Texto que describa la imagen')
    p.mb-5 Las técnicas anteriores se hacen de forma manual y por tal motivo pese a su gran aporte pueden tener ciertas desviaciones ya que interviene el factor humano, por otro lado, se presentan otras más avanzadas apoyadas por la inteligencia artificial, como se verán a continuación:
    TabsB.color-acento-contenido.moditabs(data-aos="fade-down-right")
      .py-4.py-md-5(titulo="Aprendizaje automatizado" :icono="require('@/assets/curso/tema1/img6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4 Aprendizaje automatizado
            p.mb-4 Diseña y desarrolla algoritmos que permiten a los equipos de cómputo tomar los datos recolectados por la entidad, reconociendo sus patrones, analizándolos y tomando decisiones basadas en esa información. Se puede utilizar cuando se requiere manejar funciones de viabilidad de inversión, entre otras.
          .col-lg-3
            figure.mb-5
              img(src='@/assets/curso/tema1/img26.svg', style="width: 250px").m-auto
      .py-4.py-md-5(titulo="Redes neuronales" :icono="require('@/assets/curso/tema1/img27.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4 Redes neuronales
            p.mb-4 Esta herramienta está creada con el propósito de medir las decisiones de las personas a través de sus patrones de comportamiento retroalimentado por los datos suministrados. Se puede utilizar cuando se quiere evaluar los tipos de clientes o su comportamiento de pago en un crédito, entre otras.
          .col-lg-3
            figure.mb-5
              img(src='@/assets/curso/tema1/img28.svg', style="width: 250px").m-auto
      .py-4.py-md-5(titulo="Aprendizaje de asociación" :icono="require('@/assets/curso/tema1/img29.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4 Aprendizaje de asociación
            p.mb-4 Esta herramienta permite identificar la relación que existe entre los datos. Se puede utilizar cuando se quiere evaluar qué productos financieros se utilizan por estratos, para crear las estrategias pertinentes.
          .col-lg-3
            figure.mb-5
              img(src='@/assets/curso/tema1/img30.svg', style="width: 250px").m-auto
      .py-4.py-md-5(titulo="Algoritmos genéticos" :icono="require('@/assets/curso/tema1/img32.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4 Algoritmos genéticos
            p.mb-0 Esta herramienta está creada con el propósito de medir las decisiones de las personas a través de sus patrones de comportamiento retroalimentado por los datos suministrados. Se puede utilizar cuando se quiere evaluar los tipos de clientes o su comportamiento de pago en un crédito, entre otras.
          .col-lg-3
            figure.mb-5
              img(src='@/assets/curso/tema1/img33.svg', style="width: 250px").m-auto
      .py-4.py-md-5(titulo="Análisis de series temporales" :icono="require('@/assets/curso/tema1/img34.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4 Análisis de series temporales
            p.mb-0 Esta herramienta tiene la función de predicción de valores por medio de datos anteriores. En una entidad sirve para proyectar ventas, ingresos y demás pronósticos que se requieran.
          .col-lg-3
            figure.mb-5
              img(src='@/assets/curso/tema1/img35.svg', style="width: 250px").m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Modelos y metodologías de analítica
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        p.mb-5 Para analizar la información obtenida por la entidad, las organizaciones emplean un conjunto de modelos y metodologías cuantitativas y cualitativas, como se observó en los puntos anteriores y para ampliar el conocimiento de modelos y metodologías de analítica, se invita a ver el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)(data-aos="fade-right")
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Minería de datos 
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img35.png').m-auto
      .col-lg-7
        p Este proceso consiste en tomar o extraer información requerida por las entidades de diferentes bases de datos o fuentes, su nombre está asociado a la minería ya que la extracción es vital en ambas actividades; por otro lado, su propósito es extraer datos útiles que ayuden a la resolución de las diferentes situaciones que se originan en las entidades y su gestión se puede hacer a través de herramientas estadísticas tanto básicas como avanzadas que proporciona la inteligencia artificial.
        .row.mb-5.bgr3.p-2.align-items-center.justify-content-center
          .col-lg-3.mb-2
            figure
              img(src='@/assets/curso/tema1/img36.svg')(data-aos="fade-right")
          .col-lg-9
            p.mb-0 La información que se obtiene en la minería de datos, sirve para la toma de decisiones. 
    p.mb-5 La minería de datos como disciplina 
      span.resal estudia las herramientas y algoritmos que le permitan acceder y recolectar datos a las organizaciones con el fin que esa información sea predictiva para que se facilite su análisis para la toma de decisiones ante situaciones presentadas y mejorar los procesos de las entidades.
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-9
        p.mb-5 
          span.resal.text-bold Ejemplo de minería de datos en los servicios comerciales y financieros:
        p Una entidad financiera implementa una herramienta de minería de datos para evaluar a sus clientes a la hora de hacer los préstamos extrayendo información de los hábitos de pago, historial crediticio, movimientos bancarios entre otros datos que le servirán para su análisis y clasificar a cada uno según su capacidad de endeudamiento.
        p Teniendo en cuenta el ejemplo presentado, la gestión que se debe hacer con la minería de datos es:
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img37.svg').m-auto(data-aos="fade-right")
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Identificar la información")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Encontrando las categorías o conjuntos de los datos
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img39.svg', alt='Texto que describa la imagen').mx-auto
          .row(titulo="Clasificar la información")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 De forma automática encontrando los datos solicitados o de interés.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img40.svg').mx-auto
          .row(titulo="Describir o brindar conceptos o información ")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 De forma compilada utilizando el método adecuado.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img41.svg').mx-auto
          .row(titulo="Detectar anomalías en los datos")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Filtrando la información recibida para evitar desviaciones o fallas.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img42.svg').mx-auto
          .row(titulo="Detectar las variables de la información")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Encontrando cambios que pueden originar los datos
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img43.svg').mx-auto
          .row(titulo="Mapear la información para verificar su autenticidad")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Revisando la procedencia de la información desde sus orígenes.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img44.svg').mx-auto
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img38.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La gestión anteriormente presentada, se debe realizar a través de:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img45.svg', style="width: 100px")
          .tarjeta.color-acento-contenido1
            .p-4.text-center
              p #[b Proceso de datos,] es decir revisar la información y eliminar lo que no sirve.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img46.svg', style="width: 100px")
          .tarjeta.color-acento-contenido2
            .p-4
              p #[b Elección de características,] es decir tomar las variables influyentes a solucionar el problema.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img47.svg', style="width: 100px")
          .tarjeta.color-acento-contenido3
            .p-4.text-center
              p #[b Uso de algoritmos,] es decir utilizar el modelo de conocimiento más acorde según las técnicas. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img48.svg', style="width: 100px")
          .tarjeta.color-acento-contenido4
            .p-4.text-center
              p #[b Análisis y evaluación,] es decir comprobar que las validaciones sean reales.
    p.mb-5 En el siguiente recurso se expondrán las técnicas que utiliza esta herramienta de recolección de datos:
    .bg7
      .row.align-items-center.mb-5
        .col-lg-5.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img49.svg')(data-aos="fade-right")
        .col-lg-1
        .col-lg-6
          .tarjeta.tarjeta--gris1.p-4
            SlyderA(tipo="b")
              .row.align-items-center.m-1(data-aos="fade-left")
                .col-lg
                  h4 Inferencia estadística 
                  p Se utiliza con el fin de inducir por muestras estadísticas el actuar de una comunidad así como sus características.
              .row.align-items-center.m-1
                .col-lg
                  h4 Árbol de decisión
                  p Se plasma por medio de una imagen las decisiones que se pueden tomar ante diferentes situaciones y así mismo se grafican sus resultados o consecuencias.             
              .row.align-items-center.m-1
                .col-lg
                  h4 Redes neuronales
                  p Imitando las neuronas del cerebro dando variables predictivas para la toma de decisiones.
              .row.align-items-center.m-1
                .col-lg
                  h4 Inducción de reglas
                  p Genera métodos y lineamientos automáticos para identificar la información.
              .row.align-items-center.m-1
                .col-lg
                  h4 Aprendizaje basado en instancias
                  p Procesa los datos hasta brindar respuesta, mediado por situaciones o ejemplos previamente delineados.
              .row.align-items-center.m-1
                .col-lg
                  h4 Algoritmos genéticos
                  p Brindan soluciones a una situación por medio de una serie de algoritmos que siguen una función genética del problema.
              .row.align-items-center.m-1
                .col-lg
                  h4 Aprendizaje Bayesiano
                  p Busca datos para encontrar soluciones por probabilidades.
              .row.align-items-center.m-1
                .col-lg
                  h4 Programación lógica inductiva
                  p Por medio de la inteligencia artificial, utiliza la lógica, hipótesis y del conocimiento previo para encontrar alternativas de solución.
              .row.align-items-center.m-1
                .col-lg
                  h4 Estimación  núcleo
                  p Por medio de la estimación de variables utilizando fórmulas aritméticas, extrae datos asociados para consulta de posibles soluciones.
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Métodos de recopilación e integración de datos. 
    p.mb-5 Debe entenderse que los procesos de recolección de la información constan una gran multiplicidad de técnicas o herramientas para la recopilación de la misma, las técnicas más usadas son:
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img51.svg', alt='Texto que describa la imagen')
      .tarjeta.color-1.p-3(x="83.3%" y="64%" numero="")
        .h5.mb-2 Encuesta
        p Es según Bernal (2.000) “una de las técnicas más reconocidas y utilizadas, a pesar de que ha perdido credibilidad por  el sesgo que hay en las personas encuestadas y por el uso cada vez más frecuente de TIC´S” (p.172)  
        p Por tanto, la encuesta está fundada en un agregado de interrogantes que son planeadas con la finalidad de obtener información de las personas en referencia a una temática o hecho específico. 
      .tarjeta.color-1.p-3(x="35%" y="42%" numero="")
        .h5.mb-2 Entrevista
        p Es una técnica orientada a obtener una conversación estructurada con las personas con apropiación de la información, la entrevista a pesar de manejar un cuestionario base con el cual se establecerá una comunicación dialógica con el entrevistado, permite la flexibilidad de ampliar la respuesta del entrevistado con nuevas preguntas.
      .tarjeta.color-1.p-3(x="62%" y="52%" numero="")
        .h5.mb-2 Observación directa 
        p Cada día cobra mayor fuerza y credibilidad, y cada vez tiende a generalizarse más, dado que permite la obtención de información directa y confiable, siempre que medie un procedimiento sistematizado y supervisado, para lo cual hoy en día se utilizan medios audiovisuales muy completos y con alto componente tecnológico en las industrias 4.0, permite estudios de comportamiento del consumidor, del personal en el puesto de trabajo, estímulos basados en percepciones sensoriales en pruebas de productos, entre otros.
      .tarjeta.color-1.p-3(x="7.3%" y="37.2%" numero="")
        .h5.mb-2 Análisis de documentos 
        p Se utiliza bajo los criterios de fichas bibliográficas que analizan material impreso o digital, su principal uso está en la elaboración del marco teórico del estudio.
      .tarjeta.color-1.p-3(x="17%" y="27%" numero="")
        .h5.mb-2 Búsquedas web  
        p la consulta de bases de datos, páginas web, bloog´s, en la red virtual se ha convertido en técnica de recolección de información por excelencia de toda la sociedad. 
    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Preparación de datos estructurados. 
    p.mb-5 Esta actividad #[span.txt-color1 se enfoca en limpiar y recopilar los datos que van a ser utilizados, consultados, investigados, extraídos o buscados, con el propósito de que la información sea precisa y válida para los diferentes análisis que se requieren hacer en el proceso,] garantizando la seguridad de los datos obtenidos.
    p.mb-5 Las organizaciones en la preparación de datos tienen en cuenta:
    .bg8.p-3.mb-3.mt-3(data-aos="fade-right")
      .row.justify-content-end.align-items-center(data-aos="fade-left").mb-5
        .col-md-5
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img56.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1.d-flex.align-items-center
                p.mb-0.p-3 Claridad de la información y seguridad en el acceso de un lugar seguro.
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img54.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1.d-flex.align-items-center
                p.mb-0.p-3 Confiabilidad de los datos obteniendo información fidedigna veraz, visible y auditable por si se debe modificar.
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img55.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1.d-flex.align-items-center
                  p.mb-0.p-3 Comprensible y con capacidad de repetición asegurando su entendimiento para generar estrategias
        .col-md-6.col-7(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/img53.svg')(data-aos="fade-left")
    p.mb-5 Ahora para preparar los datos estructurados se siguen las siguientes fases:
    .bg9.p-4.mb-5.mt-5(data-aos="fade-right")
      .row.justify-content-start.align-items-center(data-aos="fade-left").mb-5
        .col-lg-7.ms-5
          ul.lista-ul--color
            li
              <i class="fas fa-check-circle" style="color:#FC8116"></i>
              | Identificar los datos que se necesitan, adquirirlos, compilarlos y generar un canal o línea de acceso permanente.
            li
              <i class="fas fa-check-circle" style="color:#FC8116"></i>
              | Revisar la calidad de los datos compilados según la relación con la actividad o situación que se quiere solucionar.
            li
              <i class="fas fa-check-circle" style="color:#FC8116"></i>
              | Limpieza de la información que consiste en corregir, eliminar duplicidad, suprimir datos incompletos y salvaguardar información confidencial.
          .row.mb-5.justify-content-center.align-items-center
            .col-12.bg5.p-4
              .row.align-items-center.justify-content-center.bg6_1
                .col-lg-3.mb-3
                  figure
                    img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
                .col-lg-9
                  h4 Nota:
                  p.mb-0 Estimados aprendices esta actividad se realiza por medio de las herramientas digitales, informáticas o de inteligencia artificial según lo estipule cada organización.
        .col-md-4.col-8(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img57.svg')
    Separador
    #t_1_7
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Ecosistema de datos abiertos
    p Como su nombre lo indica es un conjunto de información que está disponible al público en general bajo unos lineamientos de reproducción y reutilización para que los usuarios hagan buen provecho de esos datos y les sirvan según la necesidad o requerimiento.
    p.mb-5 En Colombia #[span.txt-color1 la ley 1712 de 2014 indica la obligación de las organizaciones públicas de emitir datos públicos con excepciones si es información clasificada.]
    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img59.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 Matriz Saro
              p.mb-0 Los datos están publicados en sitios web, sin generar costo por su uso con formatos que permiten su reutilización, se debe tener en cuenta la compatibilidad de los equipos de búsqueda.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/anexo1.xls')" target="_blank")
                span Ver mas
                i.fas.fa-link
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p También se comparten datos como resultados de elecciones, contrataciones estatales, pruebas saber entre otros. 
        p.mb-5 El Ecosistema de datos abiertos presenta unas características y principios particulares, que conocerá a continuación:
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Características del ecosistema de datos abiertos ")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  ul.lista-ul.ps-5
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Disponibilidad en la red para descarga 
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Licencia abierta
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Datos legibles
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Manejo de URL dando mayor cobertura
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Formato abierto
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Su creación se hace según necesidades de la comunidad
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img61.svg', alt='Texto que describa la imagen').mx-auto
          .row(titulo="Principios del ecosistema de datos abiertos")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  ul.lista-ul.ps-5
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Abiertos:] al servicio para consulta. 
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Oportunos:] información relevante
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Utilizables:] con licencias abiertas
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Comparables:] en diferentes momentos y sectores
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Incentivadores:] aumenta la confianza y transparencia en un gobierno
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Innovadores:] como puede ser reutilizable, genera nuevo conocimiento que puede ser innovador.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img62.svg').mx-auto
          .row(titulo="Ventajas del ecosistema de datos abiertos")
            .col-12
              figure
                img.img-t(src='@/assets/curso/tema1/img63.svg').mx-auto
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img60.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
