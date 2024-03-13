package com.api.inscription.Controller;

import com.api.inscription.Model.Entity.InscriptionEntity;
import com.api.inscription.Service.IInscriptionService;
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
public class InscriptionRestController {

    @Autowired
    private IInscriptionService inscriptionService;

    @GetMapping("/inscriptions/all")
    public ResponseEntity<List<InscriptionEntity>> findAllInscriptions (){
        return ResponseEntity.ok().body(inscriptionService.findAllInscriptions());
    }

    @GetMapping("/inscriptions/{id}")
    public ResponseEntity<?> findInscriptionById(@PathVariable String id) {
        Optional<InscriptionEntity> response = inscriptionService.findInscriptionById(id);
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(response.get());
    }

    @PostMapping("/inscriptions/save")
    public ResponseEntity<?> saveInscription(@Valid @RequestBody InscriptionEntity inscription, BindingResult result){
        if(result.hasErrors()) {
            return this.validar(result);
        }
        InscriptionEntity response = inscriptionService.saveInscription(inscription);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @DeleteMapping("/inscriptions/delete/{id}")
    public ResponseEntity<?> deleteInscriptionById(@PathVariable String id){
        boolean response = inscriptionService.deleteInscriptionById(id);
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
