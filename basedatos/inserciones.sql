
Use imdb2024;

-- seleccionar la tabla de person y mostrar los datos
SELECT * FROM Person;


-- insecion de datos en la tabla Country
INSERT INTO Country (countryName) VALUES ('Costa Rica');

-- insecion de datos en la tabla Province
INSERT INTO Province (provinceName, idCountry) VALUES ('San Jose', 1);

-- insecion de datos en la tabla Distrit
INSERT INTO Distrit (distritName, idProvince) VALUES ('San Jose', 1);


-- insecion de datos en la tabla Canton
INSERT INTO Canton (cantonName, idDistrit) VALUES ('San Jose', 1);

-- insecion de datos en la tabla person
INSERT INTO Person (name_person, birthdate, gender, mail, phone, NATIONALITY, photo, idLocation) VALUES ('user1', '1999-01-01', 1, 'masculino', '12345678', 'costarricense', 'foto1', 1);

-- insecion de datos en la tabla UserIMDB
INSERT INTO UserIMDB (idPerson, username, pass, pay_type) VALUES (2, 'user1', '1234', 'paypal');
-- INSERT INTO UserIMDB (idPerson, username, pass, pay_type) VALUES (2, 'user2', '1234', 'paypal');