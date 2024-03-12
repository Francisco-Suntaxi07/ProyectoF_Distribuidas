package com.api.course.Controller;

import com.api.course.Model.Entity.CourseEntity;
import com.api.course.Service.ICourseService;
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
public class CourseRestController {

    @Autowired
    private ICourseService courseService;

    @GetMapping("/courses/all")
    public ResponseEntity<List<CourseEntity>> findAllCourses (){
        return ResponseEntity.ok().body(courseService.findAllCourses());
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<?> findCourseById(@PathVariable String id) {
        Optional<CourseEntity> response = courseService.findCourseById(id);
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(response.get());
    }

    @PostMapping("/courses/save")
    public ResponseEntity<?> saveCourse(@Valid @RequestBody CourseEntity course, BindingResult result){
        if(result.hasErrors()) {
            return this.validar(result);
        }
        CourseEntity response = courseService.saveCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @DeleteMapping("/courses/delete/{id}")
    public ResponseEntity<?> deleteCourseById(@PathVariable String id){
        boolean response = courseService.deleteCourseById(id);
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
