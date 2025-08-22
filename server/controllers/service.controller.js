import Service from '../models/service.model.js';

// Obtener todos los servicios
export const getAllServices = async (req, res) => {
    try {
    const services = await Service.findAll();
    res.status(200).json(services);
    } catch (error) {
    res.status(500).json({ message: 'Error al obtener los servicios', error });
    }
};

export const getServiceById = async (req, res) => {
    try {
    const service = await Service.findById(req.params.id);
    if (service) {
        res.status(200).json(service);
    } else {
        res.status(404).json({ message: 'Servicio no encontrado' });
    }
    } catch (error) {
    res.status(500).json({ message: 'Error al obtener el servicio', error });
    }
};
export const createService = async (req, res) => {
    try {
    const newService = await Service.create(req.body);
    res.status(201).json(newService);
    } catch (error) {
    res.status(500).json({ message: 'Error al crear el servicio', error });
    }
};

export const updateService = async (req, res) => {
    try {
    const updated = await Service.update(req.params.id, req.body);
    if (updated) {
        res.status(200).json({ message: 'Servicio actualizado correctamente' });
    } else {
        res.status(404).json({ message: 'Servicio no encontrado' });
    }
    } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el servicio', error });
    }
};

export const deleteService = async (req, res) => {
    try {
    const deleted = await Service.remove(req.params.id);
    if (deleted) {
        res.status(204).send(); 
    } else {
        res.status(404).json({ message: 'Servicio no encontrado' });
    }
    } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el servicio', error });
    }
};
