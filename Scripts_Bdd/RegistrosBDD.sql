/* REGISTROS DE LAS TABLAS*/

/*==============================================================*/
/* DATOS: USUARIO                                               */
/*==============================================================*/
DELETE FROM USUARIO;

EXEC INSERTAR_USUARIO 'STALYN FRANCISCO SUNTAXI LEMA', 'sfsuntaxi1', 'admin1', 'sfsuntaxi1@espe.edu.ec', 'ADMINISTRADOR';
EXEC INSERTAR_USUARIO 'MIREYA', 'mireya', '123', 'mireya@espe.edu.ec', 'PROFESOR';
EXEC INSERTAR_USUARIO 'DARIO JAVIER MORALES CAIZA', 'djmorales', '321', 'djmorales@espe.edu.ec', 'PROFESOR';
EXEC INSERTAR_USUARIO 'LUIS XAVIER ESPINOSA MEZA', 'lxespinosa', '123', 'lxespinosa@espe.edu.ec', 'ESTUDIANTE';
EXEC INSERTAR_USUARIO 'RICARDO SEBASTIAN GRIJALVA MOREJON', 'rsgrijalva', '123', 'rsgrijalva@espe.edu.ec', 'ESTUDIANTE';

select * from USUARIO;

/*==============================================================*/
/* DATOS: CURSO                                                 */
/*==============================================================*/
DELETE FROM CURSO;

INSERT INTO CURSO (ID_CURSO, NOMBRE_CURSO, CUPOS_CURSO) VALUES
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

INSERT INTO MATRICULA (ID_MATRICULA, ID_CURSO, ID_USUARIO, FECHA_MATRICULA)
VALUES
    ('M00001', '15348', 'L00004', '2023-09-25'), 
    ('M00002', '15360', 'L00004', '2023-09-25'), 
    ('M00003', '15589', 'L00004', '2023-09-26'), 
    ('M00004', '15591', 'L00004', '2023-09-27'),
    ('M00005', '15593', 'L00004', '2023-09-25');

select * from MATRICULA;