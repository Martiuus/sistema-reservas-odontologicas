///////////////////Sistema de Reservas para Clínica Dental//////////////////////////////////

Este proyecto es una Single Page Application (SPA) desarrollada como parte del examen final del curso de Desarrollo de Aplicaciones Web. La aplicación permite a los usuarios ver los servicios de una clínica dental, agendar citas y a los administradores gestionar los servicios y las reservas a través de un panel protegido.

--------------Características---------------

Interfaz Pública:
Visualización de servicios odontológicos.
Formulario para agendar nuevas reservas.
Verificación de disponibilidad de horarios en tiempo real para evitar conflictos.

------------Panel de Administración:-------------------------

Inicio de sesión seguro con autenticación basada en Tokens (JWT).
Gestión de Reservas: Visualizar todas las citas, cambiar su estado (pendiente, confirmada, cancelada) y eliminarlas.
Gestión de Servicios: Crear, editar y eliminar los servicios ofrecidos por la clínica.

------------Tecnología:----------------------

Backend RESTful construido con Node.js y Express.
Base de datos relacional con MySQL.
Frontend moderno y reactivo construido con React.
Diseño responsive implementado con Bootstrap.

--------------Stack de Tecnologías--------------------
*****Frontend:*******

React
React Router
Bootstrap

*****Backend:******

Node.js
Express
MySQL2 (Driver de MySQL)
JSON Web Token (JWT) para autenticación
Bcrypt.js para hashing de contraseñas

-----------------Requisitos Previos-----------------------

Asegúrate de tener instalado el siguiente software en tu sistema:
Node.js (versión 18 o superior recomendada)
MySQL (o un gestor de base de datos compatible como MariaDB)


------------Instalación y Puesta en Marcha----------------
Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

1. Clonar el Repositorio
git clone https://github.com/Martiuus/sistema-reservas-odontologicas
cd sistema-reservas-odontologicas

2. Configurar el Backend (/server)
Navega a la carpeta del servidor e instala las dependencias:

cd server
npm install

Crea la Base de Datos:
Abre tu cliente de MySQL y ejecuta la siguiente consulta para crear la base de datos:

CREATE DATABASE IF NOT EXISTS odontologia_db;

Configura las Variables de Entorno:

Crea una copia del archivo .env.example y renómbrala a .env.

Abre el archivo .env y completa las credenciales de tu base de datos MySQL.

PORT=4000
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PASSWORD=tu_contraseña_de_mysql
MYSQL_DB=odontologia_db
JWT_SECRET=UN_SECRETO_MUY_DIFICIL_DE_ADIVINAR

Ejecuta las Migraciones (Crear Tablas):
Abre tu cliente de MySQL, selecciona la base de datos odontologia_db y ejecuta el contenido del archivo server/db/schema.sql para crear las tablas users, services y reservations.

3. Configurar el Frontend (/client)
Abre una nueva terminal y navega a la carpeta del cliente para instalar sus dependencias:

cd client
npm install

Uso
Para ejecutar la aplicación, necesitarás tener dos terminales abiertas simultáneamente.

Iniciar el Servidor (Backend):
En la terminal ubicada en la carpeta /server, ejecuta:

npm run dev

El servidor estará corriendo en http://localhost:4000.

Iniciar la Aplicación (Frontend):
En la terminal ubicada en la carpeta /client, ejecuta:

npm start

La aplicación se abrirá automáticamente en tu navegador en http://localhost:3000.

Poblar la Base de Datos (Seed)
Para cargar datos de ejemplo (servicios y un usuario administrador), puedes usar el script de "seed".

Asegúrate de que el archivo server/seed.json exista.

En la terminal del servidor (/server), ejecuta:

npm run seed

Esto limpiará las tablas y las poblará con los datos del archivo JSON.

Usuario Demo
Después de ejecutar el seed, puedes usar las siguientes credenciales para acceder al panel de administración:

Email: admin@clinicadental.com

Contraseña: password123
