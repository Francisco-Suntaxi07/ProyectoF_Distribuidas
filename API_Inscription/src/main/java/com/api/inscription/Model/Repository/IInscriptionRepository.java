package com.api.inscription.Model.Repository;

import com.api.inscription.Model.Entity.InscriptionEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface IInscriptionRepository extends JpaRepository<InscriptionEntity, String> {

    @Query(value = "SELECT insertar_matricula(:id_curso, :id_usuario, :fecha_matricula)", nativeQuery = true)
    @Transactional
    public void insertInscription(
            String id_curso,
            String id_usuario,
            LocalDate fecha_matricula
    );

}
