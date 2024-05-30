-- 	get
DELIMITER //
CREATE PROCEDURE getPaises()
BEGIN
	SELECT * FROM Country;
END //
-- Province
CREATE PROCEDURE getProvinciasDePais(in idPaisV INT)
BEGIN
	SELECT * FROM Province
    WHERE idCountry = idPaisV;
END //
-- Distrit
CREATE PROCEDURE getDistritosDeCanton(IN idCantonV INT)
BEGIN
	SELECT * FROM Distrit
    WHERE idCanton = idCantonV;
END //
-- Canton
CREATE PROCEDURE getCantonesDeProvincia(IN idProvinciaV INT)
BEGIN
	SELECT * FROM Canton
    WHERE idProvince = idProvinciaV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Gender 
CREATE PROCEDURE getGeneros()
BEGIN
	SELECT * FROM Gender;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Person
CREATE PROCEDURE getPersonas()-- general incluido borrados
BEGIN
	SELECT 
		Person.*,
        Gender.gender_name,
        Country.countryName, 
        Province.provinceName, 
        Canton.cantonName, 
        Distrit.distritName
	FROM 
		Person
        INNER JOIN Gender ON Gender.id = Person.gender
        INNER JOIN Distrit ON Distrit.idDistrit = Person.idDistrit
        INNER JOIN Canton ON Canton.idCanton = Distrit.idCanton
		INNER JOIN Province ON Province.idProvince = Canton.idProvince
        INNER JOIN Country ON Country.idCountry = Province.idCountry;
END //
CREATE PROCEDURE getPersonasActivas() -- general de activos
BEGIN
	SELECT 
		Person.*,
        Gender.gender_name,
        Country.countryName, 
        Province.provinceName, 
        Canton.cantonName, 
        Distrit.distritName
	FROM 
		Person
        INNER JOIN Gender ON Gender.id = Person.gender
        INNER JOIN Distrit ON Distrit.idDistrit = Person.idDistrit
        INNER JOIN Canton ON Canton.idCanton = Distrit.idCanton
		INNER JOIN Province ON Province.idProvince = Canton.idProvince
        INNER JOIN Country ON Country.idCountry = Province.idCountry
    WHERE 
		activo = 1;
END //
CREATE PROCEDURE getPersona(IN correo INT) -- especifico
BEGIN
	SELECT 
		Person.*,
        Gender.gender_name,
        Country.countryName, 
        Province.provinceName, 
        Canton.cantonName, 
        Distrit.distritName
	FROM 
		Person
        INNER JOIN Gender ON Gender.id = Person.gender
        INNER JOIN Distrit ON Distrit.idDistrit = Person.idDistrit
        INNER JOIN Canton ON Canton.idCanton = Distrit.idCanton
		INNER JOIN Province ON Province.idProvince = Canton.idProvince
        INNER JOIN Country ON Country.idCountry = Province.idCountry
    WHERE 
		mail = correo;
END //
-- ------------------------------------------------------------------------------------------
CREATE PROCEDURE getUsuarios() -- general
BEGIN
	SELECT * FROM UserIMDB
    WHERE activo = 1;
END //
CREATE PROCEDURE getInfoUsuarios() -- general completa
BEGIN
	SELECT 
		UserIMDB.*,
		Person.*,
        Gender.gender_name,
        Country.countryName, 
        Province.provinceName, 
        Canton.cantonName, 
        Distrit.distritName
	FROM 
		UserIMDB
        INNER JOIN Person ON Person.id = UserIMDB.idPerson
        INNER JOIN Gender ON Gender.id = Person.gender
        INNER JOIN Distrit ON Distrit.idDistrit = Person.idDistrit
        INNER JOIN Canton ON Canton.idCanton = Distrit.idCanton
		INNER JOIN Province ON Province.idProvince = Canton.idProvince
        INNER JOIN Country ON Country.idCountry = Province.idCountry
    WHERE Person.activo = 1 and UserIMDB.activo = 1;
END //
CREATE PROCEDURE getInfoUsuario(IN idPersonaV INT) -- especifica completa
BEGIN
	SELECT 
		UserIMDB.*,
		Person.*,
        Gender.gender_name,
        Country.countryName, 
        Province.provinceName, 
        Canton.cantonName, 
        Distrit.distritName
	FROM 
		UserIMDB
        INNER JOIN Person ON Person.id = UserIMDB.idPerson
        INNER JOIN Gender ON Gender.id = Person.gender
        INNER JOIN Distrit ON Distrit.idDistrit = Person.idDistrit
        INNER JOIN Canton ON Canton.idCanton = Distrit.idCanton
		INNER JOIN Province ON Province.idProvince = Canton.idProvince
        INNER JOIN Country ON Country.idCountry = Province.idCountry
    WHERE Person.activo = 1 and UserIMDB.activo = 1 AND Person.id = idPersonaV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Administrator
CREATE PROCEDURE getAdministradores() -- general
BEGIN
	SELECT * FROM Administrator;
END //
DELIMITER //
CREATE PROCEDURE getInfoAdministradores() -- general completa
BEGIN
	SELECT
		Administrator.*,
		UserIMDB.*,
		Person.*,
        Gender.gender_name,
        Country.countryName, 
        Province.provinceName, 
        Canton.cantonName, 
        Distrit.distritName
	FROM 
		Administrator
		INNER JOIN UserIMDB ON UserIMDB.idPerson = Administrator.idUser
        INNER JOIN Person ON Person.id = UserIMDB.idPerson
        INNER JOIN Gender ON Gender.id = Person.gender
        INNER JOIN Distrit ON Distrit.idDistrit = Person.idDistrit
        INNER JOIN Canton ON Canton.idCanton = Distrit.idCanton
		INNER JOIN Province ON Province.idProvince = Canton.idProvince
        INNER JOIN Country ON Country.idCountry = Province.idCountry
    WHERE UserIMDB.activo = 1 and Person.activo = 1;
END //
CREATE PROCEDURE getAdministrador(IN idAdminV INT) -- general especifica
BEGIN
	SELECT 
		Administrator.*,
		UserIMDB.*,
		Person.*,
        Gender.gender_name,
        Country.countryName, 
        Province.provinceName, 
        Canton.cantonName, 
        Distrit.distritName
	FROM 
		Administrator
		INNER JOIN UserIMDB ON UserIMDB.idPerson = Administrator.idUser
        INNER JOIN Person ON Person.id = UserIMDB.idPerson
        INNER JOIN Gender ON Gender.id = Person.gender
        INNER JOIN Distrit ON Distrit.idDistrit = Person.idDistrit
        INNER JOIN Canton ON Canton.idCanton = Distrit.idCanton
		INNER JOIN Province ON Province.idProvince = Canton.idProvince
        INNER JOIN Country ON Country.idCountry = Province.idCountry
    WHERE UserIMDB.activo = 1 and Person.activo = 1 AND Person = idAdminV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Purchase
DELIMITER //
CREATE PROCEDURE getCompras(in idUserV INT, IN rango INT)
BEGIN
	SELECT 
		Purchase.*, ProductAV.id, ProductAV.title, ProductAV.synopsis, ProductAV.price 
	FROM 
		Purchase
		INNER JOIN UserIMDB ON UserIMDB.idPerson = Purchase.idUser
		INNER JOIN PurchasexProduct ON PurchasexProduct.idPurchase = Purchase.idPurchase
		INNER JOIN ProductAV ON ProductAV.id = PurchasexProduct.idProduct
    WHERE
		Purchase.idUser = idUserV
		AND (purchase_date >= DATE_SUB(CURDATE(), INTERVAL rango MONTH) OR rango IS NULL);
END //
CREATE PROCEDURE getProductoComprado(in idProductV INT, IN idUsuario INT)
BEGIN
	SELECT 
		COUNT(1) as comprado 
	FROM 
		Purchase
		INNER JOIN UserIMDB ON UserIMDB.idPerson = Purchase.idUser
		INNER JOIN PurchasexProduct ON PurchasexProduct.idPurchase = Purchase.idPurchase
		INNER JOIN ProductAV ON ProductAV.id = PurchasexProduct.idProduct
    WHERE
		ProductAV.id = idProductV and UserIMDB.idPerson = idUsuario;
END //
-- -------------------------------------------------------------------------------------------------------------
-- ProductAV
CREATE PROCEDURE getProductos()-- general
BEGIN
	SELECT * FROM ProductAV;
END //
CREATE PROCEDURE getProductosActivos()-- general activos
BEGIN
	SELECT * FROM ProductAV
    WHERE activo = 1;
END //
-- este trabaja en conjunto con el getOpinionDeProducto() y getCategoriasDeProducto()
-- ademas que para cambiar el boton de añador a favoritos se usa el getProductoFavorito
-- el parametro se le manda el tipo que se quiera buscar peliculas , series, etc
CREATE PROCEDURE getListaProductos(IN tipoMedia INT, in categoriaV INT)-- general solo lo que sea necesario como titulo sinopsis, fecha etc
BEGIN
	SELECT 
		ProductAV.id,
		ProductAV.title, 
        ProductAV.synopsis, 
        ProductAV.photo,
        ProductAV.duration,
        ProductAV.releaseDate
	FROM 
		ProductAV
        INNER JOIN ProductxCategory ON ProductxCategory.idProduct = ProductAV.id
        INNER JOIN category ON category.id = ProductxCategory.idCategory
	WHERE 
		activo = 1 
        AND (idMediaType = tipoMedia OR tipoMedia IS NULL)
        AND (category.id = categoriaV OR categoriaV IS NULL);
END //
CREATE PROCEDURE getTopNPopulares(IN tipoMedia INT, in categoriaV INT, IN topN INT)-- general solo lo que sea necesario como titulo sinopsis, fecha etc
BEGIN
	IF topN IS NULL THEN
		SELECT 
			ProductAV.id,
			ProductAV.title, 
			ProductAV.synopsis, 
			ProductAV.photo,
			ProductAV.duration,
			ProductAV.releaseDate,
            ProductAV.review,
            COUNT(DISTINCT Purchase.idUser) AS calificaciones
		FROM 
			PurchasexProduct
			INNER JOIN ProductAV ON PurchasexProduct.idProduct = ProductAV.id
			INNER JOIN ProductxCategory ON ProductxCategory.idProduct = ProductAV.id
			INNER JOIN category ON category.id = ProductxCategory.idCategory
		WHERE 
			PurchasexProduct.star IS NOT NULL
			AND activo = 1 
			AND (idMediaType = tipoMedia OR tipoMedia IS NULL)
			AND (category.id = categoriaV OR categoriaV IS NULL)
		GROUP BY
			ProductAV.id
		ORDER BY 
			review DESC,
            calificaciones DESC;
	ELSE
		SELECT 
			ProductAV.id,
			ProductAV.title, 
			ProductAV.synopsis, 
			ProductAV.photo,
			ProductAV.duration,
			ProductAV.releaseDate,
            ProductAV.review,
            COUNT(DISTINCT Purchase.idUser) AS calificaciones
		FROM 
			PurchasexProduct
			INNER JOIN ProductAV ON PurchasexProduct.idProduct = ProductAV.id
			INNER JOIN ProductxCategory ON ProductxCategory.idProduct = ProductAV.id
			INNER JOIN category ON category.id = ProductxCategory.idCategory
		WHERE 
			PurchasexProduct.star IS NOT NULL
			AND activo = 1 
			AND (idMediaType = tipoMedia OR tipoMedia IS NULL)
			AND (category.id = categoriaV OR categoriaV IS NULL)
		GROUP BY
			ProductAV.id
		ORDER BY 
			review DESC,
            calificaciones DESC
		Limit topN;
	END IF;

END //
DELIMITER //
CREATE PROCEDURE getTopNVentas(IN tipoMedia INT, in categoriaV INT,  IN topN INT)-- general solo lo que sea necesario como titulo sinopsis, fecha etc
BEGIN
	IF topN IS NULL THEN
		SELECT 
			ProductAV.id,
			ProductAV.title, 
			ProductAV.synopsis, 
			ProductAV.photo,
			ProductAV.duration,
			ProductAV.releaseDate,
            COUNT(PurchasexProduct.idProduct) AS compras
		FROM 
			ProductAV
			LEFT JOIN PurchasexProduct ON ProductAV.id= PurchasexProduct.idProduct
			INNER JOIN ProductxCategory ON ProductxCategory.idProduct = ProductAV.id
			INNER JOIN category ON category.id = ProductxCategory.idCategory
		WHERE 
			activo = 1 
			AND (idMediaType = tipoMedia OR tipoMedia IS NULL)
			AND (category.id = categoriaV OR categoriaV IS NULL)
			GROUP BY 
				ProductAV.id
			ORDER BY 
				Compras DESC;
	ELSE
		SELECT 
			ProductAV.id,
			ProductAV.title, 
			ProductAV.synopsis, 
			ProductAV.photo,
			ProductAV.duration,
			ProductAV.releaseDate,
            COUNT(PurchasexProduct.idProduct) AS compras
		FROM 
			ProductAV
			LEFT JOIN PurchasexProduct ON ProductAV.id= PurchasexProduct.idProduct
			INNER JOIN ProductxCategory ON ProductxCategory.idProduct = ProductAV.id
			INNER JOIN category ON category.id = ProductxCategory.idCategory
		WHERE 
			activo = 1 
			AND (idMediaType = tipoMedia OR tipoMedia IS NULL)
			AND (category.id = categoriaV OR categoriaV IS NULL)
			GROUP BY 
				ProductAV.id
			ORDER BY 
				Compras DESC
		Limit topN;
	END IF;
END //
CREATE PROCEDURE getProducto(IN idProductV INT) -- especifico
BEGIN
	SELECT * FROM ProductAV
	WHERE activo = 1 and id = idProductV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- PurchasexProduct 
CREATE PROCEDURE getOpiniones(IN idProductoV INT)
BEGIN
	SELECT 
		PurchasexProduct.star,
        PurchasexProduct.commentReview,
        PurchasexProduct.commentDate,
        UserIMDB.username
	FROM
		ProductAV
        INNER JOIN PurchasexProduct ON PurchasexProduct.idProduct = ProductAV.id
		INNER JOIN Purchase ON PurchasexProduct.idPurchase = Purchase.idPurchase
        INNER JOIN UserIMDB ON UserIMDB.idPerson = Purchase.idUser
    WHERE
		ProductAV.id = idProductoV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Wishlist 
CREATE PROCEDURE getFavoritos(IN idUsuarioV INT)
BEGIN
	SELECT 
		ProductAV.id,
		ProductAV.title, 
        ProductAV.synopsis, 
        ProductAV.photo
    FROM 
		ProductAV
		INNER JOIN Whishlist ON Whishlist.idProduct = ProductAV.id
        INNER JOIN UserIMDB ON UserIMDB.idPerson = Whishlist.idUser
    WHERE
		ProductAV.activo = 1 AND UserIMDB.idPerson = idUsuarioV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- category 
CREATE PROCEDURE getCategorias()
BEGIN
	SELECT * FROM category;
END //
CREATE PROCEDURE getCategoriasDeProducto(IN idProductoV INT)
BEGIN
	SELECT 
		category.* 
    FROM 
		category
		INNER JOIN ProductxCategory ON ProductxCategory.idCategory = category.id
        INNER JOIN ProductAV ON ProductAV.id = ProductxCategory.idProduct
    WHERE
		ProductoAV.id = idProductoV;

END //
-- -------------------------------------------------------------------------------------------------------------
-- MediaType
CREATE PROCEDURE getTipoMedia()
BEGIN
	SELECT * FROM MediaType;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Season
CREATE PROCEDURE getTemporadasDeProducto(IN idProductoV INT)
BEGIN
	SELECT * FROM Season
	WHERE idSerie = idProductoV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Episode
CREATE PROCEDURE getEpisodiosDeTemporada(IN idTemporadaV INT)
BEGIN
	SELECT * FROM Episode
    WHERE idSeason = idTemporadaV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Platform
CREATE PROCEDURE getPlataformas()
BEGIN
	SELECT * FROM Platform;
END //
CREATE PROCEDURE getPlataformasDeProducto(IN idProductoV INT)
BEGIN
	SELECT 
		Platform.* 
    FROM 
		Platform
		INNER JOIN ProductxPlatform ON ProductxPlatform.idPlatform = Platform.id
        INNER JOIN ProductAV ON ProductAV.id = ProductxPlatform.idProduct
    WHERE
		ProductoAV.id = idProductoV;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Staff
CREATE PROCEDURE getCreativos()-- general incluido borrados
BEGIN
	SELECT * FROM Staff;
END //
CREATE PROCEDURE getCreativosActivos()-- general activos
BEGIN
	SELECT * FROM Staff
    WHERE activo = 1;
END //
CREATE PROCEDURE getCreativo(IN idCreativo INT)--  especifico
BEGIN
	SELECT * FROM Staff
    WHERE idStaff = idCreativo;
END //
CREATE PROCEDURE getCreativosDeProducto(IN idProductoV INT)--  especifico de producto
BEGIN
	SELECT 
		Staff.*,
        StaffType.staffT_name,
        ProductxStaff.idProductAV
    FROM
		Staff
		INNER JOIN ProductxStaff ON ProductxStaff.idStaff = Staff.idStaff
        INNER JOIN ProductxStaffxType ON ProductxStaffxType.idProdxStaff = ProductxStaff.idPxS
        INNER JOIN StaffType ON ProductxStaffxType.idStaffT = StaffType.idType
        INNER JOIN ProductAV ON ProductAV.id = ProductxStaff.idProduct
	WHERE ProductAV.id = idProductoV
    order by Staff.idStaff;
END //

CREATE PROCEDURE getProductosDeCreativo(IN idCreativoV INT)--  especifico de creativo/staff
BEGIN
	SELECT 
		ProductAV.*
    FROM
		ProductAV
		INNER JOIN ProductxStaff ON ProductxStaff.idProduct = ProductAV.id
        INNER JOIN ProductxStaffxType ON ProductxStaffxType.idProdxStaff = ProductxStaff.idPxS
        INNER JOIN StaffType ON ProductxStaffxType.idStaffT = StaffType.idType
        INNER JOIN Staff ON Staff.idStaff = ProductxStaff.idStaff
	WHERE Staff.idStaff = idCreativoV
    order by ProductAV.title;
END //
-- -------------------------------------------------------------------------------------------------------------
-- Relative 
CREATE PROCEDURE getAllegados() -- general
BEGIN
	SELECT * FROM Relatives;
END //
CREATE PROCEDURE getAllegadosDeCreativo(in idCreativoV INT) -- especifico
BEGIN
	SELECT 
		Relatives.*,
        RelativesxStaff.relation
	FROM 
		Relatives
        INNER JOIN RelativesxStaff ON RelativesxStaff.idRelative = Relatives.idRelative
        INNER JOIN Staff ON Staff.idStaff = RelativesxStaff.idStaff
	WHERE Staff.idStaff = idCreativoV;
END //
