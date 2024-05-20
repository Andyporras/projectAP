create database	IMDB2024;
use IMDB2024;

CREATE TABLE Country
(
	idCountry INT AUTO_INCREMENT PRIMARY KEY,
    countryName VARCHAR(255)
);
CREATE TABLE Province
(
	idProvince INT AUTO_INCREMENT PRIMARY KEY,
    provinceName VARCHAR(255),
    idCountry INT,
    FOREIGN KEY (idCountry) REFERENCES Country(idCountry)
);
CREATE TABLE Distrit
(
	idDistrit INT AUTO_INCREMENT PRIMARY KEY,
    distritName VARCHAR(255),
    idProvince INT,
    FOREIGN KEY (idProvince) REFERENCES Province(idProvince)
);
CREATE TABLE Canton
(
	idCanton INT AUTO_INCREMENT PRIMARY KEY,
    cantonName VARCHAR(255),
    idDistrit INT,
    FOREIGN KEY (idDistrit) REFERENCES Distrit(idDistrit)
);

CREATE TABLE Gender 
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	gender_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IdType 
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	type_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Person
(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name_person VARCHAR(255) NOT NULL,
    birthdate DATE, 
    gender INT,
    mail VARCHAR(255) UNIQUE,
    phone VARCHAR(255),
    nationality VARCHAR(255),
    photo VARCHAR(255),
    idLocation INT,
    FOREIGN KEY (idLocation) REFERENCES Canton(idCanton)
);

CREATE TABLE Identification 
(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idPerson INT,
	idType INT,
	id_number VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (idPerson) REFERENCES Person(id),
	FOREIGN KEY (idType) REFERENCES IdType(id)
);



DELIMITER //
CREATE trigger set_age
BEFORE INSERT ON Person
FOR EACH ROW
BEGIN
	SET NEW.age = timestampdiff(YEAR, NEW.birthdate, CURDATE());
END//
DELIMITER ;

CREATE TABLE UserIMDB
(
	idPerson INT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    pass VARCHAR(255) NOT NULL,
    pay_type VARCHAR(255),
    FOREIGN KEY (idPerson) REFERENCES Person(id)
);

CREATE TABLE Administrator
(
	idUser INT primary KEY,
    FOREIGN KEY (idUser) REFERENCES UserIMDB(idPerson)
);

CREATE TABLE AdminDB
(
	idAdminDB INT auto_increment primary KEY,
	username VARCHAR(255) NOT NULL,
    pass varchar(255) NOT NULL
);

CREATE TABLE Purchase
(
	idPurchase INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT,
    purchase_date datetime,
    totalCost INT
);


CREATE TABLE MediaType
(
	idMediaType INT PRIMARY KEY,
    tipo VARCHAR(255) UNIQUE
);

CREATE TABLE ProductAV
(
	id INT auto_increment Primary key,
    title varchar(255) not null,
    link varchar(255),
    releaseDate DATE NOT NULL,
    duration datetime NOT NULL,
    photo VARCHAR(255),
    synopsis VARCHAR(255),
    trailer VARCHAR(255),
    price int NOT NULL,
    review DOUBLE,
    idMediaType INT,
    FOREIGN KEY (idMediaType) REFERENCES MediaType(idMediaType)
    
);


CREATE TABLE PurchasexProduct -- x
(
	idPurchase INT,
    idProduct INT,
    star INT,
    commentReview VARCHAR(255),
    FOREIGN KEY (idPurchase) REFERENCES Purchase(idPurchase),
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id)
);

CREATE TABLE Wishlist -- x
(
	idUser INT,
    idProduct INT,
    FOREIGN KEY (idUser) REFERENCES UserIMDB(idPerson),
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id)
);

CREATE TABLE category 
( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);


CREATE TABLE Season
(
	idSeason INT AUTO_INCREMENT PRIMARY KEY,
	idSerie INT,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (idSerie) REFERENCES ProductAV(id)
);
CREATE TABLE Episode
(
	idEp INT AUTO_INCREMENT PRIMARY KEY,
	idSeason INT,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (idSeason) REFERENCES Season(idSeason)
);
CREATE TABLE Platform
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	platform_name VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE Staff
(
	idStaff INT AUTO_INCREMENT PRIMARY KEY,
    staff_name VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    nationality VARCHAR(225) NOT NULL,
    biography VARCHAR(255),
    height VARCHAR(255),
    fact VARCHAR(255),
    photo VARCHAR(255)
);
CREATE TABLE Relative -- x
(
	idRelative INT AUTO_INCREMENT PRIMARY KEY,
    relative_name VARCHAR(255) NOT NULL
);
CREATE TABLE RelativexStaff -- x
(
	idStaff int,
    idRelative int,
    FOREIGN KEY (idStaff) REFERENCES Staff(idStaff),
    FOREIGN KEY (idRelative) REFERENCES Relative(idRelative)
);

CREATE TABLE StaffType 
(
	idType INT AUTO_INCREMENT PRIMARY KEY,
	staffT_name VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE ProductxStaff -- x un producto tiene n staff y un estaff trabaja en n peliculas
(
	idPxS INT AUTO_INCREMENT PRIMARY KEY,
    idProduct INT,
    idStaff INT,
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id),
    FOREIGN KEY (idStaff) REFERENCES Staff(idStaff)
);
CREATE TABLE ProductxPlatform -- x
(
	idProduct INT,
    idPlatform INT,
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id),
    FOREIGN KEY (idPlatform) REFERENCES Platform(id)
);
CREATE TABLE ProductxCategory -- x
(
	idProduct INT,
    idCategory INT,
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id),
    FOREIGN KEY (idCategory) REFERENCES Category(id)
);
CREATE TABLE ProductxStaffxType -- x un staff puede ser n tipos(actor, director) y un tipo lo pueden tener n staff
(
	idProdxStaff INT,
    idStaffT INT,
    FOREIGN KEY (idProdxStaff) REFERENCES ProductxStaff(idPxS),
    FOREIGN KEY (idStaffT) REFERENCES StaffType(idType)
);
