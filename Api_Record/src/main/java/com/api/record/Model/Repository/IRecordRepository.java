package com.api.record.Model.Repository;

import com.api.record.Model.Entity.RecordEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public interface IRecordRepository extends JpaRepository<RecordEntity, String> {
    @Query(value = "SELECT insertar_registro(:id_usuario, :nombre_estudiante, :nombre_docente, :nombre_curso, :nota_tarea, :nota_proyecto, :nota_examen, :estado_estudiante)", nativeQuery = true)
    @Transactional
    public void insertRecord(
            String id_usuario,
            String nombre_estudiante,
            String nombre_docente,
            String nombre_curso,
            BigDecimal nota_tarea,
            BigDecimal nota_proyecto,
            BigDecimal nota_examen,
            Boolean estado_estudiante
    );
}
