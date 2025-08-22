import pool from '../config/db.js';

const Reservation = {};
Reservation.create = async (reservationData) => {
  const { service_id, customer_name, customer_email, reservation_date, reservation_time, notes } = reservationData;
  
  const [result] = await pool.query(
    'INSERT INTO reservations (service_id, customer_name, customer_email, reservation_date, reservation_time, notes) VALUES (?, ?, ?, ?, ?, ?)',
    [service_id, customer_name, customer_email, reservation_date, reservation_time, notes]
  );
  return { id: result.insertId, ...reservationData };
};
Reservation.findAll = async () => {
  const [rows] = await pool.query(`
    SELECT r.*, s.name as service_name 
    FROM reservations r
    JOIN services s ON r.service_id = s.id
    ORDER BY r.reservation_date, r.reservation_time ASC
  `);
  return rows;
};

Reservation.updateStatus = async (id, status) => {
  const [result] = await pool.query(
    'UPDATE reservations SET status = ? WHERE id = ?',
    [status, id]
  );
  return result.affectedRows > 0;
};

Reservation.remove = async (id) => {
  const [result] = await pool.query('DELETE FROM reservations WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

Reservation.findBookedTimes = async (date) => {
  const [rows] = await pool.query(
    "SELECT reservation_time FROM reservations WHERE reservation_date = ? AND status != 'canceled'",
    [date]
  );
  return rows.map(row => row.reservation_time.substring(0, 5)); 
};

export default Reservation;
