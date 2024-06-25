<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Java con JDBC
    .row.bg-c3
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") Cuando se habla de JDBC (#[i Java Database Connectivity]), se hace referencia a un driver que encapsula un conjunto de clases e interfaces escritas en Java, creadas para establecer conexiones, enviar sentencias SQL y procesar los datos resultantes sobre bases de datos relacionales.
          .row.justify-content-center.mb-5
            .col-lg-8
              .p-4.bg-c4(data-aos="fade-down")
                .titulo-sexto.color-acento-contenido.mb-4
                  p.mb-0 #[b Figura 1.] Java con JDBC
                figure.d-none.d-lg-block
                  img(src="@/assets/curso/tema1/img2.svg", style="width: 600px", alt="Diagrama que representa la conexión entre una aplicación Java utilizando JDBC y un sistema gestor de bases de datos relacionales, detallando la comunicación entre el equipo del cliente y el servidor de la base de datos.").m-auto
                figure.d-block.d-lg-none
                  img(src="@/assets/curso/tema1/img2m.svg", style="width: 240px", alt="Diagrama que representa la conexión entre una aplicación Java utilizando JDBC y un sistema gestor de bases de datos relacionales, detallando la comunicación entre el equipo del cliente y el servidor de la base de datos.").m-auto
          p.mb-5(data-aos="fade-right") En términos más generales, JDBC es uno de los puentes que puede ser utilizado en Java para comunicar una aplicación Java con un servidor de bases de datos relacionales. Trabajar con conexiones a bases de datos mediante JDBC implica realizar cuidadosamente las siguientes acciones:
          .row.justify-content-center.mb-4.mb-lg-5(data-aos="fade-left")
            .col-md-6.col-lg.mb-4.mb-lg-0
              .p-4.bg-c5
                figure.mb-4
                  img(src="@/assets/curso/tema1/img4.svg", style="width: 80px", alt="alt")
                p.mb-0 Manejar manuelmente las conexiones y desconexiones a la base de datos.
            .col-md-6.col-lg.mb-4.mb-lg-0
              .p-4.bg-c5
                figure.mb-4
                  img(src="@/assets/curso/tema1/img5.svg", style="width: 80px", alt="")
                p.mb-0 Ser cuidadosos en la escritura de sentencias SQL a ser ejecutadas en el servidor.
            .col-md-6.col-lg.mb-4.mb-lg-0
              .p-4.bg-c5
                figure.mb-4
                  img(src="@/assets/curso/tema1/img6.svg", style="width: 80px", alt="")
                p.mb-0 Conocer las relaciones existentes en el modelo de base de datos a manipular.
            .col-md-6.col-lg.mb-4.mb-lg-0
              .p-4.bg-c5
                figure.mb-4
                  img(src="@/assets/curso/tema1/img7.svg", style="width: 80px", alt="")
                p.mb-0 Conocer las características de la base de datos a manipular, ya que esto podría afectar las consultas.
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c6(data-aos="fade-down")
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/tema1/img8.svg", style="width: 100px", alt="").m-auto
                  .col
                    p.text-white.mb-0 #[b Tenga presente]
                    p.text-white.mb-0 Cada sistema gestor de base de datos (SGBD) provee su propio JDBC para la manipulación de sus sistemas con la aplicación Java. Dependiendo de la base de datos a la que se desee conectar, se debe descargar el driver J DBC correspondiente.
          p.mb-5(data-aos="fade-right") La siguiente tabla muestra las direcciones oficiales para la descarga del driver JDBC para las bases de datos relacionales más comúnmente utilizadas en la industria del software.
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema1/img2.png", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              .p-4.p-lg-5.bg-c4
                .titulo-sexto.color-acento-contenido.mb-4
                  p.mb-0 #[b Tabla 1.] #[i Drivers] JDBC para SGBD
                .tabla-a.color-primario
                  table
                    thead
                      tr
                        th.text-white(style="width: 25%") Base de Datos
                        th.text-white Página oficial para descarga de JDBC
                    tbody
                      tr
                        td Mysql
                        td
                          a(href="https://dev.mysql.com/downloads/connector/j/" target="_blank") https://dev.mysql.com/downloads/connector/j/
                      tr
                        td SQL Server
                        td
                          a(href="https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15" target="_blank") https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15
                      tr
                        td Oracle
                        td
                          a(href="https://www.oracle.com/database/technologies/jdbc-upc-downloads.html" target="_blank") https://www.oracle.com/database/technologies/jdbc-upc-downloads.html
                      tr
                        td PostgreSQL
                        td
                          a(href="https://jdbc.postgresql.org/download.html" target="_blank") https://jdbc.postgresql.org/download.html
                      tr
                        td DB2
                        td
                          a(href="https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads" target="_blank") https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Clases e interfaces Java
    .row.mb-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-1
          img(src="@/assets/curso/tema1/img9.svg", style="width: 70px", alt="").m-auto
      .col(data-aos="fade-left")
        p.mb-0 Además de disponer del driver JDBC correspondiente para la base de datos que se desea conectar, se requiere un conjunto adicional de clases e interfaces Java para hacer uso del driver. Para ello, es necesario importar los paquetes java.sql o javax.sql. A continuación, se describen algunas de las clases más importantes dentro de estas librerías, y otros elementos, para gestionar correctamente una base de datos por medio de JDBC.
    .row.justify-content-center.mb-5
      .col-lg-10
        TabsA.color-acento-botones(data-aos="fade-up")
          .tarjeta.color-acento-botones.p-4(titulo="DriverManager")
            p #[b DriverManager]
            p.mb-0 Clase estática que permite la gestión del driver JDBC disponible para la aplicación. Por medio del método getConnection, crea una instancia de tipo Connection mediante la cual se realiza el flujo de envío y recibo de información hacia y desde la base de datos destino.
          .tarjeta.color-acento-botones.p-4(titulo="Connection")
            p #[b Connection]
            p.mb-0 Interfaz Java que permite establecer una conexión con una base de datos específica por medio de la cual se puede extraer información de la descripción de tablas, procedimientos almacenados y ejecutar sentencias SQL. Se instancia un objeto de este tipo invocando el método getConnection del DriverManager, al cual se le deben pasar como parámetros las credenciales (usuario y contraseña) del usuario de la base de datos destino y la cadena de conexión correspondiente.
          .tarjeta.color-acento-botones.p-4(titulo="Statement")
            p #[b Statement]
            p.mb-0 Interfaz Java usada para la ejecución de sentencias SQL estáticas y retornar los resultados que son producidos por estas sentencias. Una instancia de este tipo se obtiene de la ejecución del método createStatement() desde una instancia de un objeto de tipo Connection.
          .tarjeta.color-acento-botones.p-4(titulo="ResultSet")
            p #[b ResultSet]
            p.mb-0 Tipo especial de dato que representa un conjunto de datos de tipo tabular, ideal para referenciar resultados obtenidos por medio de una consulta que retorna un conjunto de datos estructurados, como, por ejemplo, los de una consulta SELECT. Un ResultSet es un apuntador, tipo cursor, direccionado a la primera posición de toda la estructura tabular que está referenciando.
          .tarjeta.color-acento-botones.p-4(titulo="El método next()")
            p #[b El método next()]
            p.mb-0 Además de desplazarse una posición de forma lineal dentro de la estructura, también devuelve como resultado un valor booleano para informar si el desplazamiento realizado encontró, o no, un conjunto de datos válidos. Así es posible determinar cuándo se alcanza el final de los elementos.
    .row
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img3.png", style="width: 320px", alt="").m-auto
      .col-lg-9(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2
              img(src="@/assets/curso/tema1/img11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Clases e interfaces Java
                  p Para profundizar y conocer los elementos más importantes de las clases e interfaces Java más usadas, se debe visitar el documento Clases e interfaces Java, disponible en el siguiente enlace.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-link
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Conexión a base de datos desde aplicación Java
    p.mb-0(data-aos="fade-right") Garantizar la conexión a una base de datos requiere la aplicación concreta de los pasos ya explicados. 
    p.mb-5(data-aos="fade-right") Los pasos que deben realizarse para garantizar una conexión a base de datos desde una aplicación Java, utilizando JDBC, son:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img4.png", style="width: 390px", alt="").m-auto
      .col-lg-8(data-aos="fade-left")
        .p-4.bg-c7
          ol.lista-ol--cuadro.lista-ol.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              |
              p.mb-0 Descarga del driver JDBC (Si no se tiene).
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              |
              p.mb-0 Importar el driver descargado en las librerías del proyecto JAVA.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              |
              p.mb-0 Importar el paquete #[b java.sql.*].
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4
              |
              p.mb-0 Inicializar el driver usando la sentencia #[b Class.forName].
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5
              |
              p.mb-0 Crear un Objeto de tipo Connection por medio del #[b DriverManager].
            li.d-flex
              .lista-ol--cuadro__vineta
                span 6
              |
              p.mb-0 Crear un objeto #[b Statement] que permite configurar las sentencias SQL desde el #[b Objeto de Connection] creado en el unto anterior.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 7
              |
              p.mb-0 Ejecutarla sentencia SQL usando cualquiera de los métodos del objeto #[b Statement].
            li.d-flex
              .lista-ol--cuadro__vineta
                span 8
              |
              p.mb-0 Procesar los resultados de la sentencia ejecutada por medio de un #[b ResultSet] y sus métodos de apoyo.
    p.mb-5(data-aos="fade-right") Para afianzar los conocimientos logrados hasta este punto, se recomienda revisar el video propuesto a continuación. En este, se presenta un ejemplo sencillo y se describen las prácticas de cada paso descrito.
    .row.justify-content-center
      .col-lg-10
        figure(data-aos="fade-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3fzWQ5i_4RU?si=LpvG6xgmcn-Xz7gZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
