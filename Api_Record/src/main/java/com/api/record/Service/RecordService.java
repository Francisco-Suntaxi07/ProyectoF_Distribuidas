package com.api.record.Service;

import com.api.record.Model.Entity.RecordEntity;
import com.api.record.Model.Repository.IRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecordService implements IRecordService{

    @Autowired
    private IRecordRepository recordRepository;

    @Override
    public List<RecordEntity> findAllRecords() {
        return (ArrayList<RecordEntity>) recordRepository.findAll();
    }

    @Override
    public Optional<RecordEntity> findRecordById(String id) {
        return recordRepository.findById(id);
    }

    @Override
    public RecordEntity saveRecord(RecordEntity record) {
        try{
            recordRepository.insertRecord(
                    record.getIdUser(),
                    record.getNameStudent(),
                    record.getNameTeacher(),
                    record.getNameCourse(),
                    record.getGradeHomework(),
                    record.getGradeProject(),
                    record.getGradeExam(),
                    record.getStatus()
            );
            return record;
        }catch(Exception e){
            System.out.println("ERROR al guardar un registro en la API: " + e.getMessage());
            return record = new RecordEntity();
        }
    }

    @Override
    public RecordEntity updateRecord(RecordEntity record) {
        try{
            return recordRepository.save(record);
        } catch(Exception e){
            System.out.println("Error al actualizar: " + e.getMessage());
            return null;
        }
    }

    @Override
    public boolean deleteRecordById(String id) {
        try {
            recordRepository.deleteById(id);
            return true;
        }catch(Exception e){
            System.out.println("ERROR: Revise la api de Registros: " + e.getMessage());
            return false;
        }
    }
}
