<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Hibernate
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p Hibernate es software libre con licencia GNU LGPL que presta servicios de ORM para Java. Es un plugin que puede ser integrado al IDE de desarrollo en Java y facilita el proceso de mapeo de tablas en una base de datos relacional a objetos Java mediante el uso de archivos declarativos en formato XML o anotaciones.
        .row
          .col-12
            .p-4.bg-c7
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img1.svg', style='width: 90px', alt='').m-auto
                .col
                  p.mb-0 “Hibernate utiliza JDBC para todos los procesos de comunicación con la base de datos, funcionando como una capa adicional de abstracción de las funcionalidades del JDBC. En una aplicación Java, podremos delegar la mayoría de las operaciones de bases de datos al framework de Hibernate, pero en segundo plano todo estará pasando por la API de JDBC” (Martinez, 2015).
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema4/img1.png', style='width: 370px', alt='').m-auto
    .row.mb-5
      .col-auto.d-none.d-md-block
        figure.mt-1
          img(src="@/assets/curso/tema4/img2.svg", style="width: 70px", alt="").m-auto
      .col
        p.mb-0 Así que, cuando se configura Hibernate para conectarse a una base de datos, lo que realmente se está haciendo es configurar Hibernate para el uso del JDBC, y es este quien realiza las operaciones. A continuación, se presenta el esquema general del funcionamiento:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 12.] Hibernate
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema4/img3.svg', style='width: 500px', alt='Diagrama que representa la conexión entre una aplicación Java, Hibernate, y una base de datos a través de JDBC, ilustrando el flujo de datos y la estructura de las interacciones.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema4/img3m.svg', style='width: 170px', alt='Diagrama que representa la conexión entre una aplicación Java, Hibernate, y una base de datos a través de JDBC, ilustrando el flujo de datos y la estructura de las interacciones.').m-auto
    p.mb-5 Teniendo en cuenta que Hibernate debe usar el driver JDBC para la ejecución de las instrucciones en la base de datos, se debe construir un archivo de configuración en formato XML donde se especifique la URL del JDBC y las credenciales de acceso a la base de datos. En la siguiente figura se presenta el esquema general de funcionamiento en el proceso de configuración:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 13.] Hibernate archivo de configuración
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema4/img4.svg', style='width: 400px', alt='Diagrama que explica la conexión entre un usuario, la interfaz JDBC y una base de datos, detallando la necesidad de información como URL, usuario y contraseña para el acceso.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema4/img4m.svg', style='width: 170px', alt='Diagrama que explica la conexión entre un usuario, la interfaz JDBC y una base de datos, detallando la necesidad de información como URL, usuario y contraseña para el acceso.').m-auto
    p.mb-5 Este archivo de configuración define un conjunto de propiedades que serán utilizadas para crear las sesiones mediante las cuales se inician un conjunto de transacciones u operaciones sobre la base de datos. Entre las propiedades más importantes se encuentran las siguientes:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Tabla 3.] Propiedades Hibernate
          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-white(style="width: 40%") Métodos de ciclo de vida de React
                  th.text-white Descripción
              tbody
                tr
                  td #[b connection.driver.class]
                  td Se ejecuta justo antes del primer pintado del componente.
                tr
                  td #[b connection.url]
                  td Se invoca cuando las propiedades se van a actualizar.
                tr
                  td #[b connection.username]
                  td Se invocará cuando se producen cambios de propiedades o cambios de estado.
                tr
                  td #[b connection.password]
                  td Este se invocará justo antes de que el componente vaya a actualizar su vista.
                tr
                  td #[b connection.pool_size]
                  td Este se invocará justo después de que el componente vaya a actualizar su vista.
                tr
                  td #[b dialect]
                  td Se ejecuta en el momento que el componente se va a retirar del DOM.
                tr
                  td #[b show_sql]
                  td Se ejecuta en el momento que el componente se va a retirar del DOM.
                tr
                  td #[b current_session_context_class]
                  td Especifica el contexto de la sesión actual, por defecto se puede asignar thread.
    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema4/img2.png', style='width: 370px', alt='').m-auto
      .col-lg-8
        p.mb-0 Es importante tener en cuenta que este archivo de configuración de Hibernate debe estar ubicado en la raíz de la carpeta src del proyecto, de forma que pueda ser utilizado por Hibernate en cualquier contexto de la aplicación. A continuación, se muestra cómo debe verse un archivo de configuración de Hibernate completo, donde se establece una conexión con una base de datos MySQL en un servidor que se está ejecutando en la máquina local (localhost) y puerto 3306, con el usuario “root” y contraseña 12345:
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  &lt;!DOCTYPE hibernate-configuration PUBLIC
                p.mb-0      "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
                p.mb-0      "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">
                p.mb-0  &lt;hibernate-configuration>
                p.mb-0      &lt;session-factory>
                p.mb-0          <!-- JDBC Database connection settings -->
                p.mb-0          &lt;property name="connection.driver_class">com.mysql.cj.jdbc.Driver&lt;/property>
                p.mb-0          &lt;property name="connection.url">jdbc:mysql://localhost:3306/prueba?useSSL=false&serverTimezone=UTC&lt;/property>
                p.mb-0          &lt;property name="connection.username">root&lt;/property>
                p.mb-0          &lt;property name="connection.password">12345&lt;/property>
                p.mb-0          &lt;!-- JDBC connection pool settings ... using built-in test pool -->
                p.mb-0          &lt;property name="connection.pool_size">1&lt;/property>
                p.mb-0          &lt;!-- Select our SQL dialect -->
                p.mb-0          &lt;property name="dialect">org.hibernate.dialect.MySQLDialect&lt;/property>
                p.mb-0      &lt;/session-factory>
                p.mb-0  &lt;/hibernate-configuration>
                p.mb-0  &lt;!-- Echo the SQL to stdout -->
                p.mb-0  &lt;property name="show_sql">true&lt;/property>
                p.mb-0  &lt;!-- Set the current session context -->
                p.mb-0  &lt;property name="current_session_context_class">thread&lt;/property>
                p.mb-0  &lt;/session-factory>
                p.mb-0  &lt;/hibernate-configuration>
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1
        p Se invita a revisar en los anexos el archivo de configuración mostrado anteriormente para que pueda ser descargado y utilizado en la construcción de su proyecto, teniendo en cuenta que debe editar las propiedades de acuerdo con sus necesidades.
        .row
          .col-12
            .p-4.bg-c7
              p.mb-0 Luego de esto, se requiere definir todas las “Entity Classes” que serán utilizadas por Hibernate para realizar el proceso de mapeo hacia una base de datos relacional y viceversa. Una “Entity Class” básicamente es una clase Java tradicional que tiene las mismas características definidas en una tabla de la base de datos, es decir, es una imagen de la tabla, pero desde la perspectiva de la programación orientada a objetos. Adicionalmente, tiene unas anotaciones especiales que le permiten a Hibernate realizar el trabajo adecuado.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema4/img3.png', style='width: 300px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 14.] Entity Classes
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema4/img5.svg', style='width: 650px', alt='Diagrama que vincula una clase Java "Usuario" con una tabla de base de datos "Usuario", mostrando cómo Hibernate facilita esta interacción.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema4/img5m.svg', style='width: 300px', alt='Diagrama que vincula una clase Java "Usuario" con una tabla de base de datos "Usuario", mostrando cómo Hibernate facilita esta interacción.').m-auto
    p.mb-5 Las anotaciones pueden ser utilizadas al importar la librería de persistencia de JAVA javax.persistence.*, entre las más utilizadas encontramos:
    .row.bg-c45
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.p-lg-5.bg-c4
                .titulo-sexto.color-acento-contenido.mb-4
                  p.mb-0 #[b Tabla 4.] Anotaciones Java
                .tabla-a.color-primario
                  table
                    thead
                      tr
                        th.text-white(style="width: 20%") Anotación
                        th.text-white Significado
                    tbody
                      tr
                        td #[b @Entity]
                        td Especifica que la clase definida en una Entity Class.
                      tr
                        td #[b @Table(name = “ ”)]
                        td Permite especificar que la clase será mapeada con una tabla en la base de datos especificada en la propiedad name.
                      tr
                        td #[b @Column(name = “ ”)]
                        td Permite especificar que el atributo por ser definido será mapeado con una columna especificada por la propiedad name. Cuando el nombre del atributo coincide con el nombre de la columna en la tabla se puede omitir la especificación de la propiedad name y solo dejar la anotación @Column.
                      tr
                        td #[b @Id]
                        td Permite especificar que el atributo a definir corresponde con el identificador primario a ser mapeado en la tabla.
          .row.mb-5
            .col.order-2.order-lg-1
              p.mb-0 A continuación, se presenta un corto video donde se agrega el archivo de configuración de Hibernate al proyecto y se crea la clase Entity para la gestión de una tabla en una base de datos MySQL.
            .col-md-auto.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema4/img6.svg', style='width: 170px', alt='').m-auto
          .row.justify-content-center
            .col-lg-10
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/qYCN1ymhE4Y?si=NhPI6Di4PLnYbn2N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Operaciones básicas
    p Una vez se tienen registradas todas las dependencias, los archivos de configuración de Hibernate y las respectivas clases de entidad, se pueden utilizar las facilidades ofrecidas por Hibernate para la manipulación de la base de datos de forma transparente por medio de los procesos de mapeo que ofrece este framework.
    p.mb-5 Hibernate utiliza principalmente dos clases que debemos conocer y utilizar, las cuales se describen a continuación:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img5.png', style='width: 350px', alt='').m-auto
      .col-lg-7
        .row
          .col-12.bg-c43
            .p-4
              p.mb-0 #[b SessionFactory]
              p.mb-0 Esta clase lee el archivo de configuración de Hibernate y crea los objetos de sesión. Por ser una clase que genera objetos pesados por los procesos de los que es responsable solo debo crearlo una vez por toda la aplicación.
        .row
          .col-12.bg-c44
            .p-4
              p.mb-0 #[b Session]
              p.mb-0 Esta clase envuelve todo 10 correspondiente a una conexión JDBC y es el tipo de objeto que será usado para guardar o recibir objetos desde y hacia la base de datos. Es instanciado a partir de una clase SessionFactory. Los objetos creados de este tipo son más livianos por 10 que pueden ser creados y desechados tantas veces como se necesite dentro de la aplicación.
    p.mb-5 En el siguiente fragmento de código se detalla cómo es el proceso de definición de los objetos SessionFactory y Session para poder realizar la manipulación de la base de datos:
    .row.justify-content-center.mb-5
      .col-lg-8
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  // creación del session factory
                p.mb-0  SessionFactory factory = new Configuration()
                p.mb-0      .configure("hibernate.cfg.xml")
                p.mb-0      .addAnnotatedClass(Usuario.class)
                p.mb-0      .buildSessionFactory();
                p.mb-0  
                p.mb-0  // creación de la session a partir del Session factory
                p.mb-0  Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0  try {
                p.mb-0      // Ahora se puede usar el objeto session para la manipulación de la BD
                p.mb-0  } finally {
                p.mb-0      // Se cierra el objeto session factory una vez se deja de utilizar
                p.mb-0      factory.close();
                p.mb-0  }
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1
        p Note que en el código anterior, para la creación del objeto #[b #[i SessionFactory]], se indica el nombre del archivo de configuración de Hibernate en el método #[b #[i configure()]]. Si este parámetro no se incluyera, Hibernate buscará en el directorio raíz del proyecto un archivo que contenga el nombre por defecto de este tipo de archivos de configuración, el cual es #[b #[i hibernate.cfg.xml]].
        p.mb-0 También note que en el método #[b #[i addAnnotatedClass()]] se indica la clase de entidad a ser utilizada.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema4/img6.png', style='width: 300px', alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Método #[i Save]
    p.mb-5 El método save() del objeto Session permite realizar el proceso de inserción de un nuevo registro en la base de datos enviando como parámetro un objeto de tipo entidad con sus valores. La forma correcta de realizar un proceso de inserción de un nuevo registro en una base de datos con un objeto de tipo sesión incluye los siguientes pasos:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-3.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img7.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 1]
              p.text-center Iniciar una transacción por mecio del método #[i beginTransaction()].
      .col-10.col-md-6.col-lg-3.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 2]
              p.text-center Ejecutar la lógica necesana para crear un objeto de la clase de entidad con sus correspondientes valores.
      .col-10.col-md-6.col-lg-3.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img9.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 3]
              p.text-center Invocar el método #[i save()] de la sesión enviando corno parámetro el objeto de la clase entdad.
      .col-10.col-md-6.col-lg-3.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img10.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              p.text-center #[b 4]
              p.text-center Confirmarla transacción realizada por medio del método #[i mit()].
    .row.justify-content-center.mb-5
      .col-lg-8
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import java.util.List;
                p.mb-0  import org.hibernate.Session;
                p.mb-0  import org.hibernate.SessionFactory;
                p.mb-0  import org.hibernate.cfg.Configuration;
                p.mb-0  import com.jonathan.hibernate.demo.entity.Usuario;
                p.mb-0  
                p.mb-0  public class CrearUsuarioDemo {
                p.mb-0  
                p.mb-0      public static void main(String[] args) {
                p.mb-0          // Crear SessionFactory
                p.mb-0          SessionFactory factory = new Configuration()
                p.mb-0              .configure("hibernate.cfg.xml")
                p.mb-0              .addAnnotatedClass(Usuario.class)
                p.mb-0              .buildSessionFactory();
                p.mb-0  
                p.mb-0          // Crear sesión
                p.mb-0          Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0          try {
                p.mb-0              System.out.println("Creando un usuario...");
                p.mb-0  
                p.mb-0              // Crear un objeto Usuario
                p.mb-0              Usuario usuario1 = new Usuario("Francisco", "FFFFF");
                p.mb-0  
                p.mb-0              // Iniciar una transacción
                p.mb-0              session.beginTransaction();
                p.mb-0  
                p.mb-0              // Guardar el objeto Usuario
                p.mb-0              System.out.println("Guardando el nuevo usuario...");
                p.mb-0              session.save(usuario1);
                p.mb-0  
                p.mb-0              // Confirmar la transacción
                p.mb-0              session.getTransaction().commit();
                p.mb-0              System.out.println("Proceso finalizado.");
                p.mb-0          } finally {
                p.mb-0              factory.close();
                p.mb-0          }
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
              h3.text-white Método #[i Get]
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1
        p El método get() del objeto session permite obtener un registro de la base de datos por medio de una consulta por su llave primaria. Este método recibe como parámetro la clase de entidad que será utilizada para hacer el mapeo del registro en la respuesta y un segundo parámetro que corresponde al valor a ser buscado en la llave primaria de la tabla. Este método ofrece como resultado un objeto de la clase de entidad especificada en la invocación del método.
        .row.mb-4
          .col-auto
            figure.mt-1
              img(src="@/assets/curso/tema4/img2.svg", style="width: 70px", alt="").m-auto
          .col
            p.mb-0 La forma correcta de realizar un proceso de consulta de un registro particular por medio de su llave primaria y un objeto de tipo sesión incluye los siguientes pasos:
        .row
          .col-12
            .px-4.py-3.bg-c8
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img22.svg', style='width: 60px', alt='').m-auto
                .col
                  p.mb-0 Iniciar una transacción por medio del método #[b #[i beginTransaction()]].
          .col-12
            .px-4.py-3.bg-c9
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img23.svg', style='width: 60px', alt='').m-auto
                .col
                  p.mb-0 Invocar el método #[b #[i get()]] de la sesión, enviando como parámetro la clase de tipo entidad para hacer el mapeo y el valor de la llave primaria a buscar. La invocación de este método requiere de un objeto compatible que reciba el resultado.
          .col-12
            .px-4.py-3.bg-c11
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img24.svg', style='width: 60px', alt='').m-auto
                .col
                  p.mb-0 Confirmar la transacción realizada por medio del método #[b #[i getTransaction().commit()]].
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema4/img10.png', style='width: 300px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import java.util.List;
                p.mb-0  import org.hibernate.Session;
                p.mb-0  import org.hibernate.SessionFactory;
                p.mb-0  import org.hibernate.cfg.Configuration;
                p.mb-0  import com.jonathan.hibernate.demo.entity.Usuario;
                p.mb-0  
                p.mb-0  public class CrearLeerDemo {
                p.mb-0  
                p.mb-0      public static void main(String[] args) {
                p.mb-0          // Crear SessionFactory
                p.mb-0          SessionFactory factory = new Configuration()
                p.mb-0              .configure("hibernate.cfg.xml")
                p.mb-0              .addAnnotatedClass(Usuario.class)
                p.mb-0              .buildSessionFactory();
                p.mb-0  
                p.mb-0          // Crear sesión
                p.mb-0          Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0          try {
                p.mb-0              // Iniciar una transacción
                p.mb-0              session.beginTransaction();
                p.mb-0  
                p.mb-0              // Consulta de un usuario cuyo pk tiene el valor de 16
                p.mb-0              System.out.println("Consulta de un usuario");
                p.mb-0              Usuario resultado = session.get(Usuario.class, 16);
                p.mb-0              System.out.println("Resultado = " + resultado);
                p.mb-0  
                p.mb-0              // Confirmar la transacción
                p.mb-0              session.getTransaction().commit();
                p.mb-0              System.out.println("Proceso finalizado.");
                p.mb-0          } finally {
                p.mb-0              factory.close();
                p.mb-0          }
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
              h3.text-white Método #[i CreateQuery]
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p Hibernate permite el proceso de creación de consultas usando HQL, el cual es una versión especial de Hibernate para establecer consultas SQL orientadas a objetos y que comprende nociones propias del paradigma orientado a objetos, como la herencia, el polimorfismo y las asociaciones. Es importante tener en cuenta que, aunque las palabras reservadas y sentencias de SQL no son sensibles a mayúsculas, los nombres de las clases y sus atributos usados en HQL sí lo son.
        .row
          .col-12
            .p-4.bg-c4
              .row
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img11.svg', style='width: 70px', alt='').m-auto
                .col
                  p.mb-0 Para el caso en el que se requiera realizar consultas más avanzadas, se puede utilizar la potencia de HQL para establecer las características de los registros a ser consultados. Como este tipo de consulta puede producir más de un registro proveniente de la base de datos, es necesario usar el método #[b #[i getResultList()]] para mapear la respuesta a una lista de objetos Java. En la siguiente tabla se presentan algunas de las cláusulas HQL más comúnmente utilizadas. Se debe tener en cuenta que en HQL se hace referencia a las clases de entidad Java con sus atributos, los cuales son sensibles a mayúsculas. Estas sentencias son mapeadas a su estructura equivalente en la base de datos usando los nombres de tablas y atributos, los cuales ya no son sensibles a mayúsculas.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema4/img7.png', style='width: 400px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Tabla 5.] Sentencias y equivalentes
          .tabla-a.color-primario
            table
              thead
                tr
                  th.text-white(style="width: 40%") Sentencia HQL
                  th.text-white Equivalente en SQL
              tbody
                tr
                  td #[b from #[span.txt-c3 Usuario]]
                  td SELECT * FROM #[span.txt-c4 usuario]
                tr
                  td #[b from #[span.txt-c3 Usuario] u where u.#[span.txt-c3 userName] = ‘Raul’]
                  td
                    p SELECT * FROM #[span.txt-c4 usuario] U
                    p.mb-0 WHERE u.username = ‘Raul’
                tr
                  td #[b from #[span.txt-c3 DomesticCat] cat]
                  td SELECT * FROM #[span.txt-c4 domesticCat] Cat
                tr
                  td #[b order by cat.#[span.txt-c3 name] asc]
                  td ORDER BY Cat.#[span.txt-c4 name] ASC
                tr
                  td
                    p from #[span.txt-c3 Cat] as cat
                    p inner join Cat.#[span.txt-c3 mate] as mate
                  td
                    p SELECT * FROM #[span.txt-c4 cat] cat
                    p INNER JOIN #[span.txt-c4 cat_mate] mate ON Cat.#[span.txt-c4 id] = mate.#[span.txt-c4 id]
    p.mb-5 A continuación, se presentan diferentes ejemplos haciendo uso de consultas por medio de HQL:
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import java.util.List;
                p.mb-0  import org.hibernate.Session;
                p.mb-0  import org.hibernate.SessionFactory;
                p.mb-0  import org.hibernate.cfg.Configuration;
                p.mb-0  import com.javahibernate.hibernate.demo.entity.Usuario;
                p.mb-0  
                p.mb-0  public class ConsultarUsuarios {
                p.mb-0      public static void main(String[] args) {
                p.mb-0          // Crear el SessionFactory
                p.mb-0          SessionFactory factory = new Configuration()
                p.mb-0                                  .configure("hibernate.cfg.xml")
                p.mb-0                                  .addAnnotatedClass(Usuario.class)
                p.mb-0                                  .buildSessionFactory();
                p.mb-0          
                p.mb-0          // Crear el Session
                p.mb-0          Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0          try {
                p.mb-0              // Consultar todos los usuarios de la tabla Usuario
                p.mb-0              List&lt;Usuario> usuariosRegistrados = session.createQuery("from Usuario").list();
                p.mb-0              for (Usuario usuario : usuariosRegistrados) {
                p.mb-0                  System.out.println(usuario);
                p.mb-0              }
                p.mb-0  
                p.mb-0              // Consultar usuarios con nombre que comienza con 'J'
                p.mb-0              usuariosRegistrados = session.createQuery("from Usuario u where u.nombre like 'J%'").list();
                p.mb-0              for (Usuario usuario : usuariosRegistrados) {
                p.mb-0                  System.out.println(usuario);
                p.mb-0              }
                p.mb-0  
                p.mb-0              // Consultar usuarios con apellido 'Ramirez'
                p.mb-0              usuariosRegistrados = session.createQuery("from Usuario u where u.apellido = 'Ramirez'").list();
                p.mb-0              for (Usuario usuario : usuariosRegistrados) {
                p.mb-0                  System.out.println(usuario);
                p.mb-0              }
                p.mb-0  
                p.mb-0              // Consultar usuarios con email que contiene 'javacode'
                p.mb-0              usuariosRegistrados = session.createQuery("from Usuario u where u.email like '%javacode%'").list();
                p.mb-0              for (Usuario usuario : usuariosRegistrados) {
                p.mb-0                  System.out.println(usuario);
                p.mb-0              }
                p.mb-0  
                p.mb-0              // Consultar usuarios con nombre 'Francisco' o que su password es '12345'
                p.mb-0              usuariosRegistrados = session.createQuery("from Usuario u where u.nombre = 'Francisco' OR u.password = '12345'").list();
                p.mb-0              for (Usuario usuario : usuariosRegistrados) {
                p.mb-0                  System.out.println(usuario);
                p.mb-0              }
                p.mb-0  
                p.mb-0          } finally {
                p.mb-0              factory.close();
                p.mb-0          }
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
              h3.text-white Actualizaciones
    .row.mb-5
      .col-lg-9.order-2.order-lg-1
        p.mb-0 El proceso de actualización es muy similar al proceso de consulta. Se puede hacer uso directo de los objetos obtenidos de las clases de entidad mediante los métodos modificadores de sus atributos (métodos #[b #[i set()]]) y confirmar las transacciones realizadas. También se puede hacer uso de #[b #[i createQuery()]], el cual permite enviar consultas HQL un poco más elaboradas, pero asociándolo con el método #[b #[i executeUpdate()]] para que los cambios se reflejen en la base de datos una vez se confirma la transacción.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema4/img12.svg', style='width: 300px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-9
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import java.util.List;
                p.mb-0  import org.hibernate.Session;
                p.mb-0  import org.hibernate.SessionFactory;
                p.mb-0  import org.hibernate.cfg.Configuration;
                p.mb-0  import com.javahibernate.demo.entity.Usuario;
                p.mb-0  
                p.mb-0  public class ConsultarUsuario {
                p.mb-0      public static void main(String[] args) {
                p.mb-0          // Crear el SessionFactory
                p.mb-0          SessionFactory factory = new Configuration()
                p.mb-0                                  .configure("hibernate.cfg.xml")
                p.mb-0                                  .addAnnotatedClass(Usuario.class)
                p.mb-0                                  .buildSessionFactory();
                p.mb-0          
                p.mb-0          // Crear el Session
                p.mb-0          Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0          try {
                p.mb-0              // Iniciar una transacción
                p.mb-0              session.beginTransaction();
                p.mb-0  
                p.mb-0              // Consultar un usuario por su clave primaria igual a 6
                p.mb-0              Usuario consultaUsuario = session.get(Usuario.class, 6);
                p.mb-0              consultaUsuario.setUserName("Nuevo Raul");
                p.mb-0              System.out.println("Usuario = " + consultaUsuario.getUserId() + " Actualizado");
                p.mb-0  
                p.mb-0              // Confirmar la transacción
                p.mb-0              session.getTransaction().commit();
                p.mb-0              System.out.println("Proceso finalizado");
                p.mb-0  
                p.mb-0          } finally {
                p.mb-0              factory.close();
                p.mb-0          }
                p.mb-0      }
                p.mb-0  }
    .row.justify-content-center.mb-5
      .col-lg-9
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import java.util.List;
                p.mb-0  import org.hibernate.Session;
                p.mb-0  import org.hibernate.SessionFactory;
                p.mb-0  import org.hibernate.cfg.Configuration;
                p.mb-0  import com.javahibernate.demo.entity.Usuario;
                p.mb-0  
                p.mb-0  public class ActualizarUsuarios {
                p.mb-0      public static void main(String[] args) {
                p.mb-0          // Crear el SessionFactory
                p.mb-0          SessionFactory factory = new Configuration()
                p.mb-0                                  .configure("hibernate.cfg.xml")
                p.mb-0                                  .addAnnotatedClass(Usuario.class)
                p.mb-0                                  .buildSessionFactory();
                p.mb-0          
                p.mb-0          // Crear el Session
                p.mb-0          Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0          try {
                p.mb-0              // Iniciar una transacción
                p.mb-0              session.beginTransaction();
                p.mb-0  
                p.mb-0              // Actualizar la contraseña de todos los usuarios cuyo password actual sea '678'
                p.mb-0              System.out.println("Actualizando varios usuarios...");
                p.mb-0              session.createQuery("update Usuario u set u.userPassword = 'Z@Q#J!' where u.userPassword = '678'")
                p.mb-0                     .executeUpdate();
                p.mb-0  
                p.mb-0              // Confirmar la transacción
                p.mb-0              session.getTransaction().commit();
                p.mb-0              System.out.println("Proceso finalizado");
                p.mb-0  
                p.mb-0          } finally {
                p.mb-0              factory.close();
                p.mb-0          }
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
              h3.text-white Método #[i Delete]
    p.mb-5 El método delete() del objeto session permite eliminar un registro de la base de datos mediante un objeto recibido como parámetro, que identifica el registro de la tabla a eliminar. La forma correcta de realizar un proceso de eliminación de un registro particular incluye los siguientes pasos:
    .row.mb-5
      .col-auto.pe-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img8.png', style='width: 280px', alt='').m-auto
      .col.bg-c22
        .p-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema4/img13.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 #[b a)] Iniciar una transacción por medio del método #[b beginTransaction()].
          .bg-c23.mb-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema4/img14.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 #[b b)] Utilizar un mecanismo para obtener una instancia de la clase entidad con eI objeto que referencia el registro a eliminar, ya sea por medio del método #[b get()] o #[b createQuery()].
          .bg-c23.mb-3
          .row.align-items-center.mb-3
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema4/img15.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 #[b c)] Invocar el método #[b delete()] del objeto session, pasando como parámetro el objeto que referencia el registro a eliminar.
          .bg-c23.mb-3
          .row.align-items-center
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema4/img16.svg', style='width: 50px', alt='').m-auto
            .col
              p.mb-0 #[b d)] Confirmarla transacción realizada por medio del método #[b getTransaction().commit()].
    .row.justify-content-center.mb-5
      .col-lg-8
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import java.util.List;
                p.mb-0  import org.hibernate.Session;
                p.mb-0  import org.hibernate.SessionFactory;
                p.mb-0  import org.hibernate.cfg.Configuration;
                p.mb-0  import com.javahibernate.demo.entity.Usuario;
                p.mb-0  
                p.mb-0  public class EliminarUsuarioDemo {
                p.mb-0      public static void main(String[] args) {
                p.mb-0          // Crear el SessionFactory
                p.mb-0          SessionFactory factory = new Configuration()
                p.mb-0                                  .configure("hibernate.cfg.xml")
                p.mb-0                                  .addAnnotatedClass(Usuario.class)
                p.mb-0                                  .buildSessionFactory();
                p.mb-0          
                p.mb-0          // Crear el Session
                p.mb-0          Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0          try {
                p.mb-0              // Iniciar una transacción
                p.mb-0              session.beginTransaction();
                p.mb-0  
                p.mb-0              // Eliminar un usuario cuyo id es 6
                p.mb-0              System.out.println("Eliminación de un usuario");
                p.mb-0              Usuario usuarioDelete = session.get(Usuario.class, 6);
                p.mb-0              session.delete(usuarioDelete);
                p.mb-0              System.out.println("Usuario " + usuarioDelete.getUserName() + " eliminado");
                p.mb-0  
                p.mb-0              // Confirmar la transacción
                p.mb-0              session.getTransaction().commit();
                p.mb-0              System.out.println("Proceso finalizado");
                p.mb-0  
                p.mb-0          } finally {
                p.mb-0              factory.close();
                p.mb-0          }
                p.mb-0      }
                p.mb-0  }
    .row.justify-content-center
      .col-lg-8
        .row
          .col-12
            .px-4.py-3.bg-c20
              figure
                img(src='@/assets/curso/tema2/img21.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c21
              pre
                p.mb-0  import java.util.List;
                p.mb-0  import org.hibernate.Session;
                p.mb-0  import org.hibernate.SessionFactory;
                p.mb-0  import org.hibernate.cfg.Configuration;
                p.mb-0  import com.javahibernate.demo.entity.Usuario;
                p.mb-0  
                p.mb-0  public class EliminarUsuarioDemo {
                p.mb-0      public static void main(String[] args) {
                p.mb-0          // Crear el SessionFactory
                p.mb-0          SessionFactory factory = new Configuration()
                p.mb-0                                  .configure("hibernate.cfg.xml")
                p.mb-0                                  .addAnnotatedClass(Usuario.class)
                p.mb-0                                  .buildSessionFactory();
                p.mb-0          
                p.mb-0          // Crear el Session
                p.mb-0          Session session = factory.getCurrentSession();
                p.mb-0  
                p.mb-0          try {
                p.mb-0              // Iniciar una transacción
                p.mb-0              session.beginTransaction();
                p.mb-0  
                p.mb-0              // Eliminar todos los usuarios cuyo id es 6
                p.mb-0              System.out.println("Eliminando el usuario de id = 6");
                p.mb-0              session.createQuery("delete from Usuario u where u.userId = 6").executeUpdate();
                p.mb-0  
                p.mb-0              // Confirmar la transacción
                p.mb-0              session.getTransaction().commit();
                p.mb-0              System.out.println("Proceso finalizado");
                p.mb-0  
                p.mb-0          } finally {
                p.mb-0              factory.close();
                p.mb-0          }
                p.mb-0      }
                p.mb-0  }
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Asociaciones
    .row.align-items-center.mb-3
      .col-lg-9.order-2.order-lg-1
        p.mb-0 Normalmente, al desarrollar una aplicación que gestione una base de datos, se requiere mucho más que una única tabla para la gestión de la información. Es común tener modelos de datos con múltiples tablas relacionadas con asociaciones de diferentes tipos y diferentes cardinalidades. Por lo tanto, es importante establecer en las clases de entidad este tipo de relaciones para que el proceso de mapeo sea coherente. Los tipos de asociaciones más comúnmente utilizadas son las que expresan relaciones uno a uno, relaciones uno a muchos, relaciones muchos a uno y relaciones muchos a muchos.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema4/img9.png', style='width: 300px', alt='').m-auto
    p.mb-5 Para explicar cada uno de estos casos, utilizaremos como referencia el siguiente modelo de datos que ya fue mapeado de forma individualizada. A medida que se agregue una asociación de diferente tipo, se establecerán los cambios que deberían estar presentes, y que se detallan en la siguiente figura:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 15.] Asociaciones
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema4/img17.svg', style='width: 1000px', alt='Representación gráfica de una clase de entidad Java "Usuario" y su relación con una tabla de base de datos, usando anotaciones para mapear propiedades a columnas específicas.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema4/img17m.svg', style='width: 570px', alt='Representación gráfica de una clase de entidad Java "Usuario" y su relación con una tabla de base de datos, usando anotaciones para mapear propiedades a columnas específicas.').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Relaciones #[i OneToOne]
    .row.mb-5
      .col-auto.d-none.d-md-block
        figure.mt-1
          img(src="@/assets/curso/tema4/img2.svg", style="width: 70px", alt="").m-auto
      .col
        p.mb-0 En este tipo de relaciones, se quiere expresar un vínculo en el que un ejemplar de una tabla tiene relación con uno y solo un ejemplar de una segunda tabla. Desde el punto de vista de las bases de datos, se creará una relación de integridad referencial vinculando una llave primaria con una llave foránea. Tomando como referencia el modelo de datos presentado anteriormente, supongamos que se desea indicar que un usuario tiene asociado un recurso. Para resolver este nuevo requerimiento, debemos modificar la clase de entidad de usuario para agregar un nuevo atributo que haga referencia al objeto recurso con el cual está relacionado y agregar la anotación correspondiente llamada @OneToOne, de forma que Hibernate haga el mapeo correcto. El esquema se detalla a continuación en la siguiente figura:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.p-lg-5.bg-c4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 16.] Relaciones OneToOne
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema4/img18.svg', style='width: 1000px', alt='Diagrama de la entidad "Usuario" con una relación uno a uno a una entidad "Recurso", visualizando las conexiones entre las tablas correspondientes en la base de datos.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema4/img18m.svg', style='width: 570px', alt='Diagrama de la entidad "Usuario" con una relación uno a uno a una entidad "Recurso", visualizando las conexiones entre las tablas correspondientes en la base de datos.').m-auto
    .row.align-items-center.mb-5
      .col.mb-4.mb-md-0
        p.mb-0 Mientras que en la base de datos se debe agregar un nuevo campo foráneo en la tabla usuario que haga referencia a la llave primaria de la tabla recurso para poder establecer la relación, en las clases de tipo entidad bastará con especificar el nuevo atributo del tipo de objeto correspondiente que referencia agregando la anotación de tipo @OneToOne. Si el campo nuevo requerido en la tabla usuario no existe, el mapeador de Hibernate se encargará de agregarlo.
      .col-md-auto
        figure
          img(src="@/assets/curso/tema4/img19.svg", style="width: 120px", alt="").m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c17
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema2/img15.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Relaciones #[i OneToMany - ManyToOne]

</template>

<script>
export default {
  name: 'Tema4',
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
