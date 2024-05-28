
Use imdb2024;

-- seleccionar la tabla de person y mostrar los datos
SELECT * FROM UserIMDB;

select *from gender;

-- insecion de datos en la tabla Country
INSERT INTO Country (countryName) VALUES ('Costa Rica');

-- insecion de datos en la tabla Province
INSERT INTO Province (provinceName, idCountry) VALUES ('San Jose', 1);


-- insecion de datos en la tabla Canton
INSERT INTO Canton (cantonName, idDistrit) VALUES ('San Jose', 1);
CREATE PROCEDURE addCanton (IN nameVar VARCHAR(255), in idP INT)
   BEGIN
	 INSERT INTO Canton(cantonName, idProvince)
     Values (nameVar, idP);
   END//

CALL addCanton('San Jose', 1);
-- insecion de datos en la tabla Distrit
INSERT INTO Distrit (distritName, idProvince) VALUES ('San Jose', 1);

-- añadir distrito nombre del distrito id del canton
CREATE PROCEDURE addDistrit (IN nameVar VARCHAR(255), in idCan INT)
   BEGIN
	 INSERT INTO Distrit(distritName, idCanton)
     Values (nameVar, idCan);
   END//

CALL addDistrit('San Jose', 1);
-- insecion de datos en la tabla person
INSERT INTO Person (name_person, birthdate, gender, mail, phone, NATIONALITY, photo, idLocation) VALUES ('user1', '1999-01-01', 1, 'masculino', '12345678', 'costarricense', 'foto1', 1);

-- insecion de datos en la tabla UserIMDB
INSERT INTO UserIMDB (idPerson, username, pass, pay_type) VALUES (2, 'user1', '1234', 'paypal');
-- INSERT INTO UserIMDB (idPerson, username, pass, pay_type) VALUES (2, 'user2', '1234', 'paypal');

-- inseccion de datos en la tabla Genre
INSERT INTO Genre (genreName) VALUES ('Accion');
INSERT INTO Genre (genreName) VALUES ('Comedia');
CALL addGender('Masculino');
CALL addGender('Femenino');


-- añadir persona nombre, fecha de nacimiento, idGenero correo, cel, nacionalidad, foto, identificacion pero el codigo tipo String(cedula, pasaporte),idDistrito(de ahi se puede saber de que pais, canton y provincia viene por medio de las llaves foraneas)
CREATE PROCEDURE addPerson (IN nameP VARCHAR(255), IN birth DATE, IN gen INT, IN mailVar VARCHAR(255),
							IN phoneVar VARCHAR(255), IN nationalityVar VARCHAR(255), IN photoVar VARCHAR(255), in identV VARCHAR(255), IN idDistV INT)
   BEGIN
	 INSERT INTO Person(name_person, birthdate, gender, mail, phone, nationality, photo, identification, idDistrit, activo)
     Values (nameP, birth, gen, mailVar, phoneVar, nationalityVar, photoVar, identV, idDistV,1);
   END//

// insercion de datos en la tabla Person con el procedimiento almacenado
CALL addPerson('user2', '1999-01-01', 1, 'masculino', '12345678', 'costarricense', 'foto1', '123456789', 1);


CREATE PROCEDURE addUser (IN nameV VARCHAR(255), IN passVar VARCHAR(255))
   BEGIN
	 INSERT INTO userIMDB(idPerson, username, pass, activo)
     Values (last_insert_id(), nameV, passVar, 1);
   END//

CALL addUser('user2', '1234');
