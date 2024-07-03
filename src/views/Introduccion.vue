<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro/img1.svg", style="width: 100px", alt="").m-auto
      .col(data-aos="fade-left")
        p En el ámbito del desarrollo de #[i software], Java se ha consolidado como uno de los lenguajes de programación más robustos y versátiles. Este documento proporciona una guía comprensiva sobre algunas de las tecnologías y #[i frameworks] más importantes utilizados en el ecosistema Java, con un enfoque particular en la conectividad de bases de datos, el desarrollo web y la gestión de la persistencia de datos.
        p.mb-0 El contenido de este documento se estructura en cinco secciones principales:
    .row.justify-content-center
      .col-lg-10
        .p-4.p-lg-5.bg-c2
          .row.mb-4
            .col-12.bg-c1(data-aos="fade-right")
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0.px-lg-0.mt-4.mt-lg-0
                  figure
                    img(src="@/assets/curso/intro/img1.png", style="width: 150px" alt="").m-auto
                .col
                  .p-4.p-lg-0
                    p.mb-0 #[b Java con JDBC]
                    p.mb-0 Se examina el uso de Java Database Connectivity (JDBC), una API fundamental para conectar aplicaciones Java con bases de datos relacionales. Se describen las clases e interfaces necesarias, los pasos para establecer una conexión y se proporciona información sobre los #[i drivers] JDBC para distintos sistemas de gestión de bases de datos (SGBD).
          .row.mb-4
            .col-12.bg-c1(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0.px-lg-0.mt-4.mt-lg-0
                  figure
                    img(src="@/assets/curso/intro/img2.png", style="width: 150px" alt="").m-auto
                .col
                  .p-4.p-lg-0
                    p.mb-0 #[b Servlets y JSP]
                    p.mb-0 Este tema introduce los Servlets y JavaServer Pages (JSP), tecnologías clave para el desarrollo web en Java. Se abordan su arquitectura, ciclo de vida, y la forma de manejar formularios HTML y sesiones HTTP, así como la implementación del patrón de diseño Modelo-Vista-Controlador (MVC).
          .row.mb-4
            .col-12.bg-c1(data-aos="fade-right")
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0.px-lg-0.mt-4.mt-lg-0
                  figure
                    img(src="@/assets/curso/intro/img3.png", style="width: 150px" alt="").m-auto
                .col
                  .p-4.p-lg-0
                    p.mb-0 #[b Fundamentos de React JS]
                    p.mb-0 Aquí se exploran los fundamentos de React JS, una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario. Se incluye la instalación, creación de proyectos, manejo de componentes y estado, eventos, listas y #[i keys], formularios, ciclo de vida de los componentes y el uso de hooks.
          .row.mb-4
            .col-12.bg-c1(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0.px-lg-0.mt-4.mt-lg-0
                  figure
                    img(src="@/assets/curso/intro/img4.png", style="width: 150px" alt="").m-auto
                .col
                  .p-4.p-lg-0
                    p.mb-0 #[b Hibernate]
                    p.mb-0 Hibernate es un #[i framework] de mapeo objeto-relacional (ORM) que facilita la interacción con bases de datos en aplicaciones Java. Esta sección cubre la configuración de Hibernate, el uso de clases de entidad y anotaciones, y las operaciones básicas como guardar, obtener, actualizar y eliminar registros, así como las asociaciones entre entidades y el ciclo de vida de los objetos.
          .row
            .col-12.bg-c1(data-aos="fade-right")
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0.px-lg-0.mt-4.mt-lg-0
                  figure
                    img(src="@/assets/curso/intro/img5.png", style="width: 150px" alt="").m-auto
                .col
                  .p-4.p-lg-0
                    p.mb-0 #[b Spring]
                    p.mb-0 Se presenta el Spring #[i Framework], una herramienta poderosa para el desarrollo de aplicaciones empresariales en Java. Se destacan la inyección de dependencias (DI), el principio de inversión de control (10C), y se examinan módulos importantes como Spring Data y Spring Boot. Además, se discuten las validaciones en Spring Boot y se proporciona un ejemplo de mapeo con JPA.
    
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
