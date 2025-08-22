    import pool from '../config/db.js';
    
    const User = {};
    User.create = async (userData) => {
        const { email, password_hash } = userData;
        const [result] = await pool.query(
        'INSERT INTO users (email, password_hash) VALUES (?, ?)',
        [email, password_hash]
        );
        return { id: result.insertId, email };
    };

    User.findByEmail = async (email) => {
      const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    };
    
    export default User;
    