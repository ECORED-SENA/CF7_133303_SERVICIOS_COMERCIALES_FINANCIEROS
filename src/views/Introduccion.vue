<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span i
          
      h1 Introducción
    .bg1
      .row.justify-content-center.align-items-center.mb-4
        .col-md-8
          p Es común hablar de estudios exitosos que han aportado a la innovación y creación de diferentes productos o servicios de acuerdo a las necesidades de los clientes o inclusive hablar de la mejora de los procesos dentro de las organizaciones gracias a los mismos.
          p Pero de lo que no es común hablar es los métodos que utilizan para llegar a estos resultados y cómo generaron esa información útil a la humanidad o empresas ya que de los datos que se recopilaron en cada estudio o investigación, se generó un análisis que dieron fórmulas o estrategias de solución a diferentes fenómenos presentados.
          p Conocer las bases de datos en una organización #[span.txt-color1 es importante ya que de esa información que recopilan las empresas se pueden dar soluciones a la eficacia y eficiencia de las actividades productivas, talento humano, atención al cliente, mercadeo y ventas entre otras.]
          p En el caso del área de servicios comerciales y financieros    #[span.txt-color1 la recolección de datos y su adecuado análisis puede mitigar fraudes, lavado de activos, financiación del terrorismo y cualquier tipo de actividad ilícita o de riesgo para sus operaciones,] cabe también resaltar que ayuda a conocer nuevos clientes y disminuir la probabilidad de perder los actuales.
          p Teniendo en cuenta lo anterior, en la presente unidad temática se conocerá sobre la ciencia de datos, técnicas, gestión masiva de bases y Big data, con el fin de mejorar la capacidad de gestión en la clasificación y análisis de la información que le ayuden en su proceso comercial y financiero dentro de su entidad.
          p #[span.txt-color1 ¡Bienvenidos!] 
          p A continuación se les invita a ver el siguiente Video:
        .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img1.png')
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
