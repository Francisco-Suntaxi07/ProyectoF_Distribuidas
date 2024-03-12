/* REGISTROS DE LAS TABLAS*/

/*==============================================================*/
/* DATOS: USUARIO                                               */
/*==============================================================*/
DELETE FROM USUARIO;
-- Ejemplo de inserción de un nuevo usuario

BEGIN;
SELECT insertar_usuario('STALYN FRANCISCO SUNTAXI LEMA', 'sfsuntaxi1', 'admin1', 'sfsuntaxi1@espe.edu.ec', 'ADMINISTRADOR');
SELECT insertar_usuario('MIREYA', 'mireya', '123', 'mireya@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('DARIO JAVIER MORALES CAIZA', 'djmorales', '321', 'djmorales@espe.edu.ec', 'PROFESOR');
SELECT insertar_usuario('LUIS XAVIER ESPINOSA MEZA', 'lxespinosa', '123', 'lxespinosa@espe.edu.ec', 'ESTUDIANTE');
SELECT insertar_usuario('RICARDO SEBASTIAN GRIJALVA MOREJON', 'rsgrijalva', '123', 'rsgrijalva@espe.edu.ec', 'ESTUDIANTE');
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
    ('15593', 'ING. SEGURIDAD DEL SOFTWARE', 20);

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