-- bitacora para los campos de auditoria
CREATE TABLE Records
(
	id INT auto_increment NOT NULL PRIMARY KEY,
	tableName VARCHAR(255),
    modification VARCHAR(255),
    oldValue VARCHAR(255),
    newValue VARCHAR(255),
    modificationDate Datetime
);

-- bitacora de precios TODAVIA NO FUNCIONA POR QUE LA ESPECIFICACIONE ESTA RARA
CREATE TABLE Records_price
(
	id INT auto_increment NOT NULL PRIMARY KEY,
	idOwner VARCHAR(255),
	ownerProduct VARCHAR(255),
    oldPrice VARCHAR(255),
    newPrice VARCHAR(255)
);

