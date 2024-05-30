
-- Use imdb2024;

-- seleccionar la tabla de person y mostrar los datos
SELECT * FROM UserIMDB;

select *from gender;
select *from person;
select *from userIMDB;
call addAdministrator(6);
SELECT idPerson FROM UserIMDB WHERE username = 'andycr';
SELECT * FROM Administrator WHERE idUser = 3;
SELECT * FROM administrator WHERE idPerson = last_insert_id();
select *from distrit;
select *from staff;

SELECT * FROM UserIMDB WHERE username =andycr;


-- insecion de datos en la tabla Country
INSERT INTO Country (countryName) VALUES ('Costa Rica');

-- insecion de datos en la tabla Province
INSERT INTO Province (provinceName, idCountry) VALUES ('San Jose', 1);


-- insecion de datos en la tabla Canton
DELIMITER //
INSERT INTO Canton (cantonName, idDistrit) VALUES ('San Jose', 1);
CREATE PROCEDURE addCanton (IN nameVar VARCHAR(255), in idP INT)
   BEGIN
	 INSERT INTO Canton(cantonName, idProvince)
     Values (nameVar, idP)
   END
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

select *from staff;
-- tabla con relacion NxN con staff ya que un staff tien N allegados y algun allegado tiene N personas del staff
-- añade al algun allegado
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

-- staffType:
-- 	rol del staff(actor, director, etc)
CREATE PROCEDURE addStaffType(IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO staffType(staffType_name)
     Values (nameVar);
   END//


CREATE PROCEDURE addRol(IN idProductV INT, IN idStaffV INT, IN idStaffTV INT)
   BEGIN
	 INSERT INTO ProductxStaff(idProduct, idStaff)
     Values (idProductV, idStaffV);
     call addProductxStaffxType(last_insert_id(), idStaffTV);
   END//
   
   
-- 	crud
-- añade media en general titulo link(no se a que se refiere pero ahi esta) estreno, duracion, photo, sinopsis, trailer precio tipo(un id que hace referencia a serie, pelicula documental, etc)
-- el reparto, categoria plataformas se hace por aparte ya que como antes son iteraciones de una lista 
-- los updates de las tablas que tengan datos asi (iterativos, como reparto, categorias) hay dos opciones 1. mas sencilla para la base borra la lista de lo que se va a actualizar y se vuelven a añadir los 
-- "nuevos"(me refiero a que si antes habian 3 categorias(terror, drama, comedia) y se quieren cambiar se eliminan las tres y se añaden de nuevo(supenso, drama)
CREATE PROCEDURE addProduct (IN titleV varchar(255), IN linkV varchar(255), IN releaseV DATE,
							IN durationV time, IN photoV VARCHAR(255), IN synopsisV VARCHAR(255),
                            IN trailerV VARCHAR(255), IN priceV DOUBLE, in tipo int)
   BEGIN
	 INSERT INTO ProductAV(title, link, releaseDate, duration, photo, synopsis, trailer, price, review, idMediaType, activo)
     Values (titleV, linkV, releaseV, durationV, photoV, synopsisV, trailerV, priceV, 0.0, tipo, 1);
   END//

CALL addProduct('titani', 'link1', '1999-01-01', '1:30:10', 'foto1', 'sinopsis1', 'trailer1', 1000.0, 1);
select *from user;


