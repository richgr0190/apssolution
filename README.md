# apssolution
Practica de Microservicios y Contenedores
Estas son las instrucciones que  permitiran obtener el proyecto para su funcionamiento en la maquina local,
con el proposito de  ejecutar esta api.

Pre-requisitos:
En esta pequeña prueba utilice como lenguaje de programación javaScript, utilizando Node.js con el framework web "Express",
apoyandome de Json, Html, Bootstrap, entre otras herramientas.

Como ya lo comente anteriormente necesitamos tener instalado lo siguiente:
  -Node.js
  -Express
  -Git

Instalación:

Procedemos a bajar el codigo de git e importarlo a nuestro IDE Atom, posteriormente instalar lo siguiente 
(Algunos de los siguientes plugin no son realmente necesarios, pero facilitaron el desarrollo de esta aplicación ).

1. Instalr en su IDE  (en este caso Atom)  el plugin atom live server.
2. Istalar Node.js 

No necesarios
3. plugin PlatformIO IDE para tener nuestra propia terminal dentro de nuestro IDE
4. plugin jsonlint para validar el codigo de json
5. morgan para poder ver las peteciones en consola
6. Instalar el modulo de Nodemon permitir que todos los cambios que realicemos en nuestro proyecto se implementen a tiempo real.

Para arrancar el proyecto debemos situarnos en la carpeta que descargamos y mediante la terminal capturar el 
siguiente comando:

npx nodemon src/index.js

Debido que en la practica viene un punto (3) donde especifica crear un Endpoint, nos dirigimos a nuestro navegador y 
capturar la siguiente url.

http://localhost:8090/api/sps/helloworld/v1

tambien ahi especificamos que arrancamos el sistema en el puerto 8090

En este caso se creo un formulario donde tenemos que capturar algunos datos, estos datos se van a guardar 
en un archivo llamado newdato.json y para mostrarlos nos dirigimos a la siguiente ruta.

http://localhost:8090/

y asi sucesivamente la aplicacipon estara leyendo los datos cuando arrancamos el servidor
y posteriomente despues de estar guardando los datos en el formulario los estará guardando en el archivo newdato.json.





