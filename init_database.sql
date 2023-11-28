create database ucusalud;
show databases;

use ucusalud;

create table Funcionarios (
Ci int,
Nombre varchar(255),
Apellido varchar(255),
Fch_Nacimiento varchar(255),
Direccion varchar(255),
Teléfono varchar(255),
Email varchar(255),
LogId INT AUTO_INCREMENT,
PRIMARY KEY (Ci, LogId),
UNIQUE (LogId)
);

create table Logins (
LogId INT AUTO_INCREMENT,
Password varchar(255),
primary key(LogId),
FOREIGN KEY (LogId) REFERENCES Funcionarios (LogId)
); 

Create Table Agenda (
Nro int,
Ci int,
Fch_Agenda date,

FOREIGN KEY (Ci) REFERENCES Funcionarios (Ci)
);

create table formulario (
Ci int,
Nombre varchar(255),
Apellido varchar(255),
Fch_Nacimiento varchar(255),
TieneCDS bool,
Fch_Vencimiento date
);

create table Carnet_Salud (
Ci int,
Fch_Emision date,
Fch_Vencimiento date,
Comprobante blob,

FOREIGN KEY (Ci) REFERENCES Agenda (Ci)
);

create table Periodos_Actualización (
Año varchar(255),
Semestre varchar(255),
Fch_Inicio date,
Fch_Fin date
);

INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Direccion, Teléfono, Email, LogId)
VALUES (54332612, 'Juan', 'Pérez', '1990-01-01', 'Calle Principal 123', '123456789', 'juan.perez@example.com', '1010');
INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Direccion, Teléfono, Email, LogId)
VALUES (54332612, 'Jose', 'Varela', '1995-11-08', 'Centenario', '095554793', 'jose@gmail.com', '1001');
INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Direccion, Teléfono, Email, LogId)
VALUES (54332612, 'Nico', 'Lorenzo', '1995-08-08', 'Bolivia', '095554794', 'nico@gmail.com', '1002');
INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Direccion, Teléfono, Email, LogId)
VALUES (54332612, 'Lucas', 'Benitez', '1995-04-08', 'Ricaldoni', '095554795', 'lucas@gmail.com', '1003');
INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Direccion, Teléfono, Email, LogId)
VALUES (54332612, 'Franco', 'Gonzalez', '1995-04-08', 'Ricaldoni', '095554796', 'franco@gmail.com', '1004');
INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Direccion, Teléfono, Email, LogId)
VALUES (54332612, 'Seba', 'Rodriguez', '1995-04-08', 'Ricaldoni', '095554796', 'franco@gmail.com', '1005');
INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Direccion, Teléfono, Email, LogId)
VALUES (54332612, 'Matias', 'Arezo', '1995-04-08', 'Ricaldoni', '095554796', 'franco@gmail.com', '1006');

INSERT INTO Logins (LogId, Password) VALUES (5, 'cGFzc3dvcmQx');

INSERT INTO Carnet_Salud (Ci, Fch_Emision, Fch_Vencimiento, Comprobante)
VALUES (12345678, '2023-11-20', '2024-11-20', LOAD_FILE('/Users/jose/Desktop/serverImage.png'));



