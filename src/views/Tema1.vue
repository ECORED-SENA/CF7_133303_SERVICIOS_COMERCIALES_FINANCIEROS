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
                  p En esta fase se selecciona la información por contenido, se organiza y revisa para evitar duplicidad, también se genera un solo formato para todos los datos ya sea por medio del software empleado o de forma manual, por último, se hace una limpieza que consiste en corregir faltas o incoherencias, para un entendimiento y facilitar su análisis. 
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
          .row.align-items-center.justify-content-center
            .col-lg-2.mb-3
              figure
                img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
            .col-lg-10
              h4.bg6.ps-3 Nota:
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
    
    p.mb-4 Teniendo en cuenta lo anterior, las entidades aplican una serie de métodos de recolección de datos desde las más básicas hasta las más modernas, #[span.txt-color1 los medios utilizados son la entrevista, la observación, encuesta, análisis documental] y demás instrumentos que son manejados para su análisis por medio de las siguientes técnicas:
    .row.justify-content-center.align-items-center.mb-5
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
