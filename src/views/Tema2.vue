<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Servlets y JSP
    .row.mb-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-1
          img(src="@/assets/curso/tema1/img9.svg", style="width: 70px", alt="").m-auto
      .col(data-aos="fade-left")
        p.mb-0 Los Servlets y los JSP (Java Server Pages), son tecnologías que se utilizan para realizar ejecuciones en servidores Java, permitiendo extender los servicios de un servidor web. (Berzal, 2007)
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.bg-c4(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 2]. Java con JDBC
          figure
            img(src="@/assets/curso/tema2/img1.svg", style="width: 600px", alt="Diagrama de una aplicación web que describe cómo un ServletFilter gestiona las solicitudes HTTP hacia Servlets, JSPs y archivos estáticos dentro de la aplicación.").m-auto
    .row.mb-5
      .col-12
        .p-4.bg-c7(data-aos="fade-left")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/img2.svg", style="width: 100px", alt="").m-auto
            .col
              p.mb-0 Un ejemplo sencillo de lo que se puede hacer con JSP y Servlet es que, por medio de una página JSP, se puede crear un formulario que contenga una serie de datos como: primer nombre, segundo nombre, edad y correo. Luego, a través de un servlet, se realiza el envío de estos registros para que sean almacenados en una base de datos y, finalmente, el usuario pueda acceder a esta información.
    p.mb-5(data-aos="fade-right") Conozca, a continuación, los procesos principales de estas tecnologías y algunos aspectos generales del uso de JSP y Servlet:
    .row
      .col-12
        .p-4.p-lg-5.bg-c12(data-aos="fade-left")
          .tarjeta.tarjeta--azul
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.m-1
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Los servlets]
                    p.mb-0 Adecuan el proceso de las peticiones que entran al servidor, procesan los datos de formularios, generan contenidos de varios tipos y redireccionan las peticiones.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema2/img2.png', alt='')
                .row.m-1
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b JSP (#[i JavaServer Pages])]
                    p.mb-0 Es un código Java que se ejecuta en un servidor remoto. Lee las acciones del usuario desde formularios HTML, donde el servidor realiza consultas, usualmente a bases de datos, para obtener la información solicitada y devolver una página HTML dinámica y en tiempo real.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema2/img3.svg', alt='Diagrama simplificado de una arquitectura web que involucra JSP y Servlets. Muestra un portátil conectado a un Servlet que interacciona con una base de datos y un archivo JSP, representando el flujo de datos entre estos componentes.')
                .row.m-1
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Los archivos JSP]
                    p.mb-0 Están formados por código Java dentro de etiquetas &lt;html&gt; con extensión .jsp. Estos archivos deben ser guardados en la carpeta del contenido web del servidor. El código JSP inicia con <% %>.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema2/img3.png', alt='')
                .row.m-1
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Ejemplo]
                    p.mb-0 Este es un ejemplo sencillo de código JSP.
                  .col-lg-7
                    .p-3.bg-c13
                      pre
                        p.mb-0 &lt;%@ page language='java' contentType='text/html; charset=iso-8859-1'%>
                        p.mb-0 &lt;%@ page import='java.util.Date' %>
                        p.mb-0 &lt;html>
                        p.mb-0 &lt;head>
                        p.mb-0     &lt;title>Hola Planeta&lt;/title>
                        p.mb-0 &lt;/head>
                        p.mb-0 &lt;body>
                        p.mb-0     &lt;p>Bienvenido a la página JSP. &lt;/p>
                        p.mb-0     &lt;p>La hora del servidor es <%= new Date() %> &lt;/p>
                        p.mb-0     &lt;% out.println("HOLA PLANETA"); %>
                        p.mb-0 &lt;/body>
                        p.mb-0 &lt;/html>
                .row.m-1
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b #[i Software] requerido]
                    p.mb-0 El #[i software] necesario para trabajar con JSP y servlets es: Java JEE IDE (NetBeans, Eclipse) y un servidor web (Tomcat).
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema2/img4.png', alt='Diagrama conceptual de dos desarrolladores trabajando con el entorno de desarrollo Eclipse IDE, comparando las versiones para Java EE y Java. Los personajes están interactuando con elementos gráficos que representan herramientas y código en una interfaz de Eclipse IDE ampliada.')
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Introducción a servlets
    p.mb-5(data-aos="fade-right") Servlet es un programa que se lleva a cabo en una aplicación o servidor web; se emplea como una capa que intercede entre la base de datos y el servidor de peticiones HTTP, por medio de un navegador web o cualquier otro cliente HTTP (Gómez, 2017).
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.bg-c4(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 3]. Arquitectura de un servlet
          figure
            img(src="@/assets/curso/tema2/img4.svg", style="width: 350px", alt="Diagrama conceptual que explica cómo un navegador web interactúa con un programa Servlet mediante el protocolo HTTP, conectado a un servidor de base de datos.").m-auto
    p.mb-5(data-aos="fade-right") A continuación, se presentan algunas ventajas de utilizar servlets:
    .row.justify-content-center.mb-4.mb-lg-5(data-aos="fade-up")
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c14
          figure.mb-4
            img(src="@/assets/curso/tema2/img5.svg", style="width: 80px", alt="alt")
          p.mb-0 #[b Rendmiento:] a ciferencia de CGI (#[i Common Gateway Interface]), el rendiniento de un servlet es mucho mejor.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c14
          figure.mb-4
            img(src="@/assets/curso/tema2/img6.svg", style="width: 80px", alt="alt")
          p.mb-0 No necesita procesos independientes para operar las solicitudes del cliente.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c14
          figure.mb-4
            img(src="@/assets/curso/tema2/img7.svg", style="width: 80px", alt="alt")
          p.mb-0 Dado que los serviets están escritos en Java, son independentes de la plataforma.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .p-4.bg-c14
          figure.mb-4
            img(src="@/assets/curso/tema2/img8.svg", style="width: 80px", alt="alt")
          p.mb-0 #[b Fiabilidad:] resguardan los recursos del servidor gracias a la seguridad proporcionada por Java.
    p.mb-5(data-aos="fade-right") Las tareas principales de un servlet son:
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-2
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img10.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Datos de transmisión]
              p.mb-0 Se encarga de leer claramente los datos de transmisión de un cliente (navegador), incluyendo un formulario HTML.
        .row.mb-2
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img11.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Remisión de peticiones HTTP]
              p.mb-0 Remite una petición HTTP de los datos contenidos en el navegador, incluyendo #[i cookies].
        .row.mb-2
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img12.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Tratamiento de datos]
              p.mb-0 Trata los datos y produce resultados accediendo a la base de datos.
        .row.mb-2
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img13.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Envío de documentos]
              p.mb-0 Envía documentos al cliente (navegador), los cuales pueden ser de varios tipos como textos, binarios, etc.
        .row
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img14.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b Envíos de respuesta]
              p.mb-0 Realiza envíos de respuesta HTTP implícita al cliente (navegador).
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img5.png', style='width: 340px', alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ciclo de vida de un Servlet
    .row.mb-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-1
          img(src="@/assets/curso/tema1/img9.svg", style="width: 70px", alt="").m-auto
      .col(data-aos="fade-left")
        p.mb-0 A diferencia de las clases en Java, que inician con un método main(), en los servlets se invocan ciertos métodos al recibir peticiones. A esta metodología se le llama ciclo de vida de un servlet y se compone de tres métodos: init, service y destroy.
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.bg-c4(data-aos="fade-up")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 4]. Ciclo de vida de un Servlets
          figure
            img(src="@/assets/curso/tema2/img16.svg", style="width: 500px", alt="Flujo de proceso de un Servlet en Java, detallando el ciclo de vida desde la inicialización hasta la destrucción, incluyendo los métodos service, doGet y doPost.").m-auto
    p(data-aos="fade-right") Conocer el ciclo de vida de un Servlet; procurar llevar registro, en la libreta personal de apuntes, de los aspectos más importantes y destacados.
    .row.bg-c18.mb-5(data-aos="fade-left")
      .col-12
        .p-5
          .row.justify-content-center
            .col-11.col-md-10.col-lg.mb-5.mb-lg-0
              .px-4.pb-4.bg-c19.shadow
                figure.fig-p2
                  img(src="@/assets/curso/tema2/img17.svg", style="width: 100px", alt="alt").m-auto
                p.text-center #[b Init]
                p.mb-0 El servlet inicia por medio de una llamada al método #[b init()]. Este método está definido para ser llamado una sola vez. Cuando el servlet es invocado, se crea una instancia del servlet, generando un hilo nuevo para cada solicitud.
            .col-11.col-md-10.col-lg.mb-5.mb-lg-0
              .px-4.pb-4.bg-c19.shadow
                figure.fig-p2
                  img(src="@/assets/curso/tema2/img18.svg", style="width: 100px", alt="alt").m-auto
                p.text-center #[b Service]
                p.mb-0 En segundo lugar, es llamado el método de servicio para gestionar la solicitud del cliente. La función del método #[b service] es atender las peticiones #[b GET] y #[b POST] de los clientes; cuando se llama a este método, invoca a #[b doGet()] y #[b doPost()], dependiendo del caso.
            .col-11.col-md-10.col-lg
              .px-4.pb-4.bg-c19.shadow
                figure.fig-p2
                  img(src="@/assets/curso/tema2/img19.svg", style="width: 100px", alt="alt").m-auto
                p.text-center #[b Destroy]
                p.mb-0 Se llama al método #[b destroy] para finalizar el servlet. Como su nombre lo indica, se encarga de destruir el servlet sobrescribiendo el método #[b destroy()].
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ejemplo de Servlet
    p.mb-5(data-aos="fade-right") El siguiente código presenta un "Hola Mundo" en un servlet, con sus métodos de ciclo de vida.
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0 1. 	public class HolaMundo extends HttpServlet &lcub;
                p.mb-0 2. 	private String mensaje;
                p.mb-0 3. 	public void init () throws ServletException
                p.mb-0 4.	    { // inicia la asignación de mensaje hola mundo
                p.mb-0 5.               mensaje = “Hola Mundo”;
                p.mb-0 6.         }
                p.mb-0 7.     public void doGet (HttpServletRequest request,HttpServletResponse response) throws
                p.mb-0         ServletException, IOException
                p.mb-0 8.         { // Se especifica el formato de la respuesta utilizando método getWriter
                p.mb-0 9.               salida = response.getWriter ();
                p.mb-0 10.         // Genera respuesta de la petición
                p.mb-0 11.             salida.println("&lt;h1>" + mensaje + "&lt;/ h1>");
                p.mb-0 12.        }
                p.mb-0 13.   public void destroy ()
                p.mb-0 14.   {.}
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img6.png', style='width: 380px', alt='').m-auto
    p.mb-5(data-aos="fade-right") En el código anterior, se hace lo siguiente:
    .row.mb-5
      .col-auto.pe-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img7.png', style='width: 280px', alt='').m-auto
      .col.bg-c22(data-aos="fade-left")
        .p-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img22.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 Se crea la clase #[b HolaMundoServlet] que hereda de #[b HttpServlet].
          .bg-c23.mb-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img23.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 La clase #[b HttpServlet] contiene el método #[b doGet] que se encarga de recibir la petición del usuario desde el navegador.
          .bg-c23.mb-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img24.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 EI método #[b doGet] recibe dos argumentos: #[b request] (para procesar la petición) y #[b response] (para dar respuesta a la petición).
          .bg-c23.mb-3
          .row.align-items-center
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img24.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 Se sobrescribe el método #[b doGet] para crear la lógica de respuesta al usuario, se establece el formato de la respuesta en HTML y se ctEa el contenido de la respuesta.
    p.mb-5(data-aos="fade-right") Explore el vídeo que se propone para ahondar en los aspectos más importantes de Servlet.
    .row.bg-c24
      .col-12
        .px-5
          .row.justify-content-center
            .col-lg-10
              figure(data-aos="fade-down")
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/MWQSwr_lvEE?si=Q3KHXtjE0ANk2Fpz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          Separador
          #t_2_2
          .titulo-segundo.color-acento-contenido
            h2 2.2 Formularios HTML con Servlets
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              p Las páginas web contienen formularios HTML para la solicitud de información al usuario. El proceso de recolección de datos y respuesta de este formulario se debe realizar por medio de un programa. Esto lo hace un servlet que recoge las peticiones de un formulario y las procesa.
              p La declaración de un formulario HTML se hace por medio de la etiqueta &lt;form>, donde es primordial que se especifique el método por el que se realizará el envío de los datos, los cuales pueden ser get o post.
              p.mb-0 A continuación, se presentan los aspectos más relevantes en lo relativo a formularios HTML con servlets:
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img9.png', style='width: 330px', alt='').m-auto
          .row.justify-content-center
            .col-lg-10
              figure(data-aos="fade-down")
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/6KkrakwqL7Y?si=sn2nMD7qnRQdDPGm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 HTTP #[i Session]
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Las sesiones se crean para hacer un seguimiento y memorizar las acciones de un usuario en un sitio web. Las sesiones en Java permiten guardar información entre las diversas peticiones HTTP, utilizando una clase que realiza el seguimiento de las sesiones; estos objetos también se almacenan del lado del servidor.
        .row.mb-3
          .col-12
            .p-3.bg-c7
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img26.svg', style='width: 70px', alt='').m-auto
                .col
                  p.mb-0 Para poder hacer uso de este objeto, es necesario obtener un objeto de la sesión para poder escribir en él, eliminarlo o leerlo, incluso después de que la sesión haya sido cerrada.
        p Los métodos más utilizados de HttpSession son:
        .row
          .col-12
            .p-3.bg-c25
              p #[b.txt-c1 getId()] Retorna el identificador que es asignado a la sesión. Se utiliza para la identificación de la sesión.
              p #[b.txt-c1 isNew()] Retorna el valor booleano true en caso de que el cliente no tenga una sesión.
              p #[b.txt-c1 setAttribute()] Establece un objeto en la sesión, empleando un nombre explícito.
              p #[b.txt-c1 getAttribute()] Retorna el objeto que fue asignado a la sesión, identificado con el nombre que le fue asignado.
              p.mb-0 #[b.txt-c1 setInactiveInterval()] Detalla el mayor tiempo que puede existir entre las peticiones continuas del cliente.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img10.png', style='width: 330px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c6(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img28.svg', style='width: 70px', alt='').m-auto
            .col
              p.text-white.mb-0 El método utilizado para obtener la sesión de un usuario es #[b getSession()] este método regresa una interfaz de tipo #[b HttpSession], Esta interfaz está dentro del paquete javax. #[b servlet.http] y es usada por el contenedor de páginas JSP que permite la creación de una sesión entre el cliente y el servidor.
              p.text-white.mb-0 #[b <%HttpSession session = request.getSession(); %>]
    p.mb-5(data-aos="fade-right") A continuación, se puede conocer el funcionamiento básico de las sesiones:
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.bg-c4(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 5]. HTTP #[i Session]
          figure.d-none.d-lg-block
            img(src="@/assets/curso/tema2/img29.svg", style="width: 800px", alt="Ilustración de cómo diferentes usuarios interactúan con una aplicación JSP que administra sesiones, detallando operaciones como setAttribute y getAttribute.").m-auto
          figure.d-block.d-lg-none
            img(src="@/assets/curso/tema2/img29m.svg", style="width: 350px", alt="Ilustración de cómo diferentes usuarios interactúan con una aplicación JSP que administra sesiones, detallando operaciones como setAttribute y getAttribute.").m-auto
    .row.justify-content-center(data-aos="fade-right")
      .col-10.col-md-6.col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img30.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 1]
              p.text-center Analice detenidamente la gráfica e identifique cómo representa a tres usuarios que navegan por el mismo stio web.
      .col-10.col-md-6.col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img31.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 2]
              p.text-center Cada uno de estos tres usuarios accede al archivo JSP, el cual crea un objeto de sesión único para cada uno de ellos.
      .col-10.col-md-6.col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img32.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 3]
              p.text-center La gráfica también presenta cómo estos objetos de sesión son guardados en la memoria del servidor. Estos permiten acceder a una serie de métodos que pertenecen a los objetos de tipo sesión.
      .col-10.col-md-6.col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img33.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 4]
              p.text-center EI método setAttribute tiene dos parámetros (nombre, objeto), donde el objeto es el que se almacenará en la sesión.
      .col-10.col-md-6.col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img34.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 5]
              p.text-center Identifique cómo eI método getAttribute devuelve eI objeto que se ha almacenado en la sesión.
      .col-10.col-md-6.col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img35.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 6]
              p.text-center Revise en la gráfica la representación de cómo el método isNew permite comprobar si la sesión es nueva o no.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Elementos de JSP
    .row.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Las sesiones se crean para hacer un seguimiento y memorizar las acciones de un usuario en un sitio web. Las sesiones en Java permiten guardar información entre las diversas peticiones HTTP, utilizando una clase que realiza el seguimiento de las sesiones; estos objetos también se almacenan del lado del servidor. Para poder hacer uso de este objeto, es necesario obtener un objeto de la sesión para poder escribir en él, eliminarlo o leerlo, incluso después de que la sesión haya sido cerrada.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img36.svg', style='width: 190px', alt='').m-auto
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Códigos")
            figure.mb-3
              img(src='@/assets/curso/tema2/img37.svg', style='width: 120px', alt='')
            p #[b Códigos]
            p.mb-0 Brindan información general de la página y muestran lo que debe hacer el motor JSP con la página JSP. Para indicar una directiva se utiliza el símbolo arroba (@). Existen tres tipos: Page, Include y Taglib.
          .tarjeta.color-acento-botones.p-4(titulo="Directivas")
            figure.mb-3
              img(src='@/assets/curso/tema2/img38.svg', style='width: 120px', alt='')
            p #[b Directivas]
            p.mb-0 Brindan información general de la página y muestran lo que debe hacer el motor JSP con la página JSP. Para indicar una directiva se utiliza el símbolo arroba (@). Existen tres tipos: Page, Include y Taglib.
          .tarjeta.color-acento-botones.p-4(titulo="Acciones")
            figure.mb-3
              img(src='@/assets/curso/tema2/img39.svg', style='width: 120px', alt='')
            p #[b Acciones]
            p.mb-0 Facilitan al motor datos referentes a las acciones que debe realizar cuando se procesa la página (redirecciones). Hay 7 tipos: Param, Forward, Include, UseBean, getProperty, setProperty, Plugin.
          .tarjeta.color-acento-botones.p-4(titulo="Inserción de código<br>Java")
            figure.mb-3
              img(src='@/assets/curso/tema2/img40.svg', style='width: 120px', alt='')
            p #[b Inserción de código Java]
            p.mb-0 Existen tres formas para insertar código Java en JSP: Expresiones #[b <%= expresión java %>], Scriptlets #[b <% varias líneas de código java %>], Declaraciones #[b <%! Declara variables o métodos %>].
          .tarjeta.color-acento-botones.p-4(titulo="Expresiones")
            figure.mb-3
              img(src='@/assets/curso/tema2/img41.svg', style='width: 120px', alt='')
            p #[b Expresiones]
            p.mb-0 Encerradas en la etiqueta #[b <%= expresión %>], evalúan la expresión para convertir su resultado en un String, siendo este insertado en la salida. Solo tienen una línea de código. Ejemplos: #[b <%= new Date() %>, <%= 10+1 %>, <%= 10&lt;4 %>].
          .tarjeta.color-acento-botones.p-4(titulo="Scriptlets")
            figure.mb-3
              img(src='@/assets/curso/tema2/img41.svg', style='width: 120px', alt='')
            p #[b Scriptlets]
            p.mb-0 Inician con #[b <% y terminan con %>]. No tienen signo igual y pueden agregar varias líneas de Java, como bucles y condicionales. Ejemplo: #[b <% for(int i=0; i&lt;10; i++) System.out.println("La cantidad es " + i); %>].
          .tarjeta.color-acento-botones.p-4(titulo="Declaraciones")
            figure.mb-3
              img(src='@/assets/curso/tema2/img42.svg', style='width: 120px', alt='')
            p #[b Declaraciones]
            p.mb-0 Inician con #[b <%! y terminan con %>]. Se pueden escribir varias líneas de código y realizar declaraciones. Ejemplo: #[b <%! private int total; public int suma(int a, int b) { total = a + b; return total; } %>].
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img11.png', style='width: 330px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Para afianzar sus conocimientos en elementos JSP, le invitamos a revisar el siguiente vídeo.
    .row.justify-content-center
      .col-lg-10
        figure(data-aos="fade-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/1TNloswji-4?si=hpP6_CWbeNiTL18G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 MVC
    p(data-aos="fade-right") El MVC (Modelo-Vista-Controlador) es un patrón de diseño estándar que se utiliza para crear aplicaciones dinámicas con Java. Consiste en separar la parte lógica de los proyectos de la parte visual, integrando servlets y JSP. En este patrón, los servlets se encargan de la parte lógica y los JSP de la parte visual.
    p(data-aos="fade-right") División de la aplicación realizada por el patrón:
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.bg-c4(data-aos="fade-up")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 5]. Arquitectura MVC
          figure
            img(src="@/assets/curso/tema2/img43.svg", style="width: 600px", alt="alternativo: Diagrama del flujo de una aplicación web, detallando la interacción entre el cliente, el controlador (Servlet), la vista (JSP) y el modelo (base de datos).").m-auto
    .row
      .col-lg.m-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img44.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b El modelo]
              p.mb-0 Realiza el almacenamiento y la manipulación de los datos.
      .col-lg.m-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        .row
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img45.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b La vista]
              p.mb-0 Se encarga de la presentación con la que el usuario realizará la interacción, habitualmente en HTML.
      .col-lg.m-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        .row.h-100
          .col-md-auto.bg-c15
            .p-3
              figure
                img(src="@/assets/curso/tema2/img46.svg", style="width: 80px", alt="alt").m-auto
          .col.bg-c16
            .p-3
              p.mb-0 #[b El controlador]
              p.mb-0 Recoge los datos de entrada que envía el usuario, realiza la solicitud de acciones al modelo y modera la vista.

</template>

<script>
export default {
  name: 'Tema2',
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
