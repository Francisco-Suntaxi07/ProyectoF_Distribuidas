/*==============================================================*/
/* DBMS name:      PostgreSQL 16.x                              */
/* Created on:     7/3/2024 20:44:21                            */
/*==============================================================*/

DROP TABLE IF EXISTS MATRICULA;
DROP TABLE IF EXISTS REGISTRO;
DROP TABLE IF EXISTS USUARIO;
DROP TABLE IF EXISTS CURSO;
DROP FUNCTION insertar_usuario;
DROP SEQUENCE IF EXISTS Sequence_Usuario_Id;
DROP FUNCTION IF EXISTS INSERTAR_MATRICULA;
DROP SEQUENCE IF EXISTS Sequence_Matricula_Id;
DROP FUNCTION IF EXISTS INSERTAR_REGISTRO;
DROP SEQUENCE IF EXISTS Sequence_Registro_Id;


/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
CREATE TABLE USUARIO (
   ID_USUARIO           VARCHAR(16)          NOT NULL,
   NOMBRE_USUARIO       VARCHAR(40)          NULL,
   USERNAME             VARCHAR(16)          NULL,
   CLAVE_USUARIO        VARCHAR(16)          NULL,
   EMAIL_USUARIO        VARCHAR(32)          NULL,
   ROL_USUARIO          VARCHAR(16)          NULL,
   CONSTRAINT PK_USUARIO PRIMARY KEY (ID_USUARIO)
);

/*==============================================================*/
/* Table: CURSO                                                 */
/*==============================================================*/
CREATE TABLE CURSO (
   ID_CURSO             VARCHAR(8)           NOT NULL,
   NOMBRE_CURSO         VARCHAR(32)          NULL,
   CUPOS_CURSO          INT                  NULL,
   CONSTRAINT PK_CURSO PRIMARY KEY (ID_CURSO)
);

/*==============================================================*/
/* Table: MATRICULA                                             */
/*==============================================================*/
CREATE TABLE MATRICULA (
   ID_MATRICULA         VARCHAR(8)           NOT NULL,
   ID_CURSO             VARCHAR(8)           NOT NULL,
   ID_USUARIO           VARCHAR(16)          NOT NULL,
   FECHA_MATRICULA      DATE                 NULL,
   CONSTRAINT PK_MATRICULA PRIMARY KEY (ID_MATRICULA),
   CONSTRAINT FK_MATRICULA_CURSO FOREIGN KEY (ID_CURSO) REFERENCES CURSO (ID_CURSO) ON DELETE NO ACTION ON UPDATE NO ACTION,
   CONSTRAINT FK_MATRICULA_USUARIO FOREIGN KEY (ID_USUARIO) REFERENCES USUARIO (ID_USUARIO) ON DELETE NO ACTION ON UPDATE NO ACTION
);

/*==============================================================*/
/* Table: REGISTRO                                              */
/*==============================================================*/
CREATE TABLE REGISTRO (
   ID_REGISTRO          VARCHAR(8)           NOT NULL,
   ID_USUARIO           VARCHAR(16)          NOT NULL,
   NOMBRE_ESTUDIANTE    VARCHAR(40)          NULL,
   NOMBRE_DOCENTE       VARCHAR(40)          NULL,
   NOMBRE_CURSO         VARCHAR(32)          NULL,
   NOTA_TAREA           DECIMAL(4,2)         NULL,
   NOTA_PROYECTO        DECIMAL(4,2)         NULL,
   NOTA_EXAMEN          DECIMAL(4,2)         NULL,
   ESTADO_ESTUDIANTE    BIT                 NULL,
   CONSTRAINT PK_REGISTRO PRIMARY KEY (ID_REGISTRO),
   CONSTRAINT FK_REGISTRO_USUARIO FOREIGN KEY (ID_USUARIO) REFERENCES USUARIO (ID_USUARIO) ON DELETE NO ACTION ON UPDATE NO ACTION
);


/*==============================================================*/
/* Funciones para el ID_USUARIO de la tabla USUARIO             */
/*==============================================================*/
CREATE OR REPLACE FUNCTION insertar_usuario(
    nombre_usuario VARCHAR(32),
    username VARCHAR(16),
    clave_usuario VARCHAR(16),
    email_usuario VARCHAR(32),
    rol_usuario VARCHAR(16)
)
RETURNS VOID AS $$
DECLARE
    id_usuario VARCHAR(16);
BEGIN
    -- Obtener el próximo valor de la secuencia y generar el ID
    id_usuario := 'L00' || LPAD(NEXTVAL('sequence_usuario_id')::TEXT, 3, '0');

    -- Insertar el usuario con el ID generado
    INSERT INTO usuario (id_usuario, nombre_usuario, username, clave_usuario, email_usuario, rol_usuario)
    VALUES (id_usuario, nombre_usuario, username, clave_usuario, email_usuario, rol_usuario);
END;
$$ LANGUAGE plpgsql;

-- Crear la secuencia para generar el número automáticamente
CREATE SEQUENCE Sequence_Usuario_Id 
START WITH 1 INCREMENT BY 1;

/*==============================================================*/
/* Funciones para el ID_MATRICULA de la tabla MATRICULA             */
/*==============================================================*/
CREATE OR REPLACE FUNCTION insertar_matricula(
    id_curso VARCHAR(8),
    id_usuario VARCHAR(16),
    fecha_matricula DATE
)
RETURNS VOID AS $$
DECLARE
    id_matricula VARCHAR(8);
BEGIN
    -- Obtener el próximo valor de la secuencia y generar el ID
    id_matricula := 'M00' || LPAD(NEXTVAL('sequence_matricula_id')::TEXT, 3, '0');

    -- Insertar la matrícula con el ID generado
    INSERT INTO matricula (id_matricula, id_curso, id_usuario, fecha_matricula)
    VALUES (id_matricula, id_curso, id_usuario, fecha_matricula);
END;
$$ LANGUAGE plpgsql;

-- Crear la secuencia para generar el número automáticamente para MATRICULA
CREATE SEQUENCE Sequence_Matricula_Id 
START WITH 1 INCREMENT BY 1;


/*==============================================================*/
/* Funciones para el ID_REGISTRO de la tabla REGISTRO             */
/*==============================================================*/
CREATE OR REPLACE FUNCTION insertar_registro(
    id_usuario VARCHAR(16),
    nombre_estudiante VARCHAR(40),
    nombre_docente VARCHAR(40),
    nombre_curso VARCHAR(32),
    nota_tarea DECIMAL(4,2),
    nota_proyecto DECIMAL(4,2),
    nota_examen DECIMAL(4,2),
    estado_estudiante BIT
)
RETURNS VOID AS $$
DECLARE
    id_registro VARCHAR(8);
BEGIN
    -- Obtener el próximo valor de la secuencia y generar el ID
    id_registro := 'R00' || LPAD(NEXTVAL('sequence_registro_id')::TEXT, 3, '0');

    -- Insertar el registro con el ID generado
    INSERT INTO registro (id_registro, id_usuario, nombre_estudiante, nombre_docente, nombre_curso, nota_tarea, nota_proyecto, nota_examen, estado_estudiante)
    VALUES (id_registro, id_usuario, nombre_estudiante, nombre_docente, nombre_curso, nota_tarea, nota_proyecto, nota_examen, estado_estudiante);
END;
$$ LANGUAGE plpgsql;

-- Crear la secuencia para generar el número automáticamente para REGISTRO
CREATE SEQUENCE Sequence_Registro_Id 
START WITH 1 INCREMENT BY 1;


