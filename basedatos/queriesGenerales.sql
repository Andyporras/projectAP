-- **** IMPORTANTE ****
-- TOME EN CUENTA A LA HORA DE INSERTAR QUE ALGUNOS DATOS DE ALGUNA ENTIDAD NECESITAN SU PROPIO ID COMO ES EL CASO DE PRODUCT QUE NECESITA 
-- SU ID PARA VINCULARLO CON SU EQUIPO DE TRABAJO(STAFFXPRODUCT) ESTO SE PUEDE HACER POR MEDIO DE UN SELECT last_insert_id() se obtiene el resultado
-- por fuera se guarda su valor en una variable y se puede usar como parametro
-- ejemplo: (ESTE EJEMPLO NO TIENE CODIGO REAL SOLO MEDIO ME BASE EN PROYECTOS PREVIOS)
-- 			  rowsAffected = cursor.execute("select last_insert_id()")
-- 			  idProduct = rowsAffected[0][0]
-- 			  cursor.execute("call getProduct(%s)", idProduct)
DELIMITER //
-- añadir canton nombre del canton id de la provincia
CREATE PROCEDURE addCanton (IN nameVar VARCHAR(255), in idP INT)
   BEGIN
	 INSERT INTO Canton(cantonName, idProvince)
     Values (nameVar, idP);
   END//

CREATE PROCEDURE updateCantonName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE Canton
     SET cantonName = nameVar
     WHERE Canton.idCanton = idVar;
END//    
   
CREATE PROCEDURE deleteCanton (IN idVar INT)
   BEGIN
	 DELETE FROM Canton
     WHERE Canton.idCanton = idVar;
END//
DELIMITER //
-- añadir distrito nombre del distrito id del canton
CREATE PROCEDURE addDistrit (IN nameVar VARCHAR(255), in idCan INT)
   BEGIN
	 INSERT INTO Distrit(distritName, idCanton)
     Values (nameVar, idCan);
   END//

CREATE PROCEDURE updateDistritName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE Distrit
     SET distritName = nameVar
     WHERE Distrit.idDistrit = idVar;
END//    
   
CREATE PROCEDURE deleteDistrit (IN idVar INT)
   BEGIN
	 DELETE FROM Distrit
     WHERE Distrit.idDistrit = idVar;
END//
-- añadir province nombre de la provincia id del pais
CREATE PROCEDURE addProvince (IN nameVar VARCHAR(255), in idC INT)
   BEGIN
	 INSERT INTO Province(provinceName, idCountry)
     Values (nameVar, idC);
   END//

CREATE PROCEDURE updateProvinceName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE Province
     SET Province = nameVar
     WHERE Province.idProvince = idVar;
END//    
   
CREATE PROCEDURE deleteProvince (IN idVar INT)
   BEGIN
	 DELETE FROM Province
     WHERE Province.idProvince = idVar;
END//
-- añadir pais nombre del pais
CREATE PROCEDURE addCountry (IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO Country(countryName)
     Values (nameVar);
   END//

CREATE PROCEDURE updateCountryName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE Country
     SET countryName = nameVar
     WHERE Country.idCountry = idVar;
END//    
   
CREATE PROCEDURE deleteCountry (IN idVar INT)
   BEGIN
	 DELETE FROM Country
     WHERE Country.idCountry = idVar;
END//

DELIMITER //
-- gender:
-- 	crud
-- añadir genero nombre del genero
CREATE PROCEDURE addGender (IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO gender(gender_name)
     Values (nameVar);
   END//

CREATE PROCEDURE updateGenderName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE gender
     SET gender_name = nameVar
     WHERE gender.id = idVar;
END//    
   
CREATE PROCEDURE deleteGender (IN idVar INT)
   BEGIN
	 DELETE FROM gender
     WHERE gender.id = idVar;
END//

DELIMITER //
-- persona:
-- 	crud
-- añadir persona nombre, fecha de nacimiento, idGenero correo, cel, nacionalidad, foto, identificacion pero el codigo tipo String(cedula, pasaporte),idDistrito(de ahi se puede saber de que pais, canton y provincia viene por medio de las llaves foraneas)
CREATE PROCEDURE addPerson (IN nameP VARCHAR(255), IN birth DATE, IN gen INT, IN mailVar VARCHAR(255),
							IN phoneVar VARCHAR(255), IN nationalityVar VARCHAR(255), IN photoVar VARCHAR(255), in identV VARCHAR(255), IN idDistV INT)
   BEGIN
	 INSERT INTO Person(name_person, birthdate, gender, mail, phone, nationality, photo, identification, idDistrit, activo)
     Values (nameP, birth, gen, mailVar, phoneVar, nationalityVar, photoVar, identV, idDistV,1);
   END//


   
CREATE PROCEDURE updatePerson (IN idVar INT, IN nameP VARCHAR(255), IN ageVar DATE, IN gen INT, IN mailVar VARCHAR(255), IN phoneVar VARCHAR(255),
									 IN natVar VARCHAR(255), IN photoVar VARCHAR(255), in identV VARCHAR(255), IN idDistV INT)
   BEGIN
	 UPDATE Persona
     SET name_person = nameP, birthdate = ageVar, age = timestampdiff(YEAR, ageVar, CURDATE()), gender = gen, 
			mail = mailVar, phone = phoneVar, nationality = natVar, phtot = photoVar, identification = identV, idDistrit = idDistV
     WHERE id = idVar;
   END//

-- esto me refiero con borrado logico lo que hace setea un valor digamos booleano que sera checado en las consultas para que solo devuelva los que tenga el activo 1
-- si se necesita un set activo me avisan para volver "añadir" lo borrado
CREATE PROCEDURE deletePerson (IN idVar INT)
   BEGIN
	 UPDATE Persona
     SET activo = 0
     WHERE Persona.id = idVar;
END//

-- user:
-- 	crud------------------------------------------------------------------------------------------
-- se supone que se ejecuta casi al mismo tiempo que addPerson es por eso que tiene es last_insert_id() que lo que retorna es el primary key de la ultima fila que se añadio a cualquier tabla
-- se añade el idPerson el nombre de usuario y la contraseña
DELIMITER //
CREATE PROCEDURE addUser (IN nameV VARCHAR(255), IN passVar VARCHAR(255))
   BEGIN
	 INSERT INTO userIMDB(idPerson, username, pass, activo)
     Values (last_insert_id(), nameV, passVar, 1);
   END//
   
CREATE PROCEDURE updateUserName (IN idVar INT, IN nameVar VARCHAR(255), in passVar VARCHAR(255))
   BEGIN
	 UPDATE userIMDB
     SET username = nameVar, pass = passVar
     WHERE userIMDB.idPerson = idVar;
   END//

-- el añadir un metodo de pago al ser un campo que se modifica diferente tiene un update aparte a diferencia de los otros que modifican todos los campos pero como los parametros son lo mismo solo se cambia lo que se ocupa
-- y es un strign que estara delimitado los posibles valores desde el backend/frontend
CREATE PROCEDURE updateUserPay (IN idVar INT, IN payT VARCHAR(255))
   BEGIN
	 UPDATE userIMDB
     SET pay_type = payT
     WHERE userIMDB.idPerson = idVar;
END//
   
CREATE PROCEDURE deleteUser (IN idAdmin INT)
   BEGIN
	 update userIMDB
     set activo = 0
     WHERE userIMDB.idPerson = idAdmin;
END//

-- adminCatalogo:
-- 	crud
-- el administrador que añade staff / media etc..
CREATE PROCEDURE addAdministrator (IN idAdmin INT)
   BEGIN
	 INSERT INTO Administrator(idUser, activo)
     Values (idAdmin, 1);
   END//
   
CREATE PROCEDURE deleteAdministrator (IN idAdmin INT)
   BEGIN
	 UPDATE Administrator
     SET activo = 0
     WHERE administrator.idUser = idAdmin;
END//
DELIMITER //
-- comprar(addPurchase)
-- la compra no necesitan borrado este se añade el id del usuario y el costo total la fecha se calcula automaticamente
-- los productos relacionados a esta compra se añaden en otro metodo ya que es iterativo por cada producto por lo que es
-- mejor hacer un for por fuera y llamar al otro metodo que añade los productos(PurchasexProduct)
CREATE PROCEDURE addPurchase(IN idUserV INT, IN cost VARCHAR(255))
   BEGIN
	 INSERT INTO purchase(idUser, purchase_date, totalCost)
     Values (idUserV, CURDATE(), cost);
   END//
   
DELIMITER //
-- producto:
-- 	crud
-- añade media en general titulo link(no se a que se refiere pero ahi esta) estreno, duracion, photo, sinopsis, trailer precio tipo(un id que hace referencia a serie, pelicula documental, etc)
-- el reparto, categoria plataformas se hace por aparte ya que como antes son iteraciones de una lista 
-- los updates de las tablas que tengan datos asi (iterativos, como reparto, categorias) hay dos opciones 1. mas sencilla para la base borra la lista de lo que se va a actualizar y se vuelven a añadir los 
-- "nuevos"(me refiero a que si antes habian 3 categorias(terror, drama, comedia) y se quieren cambiar se eliminan las tres y se añaden de nuevo(supenso, drama)
CREATE PROCEDURE addProduct (IN titleV varchar(255), IN linkV varchar(255), IN releaseV DATE,
							IN durationV datetime, IN photoV VARCHAR(255), IN synopsisV VARCHAR(255),
                            IN trailerV VARCHAR(255), IN priceV DOUBLE, in tipo int)
   BEGIN
	 INSERT INTO ProductAV(title, link, releaseDate, duration, photo, synopsis, trailer, price, review, idMediaType, activo)
     Values (titleV, linkV, releaseV, durationV, photoV, synopsisV, trailerV, priceV, 0.0, tipo, 1);
   END//

CREATE PROCEDURE updateProduct (IN idVar INT, IN titleV varchar(255), IN releaseV DATE,
							IN durationV datetime, IN photoV VARCHAR(255), IN synopsisV VARCHAR(255),
                            IN trailerV VARCHAR(255), IN priceV DOUBLE, in tipo int)
   BEGIN
	 UPDATE productAV
     SET title = titleV, releaseDate = releaseV, duration = durationV, photo = photoV,
		synopsis = synopsisV, trailer = trailerV, price = priceV, idMediaType = tipo
     WHERE productAV.id = idVar;
END// 

 -- no se deberia usar
CREATE PROCEDURE deleteProduct (IN idVar INT)
   BEGIN
	 UPDATE productAV
     SET activo = 0
     WHERE productAV.id = idVar;
END//
DELIMITER //
-- este es el metodo que relaciona los productos a una compra la cual posee algun user esto permite al usuario hacer comentarios por lo que el valor 
-- relacionado a las reviews es solo un update de alguna fila de esta tabla
CREATE PROCEDURE addPurchaseList (IN idPVar INT, IN idProVar INT)
   BEGIN
	 INSERT INTO PurchasexProduct(idPurchase, idProduct)
     Values (idPVar, idProVar);
   END//
DELIMITER //
-- añade la opinion solo puede pasar para productos comprados
CREATE PROCEDURE addOpinion (IN idPVar INT, IN idProVar INT, IN starV INT, IN commentReVar VARCHAR(255))
   BEGIN
	 UPDATE PurchasexProduct
     SET star = starV, commentReview = commentReVar
     WHERE idPurchase = idPVar and idProduct = idProVar;
   END//

-- setea las opiniones a null por lo que no tendria mas valores 
CREATE PROCEDURE deleteOpinion (IN idPVar INT, IN idProVar INT)
   BEGIN
	 UPDATE PurchasexProduct
     SET star = null, commentReview = null
     WHERE idPurchase = idPVar and idProduct = idProVar;
   END//

-- la wishlist no necesita updates ya que solo se pueden agregar o quitar de favoritos
-- al igual que compras estas relacionan al usuario con algun producto pero esta relacion es diferente ya que no se necesita estar comprado para hacerlo
CREATE PROCEDURE addWishlist (IN idUserVar INT, IN idProVar INT)
   BEGIN
	 INSERT INTO Wishlist(idUser, idProduct)
     VALUES (idUserVar, idProVar);
   END//
CREATE PROCEDURE removeFromWishlist (IN idUserVar INT, IN idProVar INT)
   BEGIN
	 DELETE FROM Wishlist
     WHERE idUser = idUserVar and idProduct = idProVar;
END//

-- categorias:
-- 	crud
-- se refiere a si es de terror, drama etc un media puede tener N categorias y 1 categoria esta en N productos por lo que hay una tabla por aparte
-- esa nxn se maneja igual que las mencionadas previamente ya que son iterativas(se definen por medio de un for por fuera y pueda que necesiten del last_insert_id())
CREATE PROCEDURE addCategory(IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO category(category_name)
     Values (nameVar);
   END//

CREATE PROCEDURE updateCategoryName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE category
     SET category_name = nameVar
     WHERE category.id = idVar;
END//    
   
CREATE PROCEDURE deleteCategory (IN idVar INT)
   BEGIN
	 DELETE FROM category
     WHERE category.id = idVar;
END//

-- añade posibles media(peliculas, series, documentales, etc)
DELIMITER //
CREATE PROCEDURE addMediaType (IN idVar VARCHAR(255))
   BEGIN
	 INSERT INTO MediaType(tipo)
     Values (idVar);
   END//
   
CREATE PROCEDURE deleteMediaType (IN idVar VARCHAR(255))
   BEGIN
	 DELETE FROM MediaType
     WHERE idMediaType = idVar;
END//

-- 	season
-- 	probablemente necesite al añadir una nueva media del last_insert_id()
CREATE PROCEDURE addSeason(IN idSerieV INT, IN linkV VARCHAR(255))
   BEGIN
	 INSERT INTO season(idSerie, link)
     Values (idSerieV, linkV);
   END//

CREATE PROCEDURE updateSeasonLink (IN idVar INT, IN linkV VARCHAR(255))
   BEGIN
	 UPDATE season
     SET link = linkV
     WHERE season.idSeason = idVar;
END// 
   
CREATE PROCEDURE deleteSeason(IN idVar INT)
   BEGIN
	 DELETE FROM season
     WHERE season.idSeason = idVar;
END//

-- 	episode
-- 		probablemente necesite al añadir una nueva media del last_insert_id() si es que se añaden ep de una vez
CREATE PROCEDURE addEpisode(IN idSeasonV INT, IN linkV VARCHAR(255))
   BEGIN
	 INSERT INTO episode(idSeason, link)
     Values (idSeasonV, linkV);
   END//

CREATE PROCEDURE updateEpisodeLink (IN idVar INT, IN linkV VARCHAR(255))
   BEGIN
	 UPDATE episode
     SET link = linkV
     WHERE episode.idEp = idVar;
END// 
   
CREATE PROCEDURE deleteEpisode(IN idVar INT)
   BEGIN
	 DELETE FROM episode
     WHERE episode.idEp = idVar;
END// 

-- plataform:
-- 	otra tabla que se relacionan de forma NxN con producto 
-- de nuevo puede ser iterativo y ocupe el last_insert_id()
CREATE PROCEDURE addPlatform(IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO platform(platform_name)
     Values (nameVar);
   END//

CREATE PROCEDURE updatePlatformName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE platform
     SET platform_name = nameVar
     WHERE platform.id = idVar;
END//    
   
CREATE PROCEDURE deletePlatform (IN idVar INT)
   BEGIN
	 DELETE FROM platform
     WHERE platform.id = idVar;
END//

-- staff:
-- 	añade staff nombre, nacimiento, nacionalidad, biorgafia, altura, dato, foto, lugar ne nacimiento
CREATE PROCEDURE addStaff(IN nameV VARCHAR(255), birthV DATE, IN natV VARCHAR(225),
				IN bio VARCHAR(255), IN heightV VARCHAR(255), IN factV VARCHAR(255), IN photoV VARCHAR(255), IN placeV VARCHAR(255))
   BEGIN
	 INSERT INTO staff(staff_name, birthdate, nationality, biography, height, fact, photo, birthPlace, activo)
     Values (nameV, birthV, natV, bio, heightV, factV, photoV, placeV, 1);
   END//

CREATE PROCEDURE updateStaff (IN idVar INT, IN nameV VARCHAR(255), IN birthV DATE, IN natV VARCHAR(255), IN bio VARCHAR(255),
									IN heightV VARCHAR(255),  IN factV VARCHAR(255), IN photoV VARCHAR(255), IN placeV varchar(255))
   BEGIN
	 UPDATE staff
     SET staff_name = namev, birdthdate = birthV, nationality = natV, biography = bio, height = heightV, fact = factV, photo = photoV, birthPlace = placeV
     WHERE staff.idStaff = idVar;
END//    
   
CREATE PROCEDURE deleteStaff (IN idVar INT)
   BEGIN
	 UPDATE staff
     SET activo = 0
     WHERE staff.idStaff = idVar;
END//

-- RELATIVE
-- CRUD
-- tabla con relacion NxN con staff ya que un staff tien N allegados y algun allegado tiene N personas del staff
-- añade al algun allegado
CREATE PROCEDURE addRelative(IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO Relative(relative_name)
     Values (nameVar);
   END//
-- lo relaciona con algun staff y le define la relacion
CREATE PROCEDURE addRelativexStaff(IN idStaffV INT, IN idRelativeV INT, in relationVar VARCHAR(255))
   BEGIN
     INSERT INTO RelativexStaff(idStaff, idRelative, relation)
     VALUES (idStaffV, idRelativeV, relationVar);
   END//

CREATE PROCEDURE updateRelativeName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE Relative
     SET relative_name = nameV
     WHERE idRelative = idVar;
END// 
CREATE PROCEDURE updateRelativexStaff (IN idStaffV INT, IN relaV VARCHAR(255), in idVar INT)
   BEGIN
	 UPDATE Relative
     SET relation = relaV
     WHERE idRelative = idVar AND idStaff = idStaffV;
END//    
   
CREATE PROCEDURE deleteRelative (IN idStaffV INT, in idRelaVar INT)
   BEGIN
	 DELETE FROM RelativexStaff
     WHERE idStaff = idStaffV AND idRelative = idRelaVar;
     DELETE FROM Relative
     WHERE idRelative = idRelaVar;
END//
CREATE PROCEDURE deleteRelativexStaff (IN idStaffV INT, in idRelaVar INT)
   BEGIN
	 DELETE FROM RelativexStaff
     WHERE idStaff = idStaffV AND idRelative = idRelaVar;
     DELETE FROM Relative
     WHERE idRelative = idRelaVar;
END//
Use imdb2024;
-- staffType:
-- 	rol del staff(actor, director, etc)
CREATE PROCEDURE addStaffType(IN nameVar VARCHAR(255))
   BEGIN
	 INSERT INTO staffType(staffT_name)
     Values (nameVar);
   END//
insert into staffType(staffT_name) values("prueba");
select *from staffType;
select *from staff;
select *from relative;
SELECT idRelative FROM Relative WHERE relative_name = 'andrey';
SELECT * FROM RelativexStaff WHERE idStaff = 2 AND idRelative = 2;
SELECT idRelative FROM Relative WHERE relative_name ="andrey";
SELECT idStaff FROM Staff WHERE staff_name = "andy";
SELECT * FROM StaffType WHERE staffT_name = 'actor';
CALL addRelativexStaff(2,2,'tio');
CREATE PROCEDURE updateStaffTypeName (IN idVar INT, IN nameV VARCHAR(255))
   BEGIN
	 UPDATE staffType
     SET staffType_name = nameVar
     WHERE staffType.id = idVar;
END//    
call deleteStaff(10);
CREATE PROCEDURE deleteStaffType(IN idVar INT)
   BEGIN
	 DELETE FROM staffType
     WHERE staffType.id = idVar;
END//
select *from productav;
SELECT idProduct FROM productav WHERE product_name = ;
-- 	crud
-- asigan el rol es ya que se da primero la relacion y luego se le asigna el rol por eso se hace ese call(relaciona 
-- el id del rol que puede tener algun staff con la relacion de el media)
-- esto permite asignar varios roles a un solo staff en un producto
CREATE PROCEDURE addRol(IN idProductV INT, IN idStaffV INT, IN idStaffTV INT)
   BEGIN
	 INSERT INTO ProductxStaff(idProduct, idStaff)
     Values (idProductV, idStaffV);
     call addProductxStaffxType(last_insert_id(), idStaffTV);
   END//

CREATE PROCEDURE deleteProductxStaff(IN idProductV INT, IN idStaffV INT)
   BEGIN
	 DELETE FROM ProductxStaff
     WHERE idProduct = idProductV and idStaff = idStaffV;
END//
-- 	crud
-- metodo llamado por el addRoll 
CREATE PROCEDURE addProductxStaffxType(IN idProdxStaffV INT, IN idStaffTV INT)
   BEGIN
	 INSERT INTO ProductxStaffxType(idProdxStaff, idStaffT)
     Values (idProdxStaffV, idStaffTV);
   END//
-- permite cambiar el rol ya dado por cierto no pueden haber roles repetidos de igual manera no creo que este metodo se use ya que la mayoria
-- del tiempo seran add y deletes a este tipo de datos 
-- NOTA NO SE DEBERIA REPETIR EL ROL EN EL SENTIDO QUE EL SE staff sea actor2 veces en la misma media
CREATE PROCEDURE updateRol(IN idVar INT, IN idStaffTV INT)
   BEGIN
	 UPDATE ProductxStaffxType
     SET idStaffT = idStaffTV
     WHERE idProdxStaff = idVar;
   END//

CREATE PROCEDURE deleteProductxStaffxType(IN idProdxStaffV INT, IN idStaffTV INT)
   BEGIN
	 DELETE FROM ProductxStaffxType
     WHERE idProdxStaff = idProdxStaffV and idStaffT = idStaffTV;
END// 

-- 	crud
-- relaciona n productos con n plataformas
CREATE PROCEDURE addProductxPlatform(IN idProductV INT, IN idPlatformV INT)
   BEGIN
	 INSERT INTO ProductxPlatform(idProduct, idPlatform)
     Values (idProductV, idPlatformV);
   END//

CREATE PROCEDURE deleteProductxPlatform(IN idProductV INT, IN idPlatformV INT)
   BEGIN
	 DELETE FROM ProductxPlatform
     WHERE idProduct = idProductV and idPlatform = idPlatformV;
END//
 
-- 	crud
-- relaciona n productos con n categorias
CREATE PROCEDURE addProductxCategory(IN idProductV INT, IN idCategoryV INT)
   BEGIN
	 INSERT INTO ProductxCategory(idProduct, idCategory)
     Values (idProductV, idCategoryV);
   END//

CREATE PROCEDURE deleteProductxCategory(IN idProductV INT, IN idCategoryV INT)
   BEGIN
	 DELETE FROM ProductxCategory
     WHERE idProduct = idProductV and idCategory = idCategoryV;
END//
