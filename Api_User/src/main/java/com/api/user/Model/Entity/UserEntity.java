package com.api.user.Model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;

import java.io.Serializable;

@Entity
@Table(name = "usuario")
public class UserEntity implements Serializable {

    @Id
    @Column(name = "id_usuario")
    private String id;

    @Column(name = "nombre_usuario")
    private String name;

    @Column(name = "username")
    private String username;

    @Column(name = "clave_usuario")
    private String password;

    @Column(name = "email_usuario")
    private String email;

    @Column(name = "rol_usuario")
    private String role;

    public UserEntity() {
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
