<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fundamentos de React JS
    p.mb-5 React JS es una nueva tecnología importante para la construcción de software en su componente Front-end, que requiere tener en cuenta algunas consideraciones, como se pueden conocer a continuación:
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1
        .row
          .col-12
            .px-4.py-3.bg-c8
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 #[b ¿Qué es?]
                    br
                    | Es una nueva tecnología de reciente desarrollo, relacionada con una librería o biblioteca.
          .col-12
            .px-4.py-3.bg-c9
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 #[b ¿En qué se basa?]
                    br
                    | Trabaja principalmente sobre componentes.
          .col-12
            .px-4.py-3.bg-c10
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 #[b ¿Cuál es su propósito?]
                    br
                    | Inicialmente, fue pensada para solucionar el problema de interfaces que están actualizando información constantemente. La mayoría de las aplicaciones usadas en la actualidad actualizan información a cada momento mediante nuevos comentarios, notificaciones, publicaciones, imágenes, etc.
          .col-12
            .px-4.py-3.bg-c9
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 #[b ¿Quién la creó?]
                    br
                    | Fue creada originalmente por Facebook, y hoy en día es una de las librerías más populares que existen para páginas web y front-end.
          .col-12
            .px-4.py-3.bg-c11
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 #[b ¿Cómo trabaja?]
                    br
                    | Trabaja mediante una librería de JS. Una librería es una colección de procesos almacenados en objetos o módulos, es decir, códigos que aceleran el flujo de trabajo, pues consiste en reciclar algo que alguien ya ha creado antes.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema3/img1.png', style='width: 370px', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
