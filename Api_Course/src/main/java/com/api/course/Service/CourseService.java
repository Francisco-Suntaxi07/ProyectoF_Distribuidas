package com.api.course.Service;

import com.api.course.Model.Entity.CourseEntity;
import com.api.course.Model.Repository.ICourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService implements ICourseService{

    @Autowired
    private ICourseRepository courseRepository;

    @Override
    public List<CourseEntity> findAllCourses() {
        return (ArrayList<CourseEntity>) courseRepository.findAll();
    }

    @Override
    public Optional<CourseEntity> findCourseById(String id) {
        return courseRepository.findById(id);
    }

    @Override
    public CourseEntity saveCourse(CourseEntity course) {
        return courseRepository.save(course);
    }

    @Override
    public boolean deleteCourseById(String id) {
        try {
            courseRepository.deleteById(id);
            return true;
        }catch(Exception e){
            System.out.println("ERROR: Revise la api de Cursos: " + e.getMessage());
            return false;
        }
    }
}
