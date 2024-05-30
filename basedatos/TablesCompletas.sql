
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
    FOREIGN KEY (idCountry) REFERENCES Country(idCountry) ON DELETE CASCADE
);

CREATE TABLE Canton
(
	idCanton INT AUTO_INCREMENT PRIMARY KEY,
    cantonName VARCHAR(255),
    idProvince INT,
    FOREIGN KEY (idProvince) REFERENCES Province(idProvince) ON DELETE CASCADE
);

CREATE TABLE Distrit
(
	idDistrit INT AUTO_INCREMENT PRIMARY KEY,
    distritName VARCHAR(255),
    idCanton INT,
    FOREIGN KEY (idCanton) REFERENCES Canton(idCanton) ON DELETE CASCADE
);


CREATE TABLE Gender 
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	gender_name VARCHAR(255) UNIQUE NOT NULL
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
    identification VARCHAR(255) UNIQUE NOT NULL,
    idDistrit INT,
    activo INT,
    FOREIGN KEY (idDistrit) REFERENCES Distrit(idDistrit) ON DELETE SET NULL,
    FOREIGN KEY (gender) REFERENCES Gender(id) ON DELETE SET NULL

);
ALTER TABLE Person
ADD COLUMN age INT;

DELIMITER //
CREATE trigger set_age
BEFORE INSERT ON Person
FOR EACH ROW
BEGIN
	SET NEW.age = timestampdiff(YEAR, NEW.birthdate, CURDATE());
END//

CREATE TABLE UserIMDB
(
	idPerson INT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    pass VARCHAR(255) NOT NULL,
    pay_type VARCHAR(255),
    activo INT,
    FOREIGN KEY (idPerson) REFERENCES Person(id) on DELETE CASCADE
);


CREATE TABLE Administrator
(
	idUser INT primary KEY,
    activo INT,
    FOREIGN KEY (idUser) REFERENCES UserIMDB(idPerson) ON DELETE CASCADE
);

CREATE TABLE Purchase
(
	idPurchase INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT,
    purchase_date datetime,
    totalCost INT,
    FOREIGN KEY (idUser) REFERENCES UserIMDB(idPerson) ON DELETE SET NULL
);

CREATE TABLE MediaType
(
	idMediaType INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) UNIQUE
);

CREATE TABLE ProductAV
(
	id INT auto_increment Primary key,
    title varchar(255) not null,
    link varchar(255),
    releaseDate DATE NOT NULL,
    duration varchar(255) NOT NULL,
    photo VARCHAR(255),
    synopsis VARCHAR(255),
    trailer VARCHAR(255),
    price DOUBLE NOT NULL,
    review DOUBLE,
    idMediaType INT,
    activo INT,
    FOREIGN KEY (idMediaType) REFERENCES MediaType(idMediaType) ON DELETE SET NULL
    
);


CREATE TABLE PurchasexProduct -- x
(
	idPurchase INT,
    idProduct INT,
    star INT,
    commentReview VARCHAR(255),
    commentDate datetime,
    FOREIGN KEY (idPurchase) REFERENCES Purchase(idPurchase) ON DELETE SET NULL,
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id) ON DELETE SET NULL
);

CREATE TABLE Wishlist -- x
(
	idUser INT,
    idProduct INT,
    FOREIGN KEY (idUser) REFERENCES UserIMDB(idPerson) ON DELETE CASCADE,
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id) ON DELETE CASCADE
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
    FOREIGN KEY (idSerie) REFERENCES ProductAV(id) ON DELETE CASCADE
);

CREATE TABLE Episode
(
	idEp INT AUTO_INCREMENT PRIMARY KEY,
	idSeason INT,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (idSeason) REFERENCES Season(idSeason) ON DELETE CASCADE
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
    birthPlace VARCHAR(255),
    nationality VARCHAR(225) NOT NULL,
    biography VARCHAR(255),
    height VARCHAR(255),
    fact VARCHAR(255),
    photo VARCHAR(255),
    activo INT
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
    relation VARCHAR(255),
    FOREIGN KEY (idStaff) REFERENCES Staff(idStaff) ON DELETE CASCADE,
    FOREIGN KEY (idRelative) REFERENCES Relative(idRelative) ON DELETE CASCADE
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
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id) ON DELETE CASCADE,
    FOREIGN KEY (idStaff) REFERENCES Staff(idStaff) ON DELETE CASCADE
);
CREATE TABLE ProductxPlatform -- x
(
	idProduct INT,
    idPlatform INT,
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id) ON DELETE CASCADE,
    FOREIGN KEY (idPlatform) REFERENCES Platform(id) ON DELETE CASCADE
);
CREATE TABLE ProductxCategory -- x
(
	idProduct INT,
    idCategory INT,
    FOREIGN KEY (idProduct) REFERENCES ProductAV(id) ON DELETE CASCADE,
    FOREIGN KEY (idCategory) REFERENCES Category(id) ON DELETE CASCADE
);
CREATE TABLE ProductxStaffxType -- x un staff puede ser n tipos(actor, director) y un tipo lo pueden tener n staff
(
	idProdxStaff INT,
    idStaffT INT,
    FOREIGN KEY (idProdxStaff) REFERENCES ProductxStaff(idPxS) ON DELETE CASCADE,
    FOREIGN KEY (idStaffT) REFERENCES StaffType(idType) ON DELETE CASCADE
);

