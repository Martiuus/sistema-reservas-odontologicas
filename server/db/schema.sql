
    DROP TABLE IF EXISTS reservations;
    DROP TABLE IF EXISTS services;
    DROP TABLE IF EXISTS users;
    
    -- Tabla de Usuarios
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
    -- Tabla de Servicios Odontológicos
    CREATE TABLE services (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL DEFAULT 0,
        duration_minutes INT NOT NULL DEFAULT 30,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
    -- Tabla de Reservas
    CREATE TABLE reservations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        service_id INT NOT NULL,
        customer_name VARCHAR(120) NOT NULL,
        customer_email VARCHAR(160) NOT NULL,
        reservation_date DATE NOT NULL,
        reservation_time TIME NOT NULL,
        status ENUM('pending', 'confirmed', 'canceled') NOT NULL DEFAULT 'pending',
        notes TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_reservation_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
    );
    