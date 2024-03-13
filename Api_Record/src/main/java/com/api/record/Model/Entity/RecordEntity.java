package com.api.record.Model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "registro")
public class RecordEntity implements Serializable {

    @Id
    @Column(name = "id_registro")
    private String id;

    @Column(name = "id_usuario")
    private String idUser;

    @Column(name = "nombre_estudiante")
    private String nameStudent;

    @Column(name = "nombre_docente")
    private String nameTeacher;

    @Column(name = "nombre_curso")
    private String nameCourse;

    @Column(name = "nota_tarea")
    private BigDecimal gradeHomework;

    @Column(name = "nota_proyecto")
    private BigDecimal gradeProject;

    @Column(name = "nota_examen")
    private BigDecimal gradeExam;

    @Column(name = "estado_estudiante")
    private Boolean status;

    public RecordEntity() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    public String getNameStudent() {
        return nameStudent;
    }

    public void setNameStudent(String nameStudent) {
        this.nameStudent = nameStudent;
    }

    public String getNameTeacher() {
        return nameTeacher;
    }

    public void setNameTeacher(String nameTeacher) {
        this.nameTeacher = nameTeacher;
    }

    public String getNameCourse() {
        return nameCourse;
    }

    public void setNameCourse(String nameCourse) {
        this.nameCourse = nameCourse;
    }

    public BigDecimal getGradeHomework() {
        return gradeHomework;
    }

    public void setGradeHomework(BigDecimal gradeHomework) {
        this.gradeHomework = gradeHomework;
    }

    public BigDecimal getGradeProject() {
        return gradeProject;
    }

    public void setGradeProject(BigDecimal gradeProject) {
        this.gradeProject = gradeProject;
    }

    public BigDecimal getGradeExam() {
        return gradeExam;
    }

    public void setGradeExam(BigDecimal gradeExam) {
        this.gradeExam = gradeExam;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
