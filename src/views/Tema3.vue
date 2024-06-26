<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fundamentos de React JS
    p.mb-5(data-aos="fade-right") React JS es una nueva tecnología importante para la construcción de software en su componente Front-end, que requiere tener en cuenta algunas consideraciones, como se pueden conocer a continuación:
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
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
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style='width: 370px', alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white ¿Qué es React JS?
    .row.mb-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-1
          img(src="@/assets/curso/tema3/img1.svg", style="width: 80px", alt="").m-auto  
      .col(data-aos="fade-left")
        p.mb-0 Es una biblioteca JavaScript de código abierto, desarrollada por la multinacional Facebook para crear interfaces de usuario. Es importante tener en cuenta que una biblioteca o librería es un conjunto de funcionalidades ya construidas y reutilizables siguiendo su sintaxis. Su principal objetivo, además de facilitar el desarrollo de aplicaciones de una sola página, es ser sencilla, declarativa y fácil de combinar.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c6(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img2.svg', style='width: 70px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b ¡Importante!] Los datos deben ser atractivos, entendibles y accesibles para el usuario. Para esto, se deben tener en cuenta los objetivos de alistamiento y preparación de la información.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white ¿Qué es JSX?
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mt-1
          img(src="@/assets/curso/tema3/img1.svg", style="width: 80px", alt="").m-auto  
      .col(data-aos="fade-left")
        p.mb-0 Su nombre viene de la composición de JavaScript (JS) + XML = (JSX) y corresponde a la sintaxis propuesta en React JS para escribir elementos de interfaz web compuestos por JavaScript + HTML, donde el HTML sigue las normas de código bien formado XML.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Instalando React JS
    p.mb-5(data-aos="fade-right") Las siguientes instrucciones presentan el proceso de instalación para sistemas operativos Linux versión Ubuntu 20.04.3 LTS y Windows. En ambos casos, primero se necesita instalar el servidor denominado Node y el manejador de paquetes npm.
    .tarjeta.tarjeta--gris.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        PasosB.color-primario
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Ingrese a la pestaña #[b #[i DOWNLOADS]].
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img2.png', style='width: 650px', alt='Página principal del sitio web de Node.js, destacando las últimas versiones de seguridad disponibles y opciones de descarga para Linux.').m-auto
          .row.m-1(titulo="Paso")
            .col-12
              p.mb-5 Ingrese a la página oficial de Node.js: 
                |
                a(href="https://nodejs.org/en/" target="_blank") https://nodejs.org/en/
                | .
              figure
                img(src='@/assets/curso/tema3/img3.png', style='width: 750px', alt='Sección de descargas en el sitio web de Node.js, mostrando diferentes versiones para Windows, macOS y código fuente, incluyendo detalles sobre las arquitecturas soportadas como x64 y ARM.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Ingrese a la opción #[b #[i Installing Node.js via package manager]].
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img4.png', style='width: 650px', alt='Información sobre la instalación de Node.js a través de gestores de paquetes, mencionando que los paquetes son mantenidos por sus respectivos empaquetadores.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Ingrese a la opción #[b #[i Debian and Ubuntu based Linux distributions]].
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img5.png', style='width: 650px', alt='Lista de sistemas operativos compatibles para la instalación de Node.js, incluyendo Android, Arch Linux, CentOS, entre otros.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Ingrese a la opción #[b #[i Node.js binary distributions]].
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img6.png', style='width: 650px', alt='Detalles específicos para distribuciones basadas en Debian y Ubuntu sobre cómo obtener distribuciones binarias de Node.js desde NodeSource y alternativas disponibles.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Ingrese a la opción #[b #[i Installation instructions]].
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img7.png', style='width: 650px', alt='Página de NodeSource mostrando la compatibilidad de sus distribuciones binarias de Node.js con sistemas operativos como Debian, Ubuntu, RedHat, entre otros.').m-auto
          .row.m-1(titulo="Paso")
            .col-12
              p.mb-5 Desde línea de comandos en #[b Ubuntu], ingrese las siguientes instrucciones. Si no tiene instalado #[b #[i curl]], ingrese: #[b #[i sudo snap install curl]].
              figure
                img(src='@/assets/curso/tema3/img8.png', style='width: 950px', alt='Instrucciones de terminal para instalar Node.js en Ubuntu usando curl para descargar el script desde NodeSource y luego instalarlo usando apt-get.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Vuelva a ejecutar: curl -fsSL #[b #[i https://deb.nodesource.com/setup_14.x]]
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img9.png', style='width: 650px', alt='Pantalla de terminal mostrando la ejecución del comando curl para instalar Node.js en un sistema basado en Ubuntu.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Luego ejecute el comando: #[b sudo apt-get install -y nodejs.]
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img10.png', style='width: 650px', alt='Pantalla de terminal mostrando la compilación exitosa de una aplicación Node.js, con detalles sobre el tamaño de los archivos y sugerencias para desplegar la aplicación.').m-auto
          .row.m-1(titulo="Paso")
            .col-12
              p.mb-5 Finalmente, compruebe la versión instalada (v14.18.1) ejecutando el siguiente comando: #[b node --version].
              figure
                img(src='@/assets/curso/tema3/img11.png', style='width: 950px', alt='Terminal mostrando la instalación exitosa de Node.js en Ubuntu, incluyendo el tamaño del paquete y el espacio de disco usado.').m-auto
    .row.bg-c26(data-aos="fade-left")
      .col-12
        .px-5
          p.mb-5 A continuación siga los siguientes pasos de Instalación sobre sistema operativo #[b Windows].
          p.mb-5 #[b.txt-c2 Paso 1.] Ingrese a Node >= 14.0.0 and npm >= 5.6 que corresponde a la página oficial de nodejs https://nodejs.org/en/ y descargue la versión para windows de 64 bits.
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 7]. Paso 1
              figure
                img(src="@/assets/curso/tema3/img13.png", style="width: 800px", alt="Captura de pantalla de la página principal de Node.js, con opciones para descargar las versiones LTS y Current del software.").m-auto
          p.mb-5 #[b.txt-c2 Paso 2.] Descargue en el sitio de su preferencia.
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 8]. Paso 2
              figure
                img(src="@/assets/curso/tema3/img14.png", style="width: 800px", alt="Vista del explorador de archivos en un sistema operativo, con una estructura de carpetas y archivos relacionados con descargas y documentos.").m-auto
          p.mb-5 #[b.txt-c2 Paso 3.] Ejecute el archivo descargado como administrador de Windows y continúe el wizard haciendo clic en next en cada pantalla.
          .row.justify-content-center.mb-5
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 9]. Paso 3
              figure
                img(src="@/assets/curso/tema3/img15.png", style="width: 570px", alt="Secuencia de capturas de pantalla del asistente de instalación de Node.js en Windows, detallando los pasos desde el inicio hasta la configuración final.").m-auto
          p.mb-5 #[b.txt-c2 Paso 4.] Por último de clic en #[i finish] para terminar la instalación.
          .row.justify-content-center
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 9]. Paso 4
              figure
                img(src="@/assets/curso/tema3/img16.png", style="width: 550px", alt="Captura de pantalla final del asistente de instalación de Node.js, confirmando que la instalación ha sido completada con éxito.").m-auto
          Separador
          #t_3_2
          .titulo-segundo.color-acento-contenido
            h2 3.2 Crear un proyecto
    p.mb-5(data-aos="fade-right") Una vez llevado a cabo el proceso de instalación del paso anterior de node y npm, se puede crear el proyecto React e ir ejecutando los siguientes comandos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c27
          p.mb-0 #[b a)npx create-react-app my-app]
          p.mb-0 #[b b)cd my-app]
          p.mb-0 #[b c)npm start]
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img17.png', style='width: 330px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Iniciar la creación del proyecto, a través de la siguiente secuencia:
    .tarjeta.tarjeta--gris(data-aos="fade-up")
      .p-4.p-lg-5
        PasosB.color-primario
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Ejecución de npx create-react-app my-app: Una vez el sistema termine la ejecución del paso anterior, ejecute: cd my-app.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img18.png', style='width: 650px', alt='Pantalla de terminal mostrando la creación exitosa de una nueva aplicación React llamada my-app con la herramienta create-react-app, incluyendo instrucciones para comenzar a usar la aplicación.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Crear un comando Ubuntu: Desde la línea de comandos en Ubuntu, ejecute: npx create-react-app my-app.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img19.png', style='width: 650px', alt='Pantalla de terminal después de navegar al directorio de la nueva aplicación React my-app.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Ejecute npm start para lanzar el proyecto: Dentro de la carpeta, ejecute: npm start para lanzar el proyecto.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img20.png', style='width: 650px', alt='Pantalla de terminal mostrando el comando npm start ejecutándose dentro del directorio de la aplicación React my-app para iniciar el servidor de desarrollo.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Proyecto React: El sistema lanza el primer proyecto React en el navegador como lo muestra la siguiente imagen.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img21.png', style='width: 650px', alt='Navegador mostrando la página inicial de una nueva aplicación React en localhost.').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Estructura del proyecto: Una vez finalizada la creación del proyecto, revise que la estructura del proyecto React esté conformada por el siguiente conjunto de carpetas y archivos.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img22.png', style='width: 650px', alt='').m-auto
          .row.m-1(titulo="Paso")
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Crear un comando Windows: Desde la línea de comandos en Windows, ejecute: npx create-react-app my-app.
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img23.png', style='width: 650px', alt='Pantalla de la consola de comandos de Windows mostrando el inicio de la creación de una aplicación React llamada my-app utilizando npx y create-react-app.').m-auto
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Propiedades y estados de los componentes
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        P Un componente en React hace referencia a la posibilidad de definir de manera independiente una funcionalidad que puede ser reutilizable dentro del sistema. Esencialmente, estas funcionalidades se escriben como funciones JavaScript que reciben entradas denominadas propiedades y devuelven una forma de visualización.
        P.mb-0 Ejemplo de un componente denominado "Bienvenido" que recibe una propiedad y devuelve un párrafo de saludo.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img24.png', style='width: 350px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-md-auto(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 11]. Propiedades
        figure
          img(src="@/assets/curso/tema3/img25.png", style="width: 850px", alt="Captura de pantalla de Visual Studio Code mostrando un editor abierto con varios archivos de código JavaScript en la vista de Explorador.").m-auto
    p.mb-5(data-aos="fade-right") Además, a un componente se le puede aplicar el concepto de estado en donde este, se define como la capacidad de especificar variables que pueden cambiar su valor en el tiempo, convirtiéndose en un comportamiento interno del componente, estos componentes se definen con el nombre de clase con la palabra reservada class.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  class Clock extends React.Component {
                p.mb-0      constructor(props) {
                p.mb-0          super(props);
                p.mb-0          this.state = { date: new Date() };
                p.mb-0      }
                p.mb-0  
                p.mb-0      render() {
                p.mb-0          return (
                p.mb-0              &lt;div>
                p.mb-0                  &lt;h1>Hola, Mundo!&lt;/h1>
                p.mb-0                  &lt;h2>Es {this.state.date.toLocaleTimeString()}.&lt;/h2>
                p.mb-0              &lt;/div>
                p.mb-0          );
                p.mb-0      }
                p.mb-0  }
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Eventos en React
    p.mb-5(data-aos="fade-right") Los eventos en React se manejan semejante a los del DOM se le pasa una función al controlador del evento.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  function Bienvenido(propiedad) {
                p.mb-0      return &lt;p>Saludos, {propiedad.nombre}&lt;/p>;
                p.mb-0  }
                p.mb-0  
                p.mb-0  function activarCamaras(propiedad) {
                p.mb-0      return &lt;p>Camara Uno, {propiedad.nombre}&lt;/p>;
                p.mb-0  }
                p.mb-0  
                p.mb-0  &lt;button onClick={activarCamaras}>
                p.mb-0      Activar Camaras
                p.mb-0  &lt;/button>
                p.mb-0  
                p.mb-0  class Clock extends React.Component {
                p.mb-0      constructor(props) {
                p.mb-0          super(props);
                p.mb-0          this.state = { date: new Date() };
                p.mb-0      }
                p.mb-0  
                p.mb-0      render() {
                p.mb-0          return (
                p.mb-0              &lt;div>
                p.mb-0                  &lt;h1>Hola, Mundo!&lt;/h1>
                p.mb-0                  &lt;h2>Es {this.state.date.toLocaleTimeString()}.&lt;/h2>
                p.mb-0              &lt;/div>
                p.mb-0          );
                p.mb-0      }
                p.mb-0  }
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Listas y Keys
    p.mb-5(data-aos="fade-right") Las listas hacen referencia a un arreglo de datos, que puede ser un arreglo de objetos o de datos simples como caracteres, números, etc. Como toda lista en programación, React proporciona un método para extraer estos datos y mostrarlos en la página en la cual se está trabajando. A continuación, se presenta cómo se hace:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12.mb-4
            .p-4.bg-c28
              p.mb-0 En React es necesario pasar arreglos de datos a listas para el manejo de algunos componentes lo cual se trabaja con la función map de la siguiente manera en donde se devuelve un elemento &lt;li> por cada número.
          .col-12
            .p-4.bg-c28
              p.mb-0 Adicional al manejo de listas es muy importante tener en cuenta el identificador único de componentes para evitar errores en el DOM por lo tanto es necesario manejar el atributo key.
      .col-lg-6(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  const numbers = [1, 2, 3, 4, 5];
                p.mb-0  const listItems = numbers.map((number) =>
                p.mb-0      &lt;li>{number}&lt;/li>
                p.mb-0  );
                p.mb-0  
                p.mb-0  function NumberList(props) {
                p.mb-0      const numbers = props.numbers;
                p.mb-0      const listItems = numbers.map((number) =>
                p.mb-0          &lt;li key={number.toString()}>
                p.mb-0              {number}
                p.mb-0          &lt;/li>
                p.mb-0      );
                p.mb-0      return (
                p.mb-0          &lt;ul>{listItems}&lt;/ul>
                p.mb-0      );
                p.mb-0  }
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Formularios
    p.mb-5(data-aos="fade-right") En React el envío de formularios se comporta como en HTML, solo que aquí, el ingreso y cambio de valores en las entradas se deben manejar con componentes controlados por medio de estados.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  class Clock extends React.Component {
                p.mb-0      constructor(props) {
                p.mb-0          super(props);
                p.mb-0          this.state = { date: new Date() };
                p.mb-0      }
                p.mb-0  
                p.mb-0      render() {
                p.mb-0          return (
                p.mb-0              &lt;div>
                p.mb-0                  &lt;h1>Hola, Mundo!&lt;/h1>
                p.mb-0                  &lt;h2>Es {this.state.date.toLocaleTimeString()}.&lt;/h2>
                p.mb-0              &lt;/div>
                p.mb-0          );
                p.mb-0      }
                p.mb-0  }
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Concepto de clases en React
    p.mb-5(data-aos="fade-right") Las clases son otra forma de definir un componente en React. Se caracterizan por tener propiedades y, a diferencia de las funciones, pueden definir estados propios sin utilizar el concepto de Hook. Dentro de los componentes de clase, existe una función constructora que se utiliza para definir el estado inicial del componente. Es muy importante llamar a la función super() dentro del constructor para que los parámetros funcionen adecuadamente, como puede verse en la siguiente imagen:
    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  class Counter extends React.Component {
                p.mb-0      constructor(props) {
                p.mb-0          super(props);
                p.mb-0          this.state = { foo: 123, bar: 456 };
                p.mb-0      }
                p.mb-0  
                p.mb-0      render() {
                p.mb-0          return (
                p.mb-0              &lt;div>foo: {this.state.foo} bar: {this.state.bar}&lt;/div>
                p.mb-0          );
                p.mb-0      }
                p.mb-0  }
    .row.bg-c29
      .col-12
        .p-5
          p.mb-5(data-aos="fade-right") Explorar el siguiente recurso y conocer los aspectos más relevantes relacionados con el concepto de clases en React:
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-md-10.col-lg-4.m-2
              .p-5.bg-c39
                p.mb-0 Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
            .col-md-10.col-lg-4.m-2
              .p-5.bg-c40
                p.mb-0 React permite definir componentes como clases o funciones. Los componentes definidos como clases actualmente proporcionan una serie de características extra.
            .col-md-10.col-lg-4.m-2
              .p-5.bg-c41
                p.mb-0 La función super() dentro del constructor es un componente de React válido porque acepta un solo argumento de objeto "props" con datos y devuelve un elemento de React. Llamamos a dichos componentes “funcionales” porque literalmente son funciones JavaScript.
            .col-md-10.col-lg-4.m-2
              .p-5.bg-c42
                p.mb-0 Nombres de componentes: Comience siempre los nombres de componentes con una letra mayúscula. React trata los componentes que empiezan con letras minúsculas como etiquetas del DOM. Por ejemplo, &lt;div/> representa una etiqueta div HTML pero &lt;Welcome/> representa un componente y requiere que Welcome esté definido.
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c17
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Funciones Hooks
          p.mb-5(data-aos="fade-right") Las funciones Hooks permiten a los componentes definidos por medio de funciones manejar variables de estado locales, similar a cómo lo hacen las clases. Los Hooks son funciones JavaScript y están sujetas a dos reglas:
          .row.justify-content-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img27.png', style="width: 200px", alt='').m-auto
            .col-lg-7(data-aos="fade-left")
              .row
                .col-12.bg-c43
                  .p-1
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema3/img9.svg', style="width: 100px", alt='')
                      .col
                        p.mb-0 Solo llamar Hooks en el nivel superior. No se deben llamar Hooks dentro de loops, condiciones o funciones anidadas.
              .row
                .col-12.bg-c44
                  .p-1
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema3/img10.svg', style="width: 100px", alt='')
                      .col
                        p.mb-0 Solo llamar Hooks desde componentes de función de React. No se deben llamar Hooks desde las funciones regulares de JavaScript.
    p.mb-5(data-aos="fade-right") Ejemplo de una función que utiliza el Hook useState:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import React, { useState } from 'react';
                p.mb-0  function Example() {
                p.mb-0      // Declara una nueva variable de estado, que llamaremos "count"
                p.mb-0      const [count, setCount] = useState(0);
                p.mb-0      return (
                p.mb-0          &lt;div>
                p.mb-0              &lt;p>You clicked {count} times&lt;/p>
                p.mb-0              &lt;button onClick={() => setCount(count + 1)}>
                p.mb-0                  Click me
                p.mb-0              &lt;/button>
                p.mb-0          &lt;/div>
                p.mb-0      );
                p.mb-0  }
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ciclos de vida de los componentes de React
    p.mb-5(data-aos="fade-right") Hace referencia a los métodos que se pueden utilizar por defecto (es decir, que forman parte de la librería de React). Cuando se ejecuta o se renderiza un componente en la línea de tiempo de ejecución del programa, estos métodos son:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Tabla 2.] Métodos de ciclo de vida de React
          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-white(style="width: 40%") Métodos de ciclo de vida de React
                  th.text-white Descripción
              tbody
                tr(style="background-color: #BEB4D0")
                  td.text-center Nombre del Método
                  td.text-center Utilidad
                tr
                  td #[b componentWillMount()]
                  td Se ejecuta justo antes del primer pintado del componente.
                tr
                  td #[b componentWillReceiveProps(nextProps)]
                  td Se invoca cuando las propiedades se van a actualizar.
                tr
                  td #[b shouldComponentUpdate(nextProps, nextState)]
                  td Se invocará cuando se producen cambios de propiedades o cambios de estado.
                tr
                  td #[b componentWillUpdate(nextProps, nextState)]
                  td Este se invocará justo antes de que el componente vaya a actualizar su vista.
                tr
                  td #[b componentDidUpdate(prevProps, prevState)]
                  td Este se invocará justo después de que el componente vaya a actualizar su vista.
                tr
                  td #[b componentWillUnmount()]
                  td Se ejecuta en el momento que el componente se va a retirar del DOM.
    p.mb-5(data-aos="fade-right") Se puede revisar en el siguiente código cómo quedará el archivo:
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import React from 'react';
                p.mb-0  
                p.mb-0  export default class CicloVida extends React.Component {
                p.mb-0      constructor(props) {
                p.mb-0          console.log('Ejecutando constructor', ...args);
                p.mb-0          super(props);
                p.mb-0          this.state = {
                p.mb-0              estado: 'Inicializado en el constructor'
                p.mb-0          };
                p.mb-0      }
                p.mb-0  
                p.mb-0      componentDidMount() {
                p.mb-0          console.log('Ejecuta componentDidMount');
                p.mb-0      }
                p.mb-0  
                p.mb-0      componentWillUnmount() {
                p.mb-0          console.log('Ejecuta componentWillUnmount');
                p.mb-0      }
                p.mb-0  
                p.mb-0      componentDidUpdate(prevProps, prevState) {
                p.mb-0          console.log('Ejecuta componentDidUpdate. Anteriores propiedades y estado:', prevProps, prevState);
                p.mb-0      }
                p.mb-0  
                p.mb-0      shouldComponentUpdate(nextProps, nextState) {
                p.mb-0          console.log('Ejecuta shouldComponentUpdate. Próximas propiedades y estado:', nextProps, nextState);
                p.mb-0          return true;
                p.mb-0      }
                p.mb-0  
                p.mb-0      componentWillReceiveProps(nextProps) {
                p.mb-0          console.log('Ejecuta componentWillReceiveProps con las propiedades futuras:', nextProps);
                p.mb-0      }
                p.mb-0  
                p.mb-0      componentWillUpdate(nextProps, nextState) {
                p.mb-0          console.log('Ejecuta componentWillUpdate. Próximas propiedades y estado:', nextProps, nextState);
                p.mb-0      }
                p.mb-0  
                p.mb-0      componentDidCatch(error, info) {
                p.mb-0          console.log('Ejecuta componentDidCatch:', error, info);
                p.mb-0      }
                p.mb-0  
                p.mb-0      render() {
                p.mb-0          console.log('Ejecuta render');
                p.mb-0          return (
                p.mb-0              &lt;div>
                p.mb-0                  &lt;h1>Ciclo de vida del componente&lt;/h1>
                p.mb-0                  &lt;p>Estado: {this.state.estado}&lt;/p>
                p.mb-0                  &lt;p>Propiedad: {this.props.propiedad}&lt;/p>
                p.mb-0              &lt;/div>
                p.mb-0          );
                p.mb-0      }
                p.mb-0  }
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c6(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img2.svg', style='width: 70px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b ¡Atención!] En React.js los componentes que no sean puros (todos los que se crean mediante clases o React.createClass) poseen algo conocido como el ciclo de vida. Este ciclo de vida, son una serie de funciones que se ejecutan en distintos momentos de la vida del componente y nos permiten realizar distintas acciones en estos momentos.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ejecutar la aplicación
    p.mb-5(data-aos="fade-right") Para ejecutar una aplicación React JS, se utiliza el comando #[b npm start]. Para generar la versión de producción, se debe ejecutar el siguiente comando: #[b npm run build].
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  > my-app@0.1.0 build /home/chmunoz/my-app
                p.mb-0  > react-scripts build
                p.mb-0  
                p.mb-0  Creating an optimized production build...
                p.mb-0  Compiled successfully.
                p.mb-0  
                p.mb-0  File sizes after gzip:
                p.mb-0  
                p.mb-0    41.34 KB  build/static/js/2.8833cde.chunk.js
                p.mb-0    1.62 KB   build/static/js/3.ff0311e9.chunk.js
                p.mb-0    1.38 KB   build/static/js/runtime~main.1c420381.js
                p.mb-0    1.31 KB   build/static/js/main.68b9e600.chunk.js
                p.mb-0    506 B     build/static/css/main.cfa70044.chunk.css
                p.mb-0  
                p.mb-0  The project was built assuming it is hosted at /.
                p.mb-0  You can control this with the homepage field in your package.json.
                p.mb-0  
                p.mb-0  The build folder is ready to be deployed.
                p.mb-0  You may serve it with a static server:
                p.mb-0  
                p.mb-0    npm install -g serve
                p.mb-0    serve -s build
                p.mb-0  
                p.mb-0  Find out more about deployment here:
                p.mb-0  
                p.mb-0    https://cra.link/deployment
    p.mb-5(data-aos="fade-right") Este comando genera la carpeta build con la versión compilada y minificada del proyecto React SPA (Single Page Application). A continuación, se describirá cómo debe quedar la organización y el registro de este proceso.
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  build
                p.mb-0  ├── asset-manifest.json
                p.mb-0  ├── favicon.ico
                p.mb-0  ├── index.html
                p.mb-0  ├── logo192.png
                p.mb-0  ├── logo512.png
                p.mb-0  ├── manifest.json
                p.mb-0  ├── robots.txt
                p.mb-0  └── static
                p.mb-0      ├── css
                p.mb-0      │   ├── main.a617e044.chunk.css
                p.mb-0      │   ├── main.a617e044.chunk.css.map
                p.mb-0      ├── js
                p.mb-0      │   ├── 2.8833cd6e.chunk.js
                p.mb-0      │   ├── 2.8833cd6e.chunk.js.LICENSE.txt
                p.mb-0      │   ├── 2.8833cd6e.chunk.js.map
                p.mb-0      │   ├── 3.ff0311e9.chunk.js
                p.mb-0      │   ├── 3.ff0311e9.chunk.js.map
                p.mb-0      │   ├── main.6bc689e0.chunk.js
                p.mb-0      │   ├── main.6bc689e0.chunk.js.map
                p.mb-0      │   ├── runtime-main.1c420381.js
                p.mb-0      │   └── runtime-main.1c420381.js.map
                p.mb-0      └── media
                p.mb-0          └── logo.6ce24c58.svg

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
