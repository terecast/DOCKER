#para crear una imagen de nodeJs debemos crear un archivo Docker file
#este archivo se utiliza para construir una imagen de Docker(Docker Image)
#Se ejecutara una aplicacion NODEJS

#FROM: Establece la imagen base para la construccion de Docker
#Para este ejmplo vamos a usar la version 15 como base
FROM node:15

#WORKDIR Establece el directorio de trabajo dentro del contenedor como / app
#todo lo que se copie en la imagen de docker se almacenara en este directorio
WORKDIR /app

#COPY: copia el archivo package.JSON y package-lock.json a la imagen de Docker
COPY package.json .

#RUN: Instala las dependencias de la aplicacion Node.js en el contenedor
#utiliza el archivo package.json copiado previamente para determinar que paquetes instalar
RUN npm install

#copia todos los archivos y directorios desde el directorio de construccion local
#al directorio de trabajo en el contenedor
#Esto incluira la aplicacion NODEJS y todos los archivos que se necesiten para ejecutar la aplicacion
COPY . ./

#EXPOSE: establece el puerto que se expone la aplicacion en el contenedor


#Establece el comando predeterminado a ejecutar cuando se inicia el contenedor
CMD ["npm", "run", "dev"]

#Variables de entorno
ENV PORT 3000
EXPOSE $PORT