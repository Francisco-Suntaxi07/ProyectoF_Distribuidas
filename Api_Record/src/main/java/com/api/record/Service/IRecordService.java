package com.api.record.Service;

import com.api.record.Model.Entity.RecordEntity;

import java.util.List;
import java.util.Optional;

public interface IRecordService {

    public List<RecordEntity> findAllRecords();
    public Optional<RecordEntity> findRecordById(String id);
    public RecordEntity saveRecord(RecordEntity record);
    public RecordEntity updateRecord(RecordEntity record);
    public boolean deleteRecordById(String id);

}
