# BDDProyectoFinal

Manual de ejecución 
Para configurar y ejecutar el proyecto este proyecto consta de un servidor mysql, backend y un frontend,  que se va a tener que seguir un proceso que implica la instalación de dependencias y la ejecución de comandos específicos para cada parte del proyecto.

1. Instalación del servidor mysql:

  Descargar "mysql community server" y configurar para levantar el servidor.

  Los datos configurados en el proyecto son los siguientes:
  DB_NAME=ucusalud
  DB_USER=root
  DB_PASSWORD=qwezxc123
  DB_HOST=localhost
  DB_PORT=3306

  por lo tanto se debe configurar con esta información para así lograr que se conecte correctamente nuestra aplicación con el servidor.

2. Instalación de dependencias:
Utiliza el comando `npm install` en la raíz del proyecto para instalar todas las dependencias necesarias para el proyecto. Esto asegura que se descarguen todas las librerías y herramientas requeridas para tanto el backend como el frontend.

3. Ejecución del Backend:
Dirígete a la carpeta correspondiente al backend (`cd Backend`) y luego ejecuta `npm run dev`. Este comando está configurado en el `package.json` del backend para iniciar el servidor. Al ejecutarlo, se pone en funcionamiento el backend, permitiendo que escuche y maneje solicitudes.

4. Ejecución del Frontend:
Ve a la carpeta del frontend (`cd Frontend`) y ejecuta `ng serve`. Este comando, específico para proyectos Angular, inicia el servidor de desarrollo para el frontend. Permite acceder a la aplicación frontend a través de un navegador en una dirección específica.

Ten en cuenta que la correcta ejecución del proyecto depende de que todas las dependencias estén instaladas correctamente, tanto para el backend como para el frontend. Asimismo, es esencial asegurarse de que los comandos `npm run dev` y `ng serve` estén configurados adecuadamente en los archivos `package.json` de sus respectivas partes del proyecto.

