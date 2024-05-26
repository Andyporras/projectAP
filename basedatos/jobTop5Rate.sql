
-- Correr esto SOLO EN LA instancia ROOT es para dar permisos 
SET GLOBAL event_scheduler = ON;
-- ===============================================================
-- tabla para guardar la info del job
CREATE TABLE bestRateJob 
(
	dateJob DATETIME,
    productTitle VARCHAR(255),
    productRate DOUBLE
);


DELIMITER //

CREATE EVENT top5RateJob
ON SCHEDULE EVERY 1 DAY
STARTS '2024-05-28 00:00:00'
DO
BEGIN
	INSERT INTO bestRateJob (dateJob, productTitle, productRate)
    SELECT CURDATE(), productAV.title, ProductAV.review
    FROM ProductAV
    where activo =1 and rate > 0
    order by review DESC
    LIMIT 5;
END//
    







