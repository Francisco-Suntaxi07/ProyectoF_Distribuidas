package com.api.user.Model.Repository;

import com.api.user.Model.Entity.UserEntity;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<UserEntity, String> {

    @Query(value = "SELECT insertar_usuario(:nombre_usuario, :username, :clave_usuario, :email_usuario, :rol_usuario)", nativeQuery = true)
    @Transactional
    public void insertUser(
            String nombre_usuario,
            String username,
            String clave_usuario,
            String email_usuario,
            String rol_usuario
    );

}
