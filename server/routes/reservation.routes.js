    import { Router } from 'express';
    import { 
        createReservation, 
        getAllReservations,
        updateReservationStatus,
        deleteReservation,
        getBookedTimes
    } from '../controllers/reservation.controller.js';
    import authMiddleware from '../middleware/auth.middleware.js';
    
    const router = Router();

    router.post('/', createReservation);
    router.get('/availability', getBookedTimes);
    
    router.get('/', authMiddleware, getAllReservations);
    router.put('/:id/status', authMiddleware, updateReservationStatus);
    router.delete('/:id', authMiddleware, deleteReservation);
    
    export default router;
    