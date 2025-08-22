    import Reservation from '../models/reservation.model.js';

    export const createReservation = async (req, res) => {
      try {
        const newReservation = await Reservation.create(req.body);
        res.status(201).json({ message: 'Reserva creada exitosamente', data: newReservation });
      } catch (error) {
        res.status(500).json({ message: 'Error al crear la reserva', error: error.message });
      }
    };

    export const getAllReservations = async (req, res) => {
      try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservas', error: error.message });
      }
    };

    export const updateReservationStatus = async (req, res) => {
      try {
        const { status } = req.body;
        const { id } = req.params;
    
        if (!['pending', 'confirmed', 'canceled'].includes(status)) {
          return res.status(400).json({ message: 'Estado no válido.' });
        }
    
        const updated = await Reservation.updateStatus(id, status);
        if (updated) {
          res.status(200).json({ message: 'Estado de la reserva actualizado.' });
        } else {
          res.status(404).json({ message: 'Reserva no encontrada.' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la reserva', error: error.message });
      }
    };

    export const deleteReservation = async (req, res) => {
      try {
        const deleted = await Reservation.remove(req.params.id);
        if (deleted) {
          res.status(204).send();
        } else {
          res.status(404).json({ message: 'Reserva no encontrada.' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la reserva', error: error.message });
      }
    };

    export const getBookedTimes = async (req, res) => {
      try {
        const { date } = req.query; 
        if (!date) {
          return res.status(400).json({ message: 'La fecha es requerida.' });
        }
        const bookedTimes = await Reservation.findBookedTimes(date);
        res.status(200).json(bookedTimes);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener la disponibilidad', error: error.message });
      }
    };