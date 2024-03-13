package com.api.record.Controller;

import com.api.record.Model.Entity.RecordEntity;
import com.api.record.Service.IRecordService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class RecordRestController {

    @Autowired
    private IRecordService recordService;

    @GetMapping("/records/all")
    public ResponseEntity<List<RecordEntity>> findAllRecords (){
        return ResponseEntity.ok().body(recordService.findAllRecords());
    }

    @GetMapping("/records/{id}")
    public ResponseEntity<?> findRecordById(@PathVariable String id) {
        Optional<RecordEntity> response = recordService.findRecordById(id);
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(response.get());
    }

    @PostMapping("/records/save")
    public ResponseEntity<?> saveRecord(@Valid @RequestBody RecordEntity record, BindingResult result){
        if(result.hasErrors()) {
            return this.validar(result);
        }
        RecordEntity response = recordService.saveRecord(record);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @DeleteMapping("/records/delete/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable String id){
        boolean response = recordService.deleteRecordById(id);
        if(response) {
            return ResponseEntity.status(HttpStatus.OK).body(true);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
    }

    protected ResponseEntity<?> validar(BindingResult result){
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errores.put(err.getField(),"El campo "+err.getField()+" "+err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errores);
    }
}
