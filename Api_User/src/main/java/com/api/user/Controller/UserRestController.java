package com.api.user.Controller;

import com.api.user.Model.Entity.UserEntity;
import com.api.user.Service.IUserService;
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
public class UserRestController {

    @Autowired
    private IUserService userService;

    @GetMapping("/users/all")
    public ResponseEntity<List<UserEntity>> findAllUsers (){
        return ResponseEntity.ok().body(userService.findAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> findUserById(@PathVariable String id) {
        Optional<UserEntity> response = userService.findUserById(id);
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(response.get());
    }

    @PostMapping("/users/save")
    public ResponseEntity<?> saveUser(@Valid @RequestBody UserEntity user, BindingResult result){
        if(result.hasErrors()) {
            return this.validar(result);
        }
        UserEntity response = userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @DeleteMapping("/users/delete/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable String id){
        boolean response = userService.deleteUserById(id);
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
