# Proyecto desafio backend.

#### Este repositorio cuenta con las diferentes versiones e implementaciones en el dessarrollo de una API Restful que cumplira con lo que necesitaria un servicio como dev.to para funcionar, la rama main es la rama que tiene la version mas actualizada. Las demas ramas podrian estar aun en dessarrollo.

## Como iniciar esta API:

#### Una vez clonado el repositorio es necesario instalar las dependencias. Se pueden instalar una por una consultando el archivo package.json o desde la terminal y situandonos en la carpeta raiz del repositorio clonado, suando el comando npm install, se instalaran todas las dependencias.

#### ES recomendable utilizar VScode para poder usar de manera correcta la apllizacion. 

#### Es necesario revisar que un par de scripts esten escritos en el archivo package.json la parte de "scripts" en dicho archivo deberia quedar con la siguiente configuracion.
#### "scripts": {
####     "start": "node index.js",
####     "dev": "node --watch index.js"
####   },

#### De esta forma para iniciar la aplicacion en modo desarrollo utilizaremos el comando npm run dev y para inicar la aplicacion sin el modo desarrollador utilizaremos el comando node index.js

#### Ambos comandos se ejecutan desde la terminal situandonos en la carpeta raiz del proyecto y para terminarlos podemos presionar las teclas ctrl + c

#### Y por ultimo crear el archivo .env con las variables de entorno propias necesarias para el acceso a una base de datos, las variables necesarias estan indicadas en el archivo example.env

## Usar la API

#### Una vez iniciada la aplicacion podemos consumirla de la siguiente manera

#### Con algun gestor de peticiones como Postman o la extension de thunderclient en vscode haremos diferentes tipos de peticiones a las distintas rutas. Cada combinacion de ambas tiene un objetivo distinto

#### La direccion a realizar las peticiones es la siguiente:

#### http://localhost:8080

#### endpoints y sus peticiones

POST /users para registrar un usuario nuevo, mandar en el body de la peticion el esquema necesario con los datos requeridos minimos(ver userSignUpexample.txt que se encuentra en la carpeta raiz del proyecto)

POST /auth/login Para iniciar sesion mandar en el body de la peticion en formato .json el email y la contrasena de un usuario previamente creado, en la respuesta retornara un token que nos servira para realizar algunas diferentes operaciones dentro de la API

POST /post para crear un post sera necesario mandar en el body de la peticion un .json cde la siguiente forma
{
    "content": "your post content"
}

GET /post para obtener todos los post que existan en la base de datos









