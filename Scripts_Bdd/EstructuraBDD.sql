/*==============================================================*/
/* DBMS name:      PostgreSQL 16.x                              */
/* Created on:     7/3/2024 20:44:21                            */
/*==============================================================*/


DROP TABLE IF EXISTS MATRICULA;
DROP TABLE IF EXISTS REGISTRO;
DROP TABLE IF EXISTS USUARIO;
DROP TABLE IF EXISTS CURSO;
DROP SEQUENCE IF EXISTS Sequence_Usuario_Id;
DROP PROCEDURE IF EXISTS INSERTAR_USUARIO;

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
CREATE TABLE USUARIO (
   ID_USUARIO           VARCHAR(16)          NOT NULL,
   NOMBRE_USUARIO       VARCHAR(32)          NULL,
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
   NOMBRE_ESTUDIANTE    VARCHAR(32)          NULL,
   NOMBRE_DOCENTE       VARCHAR(32)          NULL,
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

-- Crear una función para generar el ID_USUARIO
CREATE PROCEDURE INSERTAR_USUARIO
    @NOMBRE_USUARIO VARCHAR(32),
    @USERNAME VARCHAR(16),
    @CLAVE_USUARIO VARCHAR(16),
    @EMAIL_USUARIO VARCHAR(32),
    @ROL_USUARIO VARCHAR(16)
AS
BEGIN
    DECLARE @ID VARCHAR(16)

    -- Obtener el próximo valor de la secuencia
    SET @ID = 'L00' + RIGHT('000' + CAST(NEXT VALUE FOR Sequence_Usuario_Id AS VARCHAR(10)), 3)

    -- Insertar el usuario con el ID generado
    INSERT INTO USUARIO (ID_USUARIO, NOMBRE_USUARIO, USERNAME, CLAVE_USUARIO, EMAIL_USUARIO, ROL_USUARIO)
    VALUES (@ID, @NOMBRE_USUARIO, @USERNAME, @CLAVE_USUARIO, @EMAIL_USUARIO, @ROL_USUARIO)
END;

-- Crear una secuencia para generar el número automáticamente
CREATE SEQUENCE Sequence_Usuario_Id 
START WITH 1 INCREMENT BY 1;