    import { Router } from 'express';
    import {
        getAllServices,
        getServiceById,
        createService,
        updateService,
        deleteService
    } from '../controllers/service.controller.js';
    import authMiddleware from '../middleware/auth.middleware.js';
    
    const router = Router();

    router.get('/', getAllServices);
    router.get('/:id', getServiceById);
    

    router.post('/', authMiddleware, createService);
    router.put('/:id', authMiddleware, updateService);
    router.delete('/:id', authMiddleware, deleteService);
    
    export default router;
    