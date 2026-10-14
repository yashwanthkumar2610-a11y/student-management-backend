package com.example.student_management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.student_management.model.Student;
import com.example.student_management.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    // Get all students
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // Add a student
    public Student addStudent(Student student) {
        return repository.save(student);
    }

    // Update an existing student
    public Student updateStudent(Long id, Student student) {
        Student existingStudent = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Student not found: " + id));

        existingStudent.setRollNo(student.getRollNo());
        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setCourse(student.getCourse());

        return repository.save(existingStudent);
    }

    // Delete a student
    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}