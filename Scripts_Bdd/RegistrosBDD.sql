/* REGISTROS DE LAS TABLAS*/

/*==============================================================*/
/* DATOS: USUARIO                                               */
/*==============================================================*/
DELETE FROM USUARIO;
-- Ejemplo de inserción de un nuevo usuario

BEGIN;
SELECT insertar_usuario('STALYN FRANCISCO SUNTAXI LEMA', 'sfsuntaxi1', 'admin', 'sfsuntaxi1@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('MIREYA', 'mireya', '123', 'mireya@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('DARIO JAVIER MORALES CAIZA', 'djmorales', '321', 'djmorales@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('KLEBER AUGUSTO AGUILAR LEMA', 'kaaguolar', '321', 'kaaguolar@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('JUAN CARLOS TANDAZO CANDO', 'jctandazo', '321', 'jctandazo@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('SANG GUUN YOO', 'sgyoo', '12345678', 'sgyoo@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('ANGEL GEOVANNY CUDCO POMAGUALLI', 'agcudco', '87654321', 'agcudco@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('LUIS XAVIER ESPINOSA MEZA', 'lxespinosa', '123', 'lxespinosa@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('SANTIAGO XAJIER RISUEÑO TABOADA', 'sxrisueño', '123', 'sxrisueño@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('RICARDO SEBASTIAN GRIJALVA MOREJON', 'rsgrijalva', '123', 'rsgrijalva@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('ALEJANDRO JOSUE TOSCANO TABOADA', 'ajtoscano', 'clave', 'ajtoscano@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('KARLA LIZBETH CAJAS CAJAS', 'klcajas', '123', 'kccajas@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('ALISSON ALEJANDRA CAIZA CAIZA', 'aacaiz', 'clave', 'aacaiz@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('CAMILA PACHECO PACHECO', 'ccpacheco', '123', 'ccpacheco@espe.edu.ec', 'ESTUDIANTE');
COMMIT;

select * from usuario;

/*==============================================================*/
/* DATOS: CURSO                                                 */
/*==============================================================*/
DELETE FROM CURSO;

INSERT INTO CURSO (ID_CURSO, NOMBRE_CURSO, CUPOS_CURSO)
VALUES
    ('15348', 'APLICACIONES DISTRIBUIDAS', 20),
    ('15360', 'ASEG DE LA CALIDAD DE SOFTWARE', 25),
    ('15589', 'DESARROLLO DE SOFTWARE SEGURO', 20),
    ('15591', 'DESARROLLO DE VIDEO JUEGOS', 25),
    ('15593', 'ING. SEGURIDAD DEL SOFTWARE', 20),
	('3091', 'EC. DIFERENCIALES ORDINARIAS', 40),
	('3697', 'COMPUTACION PARALELA', 20),
	('3691', ' MODELOS DISC PARA ING SO', 25),
	('3294', 'CÁLCULO VECTORIAL', 40),
	('3700', 'PROGRAMACION WEB', 20);
	
select * from CURSO;


/*==============================================================*/
/* DATOS: MATRICULA                                             */
/*==============================================================*/
DELETE FROM MATRICULA;

BEGIN;
SELECT insertar_matricula('15348', 'L00004', '2023-09-25');
SELECT insertar_matricula('15360', 'L00004', '2023-09-25');
SELECT insertar_matricula('15589', 'L00004', '2023-09-26');
SELECT insertar_matricula('15591', 'L00004', '2023-09-27');
SELECT insertar_matricula('15593', 'L00004', '2023-09-25');
COMMIT;

select * from MATRICULA;