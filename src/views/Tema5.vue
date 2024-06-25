<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Spring
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Spring es un #[i framework] de código abierto que facilita la creación de aplicaciones empresariales de alto rendimiento en Java. Además de Java, tiene soporte para los lenguajes Groovy y Kotlin. La estructura que lo compone es modular, ofreciendo flexibilidad para implementar una variedad de arquitecturas dependiendo de los requerimientos de las aplicaciones, haciendo que la programación sea lo más ágil posible, rápida y muy segura.
      .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.png', style='width: 300px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c25
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema5/img2.png', style='width: 100px', alt='').m-auto
            .col(data-aos="fade-left")
              p.mb-0 #[b Historia]
              p.mb-0 Rod Johnson, creador de Spring, se dio cuenta de que necesitaban una herramienta para simplificar y facilitar la construcción de aplicaciones JEE utilizando EJB. Escribió el libro #[i Expert One-on-One J2EE Development], que es un conjunto de buenas prácticas para la creación de aplicaciones empresariales. En el año 2 004, lanzó la primera versión 1.2.6 de Spring, marcando el inicio de J2EE tradicional (Johnson, 2004).
    p.mb-5 La siguiente figura presenta las versiones de Spring Framework:
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 20.] Versiones de Spring Framework
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema5/img3.png', style='width: 1000px', alt='Línea de tiempo que muestra la evolución del framework Spring, destacando versiones importantes desde 2003 hasta 2019, incluyendo el lanzamiento de Spring Boot y Spring IO.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema5/img3m.png', style='width: 1000px', alt='Línea de tiempo que muestra la evolución del framework Spring, destacando versiones importantes desde 2003 hasta 2019, incluyendo el lanzamiento de Spring Boot y Spring IO.').m-auto
    p.mb-5(data-aos="fade-right") A continuación, se presentan algunas de las características clave que hacen de Spring una opción popular entre los desarrolladores:
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img4.png', style='width: 300px', alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .p-4.bg-c47
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema5/img1.svg', style='width: 60px', alt='').m-auto
            .col
              p.mb-0 #[b Flexibilidad].
              p.mb-0 Contiene un grupo flexible de librerías y extensiones de terceros de Spring, facilitando a los desarrolladores construir aplicaciones fácilmente.
          .bg-c23.mb-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema5/img2.svg', style='width: 60px', alt='').m-auto
            .col
              p.mb-0 #[b Inyección de dependencia (DI)].
              p.mb-0 Ofrece un patrón que permite ayudar en el acoplamiento bajo. Esto significa que cuando existen dependencias entre las clases y se necesita crear un objeto de esta clase, Spring suministra este objeto, obteniendo beneficios en la modularidad, escalabilidad y dependencia de clases.
          .bg-c23.mb-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema5/img3.svg', style='width: 60px', alt='').m-auto
            .col
              p.mb-0 #[b POJOs (#[i Plain Old Java Objects])].
              p.mb-0 Facilita un sencillo desarrollo por medio de los POJOs.
          .bg-c23.mb-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema5/img4.svg', style='width: 60px', alt='').m-auto
            .col
              p.mb-0 #[b ORM (#[i Object Relational Mapping])].
              p.mb-0 Suministra un fácil acceso a datos por medio del ORM.
          .bg-c23.mb-3
          .row.align-items-center
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema5/img5.svg', style='width: 60px', alt='').m-auto
            .col
              p.mb-0 #[b Estructura y módulos].
              p.mb-0 Spring integra una variedad de módulos que se pueden integrar para el desarrollo de aplicaciones.
    p.mb-5(data-aos="fade-right") A continuación, se detalla lo que se puede crear con Spring Framework: aplicaciones de consola, aplicaciones de escritorio, aplicaciones web, aplicaciones móviles, servicios SOAP y REST. Spring está orientado esencialmente al back-end.
    .row(data-aos="fade-right")
      .col-lg.m-lg-2.mb-4.mb-lg-0
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema5/img6.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Microservicios]
              p.mb-0 Permite crear y ejecutar microservicios en producción a escala.
      .col-lg.m-lg-2.mb-4.mb-lg-0
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema5/img7.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Nube]
              p.mb-0 Ejecución de servicios en la nube
      .col-lg.m-lg-2.mb-4.mb-lg-0
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema5/img8.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Aplicaciones web]
              p.mb-0 Creación rápida de aplicaciones web.
    .row(data-aos="fade-left")
      .col-lg.m-lg-2.mb-4.mb-lg-0
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema5/img9.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Reactive]
              p.mb-0 Permite la creación de proyectos reactivos basados en mensajes.
      .col-lg.m-lg-2.mb-4.mb-lg-0
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema5/img10.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Servlets]
              p.mb-0 Permite la ejecución de código impulsado por eventos y se encarga del escalado la se tridad del lado del servidor.
      .col-lg.m-lg-2.mb-4.mb-lg-0
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema5/img11.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Batch]
              p.mb-0 Aplicaciones de procesamiento de datos en lote.
    Separador
    #t_5_1
    .titulo-segundo.color-acento-contenido
      h2 5.1. Introducción
    .row.bg-c48.mb-5
      .col-12
        .px-5.pb-5
          .row.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              p El #[i framework] Spring, básicamente con su inyección de dependencias, se encarga de construir objetos y configurar todas las dependencias que estos necesiten. En Spring, estos objetos creados son llamados beans, y se anotan en las clases de la siguiente manera: @Component, @Service, @Repository, etc. Uno de los principios principales de Spring es el de Inversión de Dependencia (DIP), el cual establece que los módulos de alto nivel no deben depender de los de bajo nivel. Esto significa que se debe hacer referencia a las abstracciones más que a las implementaciones, evitando depender de una clase o implementación en particular.
              .row
                .col-12
                  .p-4.bg-c28
                    .row
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema5/img12.svg", style="width: 80px", alt="alt").m-auto
                      .col
                        p.mb-0 La implementación de este principio se llama Inversión de Control (IoC), que se encarga de desacoplar el código utilizando eventos. Este principio también se conoce como el principio de Hollywood: "no nos llames; nosotros te llamaremos". Consiste en una manera de programar donde la aplicación interviene en lugar del código. Para implementar el IoC, se necesita un agente externo llamado contenedor, que es el encargado de verificar el flujo de la aplicación. Los IoC utilizan Service Locator, eventos y DI (inyecciones de dependencias), enfocando el Spring Framework en la DI.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema5/img6.png", style="width: 300px", alt="alt").m-auto
          .row
            .col-12
              .p-4.bg-c46(data-aos="fade-down")
                p.mb-5 #[b Inyección de dependencias:] es un patrón de diseño de software, subtipo de inversión de control, cuyo objetivo es tener un código fácil de mantener o desacoplado. Su función es determinar lo que los objetos necesitan.
                .row.justify-content-center
                  .col-lg-7
                    .p-4.p-lg-5.bg-c4
                      .titulo-sexto.color-acento-contenido.mb-4
                        p.mb-0 #[b Figura 21.] Principio inversión de controlguración
                      figure
                        img(src='@/assets/curso/tema5/img13.svg', style='width: 400px', alt='Diagrama que representa la conexión entre una aplicación Java utilizando JDBC y un sistema gestor de bases de datos relacionales, detallando la comunicación entre el equipo del cliente y el servidor de la base de datos.').m-auto
    p.mb-5(data-aos="fade-right") A continuación, se presenta un ejemplo de código donde los objetos dependen entre sí:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-up")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 22.] Acoplamiento hermético
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema5/img14.svg', style='width: 900px', alt='Diagrama que ilustra cómo un ServletFilter en una aplicación web dirige solicitudes HTTP hacia Servlets, JSPs, y archivos estáticos.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema5/img14m.svg', style='width: 400px', alt='Diagrama que ilustra cómo un ServletFilter en una aplicación web dirige solicitudes HTTP hacia Servlets, JSPs, y archivos estáticos.').m-auto
    .row.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-auto.d-none.d-md-block
            figure.mt-1
              img(src="@/assets/curso/tema4/img2.svg", style="width: 70px", alt="").m-auto
          .col
            p.mb-0 En el código anterior, se obtuvo el objeto desde el exterior y que el objeto puede ser cualquier tipo de café, sin necesidad de modificar la clase TiendaCafe. Resumiendo, la inversión de control es un patrón de programación para obtener un acoplamiento flexible, logrando que los objetos independientes no sean responsables de sus dependencias, sino que las reciban desde afuera. El contenedor de IoC recoge los metadatos que vienen de un archivo XML o código Java y recibe las indicaciones de los objetos que debe crear, enlazar, configurar y destruir por medio de POJOs (Objetos simples de Java), creando objetos por medio del proceso que recibe el nombre de Spring Beans y resultando en objetos preparados para la inyección de dependencias.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img15.svg", style="width: 300px", alt="alt").m-auto
    p.mb-5(data-aos="fade-right") La siguiente figura describe el funcionamiento de una vista abstracta de Spring.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 23.] Vista abstracta de Spring
          figure
            img(src='@/assets/curso/tema5/img16.svg', style='width: 600px', alt='Diagrama que expone cómo un navegador web se comunica con un programa Servlet mediante el protocolo HTTP, que a su vez está conectado a un servidor de base de datos.').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Módulos del #[i Framework]
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Spring Framework es un marco de trabajo muy amplio y brinda cerca de 20 módulos, los cuales se asocian en el contenedor principal: accesos e integración de datos, Web, AOP (Programación orientada a aspectos), Instrumentación, Mensajes y Pruebas (Spring, 2021).
        p Para trabajar con Spring se necesita tener instalados los siguientes requerimientos:
        .row
          .col-lg-6
            .p-4
              .row
                .col-12.bg-c49
                  .p-4
                    p.text-center.mb-0 #[b Un entorno de desarrollo (IDE).]
                .col-12.bg-c10
                  .p-4
                    p.mb-0 Se puede seleccionar cualquiera de los relacionados en la tabla No 1.
          .col-lg-6
            .p-4
              .row
                .col-12.bg-c49
                  .p-4
                    p.text-center.mb-0 #[b Un JDK (Kit de desarrollo de Java).]
                .col-12.bg-c10
                  .p-4
                    p.mb-0 Se puede descargar cualquiera de los relacionados en la tabla No 2.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img7.png", style="width: 370px", alt="alt").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Tabla 6.] Entornos para desarrollo en Spring
          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-white(style="width: 30%") Entornos de desarrollo
                  th.text-white Enlace
              tbody
                tr
                  td #[b IntelliJ IDEA]
                  td https://www.jetbrains.com/idea/
                tr
                  td #[b Spring Tools]
                  td https://spring.io/tools
                tr
                  td #[b Visual Studio Code]
                  td https://code.visualstudio.com/docs/languages/java
                tr
                  td #[b Eclipse]
                  td https://www.eclipse.org/downloads/packages/
                tr
                  td #[b NetBeans]
                  td https://netbeans.apache.org/
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Tabla 7.] JDK para desarrollo en Spring
          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-white(style="width: 30%") JDK
                  th.text-white Enlace
              tbody
                tr
                  td #[b JDK Oracle]
                  td https://www.oracle.com/java/technologies/downloads/
                tr
                  td #[b AdoptOpenJDK]
                  td https://adoptopenjdk.net/
    p.mb-5(data-aos="fade-right") Para construir aplicaciones en Spring Framework necesitamos:
    .tarjeta.tarjeta--gris.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        PasosB.color-primario
          .row.m-1(titulo="Paso")
            .col-12
              p Configuración de las dependencias en el archivo pom.xml.
              figure
                img(src='@/assets/curso/tema5/img8.png', style='width: 850px', alt='').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Elegir Jars con Maven: lo primero que se debe hacer es crear un proyecto Maven o Gradle y realizar la descarga de las dependencias necesarias.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema5/img9.png', style='width: 650px', alt='').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Las dependencias se deben listar en la carpeta Dependencias.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema5/img10.png', style='width: 500px', alt='').m-auto
    .row.bg-c50
      .col-12
        .px-5.pb-5
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c17
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Creación de la aplicación
          p.mb-5(data-aos="fade-right") A continuación, se presenta como crear la aplicación:
          .row.justify-content-center
            .col-lg-8(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row(titulo="Creación de la Aplicación")
                  .col-12
                    p.mb-5 Para el ejemplo se creará un programa con el ejemplo de HolaPlaneta.
                    .row.justify-content-center
                      .col-lg-10
                        .row
                          .col-12
                            .px-4.py-3.bg-c20
                              figure
                                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                          .col-12
                            .px-4.py-3.bg-c21
                              pre
                                p.mb-0  public interface HolaPlaneta {
                                p.mb-0      void enviarSaludo ();
                                p.mb-0  }
                                p.mb-0  
                                p.mb-0  public class HolaPlanetaIpml implements HolaPlaneta {
                                p.mb-0      @Override
                                p.mb-0      public void enviarSaludo () {
                                p.mb-0          System.out.println("Hola Planeta estamos en Spring Framework");
                                p.mb-0      }
                                p.mb-0  }
                .row(titulo="Configurar archivo XML")
                  .col-12
                    p.mb-5 Una vez se tenga la aplicación, se realizará la configuración en el archivo springXMLconfig.
                    .row.justify-content-center
                      .col-lg-11
                        .row
                          .col-12
                            .px-4.py-3.bg-c20
                              figure
                                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                          .col-12
                            .px-4.py-3.bg-c21
                              pre
                                p.mb-0  &lt;beans xmlns="http://www.springframework.org/schema/beans"
                                p.mb-0         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                p.mb-0         xsi:schemaLocation="http://www.springframework.org/schema/beans 
                                p.mb-0        http://www.springframework.org/schema/beans/spring-beans-4.3.xsd">
                                p.mb-0  
                                p.mb-0      &lt;bean id="saludaService" class="sena.spring.introduccion.HelloPlanetaImpl"/>
                                p.mb-0      
                                p.mb-0  &lt;/beans>
                .row(titulo="Ejemplo de código")
                  .col-12
                    p.mb-5 A continuación, se presenta un nuevo ejemplo de código explicando más a detalle el uso del Contenedor en Spring. Para el siguiente ejemplo se tiene un proyecto llamado “Sena” el cual tiene una clase Aprendiz con los siguientes atributos:
                    .row.justify-content-center
                      .col-lg-11
                        .row
                          .col-12
                            .px-4.py-3.bg-c20
                              figure
                                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                          .col-12
                            .px-4.py-3.bg-c21
                              pre
                                p.mb-0  package com.sena
                                p.mb-0  
                                p.mb-0  public class AprendizBean {
                                p.mb-0      private String primernombre;
                                p.mb-0      private String apellidos;
                                p.mb-0      private String cedula; 
                                p.mb-0  
                                p.mb-0      public String getPrimerNombre () {
                                p.mb-0          return primernombre;
                                p.mb-0      } 
                                p.mb-0      
                                p.mb-0      public void setPrimerNombre (String nombre) {
                                p.mb-0          this.primernombre = nombre;
                                p.mb-0      } 
                                p.mb-0      
                                p.mb-0      public String getApellidos () {
                                p.mb-0          return apellidos;
                                p.mb-0      } 
                                p.mb-0      
                                p.mb-0      public void setApellidos (String apellidos) {
                                p.mb-0          this.apellido = apellidos;
                                p.mb-0      } 
                                p.mb-0      
                                p.mb-0      public String getCedula () {
                                p.mb-0          return cedula;
                                p.mb-0      }
                                p.mb-0      
                                p.mb-0      public void setCedula (String cedula) {
                                p.mb-0          this.cedula = cedula;
                                p.mb-0      } 
                                p.mb-0      
                                p.mb-0      public void verAprendiz () {
                                p.mb-0          System.out.println(primernombre+" "+apellidos+", es la actual estudiante");
                                p.mb-0      }
                                p.mb-0      
                                p.mb-0  }
                .row(titulo="Gestión de objetos")
                  .col-12
                    p.mb-5 Al utilizar este proyecto Sena, Spring #[i framework] cuenta con un archivo XML que gestiona objetos (Spring IOC Container). Para este proyecto, recibe el nombre de springconfig.xml y se ve de la siguiente manera.
                    .row.justify-content-center
                      .col-lg-11
                        .row
                          .col-12
                            .px-4.py-3.bg-c20
                              figure
                                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                          .col-12
                            .px-4.py-3.bg-c21
                              pre
                                p.mb-0  &amp;amp;lt;!DOCTYPE beans PUBLIC "-//PRING//DTD// BEAN 2.0//ES"
                                p.mb-0  "http://www.springframework.org/dtd/spring-beans-2.0.dtd"&amp;amp;gt;
                                p.mb-0  &amp;amp;lt;beans&amp;amp;gt;
                                p.mb-0  &amp;amp;lt;bean id="aprendiz" class="com.sena.AprendizBean"&amp;amp;gt;
                                p.mb-0  &amp;amp;lt;property name="primernombre" value="Zulema"&amp;amp;gt;
                                p.mb-0  &amp;amp;lt;property name="apellidos" value="Leon"&amp;amp;gt;
                                p.mb-0  &amp;amp;lt;property name="cedula" value="25.311.165"&amp;amp;gt;
                                p.mb-0  &amp;amp;lt;/bean&amp;amp;gt;
                                p.mb-0  &amp;amp;lt;/beans&amp;amp;gt;
                .row(titulo="Configuración del archivo")
                  .col-12
                    p.mb-5 En la configuración del archivo, se ve que la etiqueta bean referencia la clase AprendizBean.java. Además, el atributo class dirige a la dirección del proyecto y cuenta con un atributo id que permite agregar un nombre para poder identificarlo. Las demás etiquetas como property indican los atributos de la clase AprendizBean y con la etiqueta value se pueden agregar valores directos. Por medio de los métodos get y set, el Spring Container obtiene acceso y puede modificar los objetos de la clase AprendizBean. Con los archivos de configuración XML, Spring facilita una clase de listas por cada uno de los beans existentes para poder hacer llamado de ellos y así poder manipularlos desde otras clases sin tener que realizar varias instancias.
                    .row.justify-content-center
                      .col-lg-11
                        .row
                          .col-12
                            .px-4.py-3.bg-c20
                              figure
                                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                          .col-12
                            .px-4.py-3.bg-c21
                              pre
                                p.mb-0  package com.sena 
                                p.mb-0  
                                p.mb-0  import org. springframework.beans.factory.BeanFactory;
                                p.mb-0  import org.springframework.beans.factory.xml.XmlBeanFactory;
                                p.mb-0  import org.springframework.core.io.ClassPathResource;
                                p.mb-0  import org.springframework.core.io.Resource;
                                p.mb-0  
                                p.mb-0  public class SenaLogic{ 
                                p.mb-0  
                                p.mb-0      public static void main(String[ ] args){
                                p.mb-0          Resource recurso = new ClassPathResource("springconfig.xml");
                                p.mb-0          BeanFactory factory = new XmlBeanFactory(recurso);
                                p.mb-0  
                                p.mb-0          AprendizBean aprendizBean = (AprendizBean)factory.getBean("aprendiz");
                                p.mb-0  
                                p.mb-0          aprendizBean.verAprendiz();
                                p.mb-0      }
                                p.mb-0  }
                .row(titulo="Implementación de Spring")
                  .col-12
                    p.mb-5 En el siguiente código se presenta la implementación de Spring del control de los objetos del proyecto Sena. La salida que muestra se logró realizando las configuraciones en el archivo XML. La utilidad del uso de Spring se evidencia en proyectos grandes con varias clases y varios objetos ya que facilita un manejo mucho más eficiente.
                    .row.justify-content-center
                      .col-lg-11
                        .row
                          .col-12
                            .px-4.py-3.bg-c20
                              figure
                                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                          .col-12
                            .px-4.py-3.bg-c21
                              pre
                                p.mb-0  Zulema Leon, es la actual estudiante
    Separador
    #t_5_2
    .titulo-segundo.color-acento-contenido
      h2 5.2 Spring Data
    p.mb-5(data-aos="fade-right") Spring ofrece una variedad de proyectos independientes que se pueden articular en un proyecto principal. Cada proyecto permite resolver una necesidad especial del negocio; algunos de ellos se ilustran en la siguiente figura.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 24.] Proyectos Spring
          figure
            img(src='@/assets/curso/tema5/img12.png', style='width: 700px', alt='Diagrama del ciclo de vida de un Servlet en Java, desde su inicialización hasta su eliminación, destacando métodos como service, doGet, y doPost.').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c7
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema5/img17.svg', style='width: 90px', alt='').m-auto
            .col(data-aos="fade-left")
              p.mb-0 Uno de los proyectos más utilizados es Spring Data, ya que es uno de los módulos más grandes de Spring debido a que cuenta con muchos submódulos. Su objetivo principal es proporcionar una serie de herramientas que permiten realizar integraciones muy sencillas con los diferentes entornos de almacenes de datos disponibles. Los datos que se utilizan pueden proceder de orígenes tanto de bases de datos relacionales como no relacionales.
    p.mb-5(data-aos="fade-right") Las funcionalidades de Spring Data son:
    .row
      .col-12
        .p-4.p-lg-5.bg-c12(data-aos="fade-left")
          SlyderF(columnas="col-md-6 col-xl-4")
            .tarjeta.color-primario.p-4
              .row
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/tema5/img18.svg', alt='').m-auto
                  p.mb-0 Poderosos repositorios y uso personalizado de mapeo de objetos.
            .tarjeta.color-primario.p-4
              .row
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/tema5/img19.svg', alt='').m-auto
                  p.mb-0 Creación de consultas dinámicas fundamentadas en los nombres que tienen los métodos.
            .tarjeta.color-primario.p-4
              .row
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/tema5/img20.svg', alt='').m-auto
                  p.mb-0 Plantillas de clases que brindan propiedades elementales que hacen más fácil utilizar los repositorios.
            .tarjeta.color-primario.p-4
              .row
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/tema5/img21.svg', alt='').m-auto
                  p.mb-0 Campos que hacen referencia a fecha de creación y modificación de las clases.
            .tarjeta.color-primario.p-4
              .row
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/tema5/img22.svg', alt='').m-auto
                  p.mb-0 Sencilla integración con #[b Spring Framework] por medio de la configuración de clase o archivos XML.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Módulos de Spring Data
    p.mb-4(data-aos="fade-right") Los módulos oficiales de Spring Data son:
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img13.png', style='width: 300px', alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c8
              .row
                .col-4
                  p.mb-0 #[b Spring Data Commons.]
                .col-8
                  p.mb-0 Brinda infraestructura compartida para módulos de Spring.
          .col-12
            .px-4.py-3.bg-c9
              .row
                .col-4
                  p.mb-0 #[b Spring Data JDBC.]
                .col-8
                  p.mb-0 Implementa repositorios fundamentados en JDBC.
          .col-12
            .px-4.py-3.bg-c10
              .row
                .col-4
                  p.mb-0 #[b Spring Data JPA.]
                .col-8
                  p.mb-0 Implementa repositorios fundamentados en JPA.
          .col-12
            .px-4.py-3.bg-c9
              .row
                .col-4
                  p.mb-0 #[b Spring Data Gemfire.]
                .col-8
                  p.mb-0 Implementa GemFire para aplicaciones baja latencia.
          .col-12
            .px-4.py-3.bg-c10
              .row
                .col-4
                  p.mb-0 #[b Spring Data KeyValue.]
                .col-8
                  p.mb-0 Implementa repositorios para datos de clave-valor.
          .col-12
            .px-4.py-3.bg-c9
              .row
                .col-4
                  p.mb-0 #[b Spring Data LDAP.]
                .col-8
                  p.mb-0 Implementa repositorios para soporte de LDAP.
          .col-12
            .px-4.py-3.bg-c10
              .row
                .col-4
                  p.mb-0 #[b Spring Data MongoDB.]
                .col-8
                  p.mb-0 Soporte para documentos y repositorios de MongoDB.
          .col-12
            .px-4.py-3.bg-c9
              .row
                .col-4
                  p.mb-0 #[b Spring Data Rest.]
                .col-8
                  p.mb-0 Implementa repositorios Restful.
          .col-12
            .px-4.py-3.bg-c10
              .row
                .col-4
                  p.mb-0 #[b Spring Data Redis.]
                .col-8
                  p.mb-0 Fácil acceso a Redis desde Spring.
          .col-12
            .px-4.py-3.bg-c9
              .row
                .col-4
                  p.mb-0 #[b Spring Data para Apache Cassandra.]
                .col-8
                  p.mb-0 Implementación para aplicaciones orientadas a datos.
          .col-12
            .px-4.py-3.bg-c11
              .row
                .col-4
                  p.mb-0 #[b Spring Data para Apache Geode.]
                .col-8
                  p.mb-0 Implementación para aplicaciones orientadas a datos.
    p.mb-5(data-aos="fade-right") A continuación, se presenta un ejemplo de un mapeo para JPA, que es uno de los submódulos de Spring Data. En el ejemplo, se desarrolla la clase Persona, la cual representa una tabla en la base de datos llamada Persona:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12.mb-4
            .p-4.bg-c28
              p.mb-0 #[b 1.] La creación de la tabla se especifica mediante la anotación @Entity y en el atributo name se coloca el nombre de la tabla.
          .col-12
            .p-4.bg-c28
              p.mb-0 #[b 2.] Por medio de la anotación @Column se asigna cada uno de los campos de la tabla de la base de datos a los atributos de la clase Persona con la etiqueta “name” se hace referencia al nombre de la columna de la tabla.
      .col-lg-6(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  @Entity(name = "persona")
                p.mb-0  public class Persona {
                p.mb-0  
                p.mb-0      @Column(name = "id")
                p.mb-0      private Long id;
                p.mb-0  
                p.mb-0      @Column(name = "persona_nombre")
                p.mb-0      private String nombre;
                p.mb-0  
                p.mb-0      @Column(name = "persona_apellido")
                p.mb-0      private String apellido;
                p.mb-0  
                p.mb-0      @Column(name = "persona_telefono")
                p.mb-0      private String telefono;
                p.mb-0  }
    p(data-aos="fade-right") Al extender de la clase #[b CrudRepository], se facilita el uso de métodos como #[b findByNombre], que genera una consulta de todas las personas con el parámetro nombre. En bases de datos relacionales, esta operación se traduce en #[b SELECT * FROM persona WHERE nombre=?]. Este enfoque reduce considerablemente las sentencias SQL, permitiendo obtener consultas dinámicas de forma más eficiente.
    Separador
    #t_5_3
    .titulo-segundo.color-acento-contenido
      h2 5.3 Spring Boot y MySQL
    p(data-aos="fade-right") Spring Boot es una infraestructura liviana que suprime en gran parte la tarea de configurar las aplicaciones fundamentadas en Spring. A diferencia de Spring Framework, Spring Boot realiza una simplificación en cuanto a configuración y el despliegue de las aplicaciones.
    p.mb-5(data-aos="fade-right") Las características de Spring Boot son:
    .row.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.justify-content-center
          .col-10.col-md-8.col-lg.m-0.mb-3
            .p-4.bg-c51
              figure.mb-3
                img(src="@/assets/curso/tema5/img23.svg", style="width: 60px", alt="")
              p.mb-0 Es intuitivo: permite crear aplicaciones rápidamente gracias a sus valores predeterminados.
          .col-10.col-md-8.col-lg.m-0.mb-3
            .p-4.bg-c51
              figure.mb-3
                img(src="@/assets/curso/tema5/img24.svg", style="width: 60px", alt="")
              p.mb-0 Permite crear aplicaciones que son independientes de Spring.
          .col-10.col-md-8.col-lg.m-0.mb-3
            .p-4.bg-c51
              figure.mb-3
                img(src="@/assets/curso/tema5/img25.svg", style="width: 60px", alt="")
              p.mb-0 Incluye los servidores de Undertow, Tomcat o Jetty.
        .row.justify-content-center
          .col-10.col-md-8.col-lg.m-0.mb-3
            .p-4.bg-c51
              figure.mb-3
                img(src="@/assets/curso/tema5/img26.svg", style="width: 60px", alt="")
              p.mb-0 Usualmente realiza la configuración automática de librerías de Spring o de otros.
          .col-10.col-md-8.col-lg.m-0.mb-3
            .p-4.bg-c51
              figure.mb-3
                img(src="@/assets/curso/tema5/img27.svg", style="width: 60px", alt="")
              p.mb-0 No requiere configuraciones de archivos XML.
          .col-10.col-md-8.col-lg.m-0.mb-3
            .p-4.bg-c51
              figure.mb-3
                img(src="@/assets/curso/tema5/img28.svg", style="width: 60px", alt="")
              p.mb-0 Agiliza el desarrollo.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img14.png", style="width: 300px", alt="").m-auto
    p.mb-5(data-aos="fade-right") Spring Boot cuenta con dos mecanismos que permiten la simplificación de los procesos: el contenedor de aplicaciones integrado y los starters.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Contenedor de aplicaciones integrado
    p.mb-5(data-aos="fade-right") La compilación de las aplicaciones web se realiza como un archivo .jar desplegado en un servidor Tomcat, facilitando la distribución de las aplicaciones. Anteriormente, se trabajaba con .war, que si se requiere, se puede seguir utilizando.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Starters
    .row.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p Son los encargados de brindar una variedad de dependencias que se agregan al proyecto; estas pueden ser de terceros o de Spring. Los starters por defecto traen una configuración de valores predeterminados.
        p.mb-0 Otra de las ventajas de Spring Boot es que ofrece un mecanismo que genera la estructura del proyecto automáticamente. Este inicializador crea el archivo pom.xml, el main de la aplicación y un archivo de test para verificar que la aplicación funcione correctamente.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img29.svg", style="width: 200px", alt="alt").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 25.] Inicializador de Spring
          figure
            img(src='@/assets/curso/tema5/img15.png', style='width: 800px', alt='Ilustración de la interacción de distintos usuarios con una aplicación JSP que administra sesiones, destacando operaciones como setAttribute y getAttribute.').m-auto
    .row.bg-c52.mb-5
      .col-12
        .p-5
          p.mb-5(data-aos="fade-right") A continuación, se realizan los pasos para la creación de un proyecto en Spring Boot. Hay que recordar que se deben tener instaladas cualquiera de las herramientas de Entorno de desarrollo y JDK.
          .row.justify-content-center
            .col-lg-8(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row(titulo="Comienza un nuevo proyecto")
                  .col-12
                    p.mb-5 Ingresar a start.spring.io y crear un proyecto web.
                    figure
                      img(src='@/assets/curso/tema5/img16.png', style='width: 650px', alt='Captura de pantalla del Spring Initializr, una herramienta en línea para configurar proyectos Spring Boot. Muestra una interfaz de usuario con opciones para seleccionar el tipo de proyecto, la versión de Spring Boot, dependencias y más, con "Spring Web" seleccionado en las dependencias.').m-auto
                .row(titulo="Ingresa el código")
                  .col-12
                    p.mb-5 Después de descargar el archivo que genera el inicializador, ejecute su IDE y abra el archivo. Una vez ubicado en la clase principal, copie el siguiente código para ejecutar un Hola mundo. Lo que hace el método hello() es recibir un parámetro de tipo string con el nombre de name y después concatenar este parámetro con la palabra "Hello". Esto quiere decir que si se ingresa un nombre "Zulema", la salida sería “Hello Zulema”.
                    figure
                      img(src='@/assets/curso/tema5/img17.png', style='width: 650px', alt='Fragmento de código en Java para una aplicación Spring Boot, mostrando una clase con una anotación @SpringBootApplication y un método mapeado con @GetMapping para responder a peticiones en /hello, que devuelve un saludo personalizado.').m-auto
                .row(titulo="Prueba del proyecto")
                  .col-12
                    p Ahora solo es probar el proyecto. Para esto, abra una consola (Windows + R), ubíquese en la carpeta del proyecto y ejecute el siguiente comando:
                    p.mb-5 #[b mvn spring-boot:run]
                    figure
                      img(src='@/assets/curso/tema5/img18.png', style='width: 650px', alt='Salida de terminal mostrando el proceso de arranque de una aplicación Spring Boot usando Maven, incluyendo mensajes de log sobre la inicialización y el arranque de la aplicación, la configuración de Tomcat y el contexto de la aplicación Spring.').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/j-_0AwuvLl4?si=ot6FRU-1d-IQuBTd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5
      .col-12
        .p-4.bg-c49
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema5/img31.svg', style='width: 80px', alt='').m-auto
            .col(data-aos="fade-left")
              p.mb-0 #[b Spring Boot y MySQL]
              p.mb-0 Para tener una aplicación web completa, es necesario almacenar información. Por esta razón, es importante realizar conexiones con bases de datos. En este ejemplo, se detalla cómo realizar la conexión con la base de datos MySQL.
    p.mb-5 Los requerimientos fundamentales son tener instalado MySQL, el entorno de desarrollo y seguir estos pasos:
    .tarjeta.tarjeta--gris.mb-5(data-aos="fade-right")
      .p-4.p-lg-5
        PasosB.color-primario
          .row.m-1(titulo="Paso")
            .col-12
              p.mb-5 #[b Después de agregar las dependencias], clic en GENERATE y descargará un archivo zip el cuál se debe descomprimir y después importar el proyecto en el IDE, en este caso Spring Tool Suite.
              figure
                img(src='@/assets/curso/tema5/img19.png', style='width: 850px', alt='Captura de pantalla del Spring Initializr mostrando la configuración de un nuevo proyecto Spring Boot. Se han seleccionado varias dependencias como Spring Web, MySQL Driver, y Spring Data JPA, que están destacadas en la interfaz.').m-auto
          .row.m-1(titulo="Paso")
            .col-12
              p.mb-5 #[b Declarar dependencias]. JPA, MySQL JDBC Driver, Web. Como se mostró en el ejemplo anterior, por medio del inicializador se pueden seleccionar las dependencias requeridas, como se muestra en la siguiente imagen.
              figure
                img(src='@/assets/curso/tema5/img20.png', style='width: 650px', alt='Vista del IDE Eclipse con el panel "Package Explorer" vacío, mostrando opciones como "Create Spring Starter Project" e "Import projects", con un enfoque en la opción "Import projects".').m-auto
          .row.m-1(titulo="Paso")
            .col-12
              p.mb-5 #[b Importar el proyecto]. Una vez importado el proyecto, se puede ver cómo queda la estructura.
              figure
                img(src='@/assets/curso/tema5/img21.png', style='width: 550px', alt='Vista del "Package Explorer" en Eclipse mostrando la estructura de un proyecto Spring Boot importado, que incluye directorios para código fuente Java, recursos, y configuraciones, junto con archivos Maven como "pom.xml".').m-auto
    p.mb-5(data-aos="fade-right") El paso siguiente es abrir el archivo “aplication.properties” y configurar todas las propiedades de la conexión así:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  así:
                p.mb-0  1.spring.jpa.hibernate.ddl-auto=update
                p.mb-0  2.spring.datasource.url=jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf8&createDatabaseIfNotExist=true
                p.mb-0  3.spring.datasource.username=root
                p.mb-0  4.spring.datasource.password=password
                p.mb-0  5.spring.jpa.show-sql=true
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4(data-aos="fade-left")
        .p-4.bg-c28
          p A continuación, se explicará cada línea del anterior código que va en el archivo “aplication. properties”.
          p.mb-0 #[b Línea 1:] permite obtener los metadatos de la base de datos. 
          p.mb-0 #[b Línea 2:] se muestra la url de la conexión con el motor de base de datos.
          p.mb-0 #[b Línea 3:] Se especifica el nombre del usuario de la base de datos para la conexión
          p.mb-0 #[b Línea 4:] Se especifica clave de la base de datos para la conexión 
          p.mb-0 #[b Línea 5:] la propiedad true permite utilizar las consultas JPA a realizar en la base de datos.
    p(data-aos="fade-right") Lo que queda es ejecutar la aplicación y comprobar que no existan problemas con la conexión a la base de datos. Para ejecutar, dar clic derecho en el archivo Java, seleccionar la opción >Run As y >Spring Boot App.
    p.mb-5(data-aos="fade-right") Si todo está bien, ahora solo queda ir al motor de bases de datos y verificar si se creó el esquema.
    .row.justify-content-center
      .col-lg-6(data-aos="fade-down")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 26.] Ejecución de la aplicación
          figure
            img(src='@/assets/curso/tema5/img22.png', style='width: 400px', alt='Diagrama del flujo de trabajo de una aplicación web que muestra la interacción entre el cliente, el controlador (Servlet), la vista (JSP) y el modelo (base de datos).').m-auto
    Separador
    #t_5_4
    .titulo-segundo.color-acento-contenido
      h2 5.4 Validaciones
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c25
          p.mb-5(data-aos="fade-right") Es muy importante realizar validaciones cuando se están desarrollando aplicaciones web en Java para impedir que se ingresen datos que afecten al programa. En Spring viene incluido el hibernate-validator en el paquete spring-boot-starter-web, que permite validar valores de los campos beans.
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-left")
              .row
                .col-12
                  .px-4.py-3.bg-c20
                    figure
                      img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c21
                    pre
                      p.mb-0  &lt;dependency>
                      p.mb-0      &lt;groupId>org.springframework.boot&lt;/groupId>
                      p.mb-0      &lt;artifactId>spring-boot-starter-web&lt;/artifactId>
                      p.mb-0      &lt;version>2.0.0.RELEASE&lt;/version>
                      p.mb-0  &lt;/dependency>
          p.mb-5(data-aos="fade-right") Para el ejemplo, se realiza la creación de un bean con unas anotaciones que permiten la validación de ingreso de un usuario.
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-left")
              .row
                .col-12
                  .px-4.py-3.bg-c20
                    figure
                      img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c21
                    pre
                      p.mb-0  @Data
                      p.mb-0  @NoArgsConstructor
                      p.mb-0  public class Usuario {
                      p.mb-0      @NotBlank(message = "Debe ingresar un nombre de usuario")
                      p.mb-0      private String nombreUsuario;
                      p.mb-0  
                      p.mb-0      @NotBlank(message = "Debe ingresar un valor correcto para la edad")
                      p.mb-0      @Pattern(regexp = "^[0-9]{1,2}$", message = "Edad incorrecta")
                      p.mb-0      private String edad;
                      p.mb-0  
                      p.mb-0      @AssertFalse(message = "Debe ser falso")
                      p.mb-0      private Boolean esfalso;
                      p.mb-0  
                      p.mb-0      @Pattern(regexp = "^[0-9]{4}-[0-9]{2}-[0-9]{2}$", message = "No es correcto el formato de la fecha")
                      p.mb-0      private String fechanaciemiento;
                      p.mb-0  }
          p.mb-5(data-aos="fade-right") Una vez se crean las anotaciones, se debe crear el controlador.
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-left")
              .row
                .col-12
                  .px-4.py-3.bg-c20
                    figure
                      img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c21
                    pre
                      p.mb-0  @Controller
                      p.mb-0  public class UserController {
                      p.mb-0      @RequestMapping("/usuario")
                      p.mb-0      public void create(@RequestBody @Validated Usuario usuario) {
                      p.mb-0          System.out.println("Hola: " + usuario.getNombreUsuario());
                      p.mb-0      }
                      p.mb-0  }
          p.mb-5(data-aos="fade-right") Una vez se realice el controlador, se puede realizar la prueba enviando una solicitud POST.
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-left")
              .row
                .col-12
                  .px-4.py-3.bg-c20
                    figure
                      img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c21
                    pre
                      p.mb-0  {"nombreUsuario": "Ana", "edad": 120, "esFalso": true, "nacimiento": "21010-21-12"}
          .row.align-items-center.justify-content-center
            .col-lg-auto(data-aos="fade-right")
              p La verificación que mostraría el resultado es:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 No es correcto el formato de la fecha.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Debe ser falso.
                li.d-flex
                  i.fas.fa-code(style="color:#1682FB")
                  |
                  p.mb-0 Debe ingresar un valor correcto para la edad.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema5/img23.png', style='width: 250px', alt='')

</template>

<script>
export default {
  name: 'Tema5',
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
