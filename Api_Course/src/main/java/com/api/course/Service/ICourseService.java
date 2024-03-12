package com.api.course.Service;

import com.api.course.Model.Entity.CourseEntity;

import java.util.List;
import java.util.Optional;

public interface ICourseService {

    public List<CourseEntity> findAllCourses();
    public Optional<CourseEntity> findCourseById(String id);
    public CourseEntity saveCourse(CourseEntity course);
    public boolean deleteCourseById(String id);
}
