-- triger para definir el rate del producto
DELIMITER //
CREATE TRIGGER actualizarRate
AFTER UPDATE ON PurchasexProduct
FOR EACH ROW
BEGIN
    DECLARE promedio DOUBLE;

    SELECT AVG(star) INTO promedio
    FROM PurchasexProduct
    WHERE idProduct = NEW.idProduct AND star > 0.0;
    
    UPDATE ProductAV
    SET review = promedio
    WHERE id = NEW.idProduct;
END //
-- =========================================================================================================
-- campos de auditoria
DELIMITER //
CREATE TRIGGER createPerson
AFTER INSERT ON Person
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Person", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updatePerson
AFTER UPDATE ON Person
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Person", "UPDATE", CONCAT(OLD.name_person, ", ", OLD.birthdate, ", ", OLD.gender, ", ", OLD.mail, ", ", OLD.phone, ", ", OLD.nationality, ", ", OLD.photo, ", ", OLD.identification, ", ", OLD.idDistrit), CONCAT(NEW.name_person, ", ", NEW.birthdate, ", ", NEW.gender, ", ", NEW.mail, ", ", NEW.phone, ", ", NEW.nationality, ", ", NEW.photo, ", ", NEW.identification, ", ", NEW.idDistrit), now());
END//

CREATE TRIGGER deletePerson
AFTER DELETE ON Person
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Person", "DELETE", NULL, NULL, now());
END//

-- -------------------------------------------------------
CREATE TRIGGER createGender
AFTER INSERT ON Gender
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Gender", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateGender
AFTER UPDATE ON Gender
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Gender", "UPDATE", OLD.gender_name, NEW.gender_name, now());
END//

CREATE TRIGGER deleteGender
AFTER DELETE ON Gender
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Gender", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------

-- --------------------------------------------------------- -------------------------------------------------------
CREATE TRIGGER createUser
AFTER INSERT ON UserIMDB
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("User", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateUser
AFTER UPDATE ON UserIMDB
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("User", "UPDATE", CONCAT(OLD.username, ", ", OLD.pass, ", ", OLD.pay_type), CONCAT(NEW.username, ", ", NEW.pass, ", ", NEW.pay_type), now());
END//

CREATE TRIGGER deleteUser
AFTER DELETE ON UserIMDB
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("User", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createAdministrator
AFTER INSERT ON Administrator
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Administrator", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER deleteAdministrator
AFTER DELETE ON Administrator
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Administrator", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createPurchase
AFTER INSERT ON Purchase
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Purchase", "INSERT", NULL, NULL, now());
END//

-- -------------------------------------------------------
CREATE TRIGGER createProductAV
AFTER INSERT ON ProductAV
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("ProductAV", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateProductAV
AFTER UPDATE ON ProductAV
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("ProductAV", "UPDATE", CONCAT(OLD.title, ", ", OLD.releaseDate, ", ", OLD.duration, ", ", OLD.photo, ", ", OLD.synopsis, ", ", OLD.trailer, ", ", OLD.price, ", ", OLD.review, ", ", OLD.idMediaType), CONCAT(NEW.title, ", ", NEW.releaseDate, ", ", NEW.duration, ", ", NEW.photo, ", ", NEW.synopsis, ", ", NEW.trailer, ", ", NEW.price, ", ", NEW.review, ", ", NEW.idMediaType), now());
END//
CREATE TRIGGER deleteProductAV
AFTER DELETE ON ProductAV
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("ProductAV", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------

CREATE TRIGGER updateReview
AFTER UPDATE ON PurchasexProduct
FOR EACH ROW
BEGIN
	IF OLD.commentReview = NULL THEN
        INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
		Values("Review", "INSERT", NULL, NULL, now());
	ELSE
        INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
		Values("Review", "UPDATE", CONCAT(OLD.star, ", ", OLD.commentReview, ", ", OLD.commentDate), CONCAT(NEW.star, ", ", NEW.commentReview, ", ", NEW.commentDate), now());
    END IF;
END//

-- -------------------------------------------------------
CREATE TRIGGER createWishlist
AFTER INSERT ON Wishlist
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Whislist", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER deleteWishlist
AFTER DELETE ON Wishlist
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("whishlist", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createCategory
AFTER INSERT ON category
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Category", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateCategory
AFTER UPDATE ON category
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Category", "UPDATE", OLD.category_name, NEW.category_name, now());
END//

CREATE TRIGGER deleteCategory
AFTER DELETE ON category
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Category", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------


-- -------------------------------------------------------
CREATE TRIGGER createSeason
AFTER INSERT ON Season
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Season", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateSeason
AFTER UPDATE ON Season
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Season", "UPDATE", OLD.link, NEW.link, now());
END//

CREATE TRIGGER deleteSeason
AFTER DELETE ON Season
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Season", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createEpisode
AFTER INSERT ON Episode
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Episode", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateEpisode
AFTER UPDATE ON Episode
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Episode", "UPDATE", OLD.link, NEW.link, now());
END//

CREATE TRIGGER deleteEpisode
AFTER DELETE ON Episode
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Episode", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createPlatform
AFTER INSERT ON Platform
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Platform", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updatePlatform
AFTER UPDATE ON Platform
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Platform", "UPDATE", OLD.platform_name, NEW.platform_name, now());
END//

CREATE TRIGGER deletePlatform
AFTER DELETE ON Platform
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Platform", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createStaff
AFTER INSERT ON Staff
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Staff", "INSERT", NULL, NULL, now());
END//
delimiter //
CREATE TRIGGER updateStaff
AFTER UPDATE ON Staff
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Staff", "UPDATE", CONCAT(OLD.staff_name, ", ", OLD.birthdate, ", ", OLD.biography, ", ", OLD.height, ", ", OLD.nationality, ", ", OLD.fact, OLD.photo), CONCAT(NEW.staff_name, ", ", NEW.birthdate, ", ", NEW.biography, ", ", NEW.height, ", ", NEW.nationality, ", ", NEW.fact, NEW.photo), now());
END//

CREATE TRIGGER deleteStaff
AFTER DELETE ON Staff
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Staff", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createRelative
AFTER INSERT ON Relative
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("Relative", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateRelative
AFTER UPDATE ON Relative
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("Relative", "UPDATE", OLD.relative_name, NEW.relative_name, now());
END//

CREATE TRIGGER deleteRelative
AFTER DELETE ON Relative
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("Relative", "DELETE", NULL, NULL, now());
END//
-- -------------------------------------------------------
CREATE TRIGGER createStaffType
AFTER INSERT ON StaffType
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate)
    VALUES ("StaffType", "INSERT", NULL, NULL, now());
END//

CREATE TRIGGER updateStaffType
AFTER UPDATE ON StaffType
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    Values("StaffType", "UPDATE", OLD.staffT_name,NEW.staffT_name, now());
END//

CREATE TRIGGER deleteStaffType
AFTER DELETE ON StaffType
FOR EACH ROW
BEGIN
	INSERT INTO records(tableName, modification, oldValue, newValue, modificationDate) 
    VALUES ("StaffType", "DELETE", NULL, NULL, now());
END//
