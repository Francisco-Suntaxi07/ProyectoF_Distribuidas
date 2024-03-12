package com.api.course.Model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "curso")
public class CourseEntity implements Serializable {

    @Id
    @Column(name = "id_curso")
    private String id;

    @Column(name = "nombre_curso")
    private String name;

    @Column(name = "cupos_curso")
    private int places;

    public CourseEntity() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPlaces() {
        return places;
    }

    public void setPlaces(int places) {
        this.places = places;
    }
}
