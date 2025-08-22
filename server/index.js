// 1. Importaciones
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import serviceRoutes from './routes/service.routes.js';
import reservationRoutes from './routes/reservation.routes.js';
import authRoutes from './routes/auth.routes.js';

// 2. Inicializaciones
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// 3. Middlewares
app.use(cors());
app.use(express.json());

// 4 Rutas
app.get('/', (req, res) => {
    res.send('API del Sistema de Reservas Odontológicas funcionando!');
});

// Conectar las rutas de la API
app.use('/api/services', serviceRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/auth', authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
