CREATE DATABASE client_management;
USE client_management;

CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE meetings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    meeting_date DATE,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);
