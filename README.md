<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarollo
1.  Clonar repositorio
2. Ejecutar

```bash
$ yarn install
```
3. Tener Nest CLI Instalado

```bash
$ npm i -g @nestjs/cli
```

4. Levantar la Base de datos 
```bash
$ docker-compose up -d
```
5.  Clonar el archivo ```.env.template``` y renombrar la copia a ```.env``` y llenar las variables de entorno definidas 

6. Ejecutar la aplicación en dev:

```bash
$ yarn start:dev
```

6. Recosntruir la Base de datos con la semilla (Seed)
```url
  http://localhost:3000/api/v2/seed
```
- Usarlo meramente en desarrollo, o si no se tienen datos en la Base de datos

## Stack utilizado 

* MongoDB
* Nestjs


# Production Build

1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno
3. Crear la nueva imagen 


# Pasos para crear la imagen: 
```bash
$ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Run
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

```

# Nota
Por defecto, docker-compose usa el archivo ```.env```, por lo que si tienen el archivo ```.env``` y lo configuran con sus variables de entorno de producción, bastaría con

```bash
docker-compose -f docker-compose.prod.yaml up --build
```