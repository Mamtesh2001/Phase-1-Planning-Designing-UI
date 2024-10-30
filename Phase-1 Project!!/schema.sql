CREATE DATABASE client_management;
USE client_management;

CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    contact VARCHAR(100)
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    name VARCHAR(100),
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE meetings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    date DATETIME,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);
