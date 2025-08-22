import pool from '../config/db.js';

const Service = {};

Service.findAll = async () => {
    const [rows] = await pool.query('SELECT * FROM services ORDER BY name ASC');
    return rows;
};

Service.findById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM services WHERE id = ?', [id]);
  return rows[0]; 
};

Service.create = async (serviceData) => {
    const { name, description, price, duration_minutes } = serviceData;
    const [result] = await pool.query(
    'INSERT INTO services (name, description, price, duration_minutes) VALUES (?, ?, ?, ?)',
    [name, description, price, duration_minutes]
    );
    return { id: result.insertId, ...serviceData };
};

Service.update = async (id, serviceData) => {
    const { name, description, price, duration_minutes } = serviceData;
    const [result] = await pool.query(
    'UPDATE services SET name = ?, description = ?, price = ?, duration_minutes = ? WHERE id = ?',
    [name, description, price, duration_minutes, id]
    );
  return result.affectedRows > 0;
};

Service.remove = async (id) => {
    const [result] = await pool.query('DELETE FROM services WHERE id = ?', [id]);
  return result.affectedRows > 0; 
};

export default Service;
