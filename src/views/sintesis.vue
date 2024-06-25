<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama de flujo detalla los fundamentos del desarrollo de aplicaciones web en Java y JavaScript. El diagrama incluye secciones para Java con JDBC, Servlets y JSP, Hibernate, Spring, y React JS, cada una con una breve descripción de su propósito y características principales. También abarca temas específicos como conexión a bases de datos, formulación de HTML y manejo de sesiones, componentes y estado en React, operaciones básicas, asociaciones e inyección de dependencias en Spring Boot, y más.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
