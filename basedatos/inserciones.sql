
Use imdb2024;

-- seleccionar la tabla de person y mostrar los datos
SELECT * FROM UserIMDB;

select *from gender;
select *from person;
select *from userIMDB;
select *from distrit;
select *from creativo;

SELECT * FROM UserIMDB WHERE username =andycr;


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
select *from person;

CREATE PROCEDURE addUser (IN nameV VARCHAR(255), IN passVar VARCHAR(255))
   BEGIN
	 INSERT INTO userIMDB(idPerson, username, pass, activo)
     Values (last_insert_id(), nameV, passVar, 1);
   END//

CALL addUser('user2', '1234');


-- ####################################### creativo ########################################
-- 	añade staff nombre, nacimiento, nacionalidad, biorgafia, altura, dato, foto, lugar ne nacimiento
CREATE PROCEDURE addStaff(IN nameV VARCHAR(255), birthV DATE, IN natV VARCHAR(225),
				IN bio VARCHAR(255), IN heightV VARCHAR(255), IN factV VARCHAR(255), IN photoV VARCHAR(255), IN placeV VARCHAR(255))
   BEGIN
	 INSERT INTO staff(staff_name, birthdate, nationality, biography, height, fact, photo, birthPlace, activo)
     Values (nameV, birthV, natV, bio, heightV, factV, photoV, placeV, 1);
   END//

CALL addStaff('staff1', '1999-01-01', 'costarricense', 'bio1', '1.80', 'dato1', 'foto1', 'lugar1');


CREATE PROCEDURE addRelative(IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO Relative(relative_name)
     Values (nameVar);
   END//

CALL addRelative('relative1');

-- lo relaciona con algun staff y le define la relacion
CREATE PROCEDURE addRelativexStaff(IN idStaffV INT, IN idRelativeV INT, in relationVar VARCHAR(255))
   BEGIN
     INSERT INTO RelativexStaff(idStaff, idRelativexStaff, relation)
     VALUES (idStaffV, idRelativeV, relationVar);
   END//

CALL addRelativexStaff(1, 1, 'hermano');

-- sacar el id de la persona que se acaba de logear con el username y la contraseña
-- y verificar si el id de la persona esta en la tabla administrator
SELECT idPerson FROM UserIMDB WHERE username = 'user1' AND pass = '1234';
SELECT * FROM Administrator WHERE idPerson = idPerson;

